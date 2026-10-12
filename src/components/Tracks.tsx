import React from 'react';
import { Cpu, Cloud, Smartphone, Globe, Code2 } from 'lucide-react';

export const Tracks: React.FC = () => {
  const tracks = [
    {
      title: 'Inteligencia Artificial & Gemini',
      tag: 'Track AI / ML',
      color: '#4285F4',
      bgGlow: 'hover:border-[#4285F4]/50 hover:shadow-[#4285F4]/10',
      badgeBg: 'bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20',
      icon: Cpu,
      description: 'Modelos multimodales, agentes autónomos, Google Cloud Vertex AI, Gemma y fine-tuning para aplicaciones de producción.',
      topics: ['Gemini 2.0 & APIs', 'Agentes Autónomos', 'Vertex AI', 'Vector DBs']
    },
    {
      title: 'Cloud & DevOps Scalability',
      tag: 'Track Cloud',
      color: '#EA4335',
      bgGlow: 'hover:border-[#EA4335]/50 hover:shadow-[#EA4335]/10',
      badgeBg: 'bg-[#EA4335]/10 text-[#EA4335] border-[#EA4335]/20',
      icon: Cloud,
      description: 'Arquitecturas nativas de la nube, microservicios en Kubernetes (GKE), serverless con Cloud Run y seguridad empresarial.',
      topics: ['Google Kubernetes Engine', 'Cloud Run', 'Observability', 'Terraform & CI/CD']
    },
    {
      title: 'Web & Ecosistema Moderno',
      tag: 'Track Web',
      color: '#FBBC05',
      bgGlow: 'hover:border-[#FBBC05]/50 hover:shadow-[#FBBC05]/10',
      badgeBg: 'bg-[#FBBC05]/10 text-[#FBBC05] border-[#FBBC05]/20',
      icon: Globe,
      description: 'Core Web Vitals, PWAs, rendimiento frontend avanzado, frameworks modernos, WebAssembly y APIs de plataforma web.',
      topics: ['Next.js / React 19', 'Core Web Vitals', 'Wasm & WebGPU', 'Chrome DevTools']
    },
    {
      title: 'Mobile, Flutter & Android',
      tag: 'Track Mobile',
      color: '#34A853',
      bgGlow: 'hover:border-[#34A853]/50 hover:shadow-[#34A853]/10',
      badgeBg: 'bg-[#34A853]/10 text-[#34A853] border-[#34A853]/20',
      icon: Smartphone,
      description: 'Jetpack Compose, arquitectura reactiva en Android 16, Flutter multi-plataforma e integración de IA en dispositivos locales.',
      topics: ['Jetpack Compose', 'Flutter & Dart', 'On-device AI', 'Material 3']
    }
  ];

  return (
    <section id="tracks" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-3">
          <Code2 className="w-3.5 h-3.5 text-[#4285F4]" />
          <span>4 TRACKS TÉCNICOS SIMULTÁNEOS</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Aprende con los mejores en <span className="text-[#4285F4]">CDMX</span>
        </h2>
        <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-base">
          Sesiones técnicas avanzadas, laboratorios prácticos y charlas de expertos Google Developer Experts (GDEs) y Googlers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tracks.map((track, i) => {
          const Icon = track.icon;
          return (
            <div
              key={i}
              className={`p-6 md:p-8 rounded-2xl bg-[#14161d] border border-white/10 transition-all duration-300 shadow-xl ${track.bgGlow}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${track.badgeBg}`}>
                  {track.tag}
                </span>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${track.color}15`, color: track.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{track.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{track.description}</p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {track.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-slate-300 font-mono"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
