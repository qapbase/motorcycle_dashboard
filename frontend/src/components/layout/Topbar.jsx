const STATUS_TEXT = {
  idle: "Idle / Ready",
  live: "Live / Recording",
  ended: "Session Ended / Analyzed"
};

function ridingStateLabel(state, confidence) {
  if (!state) return "Riding State: --";
  const conf = confidence !== null ? ` (${Math.round(confidence * 100)}%)` : "";
  return `Riding State: ${state}${conf}`;
}

export default function Topbar({ tab, status, ridingState, ridingConfidence, onStart, onEnd }) {
  return (
    <div className="topbar">
      <div className="page-title">
        <h2>{tab.label}</h2>
        <p>{tab.description}</p>
      </div>
      <div className="controls">
        <span className={`status-pill${status === "live" ? " live" : ""}`}>
          <span className="status-dot" />
          <span>{STATUS_TEXT[status]}</span>
        </span>
        <span className="tag">{ridingStateLabel(ridingState, ridingConfidence)}</span>
        <button className="btn" onClick={onStart}>Start Session</button>
        <button className="btn secondary" onClick={onEnd}>End Session</button>
        <button className="btn ghost" onClick={() => window.print()}>Export View</button>
      </div>
    </div>
  );
}
