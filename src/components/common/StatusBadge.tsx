import type { CustomerStatus } from '../../types/customer';

const STATUS_LABELS: Record<CustomerStatus, string> = {
  active: 'Active',
  lead: 'Lead',
  qualified: 'Qualified',
  won: 'Won',
  lost: 'Lost',
  negotiation: 'Negotiation',
};

export function StatusBadge({ status }: { status: CustomerStatus }) {
  return <span className={`status-badge ${status}`}>{STATUS_LABELS[status]}</span>;
}
