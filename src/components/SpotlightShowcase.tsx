import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Box, Layers, Palette, Clock, ArrowRight } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function SpotlightShowcase() {
  // Available render states
  const renderStates = [
    {
      id: 'clay',
      label: 'CLAY RENDER',
      leftImg: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      rightImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      leftLabel: 'CLAY MODEL',
      rightLabel: 'FINAL RENDER'
    },
    {
      id: 'wireframe',
      label: 'WIREFRAME',
      leftImg: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      rightImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      leftLabel: 'WIREFRAME',
      rightLabel: 'FINAL RENDER'
    },
    {
      id: 'textured',
      label: 'TEXTURED',
      leftImg: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=1200&q=80',
      rightImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      leftLabel: 'BASE COLOR',
      rightLabel: 'FINAL RENDER'
    },
    {
      id: 'final',
      label: 'FINAL RENDER',
      leftImg: 'https://images.unsplash.com/photo-1618005198143-e5283b519a7f?auto=format&fit=crop&w=1200&q=80',
      rightImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      leftLabel: 'WIREFRAME',
      rightLabel: 'FINAL RENDER'
    },
    {
      id: 'details',
      label: 'DETAILS',
      leftImg: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      rightImg: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      leftLabel: 'CLOSE UP DETS',
      rightLabel: 'FINAL RENDER'
    }
  ];

  const [activeStateIndex, setActiveStateIndex] = useState(3); // Default to 'final' (Index 3)
  const activeState = renderStates[activeStateIndex];

  // Texture maps for the "MAPS INCLUDED" block
  const textureMaps = [
    { name: 'Albedo', url: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=120&q=80' },
    { name: 'Normal', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80' },
    { name: 'Roughness', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=120&q=80' },
    { name: 'Metallic', url: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&w=120&q=80' },
    { name: 'AO', url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=120&q=80' }
  ];

  return (
    <section className="py-20 border-t border-zinc-900 bg-[#050505] text-zinc-100">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        
        {/* Main 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Spec Info & Details */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-1.5">
              <span className="text-accent-orange font-mono text-[10px] uppercase tracking-widest font-bold block">
                EFFECT BREAKDOWN
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight uppercase leading-tight">
                CYBERPUNK HELMET
              </h2>
              <span className="text-accent-orange text-xs uppercase tracking-wider font-semibold font-sans block">
                HARD SURFACE PROP
              </span>
            </div>

            <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-sans">
              A detailed cyberpunk helmet designed with attention to hard surface modeling, realistic materials and futuristic aesthetics.
            </p>

            {/* Spec Icons Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-4 pt-2">
              {/* Software */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-zinc-850 bg-zinc-950/40 flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5 text-accent-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-none mb-1">
                    SOFTWARE
                  </div>
                  <div className="text-[11px] text-zinc-300 font-sans truncate" title="Blender, Substance Painter, Marmoset Toolbag 4">
                    Blender, Substance Painter, Marmoset Toolbag 4
                  </div>
                </div>
              </div>

              {/* Polygons */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-zinc-850 bg-zinc-950/40 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-accent-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-none mb-1">
                    POLYGONS
                  </div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    48,258 Tris
                  </div>
                </div>
              </div>

              {/* Texture Size */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-zinc-850 bg-zinc-950/40 flex items-center justify-center shrink-0">
                  <Palette className="w-5 h-5 text-accent-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-none mb-1">
                    TEXTURE SIZE
                  </div>
                  <div className="text-[11px] text-zinc-300 font-mono">
                    4K (PBR)
                  </div>
                </div>
              </div>

              {/* Time Taken */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm border border-zinc-850 bg-zinc-950/40 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-accent-orange" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 font-semibold leading-none mb-1">
                    TIME TAKEN
                  </div>
                  <div className="text-[11px] text-zinc-300 font-sans">
                    18 Days
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2 pt-2 border-t border-zinc-900">
              <h3 className="text-xs uppercase tracking-wider font-bold text-white font-sans">
                DESCRIPTION
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-sans">
                Inspired by futuristic military and sci-fi concepts, this helmet was created focusing on functional detailing, mechanical accuracy and realistic wear and tear.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <motion.a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-accent-orange text-accent-orange font-mono text-[11px] uppercase tracking-widest font-semibold px-6 py-3 rounded-sm transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2, backgroundColor: "rgba(242,125,38,0.12)", boxShadow: "0 8px 20px rgba(242,125,38,0.25)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                VIEW MORE
                <ArrowRight className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Comparison Slider and state selectors */}
          <div className="lg:col-span-8 space-y-5">
            {/* Slider Container with labels overlay */}
            <div className="relative rounded-sm overflow-hidden border border-zinc-900 bg-[#080808]">
              {/* Top overlay labels */}
              <div className="absolute top-4 left-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 border border-zinc-850 rounded-sm">
                <span className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                  {activeState.leftLabel}
                </span>
              </div>
              <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur-md px-3 py-1 border border-zinc-850 rounded-sm">
                <span className="font-sans text-[10px] font-bold tracking-wider text-white uppercase">
                  {activeState.rightLabel}
                </span>
              </div>

              {/* Slider component */}
              <BeforeAfterSlider
                leftImage={activeState.leftImg}
                rightImage={activeState.rightImg}
                leftLabel={activeState.leftLabel}
                rightLabel={activeState.rightLabel}
              />
            </div>

            {/* State selection thumbnails row */}
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {renderStates.map((state, index) => {
                const isActive = index === activeStateIndex;
                return (
                  <button
                    key={state.id}
                    onClick={() => setActiveStateIndex(index)}
                    className={`flex items-center justify-center gap-1.5 py-3 px-1 md:px-2 rounded-sm border font-mono text-[9px] md:text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'border-accent-orange bg-zinc-950/80 text-accent-orange font-semibold shadow-[0_2px_8px_rgba(242,125,38,0.15)]'
                        : 'border-zinc-900 bg-zinc-950 text-zinc-500 hover:text-zinc-300 hover:border-zinc-800'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-accent-orange' : 'bg-zinc-700'}`} />
                    {state.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>



      </div>
    </section>
  );
}
