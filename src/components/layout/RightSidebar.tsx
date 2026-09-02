import { useState } from 'react';

interface AiMenuItem {
  name: string;
  icon: string;
}

const AI_MENU_ITEMS: AiMenuItem[] = [
  { name: 'AI Receptionist', icon: 'fa-user-tie' },
  { name: 'AI Tele Caller', icon: 'fa-phone-alt' },
  { name: 'AI Call Centre', icon: 'fa-headset' },
  { name: 'AI Customer Care', icon: 'fa-hands-helping' },
  { name: 'AI Support', icon: 'fa-life-ring' },
  { name: 'AI Personal Assist', icon: 'fa-robot' },
  { name: 'My Twin Employee', icon: 'fa-user-friends' },
  { name: 'AI Tech Support', icon: 'fa-laptop-code' },
];

export function RightSidebar() {
  const [activeItem, setActiveItem] = useState<string>('AI Receptionist');

  return (
    <aside className="right-sidebar" id="rightSidebar" aria-label="AI Sidebar">
      <div className="right-sidebar-header" title="AI Suite">
        <div className="ai-header-badge">
          <span>AI</span>
        </div>
      </div>

      <div className="right-sidebar-divider" />

      <nav className="ai-menu-list">
        {AI_MENU_ITEMS.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <button
              key={item.name}
              type="button"
              className={`ai-menu-item${isActive ? ' active' : ''}`}
              title={item.name}
              onClick={() => setActiveItem(item.name)}
            >
              <i className={`fas ${item.icon}`} />
            </button>
          );
        })}
      </nav>

      <div className="right-sidebar-footer">
        <span className="ai-live-dot" title="8 AI Agents Active" />
      </div>
    </aside>
  );
}
