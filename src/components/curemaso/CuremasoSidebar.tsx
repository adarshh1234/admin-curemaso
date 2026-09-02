import { forwardRef, Fragment } from 'react';
import { NAV_SECTIONS } from '../../data/navigationData';
import type { PageId } from '../../types/navigation';

interface CuremasoSidebarProps {
  activePage: PageId;
  isOpen: boolean;
  onNavigate: (pageId: PageId) => void;
}

export const CuremasoSidebar = forwardRef<HTMLElement, CuremasoSidebarProps>(function CuremasoSidebar(
  { activePage, isOpen, onNavigate },
  ref,
) {
  return (
    <aside className={`sidebar crm-sidebar${isOpen ? ' open' : ''}`} id="crmSidebar" ref={ref}>
      <div className="logo">
        <span>
          <i className="fas fa-bolt" />
        </span>
        Curemaso <small>AI</small>
      </div>
      <nav>
        {NAV_SECTIONS.map((section) => (
          <Fragment key={section.label}>
            <div className="nav-label">{section.label}</div>
            {section.items.map((item) => (
              <a
                key={item.pageId}
                href="#"
                className={item.pageId === activePage ? 'active' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  onNavigate(item.pageId);
                }}
              >
                <i className={item.icon} /> {item.label}
                {item.badge && (
                  <span className="tag-blue" style={{ marginLeft: 'auto' }}>
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </Fragment>
        ))}
      </nav>
      <div className="user-card">
        <div className="avatar">L</div>
        <div className="info">
          <div className="name">Labeeb EEE</div>
          <div className="role">Admin · Curemaso</div>
        </div>
        <i className="fas fa-ellipsis-v" style={{ color: '#8e9bb5', cursor: 'pointer' }} />
      </div>
    </aside>
  );
});
