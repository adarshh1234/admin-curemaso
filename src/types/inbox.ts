export type InboxChannel = 'whatsapp' | 'email' | 'call' | 'sms' | 'video';

export interface InboxMessage {
  id: string;
  channel: InboxChannel;
  contactName: string;
  preview: string;
  timeLabel: string;
  metaLabel: string;
  metaIcon?: string;
  metaIconColor?: string;
  iconBg: string;
  iconColor: string;
}

export interface InboxFilterOption {
  id: 'all' | InboxChannel;
  label: string;
  icon?: string;
}
