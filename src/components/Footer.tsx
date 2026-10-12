import React from 'react';
import { Heart, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0c0d12] py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-lg tracking-tight">DEVFEST 2026</span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#4285F4]/20 text-[#4285F4] font-mono">CDMX</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            7 de Diciembre • Tecnológico de Monterrey Sede Ciudad de México.
            Organizado por las comunidades Google Developer Groups (GDG).
          </p>
        </div>

        {/* Google 4-color stripe */}
        <div className="flex items-center space-x-1.5">
          <div className="w-6 h-1.5 rounded-full bg-[#4285F4]"></div>
          <div className="w-6 h-1.5 rounded-full bg-[#EA4335]"></div>
          <div className="w-6 h-1.5 rounded-full bg-[#FBBC05]"></div>
          <div className="w-6 h-1.5 rounded-full bg-[#34A853]"></div>
        </div>

        {/* Links & Socials */}
        <div className="flex items-center space-x-4 text-slate-400">
          <a
            href="https://developers.google.com/community/gdg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1 text-xs"
          >
            <span>GDG Global</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a href="#" className="hover:text-[#4285F4] transition-colors" aria-label="Twitter">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#34A853] transition-colors" aria-label="GitHub">
            <Github className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-[#4285F4] transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-400 flex items-center justify-center gap-1">
        <span>Construido para la comunidad tech de México</span>
        <Heart className="w-3.5 h-3.5 text-[#EA4335] fill-[#EA4335]" />
        <span>con React & Tailwind CSS</span>
      </div>
    </footer>
  );
};
