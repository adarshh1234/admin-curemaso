import { INTEGRATIONS } from '../data/integrationsData';
import type { Integration } from '../types/integration';

export const integrationsService = {
  async getIntegrations(): Promise<Integration[]> {
    return INTEGRATIONS;
  },
};
