import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { pipelineService } from '../../services/pipeline.service';
import { Loader } from '../common/Loader';
import { PipelineBoard } from '../pipeline/PipelineBoard';

export function PipelinePage() {
  const { data: pipeline, isLoading } = useAsyncData(() => pipelineService.getFullPipeline(), []);
  const { showToast } = useToast();

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-chart-line" style={{ color: '#2563eb', marginRight: 8 }} /> Full Pipeline
        </h3>
        <button className="btn-outline btn-sm" onClick={() => showToast('Add Deal form coming soon.')}>
          <i className="fas fa-plus" /> Add Deal
        </button>
      </div>
      {isLoading || !pipeline ? <Loader label="Loading pipeline…" /> : <PipelineBoard columns={pipeline} />}
    </div>
  );
}
