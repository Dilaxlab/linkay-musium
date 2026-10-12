"use client";
import React, { useState } from "react";
import { useWallet, Network } from "@/context/WalletContext";
import { X, Wallet, CheckCircle2, ArrowUpRight, Copy, LogOut, ShieldCheck, Globe } from "lucide-react";

const providers = [
  { name: "MetaMask", icon: "🦊", popular: true },
  { name: "WalletConnect", icon: "🔗", popular: false },
  { name: "Coinbase Wallet", icon: "🔵", popular: false },
  { name: "Phantom", icon: "👻", popular: false },
];

const networks: Network[] = ["Linkay Mainnet", "Ethereum", "Polygon", "Arbitrum"];

export default function WalletModal() {
  const {
    isModalOpen,
    setIsModalOpen,
    isConnected,
    address,
    network,
    ltmBalance,
    ethBalance,
    connectWallet,
    disconnectWallet,
    switchNetwork,
  } = useWallet();

  const [copied, setCopied] = useState(false);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);

  if (!isModalOpen) return null;

  const handleConnect = async (name: string) => {
    setLoadingProvider(name);
    await connectWallet(name);
    setLoadingProvider(null);
  };

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md glass-card border border-cyber-gold/30 p-6 shadow-[0_0_50px_rgba(212,160,23,0.15)] bg-dark-bg/95">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-cyber-gold/20 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-cyber-gold" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {isConnected ? "Web3 Account" : "Connect Web3 Wallet"}
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                {isConnected ? network : "Choose preferred wallet"}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isConnected ? (
          /* Connected State */
          <div className="mt-6 space-y-5">
            {/* Address Banner */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 font-mono">Connected Address</span>
                <div className="text-sm font-mono font-bold text-white mt-0.5">{address}</div>
              </div>
              <button
                onClick={copyAddress}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/10 hover:bg-cyber-gold/20 text-gray-300 hover:text-cyber-gold transition-colors flex items-center gap-1.5"
              >
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            {/* Balances */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-cyber-gold/10 border border-cyber-gold/30">
                <span className="text-xs text-cyber-gold font-mono uppercase">LTM Balance</span>
                <div className="text-xl font-bold text-white mt-1">
                  {ltmBalance.toLocaleString()} <span className="text-xs text-cyber-gold">LTM</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">≈ ${(ltmBalance * 4.27).toFixed(2)} USD</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 font-mono uppercase">ETH Balance</span>
                <div className="text-xl font-bold text-white mt-1">
                  {ethBalance} <span className="text-xs text-gray-400">ETH</span>
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">≈ ${(ethBalance * 2650).toFixed(2)} USD</div>
              </div>
            </div>

            {/* Network Selector */}
            <div>
              <span className="text-xs text-gray-400 font-mono uppercase block mb-2">Switch Network</span>
              <div className="grid grid-cols-2 gap-2">
                {networks.map((net) => (
                  <button
                    key={net}
                    onClick={() => switchNetwork(net)}
                    className={`px-3 py-2 rounded-lg text-xs font-mono border transition-all text-left flex items-center justify-between ${
                      network === net
                        ? "border-cyber-gold/60 bg-cyber-gold/15 text-white"
                        : "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"
                    }`}
                  >
                    <span>{net}</span>
                    {network === net && <div className="w-2 h-2 rounded-full bg-cyber-gold animate-pulse" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex gap-3">
              <button
                onClick={disconnectWallet}
                className="flex-1 py-2.5 px-4 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs font-medium transition-all flex items-center justify-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" /> Disconnect
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl btn-primary text-xs font-medium text-center"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Disconnected State: Select Provider */
          <div className="mt-6 space-y-3">
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Connect your decentralized wallet to access private museum auctions, artifact staking rewards, and WebXR exhibits.
            </p>

            <div className="space-y-2.5">
              {providers.map((prov) => (
                <button
                  key={prov.name}
                  onClick={() => handleConnect(prov.name)}
                  disabled={!!loadingProvider}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl border border-white/10 hover:border-cyber-gold/40 hover:bg-white/5 transition-all group text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{prov.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyber-gold transition-colors">
                        {prov.name}
                      </div>
                      <div className="text-[11px] text-gray-500">
                        {prov.popular ? "Popular Web3 provider" : "Standard Web3 connection"}
                      </div>
                    </div>
                  </div>
                  {loadingProvider === prov.name ? (
                    <div className="w-4 h-4 border-2 border-cyber-gold border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyber-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-gray-500 justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-cyber-gold" />
              <span>Audited smart contract interactions · End-to-end encrypted</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
