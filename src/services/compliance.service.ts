import { COMPLIANCE_ITEMS } from '../data/complianceData';
import type { ComplianceItemData } from '../types/compliance';

export const complianceService = {
  async getComplianceItems(): Promise<ComplianceItemData[]> {
    return COMPLIANCE_ITEMS;
  },
};
