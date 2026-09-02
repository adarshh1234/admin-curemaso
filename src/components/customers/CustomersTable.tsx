import type { Customer } from '../../types/customer';
import { StatusBadge } from '../common/StatusBadge';
import { Tag } from '../common/Tag';
import { EmptyState } from '../common/EmptyState';

export function CustomersTable({ customers }: { customers: Customer[] }) {
  if (customers.length === 0) {
    return <EmptyState icon="fas fa-users" message="No customers match your search." />;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.email}</td>
              <td>{customer.phone}</td>
              <td>
                <StatusBadge status={customer.status} />
              </td>
              <td>{customer.owner}</td>
              <td>
                <span style={{ display: 'inline-flex', gap: 6, flexWrap: 'wrap' }}>
                  {customer.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </span>
              </td>
              <td>
                <i className="fas fa-edit" style={{ color: '#2563eb', cursor: 'pointer' }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
