import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import PlaceholderHead from "./PlaceHolderHead";

function CameraRig({ scrollProgress }) {
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    const z = 5 - scrollProgress * 3.2;
    const y = 0.3 - scrollProgress * 0.2;

    target.current.set(0, y, z);
    state.camera.position.lerp(target.current, 0.08);
    state.camera.lookAt(0, 0, 0.8);
  });

  return null;
}

function SceneContent({ progress }) {
  return (
    <>
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-3, 2, 4]} intensity={2.5} color="#8B5CF6" />
      <pointLight position={[3, 1, 4]} intensity={2.5} color="#06B6D4" />
      <spotLight position={[0, 4, 6]} angle={0.35} penumbra={1} intensity={2.5} color="#3B82F6" />

      <Sparkles count={80} scale={[8, 6, 8]} size={2} speed={0.3} />

      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.3}>
        <PlaceholderHead mouthOpen={progress} />
      </Float>

      <mesh position={[0, 0, -2]}>
        <circleGeometry args={[2.8, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.12} />
      </mesh>

      <Environment preset="city" />
      <CameraRig scrollProgress={progress} />
    </>
  );
}

function Scene3D({ inline = false }) {
  const containerRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;

      const total = rect.height - viewport;
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = total > 0 ? scrolled / total : 0;

      setProgress(Math.min(Math.max(p, 0), 1));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className={inline ? "h-full w-full relative" : "h-[180vh] relative"}>
      {inline ? (
        <Canvas shadows camera={{ position: [0, 0.3, 5], fov: 35 }} className="h-full w-full">
          <Suspense fallback={null}>
            <fog attach="fog" args={["#050816", 5, 10]} />
            <SceneContent progress={progress} />
          </Suspense>
        </Canvas>
      ) : (
        <div className="sticky top-0 h-screen">
          <Canvas shadows camera={{ position: [0, 0.3, 5], fov: 35 }}>
            <Suspense fallback={null}>
              <fog attach="fog" args={["#050816", 5, 10]} />
              <SceneContent progress={progress} />
            </Suspense>
          </Canvas>
        </div>
      )}
    </div>
  );
}

export default Scene3D;