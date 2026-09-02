import type { FieldAgent } from '../../types/fieldforce';
import { AgentCard } from './AgentCard';

export function AgentList({ agents }: { agents: FieldAgent[] }) {
  return (
    <div>
      <h4 style={{ fontSize: 14, marginBottom: 8 }}>Today's Visits</h4>
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
