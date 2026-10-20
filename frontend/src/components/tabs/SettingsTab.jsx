import { useId } from "react";
import Card from "../common/Card";
import { SESSION_CONFIG_FIELDS, RIDER_PROFILE_FIELDS } from "../../data/content";

function FormField({ label, options, value }) {
  const id = useId();
  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>
      {options
        ? <select id={id}>{options.map(o => <option key={o}>{o}</option>)}</select>
        : <input id={id} defaultValue={value} />}
    </div>
  );
}

export default function SettingsTab() {
  return (
    <div className="settings-grid">
      <Card title="Session Configuration" desc="Defines the operating parameters for data acquisition and dashboard display.">
        {SESSION_CONFIG_FIELDS.map(f => <FormField key={f.label} {...f} />)}
      </Card>

      <Card title="Rider Profile" desc="Metadata used for session organization and multi-session comparison.">
        {RIDER_PROFILE_FIELDS.map(f => <FormField key={f.label} {...f} />)}
      </Card>
    </div>
  );
}
