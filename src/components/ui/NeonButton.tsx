"use client";
import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "neon" | "gold" | "glass";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export default function NeonButton({
  children,
  variant = "neon",
  size = "md",
  className = "",
  onClick,
  ...props
}: NeonButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  const variantClasses = {
    neon: "bg-[#00E5FF] text-[#0A0E1A] font-bold shadow-[0_0_35px_-8px_#00E5FF] hover:shadow-[0_0_45px_0px_#00E5FF] hover:bg-cyan-300",
    gold: "bg-gradient-to-r from-[#D4AF37] to-[#CD7F32] text-[#0A0E1A] font-bold shadow-[0_0_30px_-5px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_0px_rgba(212,175,55,0.6)]",
    glass: "backdrop-blur-xl bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      className={`rounded-xl font-mono uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
