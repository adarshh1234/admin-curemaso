export interface StatChange {
  direction: 'up' | 'down' | 'none';
  /** Colored portion, e.g. "↑ 12%". Omitted when direction is 'none'. */
  highlight?: string;
  /** Remaining muted text, e.g. " vs last month". */
  suffix: string;
}

export interface StatCardData {
  id: string;
  icon: string;
  label: string;
  value: string;
  change: StatChange;
}
