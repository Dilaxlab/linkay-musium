"use client";
import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, Minimize2, MessageSquare, Mic } from "lucide-react";

type Message = { role: "user" | "ai"; text: string; time: string };

const quickPrompts = [
  "What is the LTM token utility?",
  "How do I join a private auction?",
  "Show me Floor 1 exhibits",
];

const mockBotAnswers: Record<string, string> = {
  token: "LTM is the utility token powering Linkay Thinktank Museum. It grants access to exclusive WebXR exhibits, private auctions, staking rewards (up to 19.3% APY), and DAO governance.",
  auction: "Private auctions are open to verified LTM token holders. You can place real-time bids on museum-grade physical artifacts and certified digital twin NFTs with instant blockchain settlement.",
  floor: "Floor 1 features the Ancient Egypt Hall and African Dynasties Gallery, equipped with IoT environmental sensors, NFC-tagged pedestals, and interactive touch kiosks.",
  default: "I'm your Linkay Thinktank AI Guide! I can assist you with 3D artifact exploration, auction bidding, provenance research, and physical gallery logistics.",
};

export default function FloatingAIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "ai",
      text: "Hello! I am your AI Museum Concierge. How can I assist your museum exploration?",
      time: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [...prev, { role: "user", text, time }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = mockBotAnswers.default;
      const lower = text.toLowerCase();
      if (lower.includes("token") || lower.includes("ltm")) reply = mockBotAnswers.token;
      else if (lower.includes("auction") || lower.includes("bid")) reply = mockBotAnswers.auction;
      else if (lower.includes("floor") || lower.includes("exhibit")) reply = mockBotAnswers.floor;

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Chat Drawer */}
      {isOpen ? (
        <div className="w-[360px] sm:w-[400px] h-[520px] rounded-2xl glass-card border border-cyber-gold/40 shadow-[0_10px_50px_rgba(0,0,0,0.8)] bg-dark-bg/95 backdrop-blur-xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-deep-sapphire/80 to-dark-surface border-b border-cyber-gold/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyber-gold to-cyber-bronze flex items-center justify-center">
                <Bot className="w-4 h-4 text-dark-bg" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  AI Museum Guide <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </h4>
                <p className="text-[10px] text-cyber-gold font-mono">Neural Knowledge Engine v3.4</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Minimize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                    m.role === "ai"
                      ? "bg-cyber-gold/20 text-cyber-gold border border-cyber-gold/40"
                      : "bg-deep-sapphire text-white border border-blue-400/30"
                  }`}
                >
                  {m.role === "ai" ? <Bot className="w-3.5 h-3.5" /> : "U"}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed ${
                    m.role === "ai"
                      ? "bg-white/5 border border-white/10 text-gray-200"
                      : "bg-gradient-to-r from-cyber-gold/20 to-cyber-bronze/20 border border-cyber-gold/40 text-white"
                  }`}
                >
                  <p>{m.text}</p>
                  <span className="text-[10px] text-gray-500 font-mono block mt-1 text-right">
                    {m.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-cyber-gold font-mono p-2 bg-white/5 rounded-xl border border-white/5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-gold animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-gold animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-gold animate-bounce [animation-delay:0.4s]" />
                <span>AI Guide is thinking...</span>
              </div>
            )}
            <div ref={scrollRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-dark-surface/50 border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => handleSend(p)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-cyber-gold/15 border border-white/10 hover:border-cyber-gold/30 text-[11px] text-gray-400 hover:text-cyber-gold whitespace-nowrap transition-all flex items-center gap-1 font-mono"
              >
                <Sparkles className="w-2.5 h-2.5" />
                <span>{p}</span>
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <div className="p-3 bg-dark-surface border-t border-white/10 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask the AI Guide anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyber-gold/50 font-sans"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-xl bg-gradient-to-r from-cyber-gold to-cyber-bronze flex items-center justify-center text-dark-bg hover:scale-105 active:scale-95 disabled:opacity-40 transition-transform"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* Floating Button Trigger */
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-cyber-gold via-neon-gold to-cyber-bronze text-dark-bg font-bold shadow-[0_0_30px_rgba(212,160,23,0.4)] hover:shadow-[0_0_40px_rgba(212,160,23,0.7)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <div className="w-6 h-6 rounded-full bg-dark-bg/20 flex items-center justify-center">
            <Bot className="w-4 h-4 text-dark-bg" />
          </div>
          <span className="text-xs font-mono tracking-wider font-extrabold uppercase">
            AI Guide
          </span>
          <span className="w-2 h-2 rounded-full bg-dark-bg animate-ping" />
        </button>
      )}
    </div>
  );
}
