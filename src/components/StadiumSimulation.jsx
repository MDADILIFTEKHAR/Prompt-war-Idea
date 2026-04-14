import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Grid, Float, Sphere, Cylinder, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Represents moving crowd elements using instanced rendering or simple particle points
function CrowdHeatmap() {
  const pointsRef = useRef();

  // Create random small points moving around the center
  const particleCount = 1000;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for(let i=0; i<particleCount; i++) {
    // Distribute in a ring shape
    const radius = 3 + Math.random() * 4;
    const angle = Math.random() * Math.PI * 2;
    positions[i*3] = Math.cos(angle) * radius;
    positions[i*3+1] = (Math.random() - 0.5) * 0.5; // slight height variation
    positions[i*3+2] = Math.sin(angle) * radius;
    
    // Density heatmap colors: green to red mapping
    const intensity = Math.random();
    const color = new THREE.Color();
    if(intensity > 0.8) {
      color.setHex(0xff3333); // Red (high density risk)
    } else if (intensity > 0.5) {
      color.setHex(0xffaa00); // Yellow/Orange
    } else {
      color.setHex(0x00f0ff); // Cyan (Safe)
    }
    
    colors[i*3] = color.r;
    colors[i*3+1] = color.g;
    colors[i*3+2] = color.b;
  }

  useFrame((state) => {
    if(pointsRef.current) {
      // Swirling effect
      pointsRef.current.rotation.y += 0.005;
      
      // Pulse scale slightly
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      pointsRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.9} blending={THREE.AdditiveBlending} />
    </points>
  );
}

export default function StadiumSimulation() {
  const groupRef = useRef();
  
  useFrame((state) => {
    if(groupRef.current) {
      // Gentle floating and rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Stadium Base */}
      <Cylinder args={[8, 7.5, 0.5, 64]} position={[0, -0.5, 0]} receiveShadow>
        <meshStandardMaterial color="#0a192f" transparent opacity={0.6} wireframe />
      </Cylinder>
      
      {/* Stadium Outer Ring (Glowing) */}
      <Cylinder args={[8.2, 8.2, 0.8, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.15} side={THREE.DoubleSide} />
      </Cylinder>
      
      {/* Holographic Inner Ring */}
      <Cylinder args={[7, 7, 1.5, 64]} position={[0, 0.5, 0]}>
        <meshBasicMaterial color="#b026ff" transparent opacity={0.1} side={THREE.DoubleSide} blending={THREE.AdditiveBlending} />
      </Cylinder>

      {/* Center "Pitch" or Focal Area */}
      <Cylinder args={[2.5, 2.5, 0.1, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#0ff0fc" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </Cylinder>
      
      <Grid infiniteGrid fadeDistance={20} sectionColor="#0ff0fc" cellColor="#0a192f" position={[0, -0.2, 0]} />
      
      <CrowdHeatmap />
    </group>
  );
}
