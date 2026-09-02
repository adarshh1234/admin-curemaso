import { useCallback, useEffect, useRef, useState } from 'react';
import { aiCopilotService } from '../services/aiCopilot.service';
import type { ChatMessage } from '../types/chat';
import { formatTimeLabel } from '../utils/formatDate';
import { generateId } from '../utils/generateId';

export function useAiChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState('');
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    aiCopilotService.getInitialMessages().then(setMessages);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ block: 'end' });
  }, [messages]);

  const sendMessage = useCallback(async () => {
    const text = draft.trim();
    if (!text) return;

    const userMessage: ChatMessage = {
      id: generateId('msg'),
      isAI: false,
      html: text,
      timeLabel: formatTimeLabel(),
    };
    setMessages((current) => [...current, userMessage]);
    setDraft('');
    setIsSending(true);

    try {
      const reply = await aiCopilotService.sendMessage(text);
      const aiMessage: ChatMessage = {
        id: generateId('msg'),
        isAI: true,
        html: reply,
        timeLabel: formatTimeLabel(),
      };
      setMessages((current) => [...current, aiMessage]);
    } finally {
      setIsSending(false);
    }
  }, [draft]);

  return { messages, draft, setDraft, sendMessage, isSending, chatEndRef };
}
