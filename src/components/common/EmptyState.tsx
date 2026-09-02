export function EmptyState({ icon = 'fas fa-inbox', message }: { icon?: string; message: string }) {
  return (
    <div className="empty-state">
      <i className={icon} />
      <span>{message}</span>
    </div>
  );
}
