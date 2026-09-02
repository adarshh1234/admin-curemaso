import type { ComplianceItemData } from '../types/compliance';

export const COMPLIANCE_ITEMS: ComplianceItemData[] = [
  {
    id: 'data-residency',
    icon: 'fas fa-database',
    label: 'Data Residency',
    control: 'select',
    options: ['EU (Frankfurt)', 'USA (Virginia)', 'India (Mumbai)', 'UAE (Dubai)', 'Australia (Sydney)'],
  },
  {
    id: 'gdpr-consent',
    icon: 'fas fa-lock',
    label: 'GDPR Consent Management',
    control: 'toggle',
    active: true,
  },
  {
    id: 'privacy-policy',
    icon: 'fas fa-file-signature',
    label: 'Privacy Policy Acceptance',
    control: 'toggle',
    active: true,
  },
  {
    id: 'dpa',
    icon: 'fas fa-id-card',
    label: 'Data Processing Agreement (DPA)',
    control: 'toggle',
    active: false,
  },
  {
    id: 'rbac',
    icon: 'fas fa-user-shield',
    label: 'Role-Based Access Control (RBAC)',
    control: 'button',
    buttonLabel: 'Configure',
  },
];
