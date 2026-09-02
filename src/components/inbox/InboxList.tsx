import { EmptyState } from '../common/EmptyState';
import type { InboxMessage } from '../../types/inbox';
import { InboxItem } from './InboxItem';

export function InboxList({ messages }: { messages: InboxMessage[] }) {
  if (messages.length === 0) {
    return <EmptyState icon="fas fa-inbox" message="No messages match this filter." />;
  }
  return (
    <>
      {messages.map((message) => (
        <InboxItem key={message.id} message={message} />
      ))}
    </>
  );
}
