import { Layout } from './components/layout/Layout';
import { ErpDashboardPage } from './components/pages/ErpDashboardPage';
import { ProfilePage } from './components/pages/ProfilePage';
import { CalendarPage } from './components/pages/CalendarPage';
import { ReportsPage } from './components/pages/ReportsPage';
import { SettingsPage } from './components/pages/SettingsPage';
import { ModuleDetailPage } from './components/pages/ModuleDetailPage';
import { CuremasoApp } from './components/curemaso/CuremasoApp';
import { ToastContainer } from './components/common/ToastContainer';
import { ToastProvider, useToast } from './context/ToastContext';
import { useErpNavigation } from './hooks/useErpNavigation';

function AppShell() {
  const {
    activeModuleId,
    activeModule,
    specialModules,
    filteredNonSpecialModules,
    searchQuery,
    setSearchQuery,
    navigateTo,
  } = useErpNavigation(1);

  const { showToast } = useToast();

  function handleGlobalAction() {
    showToast('New action item created.', 'success');
  }

  function renderPageContent() {
    switch (activeModuleId) {
      case 1:
        return <ErpDashboardPage onNavigateModule={navigateTo} />;
      case 2:
        return <ProfilePage />;
      case 3:
        return <CalendarPage />;
      case 4:
        return <ReportsPage onNavigateDashboard={() => navigateTo(1)} />;
      case 5:
        return <SettingsPage />;
      case 10:
        return <CuremasoApp />;
      default:
        return <ModuleDetailPage key={activeModule.id} module={activeModule} />;
    }
  }

  return (
    <Layout
      activeModuleId={activeModuleId}
      specialModules={specialModules}
      filteredModules={filteredNonSpecialModules}
      searchQuery={searchQuery}
      onSearchChange={setSearchQuery}
      onSelectModule={navigateTo}
      onGlobalAction={handleGlobalAction}
    >
      <div className="page active" key={activeModuleId}>
        {renderPageContent()}
      </div>
    </Layout>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <AppShell />
      <ToastContainer />
    </ToastProvider>
  );
}
