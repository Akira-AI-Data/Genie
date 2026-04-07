'use client';

import { Sparkles } from 'lucide-react';

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

const SUGGESTIONS = [
  'Explain quantum computing in simple terms',
  'Write a Python script to sort a list',
  'Help me debug my React code',
  'Summarize a long document for me',
];

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6">
        <Sparkles className="w-8 h-8 text-white" />
      </div>

      <h1 className="text-2xl font-semibold text-foreground mb-2">
        What can Genie do for you?
      </h1>
      <p className="text-muted text-sm mb-8 text-center max-w-md">
        Your AI assistant. Ask me anything - writing, analysis, coding, math, and more.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
        {SUGGESTIONS.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSuggestionClick(suggestion)}
            className="text-left px-4 py-3 rounded-xl border border-border hover:bg-sidebar-hover transition-colors text-sm text-foreground"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}
