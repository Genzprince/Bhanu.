import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  leftImage: string;
  rightImage: string;
  leftLabel: string;
  rightLabel: string;
}

export default function BeforeAfterSlider({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      id="before-after-slider-container"
      className="relative w-full aspect-video md:aspect-[16/9] rounded-sm overflow-hidden border border-white/5 bg-zinc-950 select-none cursor-ew-resize"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Right Image (Base) */}
      <img
        src={rightImage}
        alt={rightLabel}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        referrerPolicy="no-referrer"
      />
      
      {/* Right HUD Label */}
      <div className="absolute right-6 top-6 z-20 flex items-center gap-2.5 bg-black/75 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] uppercase tracking-[0.25em] px-4 py-2 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
        <span>{rightLabel}</span>
      </div>

      {/* Left Image (Overlay Clip) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="absolute inset-0 w-full h-full" style={{ width: containerRef.current?.getBoundingClientRect().width || '100%' }}>
          <img
            src={leftImage}
            alt={leftLabel}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: containerRef.current?.getBoundingClientRect().width || '100vw', maxWidth: 'none' }}
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
      
      {/* Left HUD Label */}
      <div className="absolute left-6 top-6 z-20 flex items-center gap-2.5 bg-black/75 backdrop-blur-md border border-white/10 text-white font-mono text-[9px] uppercase tracking-[0.25em] px-4 py-2 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.5)] pointer-events-none transition-all duration-300">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_rgba(242,125,38,1)]" />
        <span className="text-accent-orange font-bold">{leftLabel}</span>
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-accent-orange/30 via-accent-orange to-accent-orange/30 shadow-[0_0_10px_rgba(242,125,38,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Glowing floating slider button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d0d0d]/95 backdrop-blur-md border-2 border-accent-orange shadow-[0_0_20px_rgba(242,125,38,0.5)] flex items-center justify-center cursor-ew-resize transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(242,125,38,0.7)] group/handle active:scale-95">
          {/* Inner ring */}
          <div className="w-7 h-7 rounded-full border border-accent-orange/30 flex items-center justify-center bg-zinc-950/80">
            {/* Small arrows */}
            <div className="flex gap-1.5 text-accent-orange items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover/handle:-translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3.5 h-3.5 text-accent-orange transition-transform group-hover/handle:translate-x-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          
          {/* Scientific crosshair target indicator dots on top and bottom of handle for 3D UI aesthetic */}
          <div className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-accent-orange border border-black shadow-[0_0_8px_rgba(242,125,38,1)]" />
          <div className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-accent-orange border border-black shadow-[0_0_8px_rgba(242,125,38,1)]" />
        </div>
      </div>
    </div>
  );
}
