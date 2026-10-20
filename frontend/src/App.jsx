import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import MobileTabs from "./components/layout/MobileTabs";
import LiveTab from "./components/tabs/LiveTab";
import AnalyticsTab from "./components/tabs/AnalyticsTab";
import TimelineTab from "./components/tabs/TimelineTab";
import FeedbackTab from "./components/tabs/FeedbackTab";
import SessionsTab from "./components/tabs/SessionsTab";
import PipelineTab from "./components/tabs/PipelineTab";
import SettingsTab from "./components/tabs/SettingsTab";
import { useTelemetryStream } from "./hooks/useTelemetryStream";
import { TABS } from "./data/tabs";
import { CURRENT_SESSION_ID } from "./data/content";
import { TELEMETRY_STREAM_URL } from "./config";

const RECORD_TEXT = { idle: "Ready", live: "Recording", ended: "Uploaded" };

function App() {
  const [activeTab, setActiveTab] = useState("live");
  const [status, setStatus] = useState("idle"); // idle | live | ended
  const [sessionProgress, setSessionProgress] = useState(68);
  const telemetry = useTelemetryStream(TELEMETRY_STREAM_URL);

  const startSession = () => {
    setStatus("live");
    setActiveTab("live");
  };

  const endSession = () => {
    setStatus("ended");
    setSessionProgress(100);
    setActiveTab("analytics");
  };

  // All panels stay mounted (hidden via CSS) so "Export View" prints every tab.
  const panels = {
    live: <LiveTab telemetry={telemetry} recordText={RECORD_TEXT[status]} recordPercent={68} />,
    analytics: <AnalyticsTab />,
    timeline: <TimelineTab />,
    feedback: <FeedbackTab />,
    sessions: <SessionsTab />,
    pipeline: <PipelineTab />,
    settings: <SettingsTab />
  };

  return (
    <div className="app">
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        sessionId={CURRENT_SESSION_ID}
        progress={sessionProgress}
      />

      <main>
        <Topbar
          tab={TABS.find(t => t.id === activeTab)}
          status={status}
          ridingState={telemetry.ridingState}
          ridingConfidence={telemetry.ridingConfidence}
          onStart={startSession}
          onEnd={endSession}
        />
        <MobileTabs activeTab={activeTab} onSelectTab={setActiveTab} />

        {TABS.map(tab => (
          <section key={tab.id} id={tab.id} className={`tab-panel${tab.id === activeTab ? " active" : ""}`}>
            {panels[tab.id]}
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
