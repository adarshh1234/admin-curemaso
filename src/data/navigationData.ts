import type { GlobalActionConfig, NavSection, PageId } from '../types/navigation';

export const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Main',
    items: [
      { pageId: 'dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
      { pageId: 'customers', label: 'Customers', icon: 'fas fa-users' },
      { pageId: 'pipeline', label: 'Pipeline', icon: 'fas fa-chart-line' },
      { pageId: 'inbox', label: 'Inbox', icon: 'fas fa-comment-dots', badge: '12' },
      { pageId: 'fieldforce', label: 'Field Force', icon: 'fas fa-map-marked-alt' },
    ],
  },
  {
    label: 'AI & Automation',
    items: [
      { pageId: 'aicopilot', label: 'AI Copilot', icon: 'fas fa-robot' },
      { pageId: 'workflows', label: 'Workflows', icon: 'fas fa-bolt' },
      { pageId: 'analytics', label: 'Analytics', icon: 'fas fa-chart-pie' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { pageId: 'integrations', label: 'Integrations', icon: 'fas fa-cog' },
      { pageId: 'compliance', label: 'Compliance', icon: 'fas fa-shield-alt' },
    ],
  },
];

export const PAGE_NAMES: Record<PageId, string> = {
  dashboard: 'Dashboard',
  customers: 'Customers',
  pipeline: 'Sales Pipeline',
  inbox: 'Omnichannel Inbox',
  fieldforce: 'Field Force',
  aicopilot: 'AI Copilot',
  workflows: 'Workflows',
  analytics: 'Analytics',
  integrations: 'Integrations',
  compliance: 'Compliance',
};

export const GLOBAL_ACTION_CONFIG: Record<PageId, GlobalActionConfig> = {
  dashboard: { icon: 'fas fa-plus', label: 'New Deal' },
  customers: { icon: 'fas fa-plus', label: 'Add Customer' },
  pipeline: { icon: 'fas fa-plus', label: 'Add Deal' },
  inbox: { icon: 'fas fa-plus', label: 'New Message' },
  fieldforce: { icon: 'fas fa-plus', label: 'Check-in' },
  aicopilot: { icon: 'fas fa-robot', label: 'Ask Copilot' },
  workflows: { icon: 'fas fa-plus', label: 'New Workflow' },
  analytics: { icon: 'fas fa-download', label: 'Export Report' },
  integrations: { icon: 'fas fa-plus', label: 'Add Integration' },
  compliance: { icon: 'fas fa-save', label: 'Save Settings' },
};
