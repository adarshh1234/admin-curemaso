import { INBOX_FILTERS, INBOX_MESSAGES } from '../data/inboxData';
import type { InboxFilterOption, InboxMessage } from '../types/inbox';

export const inboxService = {
  async getMessages(): Promise<InboxMessage[]> {
    return INBOX_MESSAGES;
  },
  async getFilters(): Promise<InboxFilterOption[]> {
    return INBOX_FILTERS;
  },
};
