'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls, useGLTF, useProgress } from '@react-three/drei';
import * as THREE from 'three';

function ModelLoader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="rounded-xl border border-cyan-400/20 bg-[#080D1A]/90 px-5 py-4 text-center text-cyan-200">
        <div className="mx-auto mb-3 h-8 w-8 animate-spin rounded-full border-2 border-[#C5A059] border-t-transparent" />
        <p className="text-xs font-mono">Loading... {Math.round(progress)}%</p>
      </div>
    </Html>
  );
}

function LionHeadModel() {
  const { scene } = useGLTF('/lion_head_4k.glb');
  const [info, setInfo] = useState('');

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);

    console.log('📦 Model Size:', size.x, size.y, size.z);
    console.log('📍 Model Center:', center.x, center.y, center.z);

    setInfo(`Size: ${size.x.toFixed(2)} × ${size.y.toFixed(2)} × ${size.z.toFixed(2)}`);

    // Auto-center
    scene.position.sub(center);

    // Auto-scale to 2 units
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 2 / maxDim;
      scene.scale.setScalar(scale);
    }
  }, [scene]);

  return (
    <>
      <primitive object={scene} />
      <Html position={[0, -2, 0]} center>
        <div className="whitespace-nowrap rounded bg-black/80 px-2 py-1 text-[10px] font-mono text-cyan-300">
          {info}
        </div>
      </Html>
    </>
  );
}

export default function PatentModel3D() {
  return (
    <div className="relative h-[460px] w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#080D1A] sm:h-[540px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }} dpr={[1, 2]}>
        <color attach="background" args={['#0a0f1c']} />

        {/* Super bright lighting */}
        <ambientLight intensity={3} />
        <hemisphereLight args={['#ffffff', '#ffffff', 3]} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
        <directionalLight position={[-5, -5, -5]} intensity={3} />
        <pointLight position={[0, 0, 5]} intensity={3} />

        {/* Grid to see orientation */}
        <gridHelper args={[10, 20, '#22d3ee', '#334155']} />

        <Suspense fallback={<ModelLoader />}>
          <LionHeadModel />
        </Suspense>

        <OrbitControls makeDefault enablePan minDistance={0.5} maxDistance={50} />
      </Canvas>

      <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-[#080D1A]/75 px-3 py-2 text-[10px] font-mono uppercase text-cyan-200">
        Debug — Grid ON
      </div>
    </div>
  );
}

useGLTF.preload('/lion_head_4k.glb');
