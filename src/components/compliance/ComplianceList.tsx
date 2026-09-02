import type { ComplianceItemData } from '../../types/compliance';
import { ComplianceItemRow } from './ComplianceItemRow';

interface ComplianceListProps {
  items: ComplianceItemData[];
  onToggle: (id: string) => void;
  onConfigure: (item: ComplianceItemData) => void;
}

export function ComplianceList({ items, onToggle, onConfigure }: ComplianceListProps) {
  return (
    <>
      {items.map((item) => (
        <ComplianceItemRow key={item.id} item={item} onToggle={onToggle} onConfigure={onConfigure} />
      ))}
    </>
  );
}
