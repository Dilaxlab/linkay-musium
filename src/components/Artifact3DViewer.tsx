"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RotateCw, Pause, Play, Eye, Sparkles, RefreshCw, Layers } from "lucide-react";

interface Artifact3DViewerProps {
  artifact: {
    id: number;
    name: string;
    era: string;
    type: string;
    polys: string;
    status: string;
  };
}

export default function Artifact3DViewer({ artifact }: Artifact3DViewerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [lightingPreset, setLightingPreset] = useState<"gold" | "sapphire" | "cyber">("gold");
  const [fps, setFps] = useState(60);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const lightsRef = useRef<{
    ambient: THREE.AmbientLight;
    dir1: THREE.DirectionalLight;
    dir2: THREE.DirectionalLight;
    point: THREE.PointLight;
  } | null>(null);

  const isRotatingRef = useRef(isRotating);
  isRotatingRef.current = isRotating;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0xd4a017, 2.5);
    dir1.position.set(5, 8, 5);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x0a1f6e, 2.0);
    dir2.position.set(-5, -5, -3);
    scene.add(dir2);

    const point = new THREE.PointLight(0xffd700, 3, 20);
    point.position.set(0, 0, 4);
    scene.add(point);

    lightsRef.current = { ambient, dir1, dir2, point };

    // 5. Ambient Dust Particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 16;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xd4a017,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Artifact Group
    const artifactGroup = new THREE.Group();
    scene.add(artifactGroup);
    meshGroupRef.current = artifactGroup;

    // 7. Mouse interaction / Orbit drag
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshGroupRef.current) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;

      meshGroupRef.current.rotation.y += deltaX * 0.008;
      meshGroupRef.current.rotation.x += deltaY * 0.008;

      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(3.5, Math.min(12, camera.position.z + e.deltaY * 0.005));
    };

    const dom = renderer.domElement;
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    dom.addEventListener("wheel", onWheel, { passive: false });

    // 8. Animation Loop
    let animId: number;
    let lastTime = performance.now();
    let frameCount = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      // FPS calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }

      if (isRotatingRef.current && meshGroupRef.current && !isDragging) {
        meshGroupRef.current.rotation.y += 0.006;
      }

      // Gentle floating oscillation
      if (meshGroupRef.current) {
        meshGroupRef.current.position.y = Math.sin(now * 0.0015) * 0.12;
      }

      // Rotate particles slowly
      particles.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      dom.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      dom.removeEventListener("wheel", onWheel);
      if (container.contains(dom)) {
        container.removeChild(dom);
      }
      renderer.dispose();
    };
  }, []);

  // Update Geometry when selected artifact or wireframe changes
  useEffect(() => {
    const group = meshGroupRef.current;
    if (!group) return;

    // Clear previous children
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
    }

    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4a017,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: wireframe,
    });

    const bronzeMaterial = new THREE.MeshStandardMaterial({
      color: 0xb87333,
      metalness: 0.75,
      roughness: 0.35,
      wireframe: wireframe,
    });

    const sapphireMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      metalness: 0.6,
      roughness: 0.2,
      wireframe: wireframe,
    });

    switch (artifact.id) {
      case 1: {
        // Pharaoh's Crown
        const crownBase = new THREE.Mesh(
          new THREE.CylinderGeometry(1.2, 0.9, 1.6, 32),
          goldMaterial
        );
        const knot = new THREE.Mesh(
          new THREE.TorusKnotGeometry(0.8, 0.22, 100, 16),
          goldMaterial
        );
        knot.position.y = 1.0;
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(1.3, 0.08, 16, 64),
          bronzeMaterial
        );
        ring.position.y = -0.5;
        group.add(crownBase, knot, ring);
        break;
      }
      case 2: {
        // Benin Bronze Oba Plaque
        const plaque = new THREE.Mesh(
          new THREE.BoxGeometry(2.2, 3.0, 0.3),
          bronzeMaterial
        );
        const emblem = new THREE.Mesh(
          new THREE.CylinderGeometry(0.7, 0.7, 0.4, 32),
          goldMaterial
        );
        emblem.rotation.x = Math.PI / 2;
        emblem.position.z = 0.15;
        const bezel = new THREE.Mesh(
          new THREE.TorusGeometry(0.9, 0.07, 16, 48),
          goldMaterial
        );
        bezel.position.z = 0.2;
        group.add(plaque, emblem, bezel);
        break;
      }
      case 3: {
        // Axum Obelisk Fragment
        const column = new THREE.Mesh(
          new THREE.CylinderGeometry(0.5, 0.9, 3.2, 4),
          goldMaterial
        );
        const cap = new THREE.Mesh(
          new THREE.ConeGeometry(0.5, 0.8, 4),
          goldMaterial
        );
        cap.position.y = 2.0;
        const rings: THREE.Mesh[] = [];
        for (let i = -1; i <= 1; i++) {
          const r = new THREE.Mesh(
            new THREE.BoxGeometry(1.1, 0.08, 1.1),
            bronzeMaterial
          );
          r.position.y = i * 0.7;
          rings.push(r);
        }
        group.add(column, cap, ...rings);
        break;
      }
      case 4: {
        // Mali Empire Scribal Manuscript
        const page1 = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 1.8, 0.08),
          bronzeMaterial
        );
        page1.rotation.y = -0.15;
        const page2 = new THREE.Mesh(
          new THREE.BoxGeometry(2.4, 1.8, 0.08),
          goldMaterial
        );
        page2.rotation.y = 0.15;
        const seal = new THREE.Mesh(
          new THREE.SphereGeometry(0.3, 16, 16),
          sapphireMaterial
        );
        seal.position.set(0, -0.6, 0.2);
        group.add(page1, page2, seal);
        break;
      }
      case 5: {
        // Great Zimbabwe Bird Figurine
        const body = new THREE.Mesh(
          new THREE.DodecahedronGeometry(1.3, 1),
          bronzeMaterial
        );
        const head = new THREE.Mesh(
          new THREE.ConeGeometry(0.6, 1.4, 8),
          goldMaterial
        );
        head.position.set(0.6, 1.3, 0);
        head.rotation.z = -0.5;
        const pedestal = new THREE.Mesh(
          new THREE.CylinderGeometry(1.0, 1.2, 0.5, 8),
          goldMaterial
        );
        pedestal.position.y = -1.3;
        group.add(body, head, pedestal);
        break;
      }
      case 6: {
        // Nubian Kandake Crown
        const crownBand = new THREE.Mesh(
          new THREE.TorusGeometry(1.4, 0.18, 24, 64),
          goldMaterial
        );
        const diadem1 = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.4),
          sapphireMaterial
        );
        diadem1.position.set(0, 1.4, 0);
        const diadem2 = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.3),
          goldMaterial
        );
        diadem2.position.set(-1.0, 1.0, 0);
        const diadem3 = new THREE.Mesh(
          new THREE.IcosahedronGeometry(0.3),
          goldMaterial
        );
        diadem3.position.set(1.0, 1.0, 0);
        group.add(crownBand, diadem1, diadem2, diadem3);
        break;
      }
      default: {
        const defaultMesh = new THREE.Mesh(
          new THREE.TorusKnotGeometry(1.0, 0.3, 100, 16),
          goldMaterial
        );
        group.add(defaultMesh);
      }
    }

    // Reset rotation smoothly
    group.rotation.set(0, 0, 0);
  }, [artifact.id, wireframe]);

  // Update lighting preset
  useEffect(() => {
    const lights = lightsRef.current;
    if (!lights) return;

    if (lightingPreset === "gold") {
      lights.dir1.color.setHex(0xd4a017);
      lights.dir2.color.setHex(0xb87333);
      lights.point.color.setHex(0xffd700);
    } else if (lightingPreset === "sapphire") {
      lights.dir1.color.setHex(0x3b82f6);
      lights.dir2.color.setHex(0x1d4ed8);
      lights.point.color.setHex(0x60a5fa);
    } else {
      lights.dir1.color.setHex(0x10b981);
      lights.dir2.color.setHex(0x8b5cf6);
      lights.point.color.setHex(0xffffff);
    }
  }, [lightingPreset]);

  const resetCamera = () => {
    if (meshGroupRef.current) {
      meshGroupRef.current.rotation.set(0, 0, 0);
    }
  };

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden glass-card border border-purple-500/30">
      {/* 3D WebGL Canvas Host */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing bg-gradient-to-b from-dark-bg/90 via-dark-surface/90 to-dark-bg/90"
      />

      {/* Top Overlays: Live Badge + Telemetry */}
      <div className="absolute top-4 left-4 flex items-center gap-2 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-bg/80 backdrop-blur-md border border-purple-500/30 text-xs font-mono text-purple-300">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>WebGL 2.0 · Three.js</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-bg/80 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-400">
          <span>{fps} FPS</span>
        </div>
      </div>

      {/* Top Right: Lighting Palette Selector */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-dark-bg/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
        {(["gold", "sapphire", "cyber"] as const).map((preset) => (
          <button
            key={preset}
            onClick={() => setLightingPreset(preset)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-mono capitalize transition-all ${
              lightingPreset === preset
                ? "bg-purple-500/30 text-purple-200 border border-purple-500/40"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {preset}
          </button>
        ))}
      </div>

      {/* Bottom Center: Interactive Controls Bar */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-dark-bg/85 backdrop-blur-md p-1.5 rounded-2xl border border-white/15 shadow-2xl">
        <button
          onClick={() => setIsRotating(!isRotating)}
          title={isRotating ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
          className={`p-2 rounded-xl text-xs flex items-center gap-1.5 transition-all ${
            isRotating ? "bg-purple-500/20 text-purple-300 border border-purple-500/40" : "text-gray-400 hover:text-white"
          }`}
        >
          {isRotating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span className="hidden md:inline text-xs font-mono">{isRotating ? "Rotate" : "Paused"}</span>
        </button>

        <button
          onClick={() => setWireframe(!wireframe)}
          title="Toggle Wireframe Shading"
          className={`p-2 rounded-xl text-xs flex items-center gap-1.5 transition-all ${
            wireframe ? "bg-cyber-gold/20 text-cyber-gold border border-cyber-gold/40" : "text-gray-400 hover:text-white"
          }`}
        >
          <Layers className="w-4 h-4" />
          <span className="hidden md:inline text-xs font-mono">{wireframe ? "Wireframe" : "Shaded"}</span>
        </button>

        <button
          onClick={resetCamera}
          title="Reset Orientation"
          className="p-2 rounded-xl text-xs flex items-center gap-1.5 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <RefreshCw className="w-4 h-4" />
          <span className="hidden md:inline text-xs font-mono">Reset</span>
        </button>
      </div>

      {/* Artifact Info Badge (Bottom Left) */}
      <div className="absolute bottom-4 left-4 pointer-events-none hidden lg:block">
        <div className="bg-dark-bg/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs">
          <div className="font-bold text-white">{artifact.name}</div>
          <div className="text-gray-400 font-mono text-[11px] mt-0.5">
            {artifact.era} · {artifact.polys} Polygons
          </div>
        </div>
      </div>

      {/* Hint (Bottom Right) */}
      <div className="absolute bottom-4 right-4 pointer-events-none hidden sm:block">
        <span className="text-[11px] text-gray-500 font-mono bg-dark-bg/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
          Drag to Orbit · Scroll to Zoom
        </span>
      </div>
    </div>
  );
}
