import Card from "../common/Card";
import ChartCard from "../common/ChartCard";
import SpeedGauge from "../live/SpeedGauge";
import DynamicInputs from "../live/DynamicInputs";
import LeanIndicator from "../live/LeanIndicator";
import { leanStateLabel } from "../../utils/lean";
import { liveAccelWindow } from "../../data/mockSession";

const ACCEL_SERIES = [{ key: "y" }];
const ACCEL_OPTIONS = { minY: -0.55, maxY: 0.55, unit: "g" };

export default function LiveTab({ telemetry, recordText, recordPercent }) {
  const { speed, accel, leanAngle, throttle, brake } = telemetry;

  return (
    <>
      <div className="grid two">
        <Card title="Speed Gauge" desc="Primary live telemetry indicator for monitoring riding pace during the active session." tag="Live">
          <SpeedGauge speed={speed} />
        </Card>

        <Card
          title="Motorcycle Dynamic Inputs"
          desc="Only lightweight dynamic values are streamed live. Body position metrics are recorded locally and analyzed after the session."
          tag="RPi4 → Backend"
        >
          <DynamicInputs
            throttle={throttle}
            brake={brake}
            leanAngle={leanAngle}
            accel={accel}
            recordText={recordText}
            recordPercent={recordPercent}
          />
        </Card>
      </div>

      <div className="grid two" style={{ marginTop: 18 }}>
        <Card title="Lean Angle Indicator" desc="Visualizes left-right motorcycle lean for live monitoring and rider awareness." tag={leanStateLabel(leanAngle)}>
          <LeanIndicator leanAngle={leanAngle} />
        </Card>

        <ChartCard
          title="Live Acceleration Trace"
          desc="Short-window acceleration trend used to monitor sudden throttle or braking behavior."
          tag="Last 30 s"
          legend={[["Acceleration magnitude", ""]]}
          data={liveAccelWindow}
          series={ACCEL_SERIES}
          options={ACCEL_OPTIONS}
        />
      </div>
    </>
  );
}
