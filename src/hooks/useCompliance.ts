import { useCallback, useEffect, useState } from 'react';
import { complianceService } from '../services/compliance.service';
import type { ComplianceItemData } from '../types/compliance';

export function useCompliance() {
  const [items, setItems] = useState<ComplianceItemData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    complianceService.getComplianceItems().then((data) => {
      if (isMounted) {
        setItems(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleItem = useCallback((id: string) => {
    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, active: !item.active } : item)),
    );
  }, []);

  return { items, isLoading, toggleItem };
}
