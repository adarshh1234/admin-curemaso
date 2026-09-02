import { useAiChat } from '../../hooks/useAiChat';
import { ChatInput } from '../aicopilot/ChatInput';
import { ChatWindow } from '../aicopilot/ChatWindow';

export function AiCopilotPage() {
  const { messages, draft, setDraft, sendMessage, isSending, chatEndRef } = useAiChat();

  return (
    <div className="panel">
      <div className="panel-head">
        <h3>
          <i className="fas fa-robot" style={{ color: '#7c3aed', marginRight: 8 }} /> AI Copilot
        </h3>
        <span className="tag-blue">Active</span>
      </div>
      <ChatWindow messages={messages} chatEndRef={chatEndRef} />
      <ChatInput value={draft} onChange={setDraft} onSend={sendMessage} disabled={isSending} />
    </div>
  );
}
