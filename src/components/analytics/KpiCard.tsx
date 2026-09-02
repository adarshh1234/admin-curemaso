import type { Kpi } from '../../types/analytics';

export function KpiCard({ kpi }: { kpi: Kpi }) {
  return (
    <div style={{ background: '#f8faff', padding: '14px 20px', borderRadius: 10, flex: 1 }}>
      <span style={{ fontSize: 13, color: '#6b7a8f' }}>{kpi.label}</span>
      <br />
      <span style={{ fontSize: 22, fontWeight: 700 }}>{kpi.value}</span>{' '}
      <span className={kpi.change.direction}>{kpi.change.text}</span>
    </div>
  );
}
