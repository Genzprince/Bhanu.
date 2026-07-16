import React, { useState, useEffect } from 'react';
import { Project, ProjectImages } from '../types';
import BeforeAfterSlider from './BeforeAfterSlider';
import { ArrowLeft, Cpu, ShieldCheck, Palette, Clock, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  // Preset comparison choices
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const currentPreset = project.comparisonOptions[activePresetIndex] || project.comparisonOptions[0];

  const leftKey = currentPreset.left.key;
  const rightKey = currentPreset.right.key;

  const leftLabel = currentPreset.left.label;
  const rightLabel = currentPreset.right.label;

  const leftImage = project.images[leftKey];
  const rightImage = project.images[rightKey];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="container mx-auto px-4 md:px-8 py-12 text-zinc-100"
    >
      {/* High-precision viewport scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-zinc-950/40 z-[100] pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-accent-orange/40 via-accent-orange to-accent-orange shadow-[0_0_12px_rgba(242,125,38,0.7)] transition-all duration-75 ease-out relative"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Precision laser leading target point */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,1),0_0_4px_rgba(242,125,38,1)]" />
        </div>
      </div>
      {/* Back button */}
      <motion.button
        id="back-to-portfolio-btn"
        onClick={onBack}
        className="group flex items-center gap-2 text-zinc-400 hover:text-accent-orange font-mono text-xs uppercase tracking-wider mb-8 transition-colors duration-200 cursor-pointer"
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Back to Portfolio
      </motion.button>

      {/* Main Grid: Info + Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Project Info */}
        <div className="lg:col-span-4 space-y-8">
          <div>
            <div className="inline-block text-accent-orange font-mono text-xs uppercase tracking-widest mb-2 font-medium">
              {project.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-sans font-medium tracking-tight text-white">
              {project.title}
            </h1>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed font-sans">
            {project.longDescription}
          </p>

          {/* Technical Specs Bento Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card border border-white/5 rounded-sm p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Cpu className="w-4 h-4 text-accent-orange/80" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Software</span>
              </div>
              <span className="text-xs text-zinc-300 font-medium">
                {project.software.join(', ')}
              </span>
            </div>

            <div className="glass-card border border-white/5 rounded-sm p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Layers className="w-4 h-4 text-accent-orange/80" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Polygons</span>
              </div>
              <span className="text-xs text-zinc-300 font-medium font-mono">
                {project.polygons}
              </span>
            </div>

            <div className="glass-card border border-white/5 rounded-sm p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Palette className="w-4 h-4 text-accent-orange/80" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Texture Size</span>
              </div>
              <span className="text-xs text-zinc-300 font-medium font-mono">
                {project.textureSize}
              </span>
            </div>

            <div className="glass-card border border-white/5 rounded-sm p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Clock className="w-4 h-4 text-accent-orange/80" />
                <span className="font-mono text-[10px] uppercase tracking-wider">Time Taken</span>
              </div>
              <span className="text-xs text-zinc-300 font-medium">
                {project.timeTaken}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Comparison Slider */}
        <div className="lg:col-span-8 space-y-6">
          <BeforeAfterSlider
            leftImage={leftImage}
            rightImage={rightImage}
            leftLabel={leftLabel}
            rightLabel={rightLabel}
          />

          {/* Preset comparison selectors */}
          <div className="space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
              Interactive Comparison States
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.comparisonOptions.map((option, idx) => {
                const isActive = idx === activePresetIndex;
                const thumbImage = project.images[option.right.key];

                return (
                  <motion.button
                    key={idx}
                    onClick={() => setActivePresetIndex(idx)}
                    className={`relative rounded-sm overflow-hidden border p-1 text-left transition-all duration-300 cursor-pointer group ${
                      isActive
                        ? 'border-accent-orange bg-zinc-900/80 ring-1 ring-accent-orange/30'
                        : 'glass-card border-white/5 bg-zinc-950 hover:border-white/20'
                    }`}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <div className="aspect-video w-full rounded-sm overflow-hidden bg-zinc-900 mb-1.5">
                      <img
                        src={thumbImage}
                        alt={option.right.label}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="px-1 text-[10px] font-mono text-zinc-400 font-medium truncate">
                      {option.left.label} → {option.right.label}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Grid: Multiple Angles / Detail Showcase */}
      <div className="mt-20 space-y-10 border-t border-zinc-900 pt-16">
        <div>
          <span className="text-accent-orange font-mono text-xs uppercase tracking-widest block mb-2 font-medium">
            Gallery Showcase
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-white">
            High Fidelity Visual Renders
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mt-2 leading-relaxed">
            Detailed views highlighting model complexity, mesh optimization, wireframe edge loops, and procedural surface material texturing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Wireframe Detail Card */}
          <div className="group glass-card hover:glass-card-hover border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
              <img
                src={project.images.wireframe}
                alt="Topology wireframe"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <h4 className="text-sm font-sans font-medium text-white mb-1">Mesh Topology & Wireframe</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Hand-optimized topology displaying highly refined quad layouts and structural loop flows.
              </p>
            </div>
          </div>

          {/* Clay Material Render Card */}
          <div className="group glass-card hover:glass-card-hover border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
              <img
                src={project.images.clay}
                alt="Clay model"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <h4 className="text-sm font-sans font-medium text-white mb-1">Matte Clay Sculpt</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Neutral ambient occlusion render showcasing volumetric scale, curves, and clean surface transitions.
              </p>
            </div>
          </div>

          {/* Closeup Detail Card */}
          <div className="group glass-card hover:glass-card-hover border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-all duration-300 md:col-span-2 lg:col-span-1">
            <div className="aspect-[4/3] overflow-hidden bg-zinc-900">
              <img
                src={project.images.details}
                alt="Close-up detail render"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5">
              <h4 className="text-sm font-sans font-medium text-white mb-1">Material Details & Decals</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Macro-lens perspective highlighting custom physical imperfections, surface dust, and layered PBR decals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
