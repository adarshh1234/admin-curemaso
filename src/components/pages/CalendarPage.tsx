export function CalendarPage() {
  return (
    <div className="panel module-detail" style={{ maxWidth: 800, margin: '0 auto' }}>
      <div className="header">
        <div className="icon-lg">
          <i className="fas fa-calendar-alt" />
        </div>
        <h2>Calendar · Schedule</h2>
        <span className="tag-blue" style={{ marginLeft: 'auto', fontSize: 12 }}>
          Action Plan
        </span>
      </div>

      <div className="fields">
        <div className="field-group half">
          <label>Today</label>
          <div className="form-control" style={{ background: '#f8faff' }}>
            <i className="fas fa-circle" style={{ color: '#2563eb', fontSize: 10, marginRight: 6 }} /> 3 appointments
          </div>
        </div>
        <div className="field-group half">
          <label>This Week</label>
          <div className="form-control" style={{ background: '#f8faff' }}>
            <i className="fas fa-calendar-week" style={{ color: '#2563eb', marginRight: 6 }} /> 12 meetings
          </div>
        </div>
        <div className="field-group half">
          <label>Upcoming</label>
          <div className="form-control" style={{ background: '#f8faff' }}>
            <i className="fas fa-clock" style={{ color: '#2563eb', marginRight: 6 }} /> Board review · Aug 26
          </div>
        </div>
        <div className="field-group half">
          <label>Action Plan</label>
          <div className="form-control" style={{ background: '#f8faff' }}>
            <i className="fas fa-list-check" style={{ color: '#2563eb', marginRight: 6 }} /> 5 items pending
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: 16,
          background: '#f8faff',
          borderRadius: 10,
          border: '1px solid #e9edf4',
        }}
      >
        <span style={{ fontWeight: 600, color: '#0b1a33' }}>📅 Appointments</span>
        <ul style={{ marginTop: 8, listStyle: 'none', fontSize: 14 }}>
          <li style={{ padding: '8px 0', borderBottom: '1px solid #e9edf4' }}>
            • 10:00 AM · Strategy sync with Marketing
          </li>
          <li style={{ padding: '8px 0', borderBottom: '1px solid #e9edf4' }}>
            • 02:00 PM · Demo for Geniuspie
          </li>
          <li style={{ padding: '8px 0' }}>• 04:30 PM · Legal review · M&amp;A</li>
        </ul>
      </div>
    </div>
  );
}
