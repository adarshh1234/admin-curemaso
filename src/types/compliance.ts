export type ComplianceControlKind = 'select' | 'toggle' | 'button';

export interface ComplianceItemData {
  id: string;
  icon: string;
  label: string;
  control: ComplianceControlKind;
  options?: string[];
  active?: boolean;
  buttonLabel?: string;
}
