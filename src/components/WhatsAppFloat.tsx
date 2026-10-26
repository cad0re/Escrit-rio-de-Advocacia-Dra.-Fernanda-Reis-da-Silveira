import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { whatsappLink } from '@/lib/constants';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll);
    const tipTimer = setTimeout(() => setShowTip(true), 2500);
    const hideTimer = setTimeout(() => setShowTip(false), 9000);
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(tipTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-end gap-3 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 rounded-lg bg-ink-850 border border-gold-400/20 px-4 py-2.5 shadow-xl transition-all duration-400 ${
          showTip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setShowTip(false)}
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-ink-700 border border-white/10 flex items-center justify-center text-gray-400 hover:text-gray-200"
          aria-label="Fechar"
        >
          <X className="h-3 w-3" />
        </button>
        <span className="text-sm text-gray-200 whitespace-nowrap">Precisa de orientação jurídica?</span>
      </div>

      {/* Button */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 shadow-xl shadow-gold-600/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-gold-600/40 animate-glow-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-ink-950" strokeWidth={2} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-gold-200 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-gold-200 border-2 border-ink-950" />
        </span>
      </a>
    </div>
  );
}
