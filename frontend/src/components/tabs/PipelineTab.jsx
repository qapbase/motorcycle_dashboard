import Card from "../common/Card";
import { PIPELINE_STEPS } from "../../data/content";

export default function PipelineTab() {
  return (
    <Card
      title="System Pipeline"
      desc="The interface follows the actual system workflow: sensing, recording, live streaming, upload, classification, and analytics."
      tag="Architecture"
    >
      <div className="pipeline">
        {PIPELINE_STEPS.map((step, i) => (
          <div className="pipe-step" key={step.title}>
            <div className="pipe-index">{i + 1}</div>
            <b>{step.title}</b>
            <p>{step.body}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
