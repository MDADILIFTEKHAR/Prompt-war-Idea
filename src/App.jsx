import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Activity, Users, AlertTriangle, Smile, ShieldAlert, Cpu, Cloud, Database } from 'lucide-react';

import BackgroundParticles from './components/BackgroundParticles';
import StadiumSimulation from './components/StadiumSimulation';
import FloatingOrb from './components/FloatingOrb';

import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

function HeroSection() {
  return (
    <section className="hero-section" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
    <div className="container">
      <motion.div 
        className="glass-panel" 
        style={{ padding: '3rem', maxWidth: '600px', pointerEvents: 'auto' }}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', lineHeight: 1.1 }}>
          AI Crowd Intelligence System
        </h1>
        <h3 style={{ color: 'var(--neon-cyan)', marginBottom: '1.5rem', letterSpacing: '2px' }}>
          PREDICT. PREVENT. PROTECT.
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem', lineHeight: 1.6 }}>
          Next-generation antigravity smart stadium analytics. Real-time behavior tracking, spatial density mapping, and autonomous stampede prevention.
        </p>
        <button className="neon-box-glow" style={{ 
          background: 'transparent', 
          border: '1px solid var(--neon-blue)', 
          color: 'var(--neon-blue)', 
          padding: '1rem 2rem', 
          fontSize: '1.1rem', 
          fontWeight: 'bold', 
          cursor: 'pointer', 
          borderRadius: '4px',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          transition: 'all 0.3s ease'
        }}>
          Initiate Simulation System
        </button>
      </motion.div>
    </div>
  </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: <Activity size={32} color="#00f0ff" />, title: "Density Detection", desc: "Real-time spatial mapping with live heatmap generation." },
    { icon: <Users size={32} color="#b026ff" />, title: "Movement Tracking", desc: "Predictive flow analysis using vector field mechanics." },
    { icon: <AlertTriangle size={32} color="#ff3333" />, title: "Stampede Risk", desc: "Autonomous early warning pulsing indicators.", pulse: true },
    { icon: <Smile size={32} color="#0ff0fc" />, title: "Emotion Detection", desc: "Aggregated mood analytics powered by computer vision." }
  ];

  return (
    <section style={{ padding: '8rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.h2 
          className="text-gradient" 
          style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          Core Capabilities
        </motion.h2>
        
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
        >
          {features.map((f, i) => (
            <motion.div 
              key={i} 
              className={`glass-panel ${f.pulse ? 'pulsing-alert' : ''}`}
              style={{ padding: '2rem', textAlign: 'center', cursor: 'default' }}
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{f.icon}</div>
              <h3 style={{ marginBottom: '1rem', color: '#fff', fontSize: '1.2rem' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <section style={{ padding: '8rem 0', position: 'relative', zIndex: 10 }}>
    <div className="container">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <motion.div style={{ flex: 1, minWidth: '300px' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Live Spatial Telemetry</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
            Our dashboard overlays critical threshold data directly onto holographic stadium representations in zero gravity environments. Monitoring node status implicitly.
          </p>
          <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff' }}>
              <span>Sector Alpha Load</span> <span style={{ color: 'var(--neon-cyan)' }}>74%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
              <div style={{ width: '74%', height: '100%', background: 'var(--neon-cyan)', borderRadius: '4px', boxShadow: '0 0 10px var(--neon-cyan)' }}></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginTop: '1rem' }}>
              <span>Sector Omega Load</span> <span style={{ color: '#ff3333' }}>92%</span>
            </div>
            <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
              <div style={{ width: '92%', height: '100%', background: '#ff3333', borderRadius: '4px', boxShadow: '0 0 10px #ff3333' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
}

function AIChatAssistant() {
  return (
    <section style={{ padding: '8rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div 
          className="glass-panel" 
          style={{ padding: '4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          <div style={{ width: '200px', height: '200px', marginBottom: '2rem' }}>
            <Canvas camera={{ position: [0, 0, 4] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <Suspense fallback={null}>
                <FloatingOrb />
              </Suspense>
            </Canvas>
          </div>
          <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Nexus Core AI Assistant</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
            "Warning: Crowd density in Section B is reaching critical thresholds. Dispatching automated crowd control units and opening auxiliary gates now."
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ padding: '0.8rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ width: '12px', height: '12px', background: 'var(--neon-blue)', borderRadius: '50%', display: 'inline-block' }}></span> Voice active
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TechStack() {
  const stack = [
    { icon: <Cpu size={40} color="#0ff0fc" />, name: "Neural Engine" },
    { icon: <Database size={40} color="#b026ff" />, name: "Vector DB" },
    { icon: <Cloud size={40} color="#00f0ff" />, name: "Cloud Sync" },
    { icon: <ShieldAlert size={40} color="#ff3333" />, name: "Risk Auth" }
  ];

  return (
    <section style={{ padding: '6rem 0 10rem 0', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.h2 
          className="text-gradient" 
          style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '4rem' }}
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
        >
          Powering The Matrix
        </motion.h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          {stack.map((item, i) => (
            <motion.div key={i} style={{ textAlign: 'center' }} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
              <div style={{ padding: '1.5rem', background: 'rgba(10,15,30,0.6)', border: '1px solid var(--glass-border)', borderRadius: '50%', marginBottom: '1rem', display: 'inline-block' }}>
                {item.icon}
              </div>
              <div style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>{item.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{ padding: '4rem 0 8rem 0', position: 'relative', zIndex: 10, textAlign: 'center' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <button className="neon-box-glow" style={{ 
            background: 'linear-gradient(90deg, var(--neon-blue), var(--neon-purple))', 
            border: 'none', 
            color: '#fff', 
            padding: '1.5rem 4rem', 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            borderRadius: '8px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            boxShadow: '0 0 30px rgba(176, 38, 255, 0.5)'
          }}>
            Deploy Smart Stadium Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// Main App Layout
function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      {/* 3D Canvas Layer - Fixed Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
          <color attach="background" args={['#03040b']} />
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
          <pointLight position={[-10, 5, -10]} intensity={1} color="#b026ff" />
          
          <Suspense fallback={null}>
            <StadiumSimulation />
            <BackgroundParticles count={3000} />
            <Environment preset="night" />
          </Suspense>
          
          {/* Subtle slow rotation for the whole scene based on mouse could be added here, but OrbitControls with autoRotate is easier */}
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2 + 0.1} 
            minPolarAngle={Math.PI / 3}
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Canvas>
      </div>

      {/* UI Overlay Layer - Scrollable */}
      <div style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
        {/* Enable pointer events on sections that need interaction */}
        <div style={{ pointerEvents: 'auto' }}>
          <HeroSection />
          <FeaturesSection />
          <DashboardPreview />
          <AIChatAssistant />
          <TechStack />
          <CTASection />
        </div>
      </div>
    </div>
  );
}

export default App;
