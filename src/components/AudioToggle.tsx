"use client";
import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscRef1 = useRef<OscillatorNode | null>(null);
  const oscRef2 = useRef<OscillatorNode | null>(null);

  const toggleAudio = () => {
    if (isPlaying) {
      // Fade out
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.2);
        setTimeout(() => {
          try {
            oscRef1.current?.stop();
            oscRef2.current?.stop();
            audioCtxRef.current?.close();
          } catch (e) {}
          setIsPlaying(false);
        }, 300);
      }
    } else {
      // Start futuristic harmonic ambient drone
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + 1.5);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm lowpass filter
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(320, ctx.currentTime);
        filter.connect(masterGain);

        // Oscillator 1 - Root drone (55Hz / A1)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(55, ctx.currentTime);
        osc1.connect(filter);
        osc1.start();
        oscRef1.current = osc1;

        // Oscillator 2 - Perfect fifth harmonic (82.4Hz / E2)
        const osc2 = ctx.createOscillator();
        osc2.type = "triangle";
        osc2.frequency.setValueAtTime(82.4, ctx.currentTime);
        osc2.connect(filter);
        osc2.start();
        oscRef2.current = osc2;

        setIsPlaying(true);
      } catch (err) {
        console.error("Audio init error:", err);
      }
    }
  };

  useEffect(() => {
    return () => {
      try {
        oscRef1.current?.stop();
        oscRef2.current?.stop();
        audioCtxRef.current?.close();
      } catch (e) {}
    };
  }, []);

  return (
    <button
      onClick={toggleAudio}
      title={isPlaying ? "Mute Atmospheric Soundscape" : "Enable Museum Atmospheric Soundscape"}
      className={`p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-mono ${
        isPlaying
          ? "border-cyber-gold/50 bg-cyber-gold/15 text-cyber-gold shadow-[0_0_15px_rgba(212,160,23,0.3)]"
          : "border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
      }`}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-4 h-4 text-cyber-gold animate-pulse" />
          <span className="hidden xl:inline text-[11px]">AMBIENCE ON</span>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4" />
          <span className="hidden xl:inline text-[11px]">AMBIENCE</span>
        </>
      )}
    </button>
  );
}
