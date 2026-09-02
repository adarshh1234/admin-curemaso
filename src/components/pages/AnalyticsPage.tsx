import { useAsyncData } from '../../hooks/useAsyncData';
import { analyticsService } from '../../services/analytics.service';
import { DealsChart } from '../analytics/DealsChart';
import { RevenueChart } from '../analytics/RevenueChart';
import { KpiCard } from '../analytics/KpiCard';
import { Loader } from '../common/Loader';

export function AnalyticsPage() {
  const { data: dealsSeries, isLoading: dealsLoading } = useAsyncData(
    () => analyticsService.getDealsWonSeries(),
    [],
  );
  const { data: revenueSeries, isLoading: revenueLoading } = useAsyncData(
    () => analyticsService.getRevenueSeries(),
    [],
  );
  const { data: kpis, isLoading: kpisLoading } = useAsyncData(() => analyticsService.getKpis(), []);

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-chart-pie" style={{ color: '#2563eb', marginRight: 8 }} /> Analytics &amp; KPIs
        </h3>
        <span>Last 30 days</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>{dealsLoading || !dealsSeries ? <Loader label="Loading chart…" /> : <DealsChart series={dealsSeries} />}</div>
        <div>
          {revenueLoading || !revenueSeries ? <Loader label="Loading chart…" /> : <RevenueChart series={revenueSeries} />}
        </div>
      </div>
      <div style={{ marginTop: 20, display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {kpisLoading || !kpis ? (
          <Loader label="Loading KPIs…" />
        ) : (
          kpis.map((kpi) => <KpiCard key={kpi.id} kpi={kpi} />)
        )}
      </div>
    </div>
  );
}
