import { AI_SIMULATED_REPLIES, INITIAL_CHAT_MESSAGES } from '../data/chatData';
import type { ChatMessage } from '../types/chat';

const REPLY_DELAY_MS = 600;

/**
 * Simulated AI copilot backend. Replace the body of `sendMessage` with a
 * real API call (e.g. POST /api/copilot/messages) to wire up a live model.
 */
export const aiCopilotService = {
  async getInitialMessages(): Promise<ChatMessage[]> {
    return INITIAL_CHAT_MESSAGES;
  },
  async sendMessage(_text: string): Promise<string> {
    const reply =
      AI_SIMULATED_REPLIES[Math.floor(Math.random() * AI_SIMULATED_REPLIES.length)];
    await new Promise((resolve) => setTimeout(resolve, REPLY_DELAY_MS));
    return reply;
  },
};
