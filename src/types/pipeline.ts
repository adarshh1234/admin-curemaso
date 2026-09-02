export type DealStageKind =
  | 'lead'
  | 'qualified'
  | 'negotiation'
  | 'won'
  | 'lost';

export interface Deal {
  id: string;
  name: string;
  amountLabel: string;
  tag: string;
  stage: DealStageKind;
}

export interface PipelineColumn {
  id: string;
  title: string;
  count: number;
  deals: Deal[];
}
