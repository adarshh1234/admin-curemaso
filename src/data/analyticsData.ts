import type { Kpi, MonthlySeries } from '../types/analytics';

export const DEALS_WON_SERIES: MonthlySeries = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [6, 8, 12, 15, 18, 22],
};

export const REVENUE_SERIES: MonthlySeries = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  values: [120, 140, 180, 220, 260, 310],
};

export const ANALYTICS_KPIS: Kpi[] = [
  {
    id: 'conversion-rate',
    label: 'Conversion Rate',
    value: '32%',
    change: { direction: 'up', text: '↑ 4%' },
  },
  {
    id: 'avg-deal-size',
    label: 'Avg. Deal Size',
    value: '$18.4k',
    change: { direction: 'up', text: '↑ 7%' },
  },
  {
    id: 'churn-rate',
    label: 'Churn Rate',
    value: '2.8%',
    change: { direction: 'down', text: '↓ 0.4%' },
  },
];
