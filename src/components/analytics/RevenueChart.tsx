import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { MonthlySeries } from '../../types/analytics';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

export function RevenueChart({ series }: { series: MonthlySeries }) {
  return (
    <div className="chart-container">
      <Bar
        data={{
          labels: series.labels,
          datasets: [
            {
              label: 'Revenue ($k)',
              data: series.values,
              backgroundColor: '#7c3aed',
              borderRadius: 4,
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
