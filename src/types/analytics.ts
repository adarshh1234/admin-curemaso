export interface MonthlySeries {
  labels: string[];
  values: number[];
}

export interface Kpi {
  id: string;
  label: string;
  value: string;
  change: {
    direction: 'up' | 'down';
    text: string;
  };
}
