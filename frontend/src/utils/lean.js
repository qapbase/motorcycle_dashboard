export function leanStateLabel(leanAngle) {
  if (Math.abs(leanAngle) < 6) return "Neutral";
  return leanAngle > 0 ? "Right lean" : "Left lean";
}
