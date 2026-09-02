import { WORKFLOWS } from '../data/workflowsData';
import type { Workflow } from '../types/workflow';

export const workflowsService = {
  async getWorkflows(): Promise<Workflow[]> {
    return WORKFLOWS;
  },
};
