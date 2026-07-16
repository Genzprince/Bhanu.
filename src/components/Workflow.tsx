import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="w-full space-y-16">
      {/* Cards Bento-Inspired Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {STEPS.map((step, idx) => {
          // Determine if it is the last step so we can make it span across 3 columns for premium highlight spacing
          const isLastStep = idx === STEPS.length - 1;

          return (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className={`group relative rounded-2xl bg-[#090909] border border-zinc-900/80 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:border-accent-orange/40 hover:shadow-[0_15px_35px_rgba(242,125,38,0.12)] cursor-pointer overflow-hidden ${
                isLastStep ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
            >
              {/* Soft decorative hover blur light behind the card */}
              <div className="absolute -inset-px bg-gradient-to-br from-transparent via-transparent to-accent-orange/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700 pointer-events-none" />

              <div>
                {/* Header: Stage Badge + Number */}
                <div className="flex justify-between items-start mb-6">
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950 border border-zinc-900 text-[9px] font-mono font-bold text-zinc-500 group-hover:text-accent-orange group-hover:border-accent-orange/20 transition-all duration-300 uppercase tracking-widest">
                    <Sparkles className="w-2.5 h-2.5" /> STAGE {step.number}
                  </div>
                  <span className="font-mono text-3xl font-black text-zinc-800/60 select-none tracking-tighter group-hover:text-accent-orange/20 transition-colors duration-500">
                    {step.number}
                  </span>
                </div>

                {/* Subtitle / Phase Name */}
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2 font-bold group-hover:text-accent-orange/70 transition-colors duration-500">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-white font-sans font-extrabold text-base sm:text-lg uppercase tracking-wide mb-3 leading-snug group-hover:text-white transition-colors duration-500">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm font-sans leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Bottom Software Alignment Row */}
              <div className="pt-5 border-t border-zinc-900/80 mt-auto flex items-center justify-between">
                <span className="text-[8px] font-mono font-extrabold tracking-widest text-zinc-500 uppercase group-hover:text-zinc-400 transition-colors">
                  PIPELINE UTILITY
                </span>

                {/* Inline Software Icons */}
                <div className="flex items-center gap-2">
                  {step.tools.map((tool) => {
                    const matchedAllTool = ALL_TOOLS.find((t) => t.id === tool.name);
                    return (
                      <div
                        key={tool.name}
                        className="w-8 h-8 rounded-lg bg-zinc-950 border border-zinc-900/80 flex items-center justify-center shrink-0 group-hover:border-zinc-800 transition-colors relative"
                        title={`${tool.name} — ${tool.role}`}
                      >
                        {matchedAllTool && (
                          <SoftwareIcon iconType={matchedAllTool.iconType} className="w-4.5 h-4.5" />
                        )}
                        {/* Little tooltip style status dot */}
                        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-accent-orange opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500" />
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

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
            <motion.div
              key={t.id}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0B0B] border border-zinc-900 text-zinc-400 text-xs font-mono font-medium cursor-pointer group"
              whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(242,125,38,0.35)", boxShadow: "0 6px 15px rgba(242,125,38,0.08)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <SoftwareIcon iconType={t.iconType} className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
              <span className="group-hover:text-zinc-200 transition-colors">{t.id}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
