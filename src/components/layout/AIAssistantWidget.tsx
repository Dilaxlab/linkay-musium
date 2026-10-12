"use client";
import React, { useState, useRef, useEffect } from "react";
import { useMuseumStore } from "@/store/useMuseumStore";
import { getAIResponse } from "@/lib/aiResponses";
import { Bot, X, Send, Sparkles, Minimize2, Mic, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const quickChips = [
  "Tell me about the Bronze Age collection",
  "Plan a 2-hour virtual tour",
  "Show artifacts from 1200 BCE",
];

export default function AIAssistantWidget() {
  const { isChatOpen, toggleChat, chatMessages, sendMessage } = useMuseumStore();
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamedText, setStreamedText] = useState("");
  const [voiceActive, setVoiceActive] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping, streamedText]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim()) return;

    sendMessage(text);
    setInput("");
    setIsTyping(true);
    setStreamedText("");

    // Simulate streaming reply
    const fullReply = getAIResponse(text);
    let currentIdx = 0;

    setTimeout(() => {
      const interval = setInterval(() => {
        currentIdx += 4;
        if (currentIdx >= fullReply.length) {
          clearInterval(interval);
          setStreamedText("");
          setIsTyping(false);
          useMuseumStore.setState((state) => ({
            chatMessages: [
              ...state.chatMessages,
              {
                id: Math.random().toString(36).substring(7),
                sender: "ai",
                text: fullReply,
                timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
              },
            ],
          }));

          if (voiceActive && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
            const utt = new SpeechSynthesisUtterance(fullReply);
            window.speechSynthesis.speak(utt);
          }
        } else {
          setStreamedText(fullReply.slice(0, currentIdx));
        }
      }, 25);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isChatOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-[360px] sm:w-[420px] h-[540px] rounded-3xl backdrop-blur-2xl bg-[#0A0E1A]/95 border border-[#D4AF37]/30 shadow-[0_20px_70px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#1E3A8A]/50 to-[#111827] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#CD7F32] flex items-center justify-center text-[#0A0E1A]">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] border-2 border-[#0A0E1A] absolute -bottom-0.5 -right-0.5 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white font-display">AI Museum Concierge</h4>
                  <p className="text-[10px] font-mono text-[#D4AF37]">Neural Curator · GPT-4 Heritage Model</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setVoiceActive(!voiceActive)}
                  title={voiceActive ? "Voice narration active" : "Enable voice narration"}
                  className={`p-1.5 rounded-lg border transition-all ${
                    voiceActive ? "border-[#00E5FF]/50 bg-[#00E5FF]/20 text-[#00E5FF]" : "border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {voiceActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Feed */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              {chatMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                      msg.sender === "ai"
                        ? "bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37]"
                        : "bg-[#1E3A8A] text-white font-mono"
                    }`}
                  >
                    {msg.sender === "ai" ? <Bot className="w-3.5 h-3.5" /> : "U"}
                  </div>
                  <div
                    className={`max-w-[78%] p-3.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed whitespace-pre-line ${
                      msg.sender === "ai"
                        ? "bg-white/5 border border-white/10 text-slate-200"
                        : "bg-gradient-to-r from-[#D4AF37]/25 to-[#CD7F32]/25 border border-[#D4AF37]/40 text-white font-medium"
                    }`}
                  >
                    {msg.text}
                    <span className="text-[10px] text-slate-500 font-mono block mt-1.5 text-right">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-[13px] text-slate-200 max-w-[78%]">
                    {streamedText ? (
                      <span className="whitespace-pre-line">{streamedText}<span className="inline-block w-1.5 h-3.5 bg-[#00E5FF] ml-1 animate-pulse" /></span>
                    ) : (
                      <div className="flex items-center gap-1.5 font-mono text-[#D4AF37]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:0.4s]" />
                        <span className="text-xs ml-1">Streaming answer...</span>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Quick Chips */}
            <div className="px-3 py-2 bg-white/[0.02] border-t border-white/5 flex gap-1.5 overflow-x-auto no-scrollbar">
              {quickChips.map((chip) => (
                <button
                  key={chip}
                  onClick={() => handleSend(chip)}
                  className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-[11px] text-slate-400 hover:text-[#D4AF37] whitespace-nowrap font-mono transition-all flex items-center gap-1"
                >
                  <Sparkles className="w-2.5 h-2.5 text-[#00E5FF]" />
                  <span>{chip}</span>
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-[#0A0E1A] border-t border-white/10 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about artifacts, VR routes, or tokens..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00E5FF]"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#00E5FF] text-[#0A0E1A] flex items-center justify-center font-bold hover:scale-105 active:scale-95 disabled:opacity-40 transition-transform"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ) : (
          /* Avatar orb with pulsing aura */
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleChat}
            className="group relative flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F8FAFC] to-[#00E5FF] text-[#0A0E1A] font-bold shadow-[0_0_35px_-5px_#00E5FF] hover:shadow-[0_0_50px_0px_#00E5FF] transition-all"
          >
            {/* Animated pulsating aura ring */}
            <span className="absolute inset-0 rounded-full bg-[#00E5FF] opacity-30 animate-ping -z-10" />

            <div className="w-7 h-7 rounded-full bg-[#0A0E1A] flex items-center justify-center text-[#D4AF37]">
              <Bot className="w-4 h-4" />
            </div>
            <span className="font-mono text-xs uppercase tracking-wider font-extrabold text-[#0A0E1A]">
              AI Guide
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
