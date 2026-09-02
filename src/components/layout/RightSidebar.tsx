import { useState } from 'react';
import type { PanelTabType } from '../../types/panel';

interface RightSidebarProps {
  onOpenPanel: (tab: PanelTabType, agent?: string) => void;
  activePanelTab?: PanelTabType;
  isPanelOpen?: boolean;
}

const AI_SUBMENU = [
  { name: 'AI Receptionist', icon: 'fa-user-tie' },
  { name: 'AI Tele Caller', icon: 'fa-phone-alt' },
  { name: 'AI Call Centre', icon: 'fa-headset' },
  { name: 'AI Customer Care', icon: 'fa-hands-helping' },
  { name: 'AI Support', icon: 'fa-life-ring' },
  { name: 'AI Personal Assist', icon: 'fa-robot' },
  { name: 'My Twin Employee', icon: 'fa-user-friends' },
  { name: 'AI Tech Support', icon: 'fa-laptop-code' },
];

const CHAT_SUBMENU = [
  { id: 'chat-support' as PanelTabType, name: 'Support', icon: 'fa-headset' },
  { id: 'chat-general' as PanelTabType, name: 'General', icon: 'fa-comments' },
  { id: 'chat-task' as PanelTabType, name: 'Task', icon: 'fa-tasks' },
];

export function RightSidebar({ onOpenPanel, activePanelTab, isPanelOpen }: RightSidebarProps) {
  const [aiDropdownOpen, setAiDropdownOpen] = useState<boolean>(true);
  const [chatDropdownOpen, setChatDropdownOpen] = useState<boolean>(false);

  return (
    <aside className="right-sidebar" id="rightSidebar" aria-label="Right Sidebar Navigation">
      {/* 1. AI DROPDOWN SECTION */}
      <div className="rs-section">
        <button
          type="button"
          className={`rs-header-btn ${aiDropdownOpen ? 'open' : ''}`}
          onClick={() => setAiDropdownOpen((prev) => !prev)}
          title="Toggle AI Submenu"
        >
          <div className="ai-header-badge">
            <i className="fas fa-brain" />
          </div>
          <i className={`fas fa-chevron-${aiDropdownOpen ? 'up' : 'down'} rs-chevron`} />
        </button>

        {aiDropdownOpen && (
          <div className="rs-submenu ai-submenu">
            {AI_SUBMENU.map((item) => (
              <button
                key={item.name}
                type="button"
                className={`rs-item-btn${
                  isPanelOpen && activePanelTab === 'ai-agent' ? ' active' : ''
                }`}
                title={item.name}
                onClick={() => onOpenPanel('ai-agent', item.name)}
              >
                <i className={`fas ${item.icon}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="right-sidebar-divider" />

      {/* 2. NOTIFICATIONS */}
      <button
        type="button"
        className={`rs-item-btn notify-btn${
          isPanelOpen && activePanelTab === 'notifications' ? ' active' : ''
        }`}
        title="Notifications"
        onClick={() => onOpenPanel('notifications')}
      >
        <i className="fas fa-bell" />
        <span className="rs-badge-dot">4</span>
      </button>

      {/* 3. CHAT WITH EXPANDABLE SUBMENU */}
      <div className="rs-section">
        <button
          type="button"
          className={`rs-item-btn chat-main-btn${
            isPanelOpen && activePanelTab?.startsWith('chat-') ? ' active' : ''
          }`}
          title="Chat & Channels"
          onClick={() => {
            setChatDropdownOpen((prev) => !prev);
            onOpenPanel('chat-support');
          }}
        >
          <i className="fas fa-comment-dots" />
        </button>

        {chatDropdownOpen && (
          <div className="rs-submenu chat-submenu">
            {CHAT_SUBMENU.map((chat) => (
              <button
                key={chat.id}
                type="button"
                className={`rs-item-btn sub-btn${
                  isPanelOpen && activePanelTab === chat.id ? ' active' : ''
                }`}
                title={`Chat: ${chat.name}`}
                onClick={() => onOpenPanel(chat.id)}
              >
                <i className={`fas ${chat.icon}`} />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 4. NEWS */}
      <button
        type="button"
        className={`rs-item-btn${isPanelOpen && activePanelTab === 'news' ? ' active' : ''}`}
        title="Company News"
        onClick={() => onOpenPanel('news')}
      >
        <i className="fas fa-newspaper" />
      </button>

      {/* 5. FAVORITES */}
      <button
        type="button"
        className={`rs-item-btn${isPanelOpen && activePanelTab === 'favorites' ? ' active' : ''}`}
        title="Favorites"
        onClick={() => onOpenPanel('favorites')}
      >
        <i className="fas fa-star" />
      </button>

      {/* 6. CALENDAR */}
      <button
        type="button"
        className={`rs-item-btn${isPanelOpen && activePanelTab === 'calendar' ? ' active' : ''}`}
        title="Calendar"
        onClick={() => onOpenPanel('calendar')}
      >
        <i className="fas fa-calendar-alt" />
      </button>

      {/* 7. NOTES */}
      <button
        type="button"
        className={`rs-item-btn${isPanelOpen && activePanelTab === 'notes' ? ' active' : ''}`}
        title="Notes"
        onClick={() => onOpenPanel('notes')}
      >
        <i className="fas fa-sticky-note" />
      </button>

      {/* 8. TASKS / TO-DO */}
      <button
        type="button"
        className={`rs-item-btn${isPanelOpen && activePanelTab === 'tasks' ? ' active' : ''}`}
        title="Tasks / To-Do"
        onClick={() => onOpenPanel('tasks')}
      >
        <i className="fas fa-check-square" />
      </button>

      <div className="right-sidebar-footer">
        <span className="ai-live-dot" title="Suite Online" />
      </div>
    </aside>
  );
}
