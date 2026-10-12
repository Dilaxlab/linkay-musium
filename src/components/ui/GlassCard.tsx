"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: "gold" | "neon" | "sapphire" | "none";
}

export default function GlassCard({
  children,
  className = "",
  glow = "none",
  ...props
}: GlassCardProps) {
  const glowClasses = {
    gold: "hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/40",
    neon: "hover:shadow-[0_0_40px_-10px_#00E5FF] hover:border-[#00E5FF]/40",
    sapphire: "hover:shadow-[0_0_35px_-5px_rgba(30,58,138,0.4)] hover:border-[#1E3A8A]/50",
    none: "",
  };

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-2xl transition-all duration-300 ${glowClasses[glow]} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
