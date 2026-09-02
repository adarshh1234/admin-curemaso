import type { Deal } from '../../types/pipeline';

export function PipeCard({ deal }: { deal: Deal }) {
  return (
    <div className={`pipe-card ${deal.stage}`}>
      <div className="p-name">{deal.name}</div>
      <div className="p-meta">
        {deal.amountLabel} · <span className="tag">{deal.tag}</span>
      </div>
    </div>
  );
}
