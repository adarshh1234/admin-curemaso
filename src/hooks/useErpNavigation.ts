import { useCallback, useMemo, useState } from 'react';
import { ALL_MODULES, NON_SPECIAL_MODULES, SPECIAL_MODULES } from '../data/modulesData';

export function useErpNavigation(initialModuleId: number = 1) {
  const [activeModuleId, setActiveModuleId] = useState<number>(initialModuleId);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const navigateTo = useCallback((id: number) => {
    setActiveModuleId(id);
  }, []);

  const filteredNonSpecialModules = useMemo(() => {
    if (!searchQuery.trim()) return NON_SPECIAL_MODULES;
    const q = searchQuery.trim().toLowerCase();
    return NON_SPECIAL_MODULES.filter(
      (m) => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const activeModule = useMemo(() => {
    return ALL_MODULES.find((m) => m.id === activeModuleId) || ALL_MODULES[0];
  }, [activeModuleId]);

  return {
    activeModuleId,
    activeModule,
    specialModules: SPECIAL_MODULES,
    filteredNonSpecialModules,
    searchQuery,
    setSearchQuery,
    navigateTo,
  };
}
