import { Users, FileText, Briefcase, ArrowUpRight } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

const AREAS = [
  {
    icon: Users,
    title: 'Direito de Família & Sucessões',
    intro: 'Sensibilidade e rigor jurídico nos momentos mais delicados da vida.',
    items: ['Divórcio', 'Guarda', 'Inventário', 'Partilha de Bens', 'Alimentos'],
    msg: 'Olá Dra. Fernanda, preciso de assistência em Direito de Família e Sucessões.',
  },
  {
    icon: FileText,
    title: 'Direito Civil & Contratos',
    intro: 'Tutela de direitos patrimoniais e obrigações com precisão técnica.',
    items: ['Responsabilidade Civil', 'Negócios Imobiliários', 'Indenizações'],
    msg: 'Olá Dra. Fernanda, preciso de assistência em Direito Civil e Contratos.',
  },
  {
    icon: Briefcase,
    title: 'Direito Trabalhista',
    intro: 'Defesa dos direitos do trabalhador e consultoria preventiva empresarial.',
    items: ['Direitos do Trabalhador', 'Consultoria Preventiva', 'Verbas Trabalhistas'],
    msg: 'Olá Dra. Fernanda, preciso de assistência em Direito Trabalhista.',
  },
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="relative py-24 lg:py-32 bg-ink-950 bg-grain overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-0 h-96 w-96 rounded-full bg-gold-600/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300">Áreas de Atuação</span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-100 leading-tight">
            Atuação Jurídica <span className="text-gradient-gold italic">Especializada</span>
          </h2>
          <p className="mt-5 text-gray-400 leading-relaxed">
            Foco em áreas do direito que exigem profundidade técnica e cuidado humano, com estratégias
            adaptadas à realidade de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {AREAS.map(({ icon: Icon, title, intro, items, msg }) => (
            <article
              key={title}
              className="group relative rounded-2xl glass glass-border p-8 transition-all duration-500 hover:border-gold-400/40 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gold-400/0 blur-[60px] transition-all duration-500 group-hover:bg-gold-400/15" />

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-ink-700 to-ink-800 border border-gold-400/20 transition-all duration-500 group-hover:border-gold-400/50 group-hover:shadow-lg group-hover:shadow-gold-600/20">
                    <Icon className="h-6 w-6 text-gold-300 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.6} />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all duration-400 group-hover:text-gold-400 group-hover:rotate-45" />
                </div>

                <h3 className="font-serif text-2xl text-gray-100 leading-snug mb-3">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">{intro}</p>

                <ul className="space-y-2.5 mb-7">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappLink(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gold-300 hover:text-gold-200 transition-colors group/link"
                >
                  Falar sobre este assunto
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
