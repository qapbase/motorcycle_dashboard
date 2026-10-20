// Static placeholder content for the post-session views. Replace with
// backend responses as those endpoints become available.

export const CURRENT_SESSION_ID = "SESSION_20260610_R001";

export const KPIS = [
  { label: "Overall score", value: 86, hint: "Weighted result from dynamic control, posture, stability, and consistency." },
  { label: "Dynamic control", value: 88, hint: "Speed, throttle, braking, acceleration, and lean management." },
  { label: "Body position", value: 82, hint: "Torso lean, shoulder offset, elbow angle, knee offset, and head tilt." },
  { label: "Stability", value: 84, hint: "Variation of lean, acceleration, and posture across classified segments." }
];

export const BODY_METRICS = [
  { title: "Torso lean consistency", detail: "Average deviation remained within the target posture range during curve and curve-exit segments.", badge: "84%" },
  { title: "Shoulder offset alignment", detail: "Minor asymmetry was detected when entering curves; improvement is recommended for smoother transitions.", badge: "Moderate", soft: true },
  { title: "Elbow angle stability", detail: "Arm position was generally stable, indicating limited unnecessary steering correction.", badge: "Good" },
  { title: "Knee angle offset", detail: "Knee position showed acceptable variation but should remain more consistent during sustained curve segments.", badge: "81%" },
  { title: "Head tilt control", detail: "Head alignment remained close to the intended viewing direction across most segments.", badge: "86%" }
];

export const TIMELINE_SEGMENTS = [
  { time: "00:00–00:10", label: "Stop", shade: "s6", width: 20, score: "92%" },
  { time: "00:11–00:32", label: "Straight", shade: "s1", width: 72, score: "88%" },
  { time: "00:33–00:45", label: "Curve Entry", shade: "s2", width: 48, score: "84%" },
  { time: "00:46–01:05", label: "Curve", shade: "s3", width: 64, score: "81%" },
  { time: "01:06–01:20", label: "Curve Exit", shade: "s4", width: 54, score: "78%" },
  { time: "01:21–01:55", label: "Cruising", shade: "s5", width: 88, score: "89%" }
];

export const FEEDBACK_ITEMS = [
  { title: "Improve throttle roll-on during curve exit", body: "Throttle application increased too abruptly after the curve segment. Use a smoother progressive roll-on to reduce acceleration variation." },
  { title: "Reduce braking while leaned", body: "Braking intensity was detected during the curve state. Complete most deceleration before curve entry to improve stability." },
  { title: "Maintain upper body alignment", body: "Shoulder offset increased without matching torso lean in some curve segments. Align torso and shoulders more consistently during cornering." },
  { title: "Maintain consistent lean transition", body: "Lean angle variation was higher during curve entry. A smoother transition can improve rider stability and classification confidence." }
];

export const SCORE_COMPOSITION = [
  { label: "Dynamic Control", score: 88, weight: 40 },
  { label: "Body Position", score: 82, weight: 30 },
  { label: "Stability", score: 84, weight: 20 },
  { label: "Consistency", score: 90, weight: 10 }
];

export const SESSION_HISTORY = [
  { id: "SESSION_20260610_R001", date: "June 10, 2026", duration: "12 min", overall: 86, best: "Speed control", focus: "Curve exit throttle", status: "Analyzed" },
  { id: "SESSION_20260603_R001", date: "June 3, 2026", duration: "10 min", overall: 83, best: "Braking timing", focus: "Lean stability", status: "Analyzed" },
  { id: "SESSION_20260527_R001", date: "May 27, 2026", duration: "9 min", overall: 79, best: "Stop control", focus: "Posture consistency", status: "Analyzed" },
  { id: "SESSION_20260520_R001", date: "May 20, 2026", duration: "11 min", overall: 76, best: "Straight riding", focus: "Throttle smoothness", status: "Analyzed" }
];

export const PIPELINE_STEPS = [
  { title: "Sensing", body: "Motorcycle dynamic inputs and rider body position metrics are captured through the sensor network." },
  { title: "RPi4 Acquisition", body: "The Raspberry Pi timestamps, synchronizes, validates, and formats the incoming data." },
  { title: "Parallel Operation", body: "Complete dataset is recorded locally while selected dynamic inputs are streamed live." },
  { title: "Upload", body: "After session end, the complete local session log is uploaded to the backend server." },
  { title: "ML Classification", body: "Backend preprocessing, feature extraction, and multi-class riding control classification are executed." },
  { title: "Analytics", body: "Performance metrics, trends, strengths, weaknesses, and feedback are displayed." }
];

export const SESSION_CONFIG_FIELDS = [
  { label: "Sampling rate", options: ["50 Hz", "100 Hz", "25 Hz"] },
  { label: "Live dashboard update interval", options: ["250 ms", "500 ms", "1000 ms"] },
  { label: "Window segmentation", options: ["2-second windows, 50% overlap", "1-second windows, 50% overlap", "3-second windows, 50% overlap"] },
  { label: "Local storage format", options: ["SQLite database", "CSV log file"] }
];

export const RIDER_PROFILE_FIELDS = [
  { label: "Rider ID", value: "R001" },
  { label: "Training mode", options: ["Closed-course basic training", "Cornering drill", "Braking drill"] },
  { label: "Motorcycle ID", value: "MC-TRAINING-01" },
  { label: "Analytics model", options: ["CatBoost multiclass classifier", "LightGBM multiclass classifier", "Random Forest baseline"] }
];
