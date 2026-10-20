import { sessionData, sessionTrend } from "./mockSession";

const DASHED = [7, 5];

// Card + chart definitions for the Performance Analytics grid.
// legend styles map to .legend-line modifiers: "", "light", "dashed", "dotted".
export const ANALYTICS_CHARTS = [
  {
    id: "speedProfile",
    title: "Speed Profile Over Time",
    desc: "Common telemetry trace for identifying pacing, deceleration before curves, and speed recovery after exit.",
    tag: "km/h",
    legend: [["Speed", ""], ["Target smooth profile", "light"]],
    data: sessionData,
    series: [{ key: "speed", width: 2.6 }, { key: "target", alpha: .28, width: 2 }],
    options: { minY: 0, maxY: 90 }
  },
  {
    id: "leanTrace",
    title: "Lean Angle Trace",
    desc: "Used to evaluate cornering stability, peak lean, and smoothness of transition during curve entry and exit.",
    tag: "degrees",
    legend: [["Lean angle", ""], ["Recommended limit", "dashed"]],
    data: sessionData,
    series: [{ key: "lean", width: 2.6 }],
    options: { minY: -45, maxY: 45, reference: 35 }
  },
  {
    id: "throttleBrake",
    title: "Throttle and Braking Trace",
    desc: "Real-world rider coaching commonly compares throttle roll-on with braking timing to assess smooth control transitions.",
    tag: "%",
    legend: [["Throttle", ""], ["Braking intensity", "dashed"]],
    data: sessionData,
    series: [{ key: "throttle", width: 2.6 }, { key: "brake", alpha: .65, width: 2.2, dash: DASHED }],
    options: { minY: 0, maxY: 100, unit: "%" }
  },
  {
    id: "accelDecel",
    title: "Acceleration and Deceleration",
    desc: "Highlights abrupt inputs, aggressive braking, unstable acceleration, and recovery behavior after curve exit.",
    tag: "g-force",
    legend: [["Acceleration", ""], ["Deceleration", "dashed"]],
    data: sessionData,
    series: [{ key: "accel", width: 2.6 }, { key: "decel", alpha: .65, width: 2.2, dash: DASHED }],
    options: { minY: -0.55, maxY: 0.45, unit: "g" }
  },
  {
    id: "posture",
    title: "Body Posture Deviation",
    desc: "Summarizes torso, shoulder, and head alignment deviations that affect rider balance during cornering.",
    tag: "degrees / offset",
    legend: [["Torso lean", ""], ["Shoulder offset", "dashed"], ["Head tilt", "dotted"]],
    data: sessionData,
    series: [
      { key: "torso", width: 2.6 },
      { key: "shoulder", alpha: .65, width: 2.2, dash: DASHED },
      { key: "head", alpha: .55, width: 2.2, dash: [2, 5] }
    ],
    options: { minY: 0, maxY: 32 }
  },
  {
    id: "sessionTrend",
    title: "Multi-Session Score Trend",
    desc: "Tracks learning progress across sessions, which is essential for training feedback and continuous improvement.",
    tag: "score",
    legend: [["Overall score", ""], ["Stability score", "dashed"]],
    data: sessionTrend,
    series: [{ key: "overall", width: 2.6 }, { key: "stability", alpha: .65, width: 2.2, dash: DASHED }],
    options: { xKey: "sec", minY: 60, maxY: 100, xLabelPrefix: "S" }
  }
];
