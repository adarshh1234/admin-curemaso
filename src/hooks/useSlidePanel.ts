import { useState, useCallback } from 'react';
import type { PanelTabType, PanelState } from '../types/panel';

export function useSlidePanel() {
  const [panelState, setPanelState] = useState<PanelState>({
    isOpen: false,
    activeTab: 'notifications',
    selectedAgent: 'AI Receptionist',
  });

  const openPanel = useCallback((tab: PanelTabType, agent?: string) => {
    setPanelState({
      isOpen: true,
      activeTab: tab,
      selectedAgent: agent || 'AI Receptionist',
    });
  }, []);

  const closePanel = useCallback(() => {
    setPanelState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const selectTab = useCallback((tab: PanelTabType, agent?: string) => {
    setPanelState((prev) => ({
      ...prev,
      activeTab: tab,
      selectedAgent: agent || prev.selectedAgent,
    }));
  }, []);

  return {
    panelState,
    openPanel,
    closePanel,
    selectTab,
  };
}
