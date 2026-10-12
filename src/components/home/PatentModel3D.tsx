"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, useProgress, Center } from "@react-three/drei";
import * as THREE from "three";
import { RotateCcw, Pause, Play, Layers, Sparkles, Compass } from "lucide-react";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-2xl border border-cyan-400/30 bg-[#080D1A]/95 p-5 text-center text-white backdrop-blur-md shadow-2xl min-w-[200px]">
        <div className="mx-auto mb-3 h-9 w-9 animate-spin rounded-full border-2 border-[#C5A059] border-t-transparent" />
        <p className="text-xs font-mono text-cyan-300 font-semibold tracking-wider">
          LOADING 3D ARTIFACT
        </p>
        <p className="text-[11px] font-mono text-slate-400 mt-1">
          {Math.round(progress)}% loaded (88 MB)
        </p>
        <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-cyan-400 to-[#C5A059] h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Html>
  );
}

function LionHead({
  isRotating,
  wireframe,
}: {
  isRotating: boolean;
  wireframe: boolean;
}) {
  const { scene } = useGLTF("/lion_head_4k.glb");
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!scene) return;

    // Traverse and optimize materials
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.wireframe = wireframe;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene, wireframe]);

  // Gentle automatic turntable rotation
  useFrame((_, delta) => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.45;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]}>
      <Center>
        <primitive object={scene} scale={5.5} />
      </Center>
    </group>
  );
}

export default function PatentModel3D() {
  const [isRotating, setIsRotating] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const controlsRef = useRef<any>(null);

  const resetCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  return (
    <div className="relative w-full h-[460px] sm:h-[540px] rounded-3xl bg-[#080D1A] border border-cyan-500/20 overflow-hidden shadow-2xl select-none group">
      {/* ── Top Left: Curatorial Badge (Museum Luxury Theme) ── */}
      <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111625]/85 backdrop-blur-md border border-[#C5A059]/30 text-white shadow-xl">
        <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
        <span className="text-[11px] font-serif tracking-wider font-semibold text-white uppercase">
          Lion Head Sculpture
        </span>
        <span className="text-slate-500 text-xs">·</span>
        <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest font-medium">
          4K Archival Twin
        </span>
      </div>

      {/* ── Top Right: Refined Curatorial Controls (Gold & Glassmorphic Pills) ── */}
      <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-20 flex items-center gap-2 bg-[#111625]/85 backdrop-blur-md border border-[#C5A059]/25 rounded-full p-1.5 shadow-xl">
        {/* Play / Pause Rotation Button */}
        <button
          onClick={() => setIsRotating(!isRotating)}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-serif font-medium tracking-wide flex items-center gap-1.5 transition-all ${
            isRotating
              ? "bg-[#C5A059] text-[#111625] font-semibold shadow-md"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          title="Toggle Model Turntable"
        >
          {isRotating ? (
            <Pause className="w-3.5 h-3.5 fill-current" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
          <span>{isRotating ? "Auto Rotate" : "Resume"}</span>
        </button>

        {/* Wireframe Toggle Button */}
        <button
          onClick={() => setWireframe(!wireframe)}
          className={`px-3.5 py-1.5 rounded-full text-[11px] font-serif font-medium tracking-wide flex items-center gap-1.5 transition-all ${
            wireframe
              ? "bg-[#C5A059] text-[#111625] font-semibold shadow-md"
              : "text-slate-300 hover:text-white hover:bg-white/10"
          }`}
          title="Toggle Wireframe Inspection"
        >
          <Layers className="w-3.5 h-3.5" />
          <span>{wireframe ? "Wireframe" : "Solid"}</span>
        </button>

        {/* Reset Camera Button */}
        <button
          onClick={resetCamera}
          title="Reset Camera View"
          className="w-8 h-8 rounded-full text-slate-300 hover:text-[#C5A059] hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Main Canvas ── */}
      <Canvas
        camera={{ position: [0, 0, 4.0], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <color attach="background" args={["#080D1A"]} />

        {/* Ambient & Studio Museum Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 5]} intensity={3.5} color="#fff6e5" castShadow />
        <directionalLight position={[-5, 4, -4]} intensity={2.0} color="#00e5ff" />
        <directionalLight position={[0, -5, 2]} intensity={1.2} color="#ffffff" />
        <pointLight position={[0, 3, 3]} intensity={2.0} color="#ffd599" />

        <Suspense fallback={<Loader />}>
          <LionHead isRotating={isRotating} wireframe={wireframe} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          makeDefault
          enableDamping
          dampingFactor={0.08}
          target={[0, 0, 0]}
          minDistance={1.2}
          maxDistance={8}
          maxPolarAngle={Math.PI / 1.7}
        />
      </Canvas>

      {/* ── Bottom Right: Refined Curatorial Gesture Hint ── */}
      <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 pointer-events-none hidden sm:block z-20">
        <span className="text-[11px] font-serif text-slate-300 bg-[#111625]/80 backdrop-blur-md px-4 py-2 rounded-full border border-[#C5A059]/20 flex items-center gap-2 shadow-lg">
          <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Interactive 360° Orbit · Scroll to Inspect</span>
        </span>
      </div>
    </div>
  );
}

useGLTF.preload("/lion_head_4k.glb");
