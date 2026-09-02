import { useAsyncData } from '../../hooks/useAsyncData';
import { useInboxFilter } from '../../hooks/useInboxFilter';
import { inboxService } from '../../services/inbox.service';
import { Loader } from '../common/Loader';
import { InboxFilters } from '../inbox/InboxFilters';
import { InboxList } from '../inbox/InboxList';
import { INBOX_FILTERS } from '../../data/inboxData';

export function InboxPage() {
  const { data: messages, isLoading } = useAsyncData(() => inboxService.getMessages(), []);
  const { filters, activeFilter, setActiveFilter, filteredMessages } = useInboxFilter(
    messages ?? [],
    INBOX_FILTERS,
  );

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-inbox" style={{ color: '#2563eb', marginRight: 8 }} /> Unified Inbox
        </h3>
        <span className="tag-blue">12 unread</span>
      </div>
      <InboxFilters filters={filters} activeFilter={activeFilter} onSelect={setActiveFilter} />
      {isLoading || !messages ? <Loader label="Loading inbox…" /> : <InboxList messages={filteredMessages} />}
    </div>
  );
}
