import Card from "../common/Card";
import { FEEDBACK_ITEMS, SCORE_COMPOSITION } from "../../data/content";

export default function FeedbackTab() {
  return (
    <div className="grid two">
      <Card
        title="Actionable Training Feedback"
        desc="Feedback is generated from measurable control and posture patterns rather than subjective observation alone."
        tag="Post-session"
      >
        <div className="feedback-list">
          {FEEDBACK_ITEMS.map((item, i) => (
            <div className="feedback-item" key={item.title}>
              <div className="icon">{i + 1}</div>
              <div><h4>{item.title}</h4><p>{item.body}</p></div>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Score Composition" desc="Suggested weighted scoring framework for a defensible rider performance evaluation." tag="Weighted">
        <div className="grid two">
          {SCORE_COMPOSITION.map(s => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div className="score-ring" style={{ "--score": s.score }}><span>{s.score}</span></div>
              <div><b>{s.label}</b><p className="desc">{s.weight}% weight</p></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
