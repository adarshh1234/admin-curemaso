import { CHECK_IN_EVENTS, FIELD_AGENTS } from '../data/fieldforceData';
import type { CheckInEvent, FieldAgent } from '../types/fieldforce';

export const fieldForceService = {
  async getAgents(): Promise<FieldAgent[]> {
    return FIELD_AGENTS;
  },
  async getCheckInEvents(): Promise<CheckInEvent[]> {
    return CHECK_IN_EVENTS;
  },
};
