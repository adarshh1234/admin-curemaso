export function Loader({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="loader-state">
      <i className="fas fa-circle-notch fa-spin" />
      <span>{label}</span>
    </div>
  );
}
