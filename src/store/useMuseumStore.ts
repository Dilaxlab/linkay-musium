import { create } from "zustand";

export interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}

interface MuseumState {
  // Wallet
  isWalletConnected: boolean;
  walletAddress: string | null;
  walletProvider: string | null;
  ltmBalance: number;
  ethBalance: number;
  isWalletModalOpen: boolean;
  connectWallet: (provider: string) => void;
  disconnectWallet: () => void;
  openWalletModal: () => void;
  closeWalletModal: () => void;

  // AI Assistant Widget
  isChatOpen: boolean;
  chatMessages: Message[];
  toggleChat: () => void;
  openChat: () => void;
  closeChat: () => void;
  sendMessage: (text: string) => void;

  // Language
  language: "EN" | "TA" | "HI";
  setLanguage: (lang: "EN" | "TA" | "HI") => void;
}

export const useMuseumStore = create<MuseumState>((set, get) => ({
  // Wallet state
  isWalletConnected: false,
  walletAddress: null,
  walletProvider: null,
  ltmBalance: 4250.8,
  ethBalance: 2.45,
  isWalletModalOpen: false,

  connectWallet: (provider: string) => {
    set({
      isWalletConnected: true,
      walletAddress: "0x7a2F891B...e4D19",
      walletProvider: provider,
      isWalletModalOpen: false,
    });
  },

  disconnectWallet: () => {
    set({
      isWalletConnected: false,
      walletAddress: null,
      walletProvider: null,
    });
  },

  openWalletModal: () => set({ isWalletModalOpen: true }),
  closeWalletModal: () => set({ isWalletModalOpen: false }),

  // Chat state
  isChatOpen: false,
  chatMessages: [
    {
      id: "init",
      sender: "ai",
      text: "Welcome to Linkay Thinktank Museum. I am your neural AI curator. How can I assist your exploration today?",
      timestamp: "Now",
    },
  ],

  toggleChat: () => set((state) => ({ isChatOpen: !state.isChatOpen })),
  openChat: () => set({ isChatOpen: true }),
  closeChat: () => set({ isChatOpen: false }),

  sendMessage: (text: string) => {
    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    set((state) => ({ chatMessages: [...state.chatMessages, userMsg] }));
  },

  // Language state
  language: "EN",
  setLanguage: (lang) => set({ language: lang }),
}));
