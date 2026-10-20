// Backend SSE endpoint for live telemetry. Override per environment with
// VITE_TELEMETRY_STREAM_URL in a .env file.
export const TELEMETRY_STREAM_URL =
  import.meta.env.VITE_TELEMETRY_STREAM_URL ??
  "https://motorcycle-telemetry-backend-112434217886.asia-southeast1.run.app/stream";
