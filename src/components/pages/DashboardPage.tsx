import { useAsyncData } from '../../hooks/useAsyncData';
import { inboxService } from '../../services/inbox.service';
import { pipelineService } from '../../services/pipeline.service';
import { Loader } from '../common/Loader';
import { InboxList } from '../inbox/InboxList';
import { PipelineBoard } from '../pipeline/PipelineBoard';

export function DashboardPage() {
  const { data: pipeline, isLoading: pipelineLoading } = useAsyncData(
    () => pipelineService.getDashboardPipeline(),
    [],
  );
  const { data: messages, isLoading: inboxLoading } = useAsyncData(() => inboxService.getMessages(), []);

  return (
    <>
      <div
        className="grid-2"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 28 }}
      >
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-stream" style={{ color: '#2563eb', marginRight: 8 }} /> Sales Pipeline
            </h3>
            <a>View all →</a>
          </div>
          {pipelineLoading || !pipeline ? <Loader label="Loading pipeline…" /> : <PipelineBoard columns={pipeline} />}
        </div>
        <div className="panel">
          <div className="panel-head">
            <h3>
              <i className="fas fa-inbox" style={{ color: '#2563eb', marginRight: 8 }} /> Omnichannel Inbox
            </h3>
            <a>View all →</a>
          </div>
          {inboxLoading || !messages ? (
            <Loader label="Loading inbox…" />
          ) : (
            <InboxList messages={messages.slice(0, 3)} />
          )}
        </div>
      </div>
      <div className="panel">
        <div className="panel-head">
          <h3>
            <i className="fas fa-robot" style={{ color: '#7c3aed', marginRight: 8 }} /> AI Copilot Suggestions
          </h3>
          <a>Open Copilot →</a>
        </div>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ background: '#f8faff', padding: '12px 18px', borderRadius: 10, flex: 1, minWidth: 160 }}>
            <span style={{ fontWeight: 600 }}>Follow up with Acme Corp</span>
            <br />
            <span style={{ fontSize: 13, color: '#6b7a8f' }}>
              Win prob 78% · <i className="fas fa-paper-plane" style={{ color: '#2563eb' }} /> draft ready
            </span>
          </div>
          <div style={{ background: '#f8faff', padding: '12px 18px', borderRadius: 10, flex: 1, minWidth: 160 }}>
            <span style={{ fontWeight: 600 }}>Call script for Stellar Labs</span>
            <br />
            <span style={{ fontSize: 13, color: '#6b7a8f' }}>
              Objection handling · <i className="fas fa-phone" style={{ color: '#2563eb' }} /> generate
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
