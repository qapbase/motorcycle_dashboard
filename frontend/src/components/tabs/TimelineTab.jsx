import Card from "../common/Card";
import { TIMELINE_SEGMENTS } from "../../data/content";

export default function TimelineTab() {
  return (
    <Card
      title="Timestamped Riding Control Classification"
      desc="Post-session machine learning output showing the predicted riding control state for each time segment."
      tag="Multi-class ML output"
    >
      <div className="timeline">
        {TIMELINE_SEGMENTS.map(seg => (
          <div className="timeline-row" key={seg.time}>
            <div className="timeline-time">{seg.time}</div>
            <div className="timeline-track">
              <div className={`segment ${seg.shade}`} style={{ width: `${seg.width}%` }}>{seg.label}</div>
            </div>
            <div className="timeline-score">{seg.score}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
