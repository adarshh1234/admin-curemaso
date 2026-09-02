import { ANALYTICS_KPIS, DEALS_WON_SERIES, REVENUE_SERIES } from '../data/analyticsData';
import type { Kpi, MonthlySeries } from '../types/analytics';

export const analyticsService = {
  async getDealsWonSeries(): Promise<MonthlySeries> {
    return DEALS_WON_SERIES;
  },
  async getRevenueSeries(): Promise<MonthlySeries> {
    return REVENUE_SERIES;
  },
  async getKpis(): Promise<Kpi[]> {
    return ANALYTICS_KPIS;
  },
};
