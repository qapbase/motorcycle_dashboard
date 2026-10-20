import { useEffect, useRef } from "react";
import { drawLineChart } from "../../utils/drawLineChart";

/**
 * Canvas line chart that redraws whenever its container is resized —
 * including when a hidden tab panel becomes visible.
 */
export default function LineChart({ data, series, options }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const draw = () => drawLineChart(canvas, data, series, options);
    draw();

    const observer = new ResizeObserver(draw);
    observer.observe(canvas.parentElement);
    document.fonts?.ready.then(draw);
    return () => observer.disconnect();
  }, [data, series, options]);

  return (
    <div className="chart-holder">
      <canvas ref={canvasRef} />
    </div>
  );
}
