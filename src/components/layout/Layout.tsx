import type { ReactNode } from 'react';
import type { ModuleItem } from '../../types/module';
import { useSidebar } from '../../hooks/useSidebar';
import { Sidebar } from './Sidebar';
import { RightSidebar } from './RightSidebar';
import { TopBar } from './TopBar';

interface LayoutProps {
  activeModuleId: number;
  specialModules: ModuleItem[];
  filteredModules: ModuleItem[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSelectModule: (id: number) => void;
  onGlobalAction: () => void;
  children: ReactNode;
}

export function Layout({
  activeModuleId,
  specialModules,
  filteredModules,
  searchQuery,
  onSearchChange,
  onSelectModule,
  onGlobalAction,
  children,
}: LayoutProps) {
  const {
    isOpen,
    isCollapsed,
    isHoverExpanded,
    toggle,
    close,
    expand,
    toggleCollapse,
    handleSidebarMouseEnter,
    handleSidebarMouseLeave,
    sidebarRef,
    hamburgerRef,
  } = useSidebar();

  function handleSelectModule(id: number) {
    onSelectModule(id);
    close();
    expand();
  }

  return (
    <>
      <Sidebar
        ref={sidebarRef}
        activeModuleId={activeModuleId}
        specialModules={specialModules}
        filteredModules={filteredModules}
        searchQuery={searchQuery}
        isOpen={isOpen}
        isCollapsed={isCollapsed}
        isHoverExpanded={isHoverExpanded}
        onSearchChange={onSearchChange}
        onSelectModule={handleSelectModule}
        onToggleCollapse={toggleCollapse}
        onMouseEnter={handleSidebarMouseEnter}
        onMouseLeave={handleSidebarMouseLeave}
      />
      <div className={`main${isCollapsed ? ' sidebar-collapsed' : ''}`} id="mainContent">
        <TopBar
          ref={hamburgerRef}
          onHamburgerClick={toggle}
          onGlobalAction={onGlobalAction}
        />
        {children}
        <div
          style={{
            marginTop: 32,
            fontSize: 13,
            color: '#8e9bb5',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 8,
            borderTop: '1px solid #e9edf4',
            paddingTop: 20,
          }}
        >
          <span>
            <i className="fas fa-bolt" style={{ color: '#2563eb' }} /> Curemaso AI · v2.4.1
          </span>
          <span>Omnichannel · ERP sync · AI Copilot · Geo CRM</span>
        </div>
      </div>
      <RightSidebar />
    </>
  );
}
