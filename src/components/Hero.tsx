import React from 'react';
import { LoadingBW } from './LoadingBW';
import { MapPin, Calendar, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 overflow-hidden tech-grid">
      {/* Background ambient radial gradients con los 4 colores oficiales de Google (Azul, Rojo, Amarillo, Verde) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-3xl -z-10 pointer-events-none">
        {/* Azul Google - Superior Izquierda */}
        <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#4285F4]/25"></div>
        {/* Rojo Google - Superior Derecha (Asegura presencia destacada del rojo) */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#EA4335]/25"></div>
        {/* Amarillo Google - Inferior Izquierda */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#FBBC05]/25"></div>
        {/* Verde Google - Inferior Derecha */}
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#34A853]/25"></div>
        {/* Foco central multi-color suave */}
        <div
          className="absolute inset-10 rounded-full opacity-60"
          style={{
            background: 'linear-gradient(135deg, rgba(66,133,244,0.2) 0%, rgba(234,67,53,0.25) 33%, rgba(251,188,5,0.25) 66%, rgba(52,168,83,0.2) 100%)',
          }}
        ></div>
      </div>

      {/* Decorative top pills */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium text-slate-300 mb-8 backdrop-blur-md shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-[#34A853]"></span>
        <span>Conferencia Anual Oficial para Desarrolladores (Y todo público)</span>
        <span className="text-slate-500">•</span>
        <span className="text-[#4285F4] font-semibold flex items-center gap-1">
          GDG CDMX <Sparkles className="w-3.5 h-3.5 inline text-[#FBBC05]" />
        </span>
      </div>

      {/* Central Box / Card containing the Square Logo, Titles, and Event Details */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center bg-gradient-to-b from-[#181a20]/90 to-[#121316]/95 border border-white/10 rounded-3xl p-6 md:p-12 shadow-2xl backdrop-blur-xl relative">
        {/* Subtle Google Color Accent Bar on Top of the Card */}
        <div
          className="absolute top-0 inset-x-8 h-1 rounded-b-full"
          style={{
            background: 'linear-gradient(to right, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
          }}
        ></div>

        {/* 1. Cuadro con el logo cuadrado con los colores de Google */}
        {/*         <div className="mb-6">
          <SquareGoogleLogo size="lg" />
        </div> */}

        {/* 2. En el centro: "DEVFEST 2026" */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-2 leading-none">
          <span className="text-white">DEVFEST </span>
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(to right, #4285F4 0%, #EA4335 33%, #FBBC05 66%, #34A853 100%)',
            }}
          >
            2026
          </span>
        </h1>

        {/* Abajo: "Ciudad de México" */}
        <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-slate-200 mt-2 flex items-center justify-center gap-2">
          <span>Ciudad de México</span>
        </div>

        {/* Abajo: "7 de Diciembre" */}
        <div className="mt-4 flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-lg md:text-xl font-semibold text-[#FBBC05] shadow-sm">
          <Calendar className="w-5 h-5 text-[#EA4335]" />
          <span>7 de Diciembre</span>
        </div>

        {/* Abajo: "Tecnológico de Monterrey Sede Ciudad de México" */}
        <div className="mt-3 text-base md:text-lg font-medium text-slate-300 flex items-center justify-center gap-2 max-w-xl text-center">
          <MapPin className="w-5 h-5 text-[#34A853] shrink-0" />
          <span>Tecnológico de Monterrey Sede Ciudad de México</span>
        </div>

        {/* 3. Loading en blanco y negro en animación que se carga al 70% y reinicia */}
        <div className="w-full mt-8">
          <LoadingBW />
        </div>

        {/* Call to action buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a
            href="https://gdg.community.dev/events/details/google-gdg-cdmx-presents-devfest-2026-ciudad-de-mexico"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-[#4285F4] to-[#3367D6] hover:from-[#3b78e7] hover:to-[#2a56be] shadow-lg shadow-[#4285F4]/30 hover:shadow-[#4285F4]/50 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Registro Gratuito</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#agenda"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-[#34A853]" />
            <span>Ver Sede & Agenda</span>
          </a>
        </div>
      </div>

      {/* Quick stats ribbon */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-12 w-full max-w-4xl text-center">
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-extrabold text-[#4285F4]">+1,200</div>
          <div className="text-xs md:text-sm text-slate-400 mt-1">Desarrolladores & Tech Leads</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-extrabold text-[#EA4335]">25+</div>
          <div className="text-xs md:text-sm text-slate-400 mt-1">Conferencias & Workshops</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-extrabold text-[#FBBC05]">4</div>
          <div className="text-xs md:text-sm text-slate-400 mt-1">Tracks Especializados</div>
        </div>
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="text-2xl md:text-3xl font-extrabold text-[#34A853]">100%</div>
          <div className="text-xs md:text-sm text-slate-400 mt-1">Comunidad & Networking</div>
        </div>
      </div>
    </section>
  );
};
