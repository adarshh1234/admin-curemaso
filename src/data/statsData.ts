import type { StatCardData } from '../types/stats';

export const STATS: StatCardData[] = [
  {
    id: 'active-deals',
    icon: 'fas fa-flag',
    label: 'Active Deals',
    value: '38',
    change: { direction: 'up', highlight: '↑ 12%', suffix: ' vs last month' },
  },
  {
    id: 'pipeline-value',
    icon: 'fas fa-dollar-sign',
    label: 'Pipeline Value',
    value: '$2.4M',
    change: { direction: 'up', highlight: '↑ 8%', suffix: ' forecast Q2' },
  },
  {
    id: 'win-rate',
    icon: 'fas fa-check-circle',
    label: 'Win Rate',
    value: '64%',
    change: { direction: 'none', suffix: '+5% from last quarter' },
  },
  {
    id: 'avg-response',
    icon: 'fas fa-clock',
    label: 'Avg. Response',
    value: '2.4h',
    change: { direction: 'up', highlight: '↓ 1.2h', suffix: ' with AI assist' },
  },
];
