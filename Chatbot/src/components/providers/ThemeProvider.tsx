'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { useChatStore } from '@/stores/chatStore';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initialize = useUIStore((s) => s.initialize);
  const initialized = useUIStore((s) => s.initialized);
  const loadFromStorage = useChatStore((s) => s.loadFromStorage);

  useEffect(() => {
    initialize();
    loadFromStorage();

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // SW registration failed silently
      });
    }
  }, [initialize, loadFromStorage]);

  if (!initialized) {
    return null;
  }

  return <>{children}</>;
}
