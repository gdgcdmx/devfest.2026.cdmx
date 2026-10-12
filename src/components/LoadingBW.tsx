import React, { useEffect, useState } from 'react';

export const LoadingBW: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  useEffect(() => {
    let animationFrameId: number;
    let startTime: number | null = null;
    const duration = 2400; // Duration to reach 70% in milliseconds
    const pauseDuration = 650; // Pause at 70% before reset
    const maxTarget = 70;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (elapsed < duration) {
        setIsResetting(false);
        // Smooth easing towards 70%
        const ratio = elapsed / duration;
        // Ease out quadratic
        const eased = 1 - (1 - ratio) * (1 - ratio);
        const currentVal = Math.min(Math.round(eased * maxTarget), maxTarget);
        setProgress(currentVal);
        animationFrameId = requestAnimationFrame(step);
      } else if (elapsed < duration + pauseDuration) {
        // Hold at 70%
        setProgress(maxTarget);
        animationFrameId = requestAnimationFrame(step);
      } else {
        // Reset and trigger next loop
        setIsResetting(true);
        setProgress(0);
        startTime = timestamp;
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto my-6 p-5 rounded-2xl bg-black border border-white/20 text-white shadow-2xl backdrop-blur-md relative overflow-hidden transition-all duration-300">
      {/* Background B&W scanning line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] pointer-events-none animate-pulse"></div>

      {/* Header Info */}
      <div className="flex items-center justify-between mb-3 font-mono text-xs text-zinc-400">
        <div className="flex items-center space-x-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <span className="uppercase tracking-wider font-semibold text-zinc-200">
            {isResetting ? 'REINICIANDO...' : progress === 70 ? 'LÍMITE ALCANZADO (70%)' : 'CARGANDO SISTEMA'}
          </span>
        </div>
        <span className="text-white font-bold tracking-widest text-sm bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded">
          {progress}% / 70%
        </span>
      </div>

      {/* Main B&W Progress Bar */}
      <div className="relative h-4 w-full bg-zinc-900 rounded-full overflow-hidden p-0.5 border border-zinc-700 shadow-inner">
        {/* Fill bar */}
        <div
          className="h-full bg-white rounded-full transition-all ease-out duration-75 relative shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          style={{ width: `${(progress / 100) * 100}%` }}
        >
          {/* Subtle striped pattern on the white bar */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(0,0,0,0.15)_6px,rgba(0,0,0,0.15)_12px)] opacity-50"></div>
        </div>

        {/* 70% Threshold Marker */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-zinc-500 z-10"
          style={{ left: '70%' }}
          title="Límite 70%"
        >
          <div className="absolute -top-1 -left-1 w-2 h-1 bg-zinc-400 rounded-xs"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-1 bg-zinc-400 rounded-xs"></div>
        </div>
      </div>

      {/* Segmented Monochrome Step Blocks */}
      <div className="grid grid-cols-10 gap-1.5 mt-3">
        {Array.from({ length: 10 }).map((_, index) => {
          const blockThreshold = (index + 1) * 10;
          const isActive = progress >= blockThreshold;
          const isOverCap = blockThreshold > 70;

          return (
            <div
              key={index}
              className={`h-1.5 rounded-xs transition-all duration-150 ${
                isOverCap
                  ? 'bg-zinc-900/60 border border-zinc-800/40'
                  : isActive
                  ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                  : 'bg-zinc-800'
              }`}
            />
          );
        })}
      </div>

      {/* Footer Status and Micro-labels */}
      <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-1.5">
          <svg className={`w-3.5 h-3.5 text-white ${progress < 70 ? 'animate-spin' : ''}`} viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>CICLO AUTOMÁTICO</span>
        </div>
        <span className="text-zinc-500">MAX 70% &rarr; LOOP</span>
      </div>
    </div>
  );
};
