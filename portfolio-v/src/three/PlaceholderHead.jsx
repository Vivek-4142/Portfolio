import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function PlaceholderHead({ mouthOpen = 0 }) {
  const group = useRef();
  const headRef = useRef();
  const jawRef = useRef();
  const hairRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.2) * 0.15;
      group.current.position.y = Math.sin(t * 0.45) * 0.08;
    }

    if (headRef.current) {
      headRef.current.rotation.x = Math.sin(t * 0.4) * 0.03;
    }

    if (hairRef.current) {
      hairRef.current.rotation.y = Math.sin(t * 0.25) * 0.1;
    }

    if (jawRef.current) {
      jawRef.current.rotation.x = mouthOpen * 0.55;
      jawRef.current.position.y = -1.05 - mouthOpen * 0.12;
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 0]}>
      <mesh ref={headRef} castShadow receiveShadow>
        <sphereGeometry args={[1.25, 80, 80]} />
        <meshPhysicalMaterial
          color="#f0c9a5"
          roughness={0.35}
          metalness={0.03}
          clearcoat={0.35}
          clearcoatRoughness={0.1}
        />
      </mesh>

      <group ref={hairRef}>
        <mesh position={[0, 0.5, 0.1]} castShadow>
          <sphereGeometry args={[1.22, 80, 80, 0, Math.PI * 2, 0, Math.PI / 1.8]} />
          <meshStandardMaterial color="#111827" roughness={0.28} metalness={0.35} />
        </mesh>
        <mesh position={[0.6, 0.55, 0.45]} rotation={[0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.85, 0.45, 0.35]} />
          <meshStandardMaterial color="#111827" roughness={0.28} metalness={0.35} />
        </mesh>
        <mesh position={[-0.6, 0.55, 0.45]} rotation={[0, -0.35, 0]} castShadow>
          <boxGeometry args={[0.85, 0.45, 0.35]} />
          <meshStandardMaterial color="#111827" roughness={0.28} metalness={0.35} />
        </mesh>
      </group>

      <mesh position={[-0.4, 0.25, 1.05]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0.4, 0.25, 1.05]}>
        <sphereGeometry args={[0.09, 32, 32]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      <mesh position={[0, -0.05, 1.1]}>
        <cylinderGeometry args={[0.035, 0.035, 0.08, 24]} />
        <meshStandardMaterial color="#d7a67b" />
      </mesh>

      <mesh position={[0, -0.42, 1.05]}>
        <sphereGeometry args={[0.22, 32, 16]} />
        <meshStandardMaterial color="#0b111c" emissive="#000000" />
      </mesh>

      <mesh position={[-1.16, 0.0, 0.15]} castShadow>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#f0c9a5" />
      </mesh>
      <mesh position={[1.16, 0.0, 0.15]} castShadow>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color="#f0c9a5" />
      </mesh>

      <mesh position={[1.16, -0.05, 0.12]} rotation={[0, 0.2, 0]}>
        <torusGeometry args={[0.08, 0.02, 16, 64]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.15} />
      </mesh>

      <group ref={jawRef} position={[0, -1.05, 0.2]}>
        <mesh castShadow>
          <sphereGeometry args={[0.72, 80, 80, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
          <meshPhysicalMaterial color="#f0c9a5" roughness={0.35} metalness={0.03} clearcoat={0.2} clearcoatRoughness={0.2} />
        </mesh>
        <mesh position={[0, 0.35, 0.72]}>
          <sphereGeometry args={[0.18, 24, 24]} />
          <meshStandardMaterial color="#0b111c" emissive="#000000" />
        </mesh>
      </group>

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.6, 0]}>
        <torusGeometry args={[1.8, 0.05, 32, 120]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" metalness={1} roughness={0.1} transparent opacity={0.55} />
      </mesh>

      <mesh position={[0, 0.45, -1.2]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#34d399" emissive="#22c55e" metalness={0.8} roughness={0.1} />
      </mesh>
    </group>
  );
}

export default PlaceholderHead;
