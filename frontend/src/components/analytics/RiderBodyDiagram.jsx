const SENSOR_POINTS = [
  [180, 52], [139, 112], [221, 112], [180, 142],
  [81, 190], [279, 190], [119, 310], [241, 310]
];

const LABELS = [
  [204, 48, "Head tilt"], [33, 109, "Shoulder"], [234, 109, "Shoulder"],
  [194, 147, "Torso lean"], [39, 212, "Elbow"], [289, 212, "Elbow"],
  [64, 337, "Knee"], [252, 337, "Knee"]
];

export default function RiderBodyDiagram() {
  return (
    <svg className="rider-body-svg" viewBox="0 0 360 360" role="img" aria-label="Rider body position sensor point diagram">
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="12" stdDeviation="8" floodColor="#000" floodOpacity="0.12" />
        </filter>
      </defs>
      <g filter="url(#softShadow)">
        <path d="M180 82 C204 112, 205 164, 180 203 C155 164, 156 112, 180 82 Z" fill="#fff" stroke="#111" strokeWidth="6" />
        <circle cx="180" cy="52" r="27" fill="#fff" stroke="#111" strokeWidth="6" />
        <path d="M139 112 C104 127, 89 155, 81 190" fill="none" stroke="#111" strokeWidth="10" strokeLinecap="round" />
        <path d="M221 112 C256 127, 271 155, 279 190" fill="none" stroke="#111" strokeWidth="10" strokeLinecap="round" />
        <path d="M162 198 C140 232, 128 265, 119 310" fill="none" stroke="#111" strokeWidth="12" strokeLinecap="round" />
        <path d="M198 198 C220 232, 232 265, 241 310" fill="none" stroke="#111" strokeWidth="12" strokeLinecap="round" />
        <path d="M125 318 H151" stroke="#111" strokeWidth="8" strokeLinecap="round" />
        <path d="M209 318 H235" stroke="#111" strokeWidth="8" strokeLinecap="round" />
      </g>
      <g fill="#111" stroke="#fff" strokeWidth="4">
        {SENSOR_POINTS.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="8" />)}
      </g>
      <g fontFamily="Inter, system-ui, sans-serif" fontSize="12" fontWeight="800" fill="#111">
        {LABELS.map(([x, y, text]) => <text key={`${x}-${y}`} x={x} y={y}>{text}</text>)}
      </g>
    </svg>
  );
}
