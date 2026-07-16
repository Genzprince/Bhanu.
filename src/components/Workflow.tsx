import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ToolRole {
  name: string;
  role: string;
}

interface WorkflowStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tools: ToolRole[];
}

interface ToolData {
  id: string;
  name: string;
  badge: string;
  iconType: 'blender' | 'substance' | 'marmoset' | 'photoshop' | 'aftereffects' | 'unreal';
}

const STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'Deconstruction & Blueprint Analysis',
    subtitle: 'Research & Conceptual Pre-Production',
    description: 'Analyzing high-fidelity schematic blueprints, physical reference specimens, and surface breakdown studies to map out clean, logically sound polygon flows before production.',
    tools: [
      { name: 'Photoshop', role: 'Reference collages, scale alignment, and alpha stencil creation.' }
    ]
  },
  {
    number: '02',
    title: 'High-Fidelity Polygon Modeling',
    subtitle: 'Sub-D & Hard-Surface Sculpting',
    description: 'Building production-ready hard-surface geometries. Focus is placed on mathematically clean edge loops, optimized low-poly retopology, and seamless shading transitions on curved bevels.',
    tools: [
      { name: 'Blender', role: 'Subdivision-surface modeling, edge weight control, and retopology.' }
    ]
  },
  {
    number: '03',
    title: 'Optimized UDIM Surfacing',
    subtitle: 'Mathematical Projection & Layouts',
    description: 'Generating highly structured UV maps using modular UDIM layouts. This ensures perfectly uniform pixel density (Texel Density), minimal stretch deformation, and hidden seams.',
    tools: [
      { name: 'Blender', role: 'Seam placement, automated unfolding, and texel density planning.' }
    ]
  },
  {
    number: '04',
    title: 'PBR Materials & Surface Weathering',
    subtitle: 'Procedural Painting & Aging Engine',
    description: 'Baking high-accuracy mesh maps (Curvature, Normal, AO) followed by hand-crafted multi-layered material painting to capture natural dust settling, micro-scratches, and realistic oxidation.',
    tools: [
      { name: 'Substance Painter', role: 'Physically Based Rendering (PBR) multi-layered material painting and map baking.' }
    ]
  },
  {
    number: '05',
    title: 'Cinematic Atmosphere & Lighting',
    subtitle: 'Lookdev & Volumetric Compositions',
    description: 'Configuring lighting schemes based on classical photography principles. Employs advanced volumetric fogging, custom HDRI reflection coordinates, and high-frequency secondary rim highlights.',
    tools: [
      { name: 'Blender', role: 'Viewport shader alignment and basic lighting blueprints.' },
      { name: 'Marmoset Toolbag', role: 'Real-time physical lighting setups and reflection testing.' },
      { name: 'Unreal Engine', role: 'Lumen global illumination and dynamic volumetric fog compositions.' }
    ]
  },
  {
    number: '06',
    title: 'Production-Grade Rendering',
    subtitle: 'Spectral Calculations & Sampling',
    description: 'Computing ray-traced image sequences with highly refined sample counts. Configures Cryptomatte layers, depth maps, and sub-surface ray scatter to preserve extreme surface detail.',
    tools: [
      { name: 'Blender', role: 'Cycles path-tracing engine render outputs.' },
      { name: 'Marmoset Toolbag', role: 'Ultra-fast, high-fidelity real-time presentation renders.' },
      { name: 'Unreal Engine', role: 'Movie Render Queue with high-fidelity anti-aliasing.' }
    ]
  },
  {
    number: '07',
    title: 'Artistic Post-Production & Color Mastery',
    subtitle: 'Compositing, Grading & Polish',
    description: 'Assembling render passes to execute professional color grading, lens distortion modeling, micro-grain overlays, and visual balancing for billboard or film presentation standards.',
    tools: [
      { name: 'Photoshop', role: 'Final still image color balancing and decals integration.' },
      { name: 'After Effects', role: 'Video motion graphics, pass compositing, and breakdown reel post-processing.' }
    ]
  }
];

