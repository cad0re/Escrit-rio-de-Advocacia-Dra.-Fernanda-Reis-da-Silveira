import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

const OFFICE_INFO = [
  { icon: MapPin, label: 'Endereço', value: 'Av. João Neves da Fontoura, 273 — Sala 2, Parque Amador, Esteio — RS' },
  { icon: Phone, label: 'Especialidades', value: 'Direito Civil · Família · Trabalhista' },
  { icon: Clock, label: 'Atendimento', value: 'Segunda a Sexta, das 9h às 18h' },
];

const AREA_OPTIONS = [
  'Direito de Família & Sucessões',
  'Direito Civil & Contratos',
  'Direito Trabalhista',
  'Outro / Não tenho certeza',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', area: AREA_OPTIONS[0], desc: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const msg = `Olá Dra. Fernanda, sou ${form.name}. Telefone: ${form.phone}. Área: ${form.area}. Detalhes: ${form.desc}`;
    window.open(whatsappLink(msg), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', area: AREA_OPTIONS[0], desc: '' });
  };

  const fieldClass =
    'w-full rounded-lg bg-ink-950/60 border border-white/10 px-4 py-3 text-sm text-gray-200 placeholder-gray-600 outline-none transition-all duration-300 focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/30';

  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-ink-950 bg-grain overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-600/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300">Contato & Localização</span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-gray-100 leading-tight">
            Vamos Conversar Sobre o <span className="text-gradient-gold italic">Seu Caso</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Office info & map */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl glass glass-border p-8">
              <h3 className="font-serif text-2xl text-gray-100 mb-6">Escritório</h3>
              <div className="space-y-6">
                {OFFICE_INFO.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold-400/10 border border-gold-400/20">
                      <Icon className="h-5 w-5 text-gold-300" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">{label}</p>
                      <p className="text-sm text-gray-200 leading-relaxed">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/30 hover:-translate-y-0.5"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                Iniciar Conversa no WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden glass glass-border h-64">
              <iframe
                title="Localização do escritório"
                src="https://www.google.com/maps?q=Av.+João+Neves+da+Fontoura,+273,+Esteio,+RS&output=embed"
                className="w-full h-full grayscale invert-[0.92] hue-rotate-180 contrast-[0.9] opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="rounded-2xl glass glass-border p-8">
            <h3 className="font-serif text-2xl text-gray-100 mb-6">Envie Sua Mensagem</h3>

            <div className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Nome Completo</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Telefone / WhatsApp</label>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(51) 9 9999-9999"
                  className={fieldClass}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Área do Direito</label>
                <select
                  value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className={fieldClass}
                >
                  {AREA_OPTIONS.map((a) => (
                    <option key={a} value={a} className="bg-ink-850">{a}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Descrição do Caso</label>
                <textarea
                  required
                  rows={4}
                  value={form.desc}
                  onChange={(e) => setForm({ ...form, desc: e.target.value })}
                  placeholder="Conte brevemente sobre a sua situação..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-lg border border-gold-400/40 bg-gold-400/5 px-6 py-3.5 text-sm font-semibold text-gold-200 transition-all duration-300 hover:bg-gold-400/15 hover:border-gold-400/70 hover:-translate-y-0.5"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 text-gold-300" />
                    Mensagem Encaminhada!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar e Abrir no WhatsApp
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Ao enviar, você será direcionado ao WhatsApp com sua mensagem preenchida.
                Suas informações são tratadas com sigilo absoluto.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
