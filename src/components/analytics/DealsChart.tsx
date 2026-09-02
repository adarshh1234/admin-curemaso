import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import type { MonthlySeries } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip);

export function DealsChart({ series }: { series: MonthlySeries }) {
  return (
    <div className="chart-container">
      <Line
        data={{
          labels: series.labels,
          datasets: [
            {
              label: 'Deals Won',
              data: series.values,
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37,99,235,0.05)',
              tension: 0.2,
              fill: true,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        }}
      />
    </div>
  );
}
