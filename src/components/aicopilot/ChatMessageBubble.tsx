import type { ChatMessage } from '../../types/chat';

export function ChatMessageBubble({ message }: { message: ChatMessage }) {
  return (
    <div className={`msg${message.isAI ? ' ai' : ''}`}>
      <div className="avatar" style={{ background: message.isAI ? '#7c3aed' : '#2563eb' }}>
        {message.isAI ? 'AI' : 'U'}
      </div>
      <div className="bubble">
        <span dangerouslySetInnerHTML={{ __html: message.html }} />
        <div className="time">{message.timeLabel}</div>
      </div>
    </div>
  );
}