const ALL_TOOLS: ToolData[] = [
  { id: 'Blender', name: 'BLENDER', badge: 'SUB-D MODELING / CYCLES RENDER', iconType: 'blender' },
  { id: 'Substance Painter', name: 'SUBSTANCE PAINTER', badge: 'PHYSICAL PBR TEXTURING', iconType: 'substance' },
  { id: 'Marmoset Toolbag', name: 'MARMOSET TOOLBAG', badge: 'LOOKDEV & LIGHTING BAKES', iconType: 'marmoset' },
  { id: 'Photoshop', name: 'PHOTOSHOP', badge: 'COMPOSITING & DECALS DESIGN', iconType: 'photoshop' },
  { id: 'After Effects', name: 'AFTER EFFECTS', badge: 'MOTION GRAPHICS & VIDEO VFX', iconType: 'aftereffects' },
  { id: 'Unreal Engine', name: 'UNREAL ENGINE', badge: 'VIRTUAL ENVIRONMENT DESIGN', iconType: 'unreal' }
];

function SoftwareIcon({ iconType, className = "w-6 h-6" }: { iconType: string; className?: string }) {
  if (iconType === 'blender') {
    return (
      <svg className={`${className} text-[#EA7600]`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm3.8 6a2.2 2.2 0 1 1-2.2 2.2c0-1.2 1-2.2 2.2-2.2zM12 18.2c-3.4 0-6.2-2.8-6.2-6.2 0-3.4 2.8-6.2 6.2-6.2a6.2 6.2 0 0 1 5.4 3.1l-2.2 1.3A3.7 3.7 0 0 0 12 8.3a3.7 3.7 0 1 0 3.1 5.7l2.2 1.3a6.2 6.2 0 0 1-5.3 2.9z" />
      </svg>
    );
  }
  if (iconType === 'substance') {
    return (
      <div className={`${className} rounded bg-[#E30613]/10 border border-[#E30613]/30 flex items-center justify-center text-[#E30613] font-mono font-bold text-[10px]`}>
        Sp
      </div>
    );
  }
  if (iconType === 'marmoset') {
    return (
      <svg className={`${className} text-[#F27D26]`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
        <line x1="12" y1="22" x2="12" y2="12" />
        <line x1="12" y1="12" x2="22" y2="8.5" />
        <line x1="12" y1="12" x2="2" y2="8.5" />
      </svg>
    );
  }
  if (iconType === 'photoshop') {
    return (
      <div className={`${className} rounded bg-[#001E36] border border-[#00C8FF]/30 flex items-center justify-center text-[#00C8FF] font-sans text-[10px] font-black`}>
        Ps
      </div>
    );
  }
  if (iconType === 'aftereffects') {
    return (
      <div className={`${className} rounded bg-[#1D002C] border border-[#D12BFF]/30 flex items-center justify-center text-[#D12BFF] font-sans text-[10px] font-black`}>
        Ae
      </div>
    );
  }
  if (iconType === 'unreal') {
    return (
      <div className={`${className} rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white font-sans text-[11px] font-extrabold italic`}>
        U
      </div>
    );
  }
  return null;
}

export default function Workflow() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);

  const displayIndex = hoveredStepIndex !== null ? hoveredStepIndex : activeStepIndex;
  const currentStep = STEPS[displayIndex];

  return (
    <div className="w-full space-y-12">
      {/* Editorial Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Side: Minimalist Vertical Step Rail (lg:col-span-5) */}
        <div className="lg:col-span-5 space-y-2 relative">
          {/* Faint vertical connector line */}
          <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-zinc-900 pointer-events-none" />

          {STEPS.map((step, idx) => {
            const isSelected = displayIndex === idx;
            const isSavedActive = activeStepIndex === idx;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setHoveredStepIndex(idx)}
                onMouseLeave={() => setHoveredStepIndex(null)}
                className="w-full text-left py-4 px-3 flex items-start gap-5 group cursor-pointer transition-all duration-300 rounded-lg relative"
              >
                {/* Visual Connector Dot */}
                <div className="relative z-10 flex items-center justify-center shrink-0 mt-1">
                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 bg-[#070707] ${
                      isSelected
                        ? 'border-accent-orange text-accent-orange scale-110 shadow-[0_0_8px_rgba(242,125,38,0.2)]'
                        : isSavedActive
                        ? 'border-accent-orange/60 text-accent-orange/70'
                        : 'border-zinc-800 text-zinc-600 group-hover:border-zinc-700 group-hover:text-zinc-400'
                    }`}
                  >
                    <span className="font-mono text-[9px] font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Step Metadata & Typography */}
                <div className="min-w-0 flex-1">
                  <span
                    className={`text-[9px] font-mono tracking-widest uppercase font-bold block mb-1.5 transition-colors duration-300 ${
                      isSelected ? 'text-accent-orange' : 'text-zinc-600'
                    }`}
                  >
                    {step.subtitle}
                  </span>
                  <h3
                    className={`font-sans font-extrabold text-sm md:text-base tracking-wide transition-colors duration-300 ${
                      isSelected ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Small indicator caret */}
                <div className={`mt-1.5 shrink-0 transition-all duration-300 ${isSelected ? 'opacity-100 translate-x-0 text-accent-orange' : 'opacity-0 -translate-x-1'}`}>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Clean, High-Contrast Stage details (lg:col-span-7) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.number}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-8 bg-[#0A0A0A] border border-zinc-900/60 p-8 md:p-10 rounded-2xl relative"
            >
              {/* Large structural number underlay */}
              <div className="absolute top-4 right-8 font-mono text-8xl font-black text-zinc-900/30 select-none tracking-tighter">
                {currentStep.number}
              </div>

              {/* Sub-label */}
              <div className="space-y-1.5 relative z-10">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-accent-orange/10 border border-accent-orange/20 text-[9px] font-mono font-bold text-accent-orange uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5" /> PHASE STAGE {currentStep.number}
                </span>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] pt-1">
                  {currentStep.subtitle}
                </p>
              </div>

              {/* Title & Description */}
              <div className="space-y-4 relative z-10">
                <h3 className="font-sans font-extrabold text-white text-xl md:text-2xl uppercase tracking-wide leading-tight">
                  {currentStep.title}
                </h3>
                <p className="text-zinc-400 text-sm md:text-base font-sans leading-relaxed">
                  {currentStep.description}
                </p>
              </div>

              {/* Tools aligned with this stage */}
              <div className="pt-6 border-t border-zinc-900/80 relative z-10 space-y-4">
                <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold">
                  STAGE TOOL ALIGNMENT & UTILITY
                </h4>

                <div className="space-y-3">
                  {currentStep.tools.map((tool) => {
                    const matchedAllTool = ALL_TOOLS.find((t) => t.id === tool.name);
                    return (
                      <div
                        key={tool.name}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#0E0E0E] border border-zinc-900 hover:border-zinc-800 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-lg bg-[#070707] border border-zinc-900 flex items-center justify-center shrink-0">
                          {matchedAllTool && <SoftwareIcon iconType={matchedAllTool.iconType} className="w-5.5 h-5.5" />}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <span className="font-sans font-black text-white text-xs uppercase tracking-wider block">
                            {tool.name}
                          </span>
                          <span className="text-zinc-400 text-xs font-sans leading-relaxed block">
                            {tool.role}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Global Toolset Footer Ribbon - Highly Minimalist */}
      <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-extrabold block">
            THE SOFTWARE ENGINE
          </span>
          <p className="text-zinc-500 text-xs font-sans">
            Core tool stack utilized dynamically across all portfolio project pipelines.
          </p>
        </div>

        {/* Compact, clean horizontal badge array */}
        <div className="flex flex-wrap items-center gap-2">
          {ALL_TOOLS.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0B0B] border border-zinc-900 hover:border-zinc-800 transition-colors text-zinc-400 text-xs font-mono font-medium"
            >
              <SoftwareIcon iconType={t.iconType} className="w-4 h-4 shrink-0" />
              <span>{t.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
