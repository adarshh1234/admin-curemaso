import type { RefObject } from 'react';
import type { ChatMessage } from '../../types/chat';
import { ChatMessageBubble } from './ChatMessageBubble';

interface ChatWindowProps {
  messages: ChatMessage[];
  chatEndRef: RefObject<HTMLDivElement | null>;
}

export function ChatWindow({ messages, chatEndRef }: ChatWindowProps) {
  return (
    <div className="ai-chat" id="aiChat">
      {messages.map((message) => (
        <ChatMessageBubble key={message.id} message={message} />
      ))}
      <div ref={chatEndRef} />
    </div>
  );
}
