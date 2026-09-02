import type { ChatMessage } from '../types/chat';

export const INITIAL_CHAT_MESSAGES: ChatMessage[] = [
  {
    id: 'chat-1',
    isAI: true,
    html: "Hello! I'm your Copilot. I can help with email drafts, call scripts, and next-best-actions. What do you need?",
    timeLabel: '10:30 AM',
  },
  {
    id: 'chat-2',
    isAI: false,
    html: 'Draft a follow-up email for Acme Corp regarding the proposal.',
    timeLabel: '10:32 AM',
  },
  {
    id: 'chat-3',
    isAI: true,
    html:
      "Sure! Here's a draft:<br><br><strong>Subject:</strong> Proposal Follow-up<br><br>Hi Acme team,<br><br>" +
      "I hope you're having a great week. I wanted to follow up on the proposal we sent on Monday. Do you have any initial thoughts or questions? " +
      "I'm available to walk you through any part of it.<br><br>Looking forward to your feedback.<br><br>Best,<br>Labeeb",
    timeLabel: '10:33 AM',
  },
];

export const AI_SIMULATED_REPLIES: string[] = [
  'That’s a great question. Let me draft a response for you...',
  'I can help with that. Here’s a suggested next step.',
  'Understood. I’ll generate a proposal outline right away.',
  'Good point. I’ll summarize the key action items.',
  'Let me check the latest data and get back to you with insights.',
];
