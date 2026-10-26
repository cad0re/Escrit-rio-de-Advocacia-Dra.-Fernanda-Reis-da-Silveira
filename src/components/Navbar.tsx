import { useEffect, useState } from 'react';
import { Scale, Menu, X } from 'lucide-react';
import { NAV_LINKS, whatsappLink } from '@/lib/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur-xl border-b border-gold-400/10 py-3' : 'py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero'); }} className="flex items-center gap-3 group">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-md bg-gradient-to-br from-gold-400 to-gold-600 shadow-lg shadow-gold-600/20 transition-transform group-hover:scale-105">
            <Scale className="h-5 w-5 text-ink-950" strokeWidth={2.2} />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-serif text-base text-gold-200 tracking-wide">Dra. Fernanda da Reis Da Silveira</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500">Advocacia & Consultoria</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className="text-sm text-gray-300 hover:text-gold-300 transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-lg hover:shadow-gold-600/30 hover:-translate-y-0.5"
          >
            Agendar Consulta
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-gold-300 p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col gap-3 bg-ink-900/95 backdrop-blur-xl border-t border-gold-400/10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className="py-2 text-gray-300 hover:text-gold-300 transition-colors border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-md bg-gradient-to-r from-gold-400 to-gold-600 px-5 py-3 text-center text-sm font-semibold text-ink-950"
          >
            Agendar Consulta via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
