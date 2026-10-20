import { clamp } from "../../utils/math";

const MAX_SPEED = 120; // km/h at full sweep
const SWEEP_DEG = 280;

export default function SpeedGauge({ speed }) {
  const deg = clamp(speed / MAX_SPEED * SWEEP_DEG, 0, SWEEP_DEG);
  return (
    <div className="gauge-wrap">
      <div className="speed-gauge" style={{ "--gauge-deg": `${deg}deg` }}>
        <div className="speed-center">
          <div className="speed-value"><span>{Math.round(speed)}</span></div>
          <div className="speed-unit">km/h</div>
        </div>
      </div>
    </div>
  );
}
