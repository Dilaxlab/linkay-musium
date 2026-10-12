"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Network = "Linkay Mainnet" | "Ethereum" | "Polygon" | "Arbitrum";

interface WalletContextType {
  isConnected: boolean;
  address: string | null;
  network: Network;
  ltmBalance: number;
  ethBalance: number;
  connectWallet: (providerName?: string) => Promise<void>;
  disconnectWallet: () => void;
  switchNetwork: (net: Network) => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState<Network>("Linkay Mainnet");
  const [ltmBalance, setLtmBalance] = useState(2450.75);
  const [ethBalance, setEthBalance] = useState(3.42);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check local storage for persistent mock session
    const saved = localStorage.getItem("linkay_wallet_connected");
    if (saved === "true") {
      setIsConnected(true);
      setAddress("0x7a2F...e4d1");
    }
  }, []);

  const connectWallet = async (providerName = "MetaMask") => {
    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 400));
    setIsConnected(true);
    setAddress("0x7a2F891B...e4D19");
    localStorage.setItem("linkay_wallet_connected", "true");
    setIsModalOpen(false);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress(null);
    localStorage.removeItem("linkay_wallet_connected");
  };

  const switchNetwork = (net: Network) => {
    setNetwork(net);
  };

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        address,
        network,
        ltmBalance,
        ethBalance,
        connectWallet,
        disconnectWallet,
        switchNetwork,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}
