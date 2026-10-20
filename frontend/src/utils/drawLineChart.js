const PAD = { left: 48, right: 22, top: 24, bottom: 38 };

function formatAxis(val, unit) {
  if (unit === "g") return val.toFixed(1);
  if (Math.abs(val) < 10 && unit !== "%") return val.toFixed(1);
  return String(Math.round(val));
}

/**
 * Draws a monochrome multi-series line chart sized to the canvas's parent.
 *
 * series:  [{ key, color?, alpha?, width?, dash? }]
 * options: { xKey?, minY?, maxY?, unit?, reference?, xLabelPrefix? }
 */
export function drawLineChart(canvas, data, series, options = {}) {
  const rect = canvas.parentElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return; // hidden tab; redrawn on resize

  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const w = rect.width, h = rect.height;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, w, h);

  const xKey = options.xKey || "sec";
  const xValues = data.map(d => d[xKey]);
  const allY = series.flatMap(s => data.map(d => d[s.key]));
  const minX = Math.min(...xValues), maxX = Math.max(...xValues);
  let minY = options.minY ?? Math.min(...allY);
  let maxY = options.maxY ?? Math.max(...allY);
  if (minY === maxY) { minY -= 1; maxY += 1; }
  const yPad = (maxY - minY) * .12;
  minY = options.minY ?? minY - yPad;
  maxY = options.maxY ?? maxY + yPad;

  const plotW = w - PAD.left - PAD.right;
  const plotH = h - PAD.top - PAD.bottom;
  const x = v => PAD.left + ((v - minX) / (maxX - minX || 1)) * plotW;
  const y = v => PAD.top + (1 - (v - minY) / (maxY - minY || 1)) * plotH;

  // Horizontal grid + y-axis labels
  ctx.strokeStyle = "#ececec";
  ctx.lineWidth = 1;
  ctx.font = "11px Inter, system-ui, sans-serif";
  ctx.fillStyle = "#8a8a8a";
  ctx.textAlign = "right";
  ctx.textBaseline = "middle";
  for (let i = 0; i <= 4; i++) {
    const gy = PAD.top + (plotH / 4) * i;
    const val = maxY - ((maxY - minY) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(PAD.left, gy);
    ctx.lineTo(w - PAD.right, gy);
    ctx.stroke();
    ctx.fillText(formatAxis(val, options.unit), PAD.left - 8, gy);
  }

  // Vertical grid + x-axis labels
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  for (let i = 0; i <= 4; i++) {
    const gx = PAD.left + (plotW / 4) * i;
    const val = Math.round(minX + ((maxX - minX) / 4) * i);
    ctx.strokeStyle = "#f3f3f3";
    ctx.beginPath();
    ctx.moveTo(gx, PAD.top);
    ctx.lineTo(gx, h - PAD.bottom);
    ctx.stroke();
    ctx.fillStyle = "#8a8a8a";
    ctx.fillText(options.xLabelPrefix ? `${options.xLabelPrefix}${val}` : `${val}s`, gx, h - PAD.bottom + 12);
  }

  if (options.reference !== undefined) {
    ctx.save();
    ctx.strokeStyle = "#777";
    ctx.setLineDash([7, 6]);
    ctx.lineWidth = 1.4;
    ctx.beginPath();
    ctx.moveTo(PAD.left, y(options.reference));
    ctx.lineTo(w - PAD.right, y(options.reference));
    ctx.stroke();
    ctx.restore();
  }

  series.forEach(s => {
    ctx.save();
    ctx.strokeStyle = s.color || "#111";
    ctx.globalAlpha = s.alpha || 1;
    ctx.lineWidth = s.width || 2.4;
    if (s.dash) ctx.setLineDash(s.dash);
    ctx.beginPath();
    data.forEach((d, i) => {
      const px = x(d[xKey]);
      const py = y(d[s.key]);
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    });
    ctx.stroke();
    ctx.restore();
  });

  // Axes
  ctx.strokeStyle = "#111";
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.moveTo(PAD.left, PAD.top);
  ctx.lineTo(PAD.left, h - PAD.bottom);
  ctx.lineTo(w - PAD.right, h - PAD.bottom);
  ctx.stroke();
}
