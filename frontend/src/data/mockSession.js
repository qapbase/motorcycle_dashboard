import { clamp } from "../utils/math";

// Synthetic post-session telemetry used by the analytics charts until the
// backend exposes real session results.
function makeSeriesData() {
  const arr = [];
  for (let i = 0; i <= 120; i += 2) {
    const curve = Math.sin((i - 22) / 8) + Math.sin((i - 66) / 10) + Math.sin((i - 96) / 8);
    const speed = clamp(38 + 18 * Math.sin(i / 12) + 8 * Math.cos(i / 6) - Math.abs(curve) * 7, 8, 82);
    const lean = clamp(4 + 24 * Math.sin((i - 30) / 12) * (i > 22 && i < 112 ? 1 : .25), -38, 38);
    const throttle = clamp(45 + 25 * Math.sin(i / 15) + (i > 75 ? 12 : 0) - Math.max(0, Math.abs(lean) - 16) * .5, 0, 100);
    const brake = clamp(18 + 38 * Math.exp(-Math.pow((i - 34) / 11, 2)) + 28 * Math.exp(-Math.pow((i - 82) / 10, 2)), 0, 100);
    const accel = clamp((throttle - 48) / 140 - brake / 250 + Math.sin(i / 8) * .05, -.48, .38);
    const torso = clamp(Math.abs(lean) * .55 + 3 * Math.sin(i / 5), 0, 28);
    const shoulder = clamp(Math.abs(lean) * .32 + 5 + 2 * Math.cos(i / 7), 0, 24);
    const head = clamp(Math.abs(lean) * .22 + 3 * Math.sin(i / 6), 0, 18);
    arr.push({ sec: i, speed, target: clamp(speed + 4 * Math.sin(i / 19), 10, 78), lean, throttle, brake, accel, decel: Math.min(0, accel), torso, shoulder, head });
  }
  return arr;
}

export const sessionData = makeSeriesData();

export const sessionTrend = [
  { sec: 1, overall: 76, stability: 72 },
  { sec: 2, overall: 79, stability: 76 },
  { sec: 3, overall: 83, stability: 80 },
  { sec: 4, overall: 86, stability: 84 },
  { sec: 5, overall: 84, stability: 82 },
  { sec: 6, overall: 88, stability: 86 }
];

// The live trace is not yet fed by the stream; it renders a flat 30 s window.
export const liveAccelWindow = Array.from({ length: 30 }, (_, i) => ({ sec: i, y: 0 }));
