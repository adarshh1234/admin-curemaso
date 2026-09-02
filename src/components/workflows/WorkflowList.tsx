import type { Workflow } from '../../types/workflow';
import { WorkflowItem } from './WorkflowItem';

export function WorkflowList({ workflows }: { workflows: Workflow[] }) {
  return (
    <>
      {workflows.map((workflow) => (
        <WorkflowItem key={workflow.id} workflow={workflow} />
      ))}
    </>
  );
}
