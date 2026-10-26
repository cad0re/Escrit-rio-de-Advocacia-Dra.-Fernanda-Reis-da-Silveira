import { MessageCircle, ChevronDown, ShieldCheck, Lock, Scale } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

const TRUST_BADGES = [
  { icon: ShieldCheck, label: 'Atendimento Personalizado' },
  { icon: Lock, label: 'Sigilo Absoluto' },
  { icon: Scale, label: 'Atuação Preventiva e Litigiosa' },
];

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-ink-950 bg-grain">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gold-600/10 blur-[120px]" />
        <div className="absolute bottom-0 -left-32 h-[28rem] w-[28rem] rounded-full bg-ink-700/40 blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>

      {/* Vertical accent line */}
      <div className="pointer-events-none absolute left-6 top-0 bottom-0 hidden md:flex flex-col items-center justify-center gap-6">
        <span className="h-24 w-px bg-gradient-to-b from-transparent to-gold-400/40" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 [writing-mode:vertical-rl] rotate-180">Estudio Jurídico · Esteio/RS</span>
        <span className="h-24 w-px bg-gradient-to-b from-gold-400/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-8 animate-fade-in">
            <span className="h-px w-12 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300 font-medium">Advocacia & Consultoria Jurídica</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-gray-100 animate-fade-up">
            Excelência, Ética e <br className="hidden sm:block" />
            Soluções Jurídicas de <span className="text-gradient-gold italic">Alta Complexidade</span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0 }}>
            Atuação técnica e dedicada, com atenção personalizada e rigor jurídico, comprometida com os melhores
            resultados para cada cliente em <span className="text-gray-200">Esteio</span> e em todo o
            <span className="text-gray-200"> Rio Grande do Sul</span>.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-gold-400 to-gold-600 px-7 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-xl hover:shadow-gold-600/30 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2} />
              Agendar Consulta via WhatsApp
            </a>
            <button
              onClick={() => scrollTo('#areas')}
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-gold-400/30 px-7 py-4 text-sm font-semibold text-gold-200 transition-all duration-300 hover:border-gold-400/70 hover:bg-gold-400/5 hover:-translate-y-0.5"
            >
              Conheça Nossas Áreas
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-lg glass glass-border animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 px-5 py-4 bg-ink-850/40">
                <Icon className="h-5 w-5 text-gold-400 shrink-0" strokeWidth={1.8} />
                <span className="text-xs sm:text-sm text-gray-300 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-gold-400 transition-colors"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
