'use client';

import { PanelLeft, Plus } from 'lucide-react';
import { useUIStore } from '@/stores/uiStore';
import { useChatStore } from '@/stores/chatStore';
import { IconButton } from '@/components/ui/IconButton';
import { ModelSelector } from '@/components/ui/ModelSelector';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export function Header() {
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);
  const selectedModel = useUIStore((s) => s.selectedModel);
  const createConversation = useChatStore((s) => s.createConversation);

  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background h-12 flex-shrink-0">
      <div className="flex items-center gap-1">
        <IconButton onClick={toggleSidebar} aria-label="Toggle sidebar">
          <PanelLeft className="w-5 h-5" />
        </IconButton>
        <IconButton
          onClick={() => createConversation(selectedModel)}
          aria-label="New conversation"
        >
          <Plus className="w-5 h-5" />
        </IconButton>
      </div>

      <ModelSelector />

      <div className="flex items-center gap-1">
        <ThemeToggle />
      </div>
    </header>
  );
}
