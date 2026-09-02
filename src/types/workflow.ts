export type WorkflowStatus = 'active' | 'inactive' | 'draft';

export interface Workflow {
  id: string;
  name: string;
  description: string;
  status: WorkflowStatus;
}
