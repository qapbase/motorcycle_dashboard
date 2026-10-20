import { TABS } from "../../data/tabs";

export default function MobileTabs({ activeTab, onSelectTab }) {
  return (
    <div className="mobile-tabs" aria-label="Mobile navigation">
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={tab.id === activeTab ? "active" : undefined}
          onClick={() => onSelectTab(tab.id)}
        >
          {tab.shortLabel}
        </button>
      ))}
    </div>
  );
}
