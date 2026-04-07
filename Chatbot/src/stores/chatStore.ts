import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';
import { Conversation, Message, Model } from '@/types';
import { saveConversations, loadConversations } from '@/lib/storage';

interface ChatStore {
  conversations: Conversation[];
  activeConversationId: string | null;
  isStreaming: boolean;
  streamingContent: string;

  createConversation: (model: Model) => string;
  deleteConversation: (id: string) => void;
  setActiveConversation: (id: string | null) => void;
  addMessage: (conversationId: string, message: Message) => void;
  updateLastAssistantMessage: (conversationId: string, content: string) => void;
  setIsStreaming: (value: boolean) => void;
  setStreamingContent: (content: string) => void;
  updateConversationTitle: (id: string, title: string) => void;
  loadFromStorage: () => void;
}

export const useChatStore = create<ChatStore>((set, get) => ({
  conversations: [],
  activeConversationId: null,
  isStreaming: false,
  streamingContent: '',

  createConversation: (model: Model) => {
    const id = uuidv4();
    const now = Date.now();
    const conversation: Conversation = {
      id,
      title: 'New Chat',
      messages: [],
      model,
      createdAt: now,
      updatedAt: now,
    };
    set((state) => {
      const conversations = [conversation, ...state.conversations];
      saveConversations(conversations);
      return { conversations, activeConversationId: id };
    });
    return id;
  },

  deleteConversation: (id: string) => {
    set((state) => {
      const conversations = state.conversations.filter((c) => c.id !== id);
      saveConversations(conversations);
      return {
        conversations,
        activeConversationId:
          state.activeConversationId === id ? null : state.activeConversationId,
      };
    });
  },

  setActiveConversation: (id: string | null) => {
    set({ activeConversationId: id });
  },

  addMessage: (conversationId: string, message: Message) => {
    set((state) => {
      const conversations = state.conversations.map((c) => {
        if (c.id !== conversationId) return c;
        const messages = [...c.messages, message];
        let title = c.title;
        if (messages.length === 1 && message.role === 'user') {
          title = message.content.slice(0, 60) + (message.content.length > 60 ? '...' : '');
        }
        return { ...c, messages, title, updatedAt: Date.now() };
      });
      saveConversations(conversations);
      return { conversations };
    });
  },

  updateLastAssistantMessage: (conversationId: string, content: string) => {
    set((state) => {
      const conversations = state.conversations.map((c) => {
        if (c.id !== conversationId) return c;
        const messages = [...c.messages];
        const lastMsg = messages[messages.length - 1];
        if (lastMsg && lastMsg.role === 'assistant') {
          messages[messages.length - 1] = { ...lastMsg, content };
        }
        return { ...c, messages, updatedAt: Date.now() };
      });
      saveConversations(conversations);
      return { conversations };
    });
  },

  setIsStreaming: (value: boolean) => {
    set({ isStreaming: value });
  },

  setStreamingContent: (content: string) => {
    set({ streamingContent: content });
  },

  updateConversationTitle: (id: string, title: string) => {
    set((state) => {
      const conversations = state.conversations.map((c) =>
        c.id === id ? { ...c, title } : c
      );
      saveConversations(conversations);
      return { conversations };
    });
  },

  loadFromStorage: () => {
    const conversations = loadConversations();
    set({ conversations });
  },
}));
