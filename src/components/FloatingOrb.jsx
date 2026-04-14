import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

export default function FloatingOrb() {
  const orbRef = useRef();

  useFrame((state) => {
    if (orbRef.current) {
      orbRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <Sphere ref={orbRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color="#00f0ff"
        emissive="#00f0ff"
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}
