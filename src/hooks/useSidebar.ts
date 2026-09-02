import { useCallback, useEffect, useRef, useState } from 'react';

const MOBILE_BREAKPOINT = 820;

export function useSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isHoverExpanded, setIsHoverExpanded] = useState(false);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const hoverTimeoutRef = useRef<number | null>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const close = useCallback(() => setIsOpen(false), []);
  const expand = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsCollapsed(false);
    setIsHoverExpanded(false);
  }, []);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
    setIsHoverExpanded(false);
  }, []);

  const handleSidebarMouseEnter = useCallback(() => {
    if (!isCollapsed) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHoverExpanded(true);
    }, 180);
  }, [isCollapsed]);

  const handleSidebarMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = window.setTimeout(() => {
      setIsHoverExpanded(false);
    }, 280);
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (window.innerWidth > MOBILE_BREAKPOINT) return;
      const target = event.target as Node;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  return {
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
  };
}
