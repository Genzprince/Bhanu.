import React from 'react';
import { Lightbulb, Box, Network, Grid3X3, Sliders, Sun, Camera, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Concept',
    icon: Lightbulb,
    description: 'Idea, research & visual exploration.'
  },
  {
    number: '02',
    title: 'Modeling',
    icon: Box,
    description: 'Blocking out forms & building details.'
  },
  {
    number: '03',
    title: 'Retopology',
    icon: Network,
    description: 'Optimizing topology for performance.'
  },
  {
    number: '04',
    title: 'UV Mapping',
    icon: Grid3X3,
    description: 'Creating clean UVs for perfect textures.'
  },
  {
    number: '05',
    title: 'Texturing',
    icon: Sliders,
    description: 'PBR texturing with high quality maps.'
  },
  {
    number: '06',
    title: 'Lighting',
    icon: Sun,
    description: 'Setting up realistic lights & mood.'
  },
  {
    number: '07',
    title: 'Rendering',
    icon: Camera,
    description: 'High quality renders with perfect output.'
  },
  {
    number: '08',
    title: 'Final',
    icon: CheckCircle,
    description: 'Final touches & presentation ready.'
  }
];

export default function Workflow() {
  return (
    <div className="w-full">
      {/* 8-Column Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-12 relative">
        {steps.map((step, idx) => {
          const IconComponent = step.icon;
          return (
            <div key={step.number} className="flex flex-col items-center text-center relative group">
              {/* Connecting line to the next item (only visible on desktop) */}
              {idx < 7 && (
                <div className="hidden lg:flex absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[1px] bg-zinc-800/80 items-center justify-center z-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange shadow-[0_0_8px_rgba(242,125,38,0.8)] animate-pulse" />
                </div>
              )}

              {/* Icon Circle */}
              <div className="w-12 h-12 rounded-full border border-zinc-800 bg-[#080808] flex items-center justify-center text-zinc-400 group-hover:text-accent-orange group-hover:border-accent-orange/60 group-hover:shadow-[0_0_15px_rgba(242,125,38,0.15)] transition-all duration-300 z-10 relative">
                <IconComponent className="w-4.5 h-4.5" />
              </div>

              {/* Number Label */}
              <span className="font-mono text-[10px] text-zinc-500 font-semibold tracking-wider mt-4">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="font-sans font-bold text-white text-[13px] md:text-sm mt-1 group-hover:text-accent-orange transition-colors duration-300">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-[11px] leading-relaxed max-w-[130px] mx-auto mt-1 font-sans">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
