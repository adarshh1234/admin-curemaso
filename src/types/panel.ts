export type PanelTabType =
  | 'notifications'
  | 'chat-support'
  | 'chat-general'
  | 'chat-task'
  | 'news'
  | 'favorites'
  | 'ai-agent'
  | 'calendar'
  | 'notes'
  | 'tasks';

export interface PanelState {
  isOpen: boolean;
  activeTab: PanelTabType;
  selectedAgent?: string;
}
