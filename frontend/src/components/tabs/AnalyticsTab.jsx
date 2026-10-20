import Card from "../common/Card";
import ChartCard from "../common/ChartCard";
import RiderBodyDiagram from "../analytics/RiderBodyDiagram";
import { KPIS, BODY_METRICS } from "../../data/content";
import { ANALYTICS_CHARTS } from "../../data/charts";

export default function AnalyticsTab() {
  return (
    <>
      <div className="grid four">
        {KPIS.map(kpi => (
          <article className="card flat kpi" key={kpi.label}>
            <span className="micro-label">{kpi.label}</span>
            <div className="value">{kpi.value}</div>
            <div className="hint">{kpi.hint}</div>
          </article>
        ))}
      </div>

      <Card
        className="rider-summary-card"
        title="Rider Body Position Summary"
        desc="Post-session posture summary showing the rider body reference points used for training feedback and body-position scoring."
        tag="Body posture map"
      >
        <div className="rider-summary-grid">
          <div className="rider-body-board">
            <RiderBodyDiagram />
          </div>
          <div className="body-panel">
            {BODY_METRICS.map(m => (
              <div className="body-metric" key={m.title}>
                <div><b>{m.title}</b><small>{m.detail}</small></div>
                <span className={`metric-badge${m.soft ? " soft" : ""}`}>{m.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="grid analytics" style={{ marginTop: 18 }}>
        {ANALYTICS_CHARTS.map(({ id, ...chart }) => <ChartCard key={id} {...chart} />)}
      </div>
    </>
  );
}
