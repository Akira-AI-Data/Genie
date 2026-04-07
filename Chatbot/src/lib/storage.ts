import { Conversation, Model } from '@/types';

const CONVERSATIONS_KEY = 'chatbot-conversations';
const MODEL_KEY = 'chatbot-model';
const THEME_KEY = 'chatbot-theme';

export function saveConversations(conversations: Conversation[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(conversations));
  } catch {
    console.warn('Failed to save conversations to localStorage');
  }
}

export function loadConversations(): Conversation[] {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(CONVERSATIONS_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveModel(model: Model): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(MODEL_KEY, model);
}

export function loadModel(): Model | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(MODEL_KEY) as Model | null;
}

export function saveTheme(theme: 'light' | 'dark'): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(THEME_KEY, theme);
}

export function loadTheme(): 'light' | 'dark' | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(THEME_KEY) as 'light' | 'dark' | null;
}
