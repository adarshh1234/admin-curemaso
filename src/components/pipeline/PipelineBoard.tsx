import type { PipelineColumn } from '../../types/pipeline';
import { PipeCard } from './PipeCard';

export function PipelineBoard({ columns }: { columns: PipelineColumn[] }) {
  return (
    <div className="pipeline-scroll">
      {columns.map((column) => (
        <div className="pipe-col" key={column.id}>
          <div className="col-title">
            {column.title} <span>{column.count}</span>
          </div>
          {column.deals.map((deal) => (
            <PipeCard key={deal.id} deal={deal} />
          ))}
        </div>
      ))}
    </div>
  );
}
