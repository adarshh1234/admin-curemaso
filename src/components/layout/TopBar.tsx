import { forwardRef } from 'react';

interface TopBarProps {
  onHamburgerClick: () => void;
  onGlobalAction: () => void;
}

export const TopBar = forwardRef<HTMLButtonElement, TopBarProps>(function TopBar(
  { onHamburgerClick, onGlobalAction },
  hamburgerRef,
) {
  return (
    <div className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <button className="hamburger" id="hamburgerBtn" ref={hamburgerRef} onClick={onHamburgerClick}>
          <i className="fas fa-bars" />
        </button>
        <div className="greeting">
          <h1 id="pageTitle">
            Welcome back, <span>labeeb.eee_candidate</span>
          </h1>
          <p id="pageSubtitle">
            <i className="fas fa-shield-alt" style={{ color: '#2563eb', marginRight: 6 }} /> ERP · Full Module Navigation
          </p>
        </div>
      </div>

      <div className="actions">
        <div className="date-badge">
          <i className="far fa-calendar-alt" style={{ color: '#2563eb', marginRight: 6 }} /> Aug 24, 2026
        </div>
        <div className="notif">
          <i className="fas fa-bell" />
          <span className="badge">4</span>
        </div>
        <button className="btn-primary" id="globalActionBtn" onClick={onGlobalAction}>
          <i className="fas fa-plus" /> New
        </button>
      </div>
    </div>
  );
});
