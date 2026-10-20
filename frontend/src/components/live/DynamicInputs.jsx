const MAX_LEAN_DEG = 45;
const MAX_ACCEL_G = 0.6;

function MetricRow({ label, percent, text }) {
  return (
    <div className="metric-row">
      <span>{label}</span>
      <div className="bar-shell"><div className="bar-fill" style={{ "--w": `${percent}%` }} /></div>
      <span>{text}</span>
    </div>
  );
}

export default function DynamicInputs({ throttle, brake, leanAngle, accel, recordText, recordPercent }) {
  return (
    <div className="metric-stack">
      <MetricRow label="Throttle" percent={throttle} text={`${Math.round(throttle)}%`} />
      <MetricRow label="Braking" percent={brake} text={`${Math.round(brake)}%`} />
      <MetricRow label="Lean angle" percent={Math.min(100, Math.abs(leanAngle) / MAX_LEAN_DEG * 100)} text={`${leanAngle.toFixed(0)}°`} />
      <MetricRow label="Acceleration" percent={Math.min(100, Math.abs(accel) / MAX_ACCEL_G * 100)} text={`${accel.toFixed(2)} g`} />
      <MetricRow label="Recording" percent={recordPercent} text={recordText} />
    </div>
  );
}
