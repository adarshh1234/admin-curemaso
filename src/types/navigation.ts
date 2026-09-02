export type PageId =
  | 'dashboard'
  | 'customers'
  | 'pipeline'
  | 'inbox'
  | 'fieldforce'
  | 'aicopilot'
  | 'workflows'
  | 'analytics'
  | 'integrations'
  | 'compliance';

export interface NavItem {
  pageId: PageId;
  label: string;
  icon: string;
  badge?: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export interface GlobalActionConfig {
  icon: string;
  label: string;
}
