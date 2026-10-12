"use client";
import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Lock, CheckCircle2, ArrowRight, UserCheck, Calendar, Scale, Layers } from "lucide-react";

export interface PatentModel {
  id: string;
  title: string;
  inventor: string;
  year: string;
  category: string;
  materials: string;
  dimensions: string;
  description: string;
  engineeringNote: string;
  image: string;
  patentNo: string;
  custodyStatus: string;
}

interface ModelDetailModalProps {
  model: PatentModel | null;
  onClose: () => void;
  onRequestInquiry: (modelTitle: string) => void;
}

export default function ModelDetailModal({
  model,
  onClose,
  onRequestInquiry,
}: ModelDetailModalProps) {
  if (!model) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E8E2D9] rounded-3xl p-6 sm:p-8 shadow-2xl text-[#1A1A1A] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#E8E2D9]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#997A43] font-bold">
                Historical Patent Model · {model.patentNo}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Verified Provenance
              </span>
            </div>
            <h3 className="font-serif font-bold text-2xl text-[#111111]">
              {model.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-black hover:bg-black/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media & Key Specs Grid */}
        <div className="my-6 space-y-6">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#E8E2D9] shadow-sm">
            <Image
              src={model.image}
              alt={model.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-sm text-[11px] font-mono text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span>Inventor: {model.inventor} · {model.year}</span>
            </div>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed font-sans">
            {model.description}
          </p>

          <div className="p-4 rounded-2xl bg-[#F4EFE6] border border-[#E8E2D9] text-xs space-y-1">
            <span className="font-mono uppercase text-[#997A43] font-bold text-[10px] block">
              Engineering Narrative
            </span>
            <p className="text-slate-800 leading-relaxed font-serif italic">
              &ldquo;{model.engineeringNote}&rdquo;
            </p>
          </div>

          {/* Specs Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-white border border-[#E8E2D9]">
              <span className="text-[10px] uppercase text-slate-400 block">Inventor</span>
              <span className="font-bold text-[#111111] mt-0.5 block">{model.inventor}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E8E2D9]">
              <span className="text-[10px] uppercase text-slate-400 block">Filing Year</span>
              <span className="font-bold text-[#111111] mt-0.5 block">{model.year}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E8E2D9]">
              <span className="text-[10px] uppercase text-slate-400 block">Category</span>
              <span className="font-bold text-[#111111] mt-0.5 block">{model.category}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E8E2D9] sm:col-span-2">
              <span className="text-[10px] uppercase text-slate-400 block">Materials</span>
              <span className="font-bold text-[#111111] mt-0.5 block">{model.materials}</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-[#E8E2D9]">
              <span className="text-[10px] uppercase text-slate-400 block">Custody State</span>
              <span className="font-bold text-emerald-700 mt-0.5 block">{model.custodyStatus}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-[#E8E2D9] flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => {
              onClose();
              onRequestInquiry(model.title);
            }}
            className="flex-1 btn-primary-dark text-xs uppercase tracking-wider py-3.5"
          >
            <span>Request Model Dossier & Viewing</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
          </button>
          <button
            onClick={onClose}
            className="btn-outline-pill text-xs uppercase tracking-wider py-3.5 sm:px-6"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
