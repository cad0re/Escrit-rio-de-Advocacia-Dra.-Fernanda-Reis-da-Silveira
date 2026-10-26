import { Gem, HeartHandshake, Zap, BadgeCheck } from 'lucide-react';

const VALUES = [
  { icon: Gem, title: 'Transparência', desc: 'Clareza total em cada etapa do processo, sem custos ocultos ou promessas vazias.' },
  { icon: HeartHandshake, title: 'Humanização', desc: 'Atenção próxima e empática — cada cliente é ouvido com respeito e cuidado.' },
  { icon: Zap, title: 'Eficiência', desc: 'Agilidade processual e estratégia jurídica fundamentada em técnico rigor.' },
  { icon: BadgeCheck, title: 'Compromisso Ético', desc: 'Conduta pautada pelo Código de Ética e Disciplina da OAB em toda atuação.' },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-ink-900 bg-grain overflow-hidden">
      <div className="pointer-events-none absolute top-0 right-0 h-96 w-96 rounded-full bg-gold-600/5 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — Profile */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">Sobre o Escritório</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-100 leading-tight">
              Dra. Fernanda da Reis <span className="text-gradient-gold italic">Da Silveira</span>
            </h2>
            <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">OAB/RS</p>

            <div className="mt-8 space-y-5 text-gray-400 leading-relaxed">
              <p>
                Advogada dedicada à Advocacia & Consultoria Jurídica, com atuação concentrada em Direito de Família,
                Direito Civil e Direito Trabalhista. A prática do escritório une solidez técnica e sensibilidade humana,
                oferecendo soluções estratégicas para questões de alta complexidade.
              </p>
              <p>
                Cada caso é conduzido com atenção individualizada, desde a consulta inicial até a conclusão do
                processo. O compromisso é com a <span className="text-gold-200">defesa qualificada</span> dos
                direitos do cliente, sempre em conformidade com os princípios éticos da advocacia.
              </p>
              <p>
                Seduada em Esteio, o escritório atende clientes em todo o Rio Grande do Sul, combinando tradição
                jurídica e modernidade na condução de demandas preventivas e litigiosas.
              </p>
            </div>

            {/* Signature flourish */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-gold-400/40" />
              <span className="font-serif text-xl text-gold-200 italic">Dra. Fernanda da Reis Da Silveira</span>
            </div>
          </div>

          {/* Right — Values grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group relative rounded-xl glass glass-border p-6 transition-all duration-400 hover:border-gold-400/30 hover:-translate-y-1"
                style={{ marginTop: i % 2 === 1 ? '1.5rem' : 0 }}
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/0 to-gold-400/0 group-hover:from-gold-400/5 group-hover:to-transparent transition-all duration-400" />
                <div className="relative">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20 mb-4 transition-all duration-300 group-hover:bg-gold-400/20 group-hover:border-gold-400/40">
                    <Icon className="h-5 w-5 text-gold-300" strokeWidth={1.7} />
                  </span>
                  <h3 className="font-serif text-xl text-gray-100 mb-2">{title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
