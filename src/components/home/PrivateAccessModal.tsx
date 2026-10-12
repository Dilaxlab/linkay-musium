"use client";
import React, { useState } from "react";
import { X, Landmark, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface PrivateAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export default function PrivateAccessModal({
  isOpen,
  onClose,
  initialInterest = "Direct Ownership",
}: PrivateAccessModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interestType, setInterestType] = useState(initialInterest);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1A1A1A]">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8E2D9]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#111625] text-[#C5A059] flex items-center justify-center">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#997A43] font-bold">
                Private Client Concierge
              </span>
              <h3 className="font-serif font-bold text-xl text-[#111111]">
                Request Private Access
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif font-bold text-xl text-[#111111]">
              Private Dossier Request Received
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
              An I3 advisory specialist will review your request and connect with verified provenance dossiers and private viewing arrangements.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {/* Pathway Selector */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1.5">
                Acquisition or Advisory Pathway
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {[
                  "Direct Ownership",
                  "Collection Participation",
                  "Private Viewing",
                  "Institutional Placement",
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInterestType(type)}
                    className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                      interestType === type
                        ? "border-[#997A43] bg-[#997A43]/15 text-[#997A43] font-bold"
                        : "border-[#E8E2D9] bg-white text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Full Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arthur Pendelton"
                  className="w-full bg-white border border-[#E8E2D9] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#997A43]"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@institution.com"
                  className="w-full bg-white border border-[#E8E2D9] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#997A43]"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Direct Telephone (Optional)
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (555) 000-0000"
                className="w-full bg-white border border-[#E8E2D9] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#997A43]"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-1">
                Collection Interests or Inquiry Notes
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mention specific patent models, institutional affiliation, or private viewing preferences..."
                className="w-full bg-white border border-[#E8E2D9] rounded-xl px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none focus:border-[#997A43] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary-dark text-xs uppercase tracking-wider py-3.5 mt-2"
            >
              <span>Submit Confidential Request</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </button>

            <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] font-mono text-slate-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#997A43]" />
              <span>Strict Private Client Non-Disclosure Protection</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
