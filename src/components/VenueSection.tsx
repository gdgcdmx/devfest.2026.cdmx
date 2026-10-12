import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const VenueSection: React.FC = () => {
  return (
    <section id="sede" className="py-20 px-4 max-w-6xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#34A853]/10 border border-[#34A853]/30 text-xs font-mono text-[#34A853]">
            <MapPin className="w-3.5 h-3.5" />
            <span>SEDE OFICIAL DEL EVENTO</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Tecnológico de Monterrey <br />
            <span className="text-[#34A853]">Sede Ciudad de México</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            Una de las instituciones académicas y tecnológicas más prestigiosas de América Latina albergará el 
            <strong className="text-white"> DevFest 2026</strong>. Espacios equipados con tecnología de punta, auditorios principales y áreas exclusivas para talleres simultáneos y networking.
          </p>

          <div className="space-y-3 font-mono text-sm">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <Clock className="w-5 h-5 text-[#FBBC05] shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Lunes, 7 de Diciembre de 2026</div>
                <div className="text-slate-400 text-xs">Registro y acceso: 08:00 AM • Cierre: 07:00 PM CST</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10">
              <Navigation className="w-5 h-5 text-[#4285F4] shrink-0 mt-0.5" />
              <div>
                <div className="text-white font-semibold">Dirección del Campus</div>
                <div className="text-slate-400 text-xs">Prol. Canal de Miramontes 222, San Bartolo el Chico, Tlalpan, 14380 Ciudad de México, CDMX</div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Estacionamiento disponible</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Conexión Wi-Fi de alta velocidad</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Accesibilidad universal</span>
          </div>
        </div>

        {/* Right Campus Visual / Interactive Card */}
        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#161821] to-[#20232d] border border-white/15 p-6 shadow-2xl">
            {/* Campus simulated radar / tech badge */}
            <div className="aspect-video w-full rounded-2xl bg-[#0c0e14] border border-white/10 relative overflow-hidden flex flex-col justify-between p-5">
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px]"></div>

              {/* Map header */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EA4335] animate-ping"></div>
                  <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Punto de Encuentro DevFest</span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300">CDMX • SUR</span>
              </div>

              {/* Center Map Icon & Location Graphic */}
              <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#34A853] to-[#4285F4] p-0.5 shadow-xl flex items-center justify-center mb-3">
                  <div className="w-full h-full bg-[#11131a] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#FBBC05]" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-lg">Tec de Monterrey CDMX</div>
                  <div className="text-xs text-slate-400 font-mono">19.2839° N, 99.1356° W</div>
                </div>
              </div>

              {/* Map Footer action */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#34A853]" /> Acceso con identificación oficial
                </span>
                <a
                  href="https://maps.google.com/?q=Tecnologico+de+Monterrey+Campus+Ciudad+de+Mexico"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4285F4] hover:underline flex items-center gap-1 font-semibold"
                >
                  Abrir en Google Maps &rarr;
                </a>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-slate-400 font-mono">
                &copy; Google Developer Groups (GDG) Ciudad de México en colaboración con el Tecnológico de Monterrey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
