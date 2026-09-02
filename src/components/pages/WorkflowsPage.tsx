import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { workflowsService } from '../../services/workflows.service';
import { Loader } from '../common/Loader';
import { WorkflowList } from '../workflows/WorkflowList';

export function WorkflowsPage() {
  const { data: workflows, isLoading } = useAsyncData(() => workflowsService.getWorkflows(), []);
  const { showToast } = useToast();

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-bolt" style={{ color: '#2563eb', marginRight: 8 }} /> Automation Workflows
        </h3>
        <button className="btn-outline btn-sm" onClick={() => showToast('New Workflow form coming soon.')}>
          <i className="fas fa-plus" /> New Workflow
        </button>
      </div>
      {isLoading || !workflows ? <Loader label="Loading workflows…" /> : <WorkflowList workflows={workflows} />}
    </div>
  );
}
