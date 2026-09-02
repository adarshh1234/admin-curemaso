interface ToggleSwitchProps {
  active: boolean;
  onToggle: () => void;
  label?: string;
}

export function ToggleSwitch({ active, onToggle, label }: ToggleSwitchProps) {
  return (
    <div
      className={`toggle-switch${active ? ' active' : ''}`}
      role="switch"
      aria-checked={active}
      aria-label={label}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onToggle();
        }
      }}
    >
      <div className="toggle-knob" />
    </div>
  );
}
