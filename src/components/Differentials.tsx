import { HeartHandshake, Clock, Eye, Crosshair } from 'lucide-react';

const PILLARS = [
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    desc: 'Cada cliente recebe atenção dedicada, com escuta ativa e respeito às particularidades do seu caso.',
    n: '01',
  },
  {
    icon: Clock,
    title: 'Agilidade Processual',
    desc: 'Condução áil e organizada dos processos, priorizando prazos e resposta estratégica rápida.',
    n: '02',
  },
  {
    icon: Eye,
    title: 'Transparência Total',
    desc: 'Informação clara em todas as etapas — o cliente acompanha cada movimento do seu processo.',
    n: '03',
  },
  {
    icon: Crosshair,
    title: 'Análise Estratégica',
    desc: 'Avaliação jurídica minuciosa que antecipa cenários e constrói a melhor estratégia defensiva.',
    n: '04',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-ink-900 bg-grain overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Heading column */}
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">Diferenciais</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-100 leading-tight">
              Abordagem <span className="text-gradient-gold italic">Estratégica</span> em Cada Caso
            </h2>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Quatro pilares sustentam a forma como o escritório conduz cada demanda — do primeiro
              contato à sentença final.
            </p>
          </div>

          {/* Pillars grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {PILLARS.map(({ icon: Icon, title, desc, n }) => (
              <div
                key={title}
                className="group relative rounded-xl border border-white/5 bg-ink-850/50 p-7 transition-all duration-400 hover:border-gold-400/25 hover:bg-ink-800/60"
              >
                <span className="absolute top-5 right-6 font-serif text-3xl text-gold-400/20 transition-colors duration-400 group-hover:text-gold-400/40">
                  {n}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 mb-5 transition-all duration-400 group-hover:bg-gold-400/15 group-hover:border-gold-400/40">
                  <Icon className="h-5 w-5 text-gold-300" strokeWidth={1.7} />
                </span>
                <h3 className="font-serif text-xl text-gray-100 mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
