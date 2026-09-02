import type { CheckInEvent } from '../../types/fieldforce';

export function CheckInActivity({ events }: { events: CheckInEvent[] }) {
  return (
    <div>
      <h4 style={{ fontSize: 14, marginBottom: 8 }}>Check-in Activity</h4>
      {events.map((event, index) => (
        <div
          key={event.id}
          style={{
            background: '#f8faff',
            padding: '10px 14px',
            borderRadius: 8,
            marginBottom: index === events.length - 1 ? 0 : 6,
          }}
        >
          <i className={event.icon} style={{ color: event.iconColor }} /> {event.text}
        </div>
      ))}
    </div>
  );
}
