import { Scale, Mail, MapPin, MessageCircle } from 'lucide-react';
import { NAV_LINKS, whatsappLink } from '@/lib/constants';

export default function Footer() {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-ink-900 border-t border-gold-400/10 overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-gold-400 to-gold-600">
                <Scale className="h-5 w-5 text-ink-950" strokeWidth={2.2} />
              </span>
              <div className="leading-tight">
                <p className="font-serif text-base text-gold-200">Dra. Fernanda da Reis Da Silveira</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500">Advocacia & Consultoria</p>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Soluções jurídicas de alta complexidade com ética, transparência e compromisso
              com cada cliente.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gold-300 mb-5">Navegação</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    className="text-sm text-gray-400 hover:text-gold-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gold-300 mb-5">Contato</p>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                <span>Av. João Neves da Fontoura, 273 — Sala 2, Parque Amador, Esteio — RS</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-gold-400 shrink-0" />
                <span>contato@fernandasilveira.adv.br</span>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Direto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* OAB compliance */}
        <div className="rounded-lg bg-ink-950/60 border border-white/5 p-5 text-center">
          <p className="text-xs text-gray-500 leading-relaxed">
            Informações em conformidade com o <span className="text-gray-400">Código de Ética e Disciplina da OAB</span>.
            Este site tem caráter meramente informativo e não substitui a consulta jurídica pessoal.
            © {new Date().getFullYear()} Dra. Fernanda da Reis Da Silveira — Advocacia & Consultoria Jurídica.
          </p>
        </div>
      </div>
    </footer>
  );
}
