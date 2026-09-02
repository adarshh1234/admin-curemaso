import { useMemo, useState } from 'react';
import type { InboxFilterOption, InboxMessage } from '../types/inbox';

export function useInboxFilter(messages: InboxMessage[], filters: InboxFilterOption[]) {
  const [activeFilter, setActiveFilter] = useState<InboxFilterOption['id']>('all');

  const filteredMessages = useMemo(() => {
    if (activeFilter === 'all') return messages;
    return messages.filter((message) => message.channel === activeFilter);
  }, [messages, activeFilter]);

  return { filters, activeFilter, setActiveFilter, filteredMessages };
}
