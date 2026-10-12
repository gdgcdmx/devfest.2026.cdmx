import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0e1015]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Mini Square Google badge */}
            <div className="w-8 h-8 rounded-lg bg-[#1a1c23] border border-white/20 p-1 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform">
              <div className="grid grid-cols-2 gap-0.5 w-full h-full">
                <div className="bg-[#4285F4] rounded-xs"></div>
                <div className="bg-[#EA4335] rounded-xs"></div>
                <div className="bg-[#FBBC05] rounded-xs"></div>
                <div className="bg-[#34A853] rounded-xs"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-white text-base leading-none">
                DEVFEST <span className="text-[#4285F4]">2026</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono">CDMX • TEC DE MONTERREY</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-300">
            <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
            <a href="#tracks" className="hover:text-[#4285F4] transition-colors">Tracks</a>
            <a href="#sede" className="hover:text-[#34A853] transition-colors">Sede (Tec CDMX)</a>
            <a href="#agenda" className="hover:text-[#FBBC05] transition-colors">Agenda</a>
            <a
              href="#registro"
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#FBBC05]" />
              <span>Pre-registro</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-hidden"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#12141a] border-b border-white/10 px-4 pt-2 pb-5 space-y-3">
          <a
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:bg-white/5"
          >
            Inicio
          </a>
          <a
            href="#tracks"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#4285F4] hover:bg-white/5"
          >
            Tracks Tecnológicos
          </a>
          <a
            href="#sede"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#34A853] hover:bg-white/5"
          >
            Sede: Tec de Monterrey CDMX
          </a>
          <a
            href="#agenda"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-[#FBBC05] hover:bg-white/5"
          >
            Fecha: 7 de Diciembre
          </a>
          <a
            href="#registro"
            onClick={() => setIsOpen(false)}
            className="block text-center px-4 py-2.5 rounded-lg bg-[#4285F4] text-white font-semibold"
          >
            Pre-registro Gratuito
          </a>
        </div>
      )}
    </nav>
  );
};
