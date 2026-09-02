import type { Workflow } from '../types/workflow';

export const WORKFLOWS: Workflow[] = [
  {
    id: 'wf-1',
    name: 'Lead Scoring & Routing',
    description: 'Assigns leads to reps based on score and territory',
    status: 'active',
  },
  {
    id: 'wf-2',
    name: 'Quote-to-Cash Approval',
    description: 'Multi-step approval for quotes > $50k',
    status: 'active',
  },
  {
    id: 'wf-3',
    name: 'Escalation for Churn Risk',
    description: 'Notifies managers when customer health drops below 60',
    status: 'inactive',
  },
  {
    id: 'wf-4',
    name: 'Onboarding Sequence',
    description: 'Sends welcome emails, tasks, and checklists to new clients',
    status: 'draft',
  },
];
