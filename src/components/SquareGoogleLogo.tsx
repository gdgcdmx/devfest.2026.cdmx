import React from 'react';

interface SquareGoogleLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const SquareGoogleLogo: React.FC<SquareGoogleLogoProps> = ({
  className = '',
  size = 'lg'
}) => {
  const sizeMap = {
    sm: 'w-20 h-20',
    md: 'w-28 h-28',
    lg: 'w-36 h-36 md:w-44 md:h-44',
    xl: 'w-48 h-48 md:w-56 md:h-56'
  };

  return (
    <div
      className={`relative inline-flex items-center justify-center p-1 rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-white/15 shadow-2xl backdrop-blur-xl group transition-all duration-500 hover:scale-105 hover:border-white/30 ${className}`}
      aria-label="Google Official Colors Square Logo"
    >
      {/* Dynamic multi-color ambient glow with official Google colors */}
      <div className="absolute -inset-1 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-700 -z-10 bg-gradient-to-tr from-[#4285F4] via-[#EA4335] to-[#FBBC05]"></div>
      <div className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl group-hover:opacity-60 transition-opacity duration-700 -z-20 bg-gradient-to-bl from-[#34A853] via-[#4285F4] to-[#EA4335]"></div>

      {/* The inner square container */}
      <div
        className={`${sizeMap[size]} aspect-square rounded-2xl bg-[#16181d] p-4 flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-white/10`}
      >
        {/* Subtle grid pattern background inside the square */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:8px_8px]"></div>

        {/* Square DevFest Logo formed by official Google Color tiles & brackets */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-2">
          {/* Top row: Google Blue (#4285F4) & Google Red (#EA4335) */}
          <div className="flex justify-between items-center w-full">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#4285F4] shadow-md shadow-[#4285F4]/40 flex items-center justify-center text-white font-mono font-bold text-xs md:text-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              &lt;
            </div>
            <div className="flex-1 mx-2 h-1.5 rounded-full bg-gradient-to-r from-[#4285F4] to-[#EA4335] opacity-80"></div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#EA4335] shadow-md shadow-[#EA4335]/40 flex items-center justify-center text-white font-mono font-bold text-xs md:text-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              /
            </div>
          </div>

          {/* Central Google-styled DevFest icon: Quad Google core */}
          <div className="relative my-auto flex items-center justify-center">
            <svg
              className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg transition-transform duration-500 group-hover:rotate-6"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer square perimeter in Google Colors */}
              <rect x="6" y="6" width="40" height="40" rx="10" fill="#4285F4" fillOpacity="0.95" />
              <rect x="54" y="6" width="40" height="40" rx="10" fill="#EA4335" fillOpacity="0.95" />
              <rect x="6" y="54" width="40" height="40" rx="10" fill="#FBBC05" fillOpacity="0.95" />
              <rect x="54" y="54" width="40" height="40" rx="10" fill="#34A853" fillOpacity="0.95" />
              
              {/* Center Tech DevFest Badge Accent */}
              <rect x="32" y="32" width="36" height="36" rx="8" fill="#16181d" stroke="#ffffff" strokeWidth="2.5" />
              <circle cx="50" cy="50" r="7" fill="#ffffff" />
            </svg>
          </div>

          {/* Bottom row: Google Yellow (#FBBC05) & Google Green (#34A853) */}
          <div className="flex justify-between items-center w-full">
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#FBBC05] shadow-md shadow-[#FBBC05]/40 flex items-center justify-center text-[#202124] font-mono font-bold text-xs md:text-sm transition-transform duration-300 group-hover:translate-y-0.5">
              _
            </div>
            <div className="flex-1 mx-2 h-1.5 rounded-full bg-gradient-to-r from-[#FBBC05] to-[#34A853] opacity-80"></div>
            <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-[#34A853] shadow-md shadow-[#34A853]/40 flex items-center justify-center text-white font-mono font-bold text-xs md:text-sm transition-transform duration-300 group-hover:translate-y-0.5">
              &gt;
            </div>
          </div>
        </div>

        {/* Gloss highlight */}
        <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-2xl"></div>
      </div>
    </div>
  );
};
