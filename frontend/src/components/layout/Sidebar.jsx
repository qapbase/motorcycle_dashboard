import { TABS } from "../../data/tabs";

export default function Sidebar({ activeTab, onSelectTab, sessionId, progress }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="mark">RT</div>
        <div>
          <h1>Rider Training<br />Analytics</h1>
          <p>ML-based control classification</p>
        </div>
      </div>

      <nav className="nav" aria-label="Primary navigation">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={tab.id === activeTab ? "active" : undefined}
            onClick={() => onSelectTab(tab.id)}
          >
            {tab.label} <span className="dot" />
          </button>
        ))}
      </nav>

      <div className="session-card">
        <small>Current session</small>
        <strong>{sessionId}</strong>
        <div className="progress-shell">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </aside>
  );
}
