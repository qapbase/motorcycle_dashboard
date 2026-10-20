import { useEffect, useState } from "react";

const num = v => (typeof v === "number" ? v : 0);

export const EMPTY_TELEMETRY = {
  speed: 0,
  accel: 0,
  leanAngle: 0,
  throttle: 0,
  brake: 0,
  ridingState: null,
  ridingConfidence: null
};

// data.roll is raw lateral g (NOT degrees) and must not be shown as lean.
// lean_angle (degrees) and throttle / brake (0-100 %) are derived server-side
// in feature_engineering.py and ride along on every /stream payload. They
// default to 0 when absent (older backend, or model bundle not deployed).
function parseTelemetry(data) {
  return {
    speed: data.speed || 0,
    accel: data.accel || 0,
    leanAngle: num(data.lean_angle),
    throttle: num(data.throttle),
    brake: num(data.brake),
    ridingState: data.riding_state || null,
    ridingConfidence: typeof data.riding_state_confidence === "number" ? data.riding_state_confidence : null
  };
}

/** Subscribes to the backend SSE stream and returns the latest telemetry frame. */
export function useTelemetryStream(url) {
  const [telemetry, setTelemetry] = useState(EMPTY_TELEMETRY);

  useEffect(() => {
    const source = new EventSource(url);
    source.onopen = () => console.log("SSE CONNECTED");
    source.onmessage = event => {
      try {
        setTelemetry(parseTelemetry(JSON.parse(event.data)));
      } catch (error) {
        console.error(error);
      }
    };
    source.onerror = error => console.error("SSE Error:", error);
    return () => source.close();
  }, [url]);

  return telemetry;
}
