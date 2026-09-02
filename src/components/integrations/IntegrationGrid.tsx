import type { Integration } from '../../types/integration';
import { IntegrationCard } from './IntegrationCard';

export function IntegrationGrid({
  integrations,
  onAction,
}: {
  integrations: Integration[];
  onAction: (integration: Integration) => void;
}) {
  return (
    <div className="integration-grid">
      {integrations.map((integration) => (
        <IntegrationCard key={integration.id} integration={integration} onAction={onAction} />
      ))}
    </div>
  );
}
