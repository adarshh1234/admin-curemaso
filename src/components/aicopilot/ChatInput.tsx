interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  disabled?: boolean;
}

export function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  return (
    <div className="ai-input">
      <input
        type="text"
        id="aiInput"
        placeholder="Ask Copilot to draft, summarize, or suggest..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') onSend();
        }}
      />
      <button id="aiSendBtn" onClick={onSend} disabled={disabled}>
        <i className={disabled ? 'fas fa-circle-notch fa-spin' : 'fas fa-paper-plane'} />
      </button>
    </div>
  );
}
