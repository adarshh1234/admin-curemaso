import { useCallback, useState } from 'react';
import { GLOBAL_ACTION_CONFIG, PAGE_NAMES } from '../data/navigationData';
import type { PageId } from '../types/navigation';

export function useNavigation(initialPage: PageId = 'dashboard') {
  const [activePage, setActivePage] = useState<PageId>(initialPage);

  const navigateTo = useCallback((pageId: PageId) => {
    setActivePage(pageId);
  }, []);

  return {
    activePage,
    navigateTo,
    pageTitle: PAGE_NAMES[activePage],
    globalAction: GLOBAL_ACTION_CONFIG[activePage],
  };
}
