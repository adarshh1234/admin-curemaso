import type { StatCardData } from '../../types/stats';

export function StatCard({ icon, label, value, change }: StatCardData) {
  return (
    <div className="card">
      <div className="label">
        <i className={icon} /> {label}
      </div>
      <div className="value">{value}</div>
      <div className="sub">
        {change.highlight && <span className={change.direction}>{change.highlight}</span>}
        {change.suffix}
      </div>
    </div>
  );
}
