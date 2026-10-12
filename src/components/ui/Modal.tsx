"use client";
import React, { useState } from "react";
import { useMuseumStore } from "@/store/useMuseumStore";
import { X, Wallet, ShieldCheck, ArrowUpRight, CheckCircle2, CreditCard } from "lucide-react";
import NeonButton from "@/components/ui/NeonButton";

const providers = [
  { name: "MetaMask", icon: "🦊", desc: "Browser extension & mobile app" },
  { name: "WalletConnect", icon: "🔗", desc: "Connect with 100+ decentralized wallets" },
  { name: "Coinbase Wallet", icon: "🔵", desc: "Self-custody crypto wallet" },
];

export default function WalletConnectModal() {
  const {
    isWalletModalOpen,
    closeWalletModal,
    isWalletConnected,
    walletAddress,
    walletProvider,
    ltmBalance,
    ethBalance,
    connectWallet,
    disconnectWallet,
  } = useMuseumStore();

  const [activeTab, setActiveTab] = useState<"crypto" | "fiat">("crypto");
  const [fiatAmount, setFiatAmount] = useState("500");
  const [fiatDone, setFiatDone] = useState(false);

  if (!isWalletModalOpen) return null;

  const handleFiatPay = (e: React.FormEvent) => {
    e.preventDefault();
    setFiatDone(true);
    setTimeout(() => {
      setFiatDone(false);
      closeWalletModal();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md backdrop-blur-2xl bg-[#0A0E1A]/95 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-7 shadow-[0_0_60px_-10px_rgba(212,175,55,0.2)]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {isWalletConnected ? "Web3 Vault Account" : "Access Museum Vault"}
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                {isWalletConnected ? `Connected via ${walletProvider}` : "Authenticate for auctions & staking"}
              </p>
            </div>
          </div>
          <button
            onClick={closeWalletModal}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Connected state */}
        {isWalletConnected ? (
          <div className="mt-6 space-y-5">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 font-mono">Active Address</span>
                <div className="text-sm font-mono font-bold text-white mt-0.5">{walletAddress}</div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30">
                <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-wider block">LTM Balance</span>
                <div className="text-xl font-bold font-mono text-white mt-1">{ltmBalance.toLocaleString()}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">≈ ${(ltmBalance * 2.47).toFixed(2)} USD</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block">ETH Balance</span>
                <div className="text-xl font-bold font-mono text-white mt-1">{ethBalance} ETH</div>
                <div className="text-[10px] font-mono text-slate-400 mt-0.5">≈ ${(ethBalance * 2650).toFixed(2)} USD</div>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <button
                onClick={disconnectWallet}
                className="flex-1 py-2.5 rounded-xl border border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 text-xs font-mono transition-all"
              >
                Disconnect
              </button>
              <NeonButton
                variant="gold"
                size="md"
                className="flex-1 text-xs"
                onClick={closeWalletModal}
              >
                Done
              </NeonButton>
            </div>
          </div>
        ) : (
          /* Disconnected State: Tabs [Crypto | Fiat] */
          <div className="mt-5 space-y-4">
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/5 border border-white/10">
              <button
                onClick={() => setActiveTab("crypto")}
                className={`py-2 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "crypto" ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Web3 Crypto
              </button>
              <button
                onClick={() => setActiveTab("fiat")}
                className={`py-2 rounded-lg text-xs font-mono transition-all ${
                  activeTab === "fiat" ? "bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30 font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                Credit / Stripe Mock
              </button>
            </div>

            {activeTab === "crypto" ? (
              <div className="space-y-2.5">
                {providers.map((p) => (
                  <button
                    key={p.name}
                    onClick={() => connectWallet(p.name)}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.04] transition-all group text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{p.icon}</span>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-sans">{p.desc}</div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#D4AF37] transition-colors" />
                  </button>
                ))}
              </div>
            ) : (
              /* Fiat Stripe Mock */
              <form onSubmit={handleFiatPay} className="space-y-3">
                <div>
                  <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">USD Amount</label>
                  <input
                    type="number"
                    value={fiatAmount}
                    onChange={(e) => setFiatAmount(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white font-mono text-sm focus:outline-none focus:border-[#00E5FF]"
                  />
                  <span className="text-[11px] font-mono text-[#00E5FF] block mt-1">
                    ≈ {(parseFloat(fiatAmount || "0") / 2.47).toFixed(1)} LTM Tokens
                  </span>
                </div>

                <div>
                  <label className="text-[11px] font-mono text-slate-400 uppercase block mb-1">Card Number</label>
                  <div className="relative">
                    <CreditCard className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      required
                      placeholder="4242 •••• •••• 4242"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-white font-mono text-xs focus:outline-none focus:border-[#00E5FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    required
                    placeholder="MM / YY"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00E5FF]"
                  />
                  <input
                    required
                    placeholder="CVC"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-white font-mono text-xs focus:outline-none focus:border-[#00E5FF]"
                  />
                </div>

                <NeonButton variant="neon" size="md" className="w-full mt-2 text-xs">
                  Authorize ${(parseFloat(fiatAmount || "0")).toLocaleString()} Payment
                </NeonButton>

                {fiatDone && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Payment processed! Vault allocation confirmed.</span>
                  </div>
                )}
              </form>
            )}

            <div className="pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Smart Contract Audited · AES-256 Protected</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
