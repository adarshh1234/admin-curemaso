import type { FieldAgent } from '../../types/fieldforce';

export function AgentCard({ agent }: { agent: FieldAgent }) {
  return (
    <div className="agent-card">
      <div className="agent-avatar" style={{ background: agent.color }}>
        {agent.initials}
      </div>
      <div className="agent-info">
        <div className="name">{agent.name}</div>
        <div className="detail">
          {agent.detailPrefix} · <i className={agent.detailIcon} style={{ color: agent.detailIconColor }} /> {agent.detailStatus}
        </div>
      </div>
      <span className="tag-blue">{agent.regionTag}</span>
    </div>
  );
}
