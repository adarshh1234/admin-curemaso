import { DASHBOARD_PIPELINE, FULL_PIPELINE } from '../data/pipelineData';
import type { PipelineColumn } from '../types/pipeline';

export const pipelineService = {
  async getDashboardPipeline(): Promise<PipelineColumn[]> {
    return DASHBOARD_PIPELINE;
  },
  async getFullPipeline(): Promise<PipelineColumn[]> {
    return FULL_PIPELINE;
  },
};
