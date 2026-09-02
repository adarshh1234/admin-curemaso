import type { Workflow } from '../../types/workflow';

const STATUS_LABELS: Record<Workflow['status'], string> = {
  active: 'Active',
  inactive: 'Inactive',
  draft: 'Draft',
};

export function WorkflowItem({ workflow }: { workflow: Workflow }) {
  return (
    <div className="workflow-item">
      <div className="wf-info">
        <div className="name">{workflow.name}</div>
        <div className="desc">{workflow.description}</div>
      </div>
      <span className={`wf-status ${workflow.status}`}>{STATUS_LABELS[workflow.status]}</span>
      <i className="fas fa-edit" style={{ color: '#2563eb', cursor: 'pointer', marginLeft: 10 }} />
    </div>
  );
}
