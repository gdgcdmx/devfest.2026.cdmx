import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Mail, User, Briefcase } from 'lucide-react';

export const RegistrationSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Frontend Developer');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="registro" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="relative rounded-3xl p-8 md:p-12 bg-gradient-to-br from-[#161922] to-[#101217] border border-white/10 shadow-2xl overflow-hidden">
        {/* Glow corners with Google colors */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4285F4]/20 blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#34A853]/20 blur-3xl pointer-events-none rounded-full"></div>

        <div className="relative z-10 text-center max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#FBBC05] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
            <span>ENTRADAS GRATUITAS • CUPO LIMITADO</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Asegura tu lugar en <span className="bg-gradient-to-r from-[#4285F4] to-[#34A853] bg-clip-text text-transparent">DEVFEST 2026</span>
          </h2>
          <p className="mt-2 text-slate-400 text-sm">
            Recibe tu gafete digital y notificaciones exclusivas de la agenda del 7 de Diciembre en el Tec de Monterrey CDMX.
          </p>

          {submitted ? (
            <div className="mt-8 p-6 rounded-2xl bg-[#34A853]/10 border border-[#34A853]/30 text-center animate-fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#34A853] mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">¡Pre-registro Exitoso, {name}!</h3>
              <p className="text-sm text-slate-300 mt-1">
                Hemos reservado tu confirmación para el <strong>7 de Diciembre de 2026</strong> en la sede <strong>Tecnológico de Monterrey Ciudad de México</strong>.
              </p>
              <div className="mt-4 inline-block font-mono text-xs px-3 py-1.5 rounded-lg bg-black/40 text-[#FBBC05] border border-white/10">
                Ticket ID: GDG-CDMX-2026-{Math.floor(1000 + Math.random() * 9000)}
              </div>
              <div className="mt-5">
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Registrar a otra persona
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Nombre Completo</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Sofia Hernández"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-hidden focus:border-[#4285F4] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sofia@ejemplo.com"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-hidden focus:border-[#4285F4] transition-colors text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1">Área o Perfil Tecnológico</label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-hidden focus:border-[#4285F4] transition-colors text-sm"
                  >
                    <option value="Frontend Developer" className="bg-[#161922]">Frontend Developer (Web / React)</option>
                    <option value="Backend & Cloud" className="bg-[#161922]">Backend & Cloud Engineer (GCP / Kubernetes)</option>
                    <option value="AI / Data Scientist" className="bg-[#161922]">AI / Data Scientist (Gemini / Python)</option>
                    <option value="Mobile Developer" className="bg-[#161922]">Mobile Developer (Android / Flutter)</option>
                    <option value="Estudiante / Académico" className="bg-[#161922]">Estudiante / Investigador Tec de Monterrey</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853] hover:opacity-95 shadow-lg shadow-[#4285F4]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Confirmar Mi Asistencia</span>
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
