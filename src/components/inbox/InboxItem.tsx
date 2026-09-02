import type { InboxChannel, InboxMessage } from '../../types/inbox';

const CHANNEL_ICONS: Record<InboxChannel, string> = {
  whatsapp: 'fab fa-whatsapp',
  email: 'fas fa-envelope',
  call: 'fas fa-phone-alt',
  sms: 'fas fa-sms',
  video: 'fas fa-video',
};

export function InboxItem({ message }: { message: InboxMessage }) {
  return (
    <div className="activity-item">
      <div className="icon" style={{ background: message.iconBg, color: message.iconColor }}>
        <i className={CHANNEL_ICONS[message.channel]} />
      </div>
      <div className="content">
        <div className="title">
          {channelLabel(message.channel)} · {message.contactName}
        </div>
        <div className="desc">{message.preview}</div>
        <div className="time">
          {message.timeLabel} ·{' '}
          {message.metaIcon ? (
            <>
              <i className={message.metaIcon} style={{ color: message.metaIconColor }} /> {message.metaLabel}
            </>
          ) : (
            <span className="tag-blue">{message.metaLabel}</span>
          )}
        </div>
      </div>
    </div>
  );
}

function channelLabel(channel: InboxChannel): string {
  switch (channel) {
    case 'whatsapp':
      return 'WhatsApp';
    case 'email':
      return 'Email';
    case 'call':
      return 'Call';
    case 'sms':
      return 'SMS';
    case 'video':
      return 'Video';
    default:
      return channel;
  }
}
