export type CustomerStatus =
  | 'active'
  | 'lead'
  | 'qualified'
  | 'won'
  | 'lost'
  | 'negotiation';

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: CustomerStatus;
  owner: string;
  tags: string[];
}
