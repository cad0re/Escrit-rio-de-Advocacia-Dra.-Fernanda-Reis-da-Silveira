export const WHATSAPP_NUMBER = '5551999999999'; // placeholder — update with real number
export const WHATSAPP_MSG = 'Olá Dra. Fernanda, gostaria de agendar uma consulta jurídica.';
export const whatsappLink = (msg?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg ?? WHATSAPP_MSG)}`;

export const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Áreas de Atuação', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
];
