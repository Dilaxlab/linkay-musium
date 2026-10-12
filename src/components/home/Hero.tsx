"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function FloatingArtifact3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene
    const scene = new THREE.Scene();

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 5.2;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirGold = new THREE.DirectionalLight(0xd4af37, 3);
    dirGold.position.set(4, 5, 4);
    scene.add(dirGold);

    const dirCyan = new THREE.DirectionalLight(0x00e5ff, 2.5);
    dirCyan.position.set(-4, -4, 2);
    scene.add(dirCyan);

    // 5. Procedural Geometry: Royal Torus Knot Diadem
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.35, 128, 32, 2, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
    });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    // Wireframe outer halo
    const wireGeo = new THREE.TorusKnotGeometry(1.26, 0.36, 64, 16, 2, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireKnot = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireKnot);

    // Ambient floating particles
    const partCount = 80;
    const partGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(partCount * 3);
    for (let i = 0; i < partCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    partGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const partMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(partGeo, partMat);
    scene.add(particles);

    // Mouse tilt interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);

      knot.rotation.x += 0.007;
      knot.rotation.y += 0.01;
      wireKnot.rotation.x += 0.007;
      wireKnot.rotation.y += 0.01;

      // Mouse responsive tilting
      knot.rotation.x += (mouseY * 0.5 - knot.rotation.x) * 0.02;
      knot.rotation.y += (mouseX * 0.5 - knot.rotation.y) * 0.02;

      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };
    animate();

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
      window.removeEventListener("mousemove", handleMouseMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      wireGeo.dispose();
      wireMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[420px] sm:h-[480px] lg:h-[540px] cursor-grab active:cursor-grabbing"
    />
  );
}
