import Card from "../common/Card";
import { SESSION_HISTORY } from "../../data/content";

const COLUMNS = ["Session ID", "Date", "Duration", "Overall", "Best Area", "Improvement Focus", "Status"];

export default function SessionsTab() {
  return (
    <Card
      title="Session History"
      desc="Historical results support multi-session analysis and objective tracking of training improvement."
      tag="6 sessions"
    >
      <div className="table-wrap">
        <table>
          <thead><tr>{COLUMNS.map(c => <th key={c}>{c}</th>)}</tr></thead>
          <tbody>
            {SESSION_HISTORY.map(s => (
              <tr key={s.id}>
                <td><strong>{s.id}</strong></td>
                <td>{s.date}</td>
                <td>{s.duration}</td>
                <td>{s.overall}</td>
                <td>{s.best}</td>
                <td>{s.focus}</td>
                <td><span className="tag">{s.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
