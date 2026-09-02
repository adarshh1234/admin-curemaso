import type { Integration } from '../types/integration';

export const INTEGRATIONS: Integration[] = [
  { id: 'int-quickbooks', name: 'QuickBooks', icon: 'fas fa-book', status: 'connected', actionLabel: 'Sync' },
  { id: 'int-xero', name: 'Xero', icon: 'fas fa-file-invoice', status: 'connected', actionLabel: 'Sync' },
  { id: 'int-tally', name: 'Tally', icon: 'fas fa-calculator', status: 'disconnected', actionLabel: 'Connect' },
  { id: 'int-salesforce', name: 'Salesforce', icon: 'fas fa-cloud', status: 'disconnected', actionLabel: 'Connect' },
  { id: 'int-slack', name: 'Slack', icon: 'fas fa-slack', status: 'connected', actionLabel: 'Settings' },
  { id: 'int-google', name: 'Google Workspace', icon: 'fas fa-google', status: 'connected', actionLabel: 'Settings' },
];
