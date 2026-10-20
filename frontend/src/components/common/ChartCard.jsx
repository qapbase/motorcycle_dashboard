import Card from "./Card";
import LineChart from "./LineChart";

/** Card wrapping a LineChart with a legend. legend: [[label, lineStyle], ...] */
export default function ChartCard({ title, desc, tag, legend, data, series, options }) {
  return (
    <Card className="chart-card" title={title} desc={desc} tag={tag}>
      <LineChart data={data} series={series} options={options} />
      <div className="legend">
        {legend.map(([label, style]) => (
          <span className="legend-item" key={label}>
            <span className={`legend-line ${style}`.trim()} />
            {label}
          </span>
        ))}
      </div>
    </Card>
  );
}
