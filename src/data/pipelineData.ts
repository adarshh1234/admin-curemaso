import type { PipelineColumn } from '../types/pipeline';

export const DASHBOARD_PIPELINE: PipelineColumn[] = [
  {
    id: 'leads',
    title: 'Leads',
    count: 9,
    deals: [
      { id: 'd-acme', name: 'Acme Corp', amountLabel: '$24k', tag: 'New', stage: 'lead' },
      { id: 'd-stellar', name: 'Stellar Labs', amountLabel: '$12k', tag: 'AI', stage: 'lead' },
      { id: 'd-novatech', name: 'NovaTech', amountLabel: '$8k', tag: 'Warm', stage: 'lead' },
    ],
  },
  {
    id: 'qualified',
    title: 'Qualified',
    count: 7,
    deals: [
      { id: 'd-bluewave', name: 'BlueWave', amountLabel: '$45k', tag: 'Demo', stage: 'qualified' },
      { id: 'd-greenfield', name: 'GreenField', amountLabel: '$31k', tag: 'Proposal', stage: 'qualified' },
    ],
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    count: 4,
    deals: [
      { id: 'd-apex', name: 'Apex Global', amountLabel: '$92k', tag: 'Hot', stage: 'negotiation' },
      { id: 'd-ridge', name: 'Ridge Systems', amountLabel: '$67k', tag: 'Legal', stage: 'negotiation' },
    ],
  },
  {
    id: 'closed-won',
    title: 'Closed Won',
    count: 5,
    deals: [
      { id: 'd-omega', name: 'Omega Solutions', amountLabel: '$128k', tag: 'Won', stage: 'won' },
      { id: 'd-crest', name: 'Crest Industries', amountLabel: '$76k', tag: 'Won', stage: 'won' },
    ],
  },
];

export const FULL_PIPELINE: PipelineColumn[] = [
  {
    id: 'leads',
    title: 'Leads',
    count: 9,
    deals: [
      { id: 'd-acme', name: 'Acme Corp', amountLabel: '$24k', tag: 'New', stage: 'lead' },
      { id: 'd-stellar', name: 'Stellar Labs', amountLabel: '$12k', tag: 'AI', stage: 'lead' },
      { id: 'd-novatech', name: 'NovaTech', amountLabel: '$8k', tag: 'Warm', stage: 'lead' },
      { id: 'd-brightfuture', name: 'BrightFuture', amountLabel: '$15k', tag: 'Inbound', stage: 'lead' },
    ],
  },
  {
    id: 'qualified',
    title: 'Qualified',
    count: 7,
    deals: [
      { id: 'd-bluewave', name: 'BlueWave', amountLabel: '$45k', tag: 'Demo', stage: 'qualified' },
      { id: 'd-greenfield', name: 'GreenField', amountLabel: '$31k', tag: 'Proposal', stage: 'qualified' },
      { id: 'd-skyline', name: 'Skyline', amountLabel: '$22k', tag: 'Meeting', stage: 'qualified' },
    ],
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    count: 4,
    deals: [
      { id: 'd-apex', name: 'Apex Global', amountLabel: '$92k', tag: 'Hot', stage: 'negotiation' },
      { id: 'd-ridge', name: 'Ridge Systems', amountLabel: '$67k', tag: 'Legal', stage: 'negotiation' },
    ],
  },
  {
    id: 'closed-won',
    title: 'Closed Won',
    count: 5,
    deals: [
      { id: 'd-omega', name: 'Omega Solutions', amountLabel: '$128k', tag: 'Won', stage: 'won' },
      { id: 'd-crest', name: 'Crest Industries', amountLabel: '$76k', tag: 'Won', stage: 'won' },
    ],
  },
  {
    id: 'closed-lost',
    title: 'Closed Lost',
    count: 2,
    deals: [
      { id: 'd-horizon', name: 'Horizon Inc', amountLabel: '$14k', tag: 'Lost', stage: 'lost' },
    ],
  },
];
