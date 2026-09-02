export type IntegrationStatus = 'connected' | 'disconnected';

export interface Integration {
  id: string;
  name: string;
  icon: string;
  status: IntegrationStatus;
  actionLabel: string;
}
