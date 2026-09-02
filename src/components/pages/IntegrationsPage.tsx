import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { integrationsService } from '../../services/integrations.service';
import { IntegrationGrid } from '../integrations/IntegrationGrid';
import { Loader } from '../common/Loader';
import type { Integration } from '../../types/integration';

export function IntegrationsPage() {
  const { data: integrations, isLoading } = useAsyncData(() => integrationsService.getIntegrations(), []);
  const { showToast } = useToast();

  function handleAction(integration: Integration) {
    showToast(`${integration.actionLabel}: ${integration.name}`, 'success');
  }

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-cog" style={{ color: '#2563eb', marginRight: 8 }} /> Integrations
        </h3>
        <button className="btn-outline btn-sm" onClick={() => showToast('Add Integration form coming soon.')}>
          <i className="fas fa-plus" /> Add Integration
        </button>
      </div>
      {isLoading || !integrations ? (
        <Loader label="Loading integrations…" />
      ) : (
        <IntegrationGrid integrations={integrations} onAction={handleAction} />
      )}
    </div>
  );
}
