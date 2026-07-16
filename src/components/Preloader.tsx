import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu, Layers, Box, Compass, RefreshCw } from 'lucide-react';

interface PreloaderProps {
  key?: string;
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "INITIALIZING 3D VERTEX MATRIX...",
    "RESOLVING SUB-D HARD-SURFACE MESHES...",
    "COMPILING VOLUMETRIC RENDER ENGINE...",
    "LOADING LIGHTSTAGE & UDIM TEXELS...",
    "FINISHING VIEWPORT COMPILING..."
  ];

  useEffect(() => {
    // Progress counter
    const duration = 1000; // 1.0 second total for fast loading page
    const intervalTime = 20;
    const totalSteps = duration / intervalTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const percent = Math.min(Math.round((stepCount / totalSteps) * 100), 100);
      setProgress(percent);

      // Transition step text based on progress thresholds
      if (percent < 22) setCurrentStep(0);
      else if (percent < 45) setCurrentStep(1);
      else if (percent < 68) setCurrentStep(2);
      else if (percent < 90) setCurrentStep(3);
      else setCurrentStep(4);

      if (stepCount >= totalSteps) {
        clearInterval(timer);
        // Wait another 300ms for visual hold before completing
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      id="preloader-overlay"
      className="fixed inset-0 bg-[#060608] z-[9999] flex flex-col items-center justify-center overflow-hidden select-none"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      {/* CAD Grid Backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242,125,38,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242,125,38,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Decorative Outer Aiming Brackets (Luxury Viewport Look) */}
      <div className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-zinc-800/60 pointer-events-none" />
      <div className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-zinc-800/60 pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-zinc-800/60 pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-zinc-800/60 pointer-events-none" />

      {/* Center 3D CAD Wireframe Construct */}
      <div className="relative w-72 h-72 flex items-center justify-center">
        
        {/* Ambient Orange Glow behind the 3D model */}
        <div className="absolute w-40 h-40 bg-accent-orange/10 rounded-full filter blur-[60px] animate-pulse" />

        {/* HUD Concentric Tech Ring 1 (Dashed Outer - slow clockwise) */}
        <motion.div 
          className="absolute inset-0 rounded-full border border-dashed border-zinc-800/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* HUD Concentric Tech Ring 2 (Finer, Solid with gaps - medium counter-clockwise) */}
        <motion.div 
          className="absolute w-64 h-64 rounded-full border-2 border-zinc-800/30 border-t-accent-orange/40 border-b-accent-orange/40"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* 3D Wireframe Assembly SVG Animation */}
        <div className="absolute w-40 h-40 flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-400 drop-shadow-[0_0_8px_rgba(242,125,38,0.15)]">
            {/* Animated Rotating 3D Isometric Wireframe Cube */}
            <motion.g
              animate={{ 
                rotateY: [0, 360],
                rotateX: [15, 30, 15],
                y: [-3, 3, -3]
              }}
              transition={{ 
                rotateY: { duration: 10, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformOrigin: "50px 50px" }}
            >
              {/* Outer Bounding Vertices */}
              {/* Top Face */}
              <motion.polygon 
                points="50,22 80,36 50,50 20,36" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                className="text-accent-orange/80"
                initial={{ strokeDasharray: "200", strokeDashoffset: "200" }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Vertical Pillars */}
              <motion.line x1="20" y1="36" x2="20" y2="64" stroke="currentColor" strokeWidth="0.8" className="text-zinc-600" />
              <motion.line x1="80" y1="36" x2="80" y2="64" stroke="currentColor" strokeWidth="0.8" className="text-zinc-600" />
              <motion.line x1="50" y1="50" x2="50" y2="78" stroke="currentColor" strokeWidth="0.8" className="text-accent-orange/90" />
              {/* Bottom Face */}
              <motion.polygon 
                points="50,50 80,64 50,78 20,64" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.8" 
                className="text-zinc-700" 
              />
              
              {/* Inner floating topological wireframe core (Octahedron / Star) */}
              <motion.g
                animate={{ scale: [0.85, 1.05, 0.85], rotateY: [360, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: "50px 50px" }}
              >
                <polygon points="50,30 68,50 50,70 32,50" fill="none" stroke="rgba(242,125,38,0.6)" strokeWidth="1" />
                <line x1="50" y1="30" x2="50" y2="70" stroke="rgba(242,125,38,0.4)" strokeWidth="0.7" />
                <line x1="32" y1="50" x2="68" y2="50" stroke="rgba(242,125,38,0.4)" strokeWidth="0.7" />
              </motion.g>

              {/* Grid Plane Points */}
              <circle cx="50" cy="22" r="1.5" className="fill-accent-orange" />
              <circle cx="80" cy="36" r="1.5" className="fill-zinc-400" />
              <circle cx="50" cy="50" r="1.5" className="fill-accent-orange" />
              <circle cx="20" cy="36" r="1.5" className="fill-zinc-400" />
              <circle cx="20" cy="64" r="1.5" className="fill-zinc-600" />
              <circle cx="80" cy="64" r="1.5" className="fill-zinc-600" />
              <circle cx="50" cy="78" r="1.5" className="fill-accent-orange" />
            </motion.g>
          </svg>
        </div>

        {/* Floating Core Percentage Tracker */}
        <div className="absolute flex flex-col items-center">
          <motion.div 
            className="text-[34px] font-bold text-white font-mono tracking-tighter"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {progress}<span className="text-accent-orange text-lg">%</span>
          </motion.div>
        </div>
      </div>

      {/* Loading Progress & Steps info */}
      <div className="mt-6 flex flex-col items-center max-w-sm w-full px-8 text-center relative z-10">
        
        {/* Dynamic Log Line with fine details */}
        <div className="h-6 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentStep}
              className="text-[10px] font-mono tracking-[0.2em] text-zinc-400 uppercase font-medium flex items-center gap-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
              {steps[currentStep]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Luxury Linear Loading Bar */}
        <div className="w-56 h-[3px] bg-zinc-950 border border-zinc-900 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            className="h-full bg-gradient-to-r from-accent-orange/70 via-accent-orange to-accent-orange/70 shadow-[0_0_8px_rgba(242,125,38,0.7)]"
            style={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Secondary CAD Workspace Subtitles */}
        <div className="mt-8 flex items-center gap-6 text-[8px] font-mono text-zinc-600 tracking-widest uppercase">
          <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3 text-zinc-700" /> GPU_RENDER_OK</span>
          <span className="flex items-center gap-1.5"><Layers className="w-3 h-3 text-zinc-700" /> TOPOLOGY_SUBD_4</span>
        </div>
      </div>
    </motion.div>
  );
}
