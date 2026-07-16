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
      <div className="absolute right-6 top-6 bg-black/60 backdrop-blur-md border border-white/5 text-zinc-400 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm pointer-events-none">
        {rightLabel}
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
      <div className="absolute left-6 top-6 bg-black/60 backdrop-blur-md border border-white/5 text-zinc-400 font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-sm pointer-events-none">
        {leftLabel}
      </div>

      {/* Slider Bar & Handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-accent-orange pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Glowing floating slider button */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-zinc-900 border-2 border-accent-orange shadow-[0_0_15px_rgba(242,125,38,0.4)] flex items-center justify-center cursor-grab active:cursor-grabbing text-accent-orange transition-transform hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" className="rotate-90 origin-center" />
          </svg>
        </div>
      </div>
    </div>
  );
}
