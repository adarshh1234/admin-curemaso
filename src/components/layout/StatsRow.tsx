import { STATS } from '../../data/statsData';
import { StatCard } from '../common/StatCard';

export function StatsRow() {
  return (
    <div className="stats" id="statsContainer">
      {STATS.map((stat) => (
        <StatCard key={stat.id} {...stat} />
      ))}
    </div>
  );
}
