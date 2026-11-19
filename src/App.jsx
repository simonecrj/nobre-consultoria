import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  X,
  Plus,
  Minus,
  Trash2,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Sparkles,
  RefreshCw,
  Zap,
  Target,
  Compass,
  Eye,
  Rocket,
  Instagram,
  Phone,
  ShieldCheck,
  Award,
  Users,
  Menu,
  Accessibility,
  Contrast,
  Type,
  AlignJustify,
  Link2,
  RotateCcw,
  QrCode
} from 'lucide-react';

const WHATSAPP_NUMBER = '5521994392628';
const INSTAGRAM_URL = 'https://www.instagram.com/nobre.consult?utm_source=qr&psln=bGFrNGhlcDBoNWRx';

const PILLARS = [
  {
    number: '01',
    title: 'RECOMECE',
    subtitle: 'O ponto de partida',
    icon: RefreshCw,
    description: 'Reconheça onde você está e identifique com clareza o que precisa ser transformado.',
    bullets: [
      'Deixe para trás estratégias que não geram mais resultados',
      'Resgate seus objetivos e o propósito do seu negócio',
      'Entenda que um novo ciclo exige novas decisões'
    ]
  },
  {
    number: '02',
    title: 'MOVIMENTO',
    subtitle: 'Saia da inércia',
    icon: Zap,
    description: 'Planejamento sem movimento não gera transformação. Transforme ideias em atitudes reais.',
    bullets: [
      'Comece mesmo que o cenário ainda não esteja perfeito',
      'Crie uma rotina consistente de execução',
      'ReStart é movimento contínuo com direção'
    ]
  },
  {
    number: '03',
    title: 'POSICIONAMENTO',
    subtitle: 'Mostre quem você é',
    icon: Target,
    description: 'Defina claramente quem você é, o que oferece e para quem deseja vender.',
    bullets: [
      'Fortaleça sua autoridade e identidade profissional',
      'Comunique seu valor de forma autêntica',
      'Posicione sua marca para ser reconhecida e lembrada'
    ]
  },
  {
    number: '04',
    title: 'PLANO',
    subtitle: 'Transforme intenção em direção',
    icon: Compass,
    description: 'Plano é o mapa prático que transforma vontade em caminho estruturado.',
    bullets: [
      'Defina objetivos claros e estabeleça prioridades',
      'Organize recursos, tempo e processos',
      'Determine metas possíveis de acompanhar'
    ]
  },
  {
    number: '05',
    title: 'VISÃO',
    subtitle: 'Enxergue além do agora',
    icon: Eye,
    description: 'Tenha clareza sobre onde deseja chegar com crescimento sustentável e previsível.',
    bullets: [
      'Antecipe oportunidades e desafios do mercado',
      'Amplie sua visão empreendedora',
      'Tome decisões pensando no futuro, não só nas urgências'
    ]
  },
  {
    number: '06',
    title: 'AÇÃO ESTRATÉGICA',
    subtitle: 'Faça acontecer',
    icon: Rocket,
    description: 'Priorize o que realmente gera resultado e transforme estratégia em ação concreta.',
    bullets: [
      'Transforme estratégia em ações práticas',
      'Acompanhe indicadores e ajuste a rota',
      'Execute, avalie, aprenda e evolua continuamente'
    ]
  }
];

const CONSULTING_PRODUCTS = [
  {
    id: 'consultoria-restart-dezembro',
    turmaLabel: 'Turma de Dezembro',
    name: 'Consultoria Método ReStart — Turma de Dezembro',
    agenda: '12/12/2026 • 11:00 às 13:00 (Sábado - Google Meet)',
    badge: 'Agenda Confirmada',
    originalPrice: 597.00,
    price: 99.99,
    description: 'Encontro estratégico ao vivo via Google Meet no dia 12/12/2026 (11:00 às 13:00) para aplicar os 6 pilares do Método ReStart.'
  },
  {
    id: 'consultoria-restart-fevereiro',
    turmaLabel: 'Turma de Fevereiro',
    name: 'Consultoria Método ReStart — Turma de Fevereiro',
    agenda: 'Retorno após Férias de Janeiro • 2 Encontros no Mês',
    badge: '2 Encontros no Mês',
    originalPrice: 597.00,
    price: 99.99,
    description: 'Retorno oficial após férias de Janeiro com 2 encontros mensais para estruturar gestão, negócios, marketing digital e plano de ação.'
  }
];

/* Ícone oficial estilizado do WhatsApp na paleta da marca */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M20.52 3.449A11.86 11.86 0 0 0 12.045 0C5.463 0 .106 5.357.103 11.939c-.001 2.104.549 4.158 1.594 5.968L0 24l6.263-1.643a11.91 11.91 0 0 0 5.777 1.473h.005c6.581 0 11.938-5.358 11.94-11.94a11.864 11.864 0 0 0-3.465-8.441ZM12.045 21.82h-.004a9.9 9.9 0 0 1-5.045-1.38l-.362-.215-3.717.975.992-3.624-.236-.375a9.908 9.908 0 0 1-1.519-5.247c.002-5.463 4.448-9.908 9.914-9.908 2.647 0 5.136 1.032 7.008 2.905a9.852 9.852 0 0 1 2.901 7.011c-.003 5.464-4.449 9.911-9.91 9.911Zm5.435-7.422c-.298-.149-1.763-.87-2.036-.97-.273-.099-.472-.149-.671.149-.198.298-.77.97-.944 1.168-.174.199-.348.224-.646.075-.298-.15-1.259-.464-2.398-1.48-.886-.79-1.484-1.766-1.658-2.064-.174-.298-.018-.459.131-.607.134-.134.298-.348.447-.522.149-.174.199-.298.298-.497.1-.199.05-.373-.025-.522-.075-.149-.671-1.617-.92-2.214-.242-.58-.488-.502-.671-.511-.174-.009-.373-.011-.572-.011s-.522.075-.795.373c-.273.298-1.043 1.02-1.043 2.487 0 1.468 1.068 2.885 1.217 3.084.149.199 2.102 3.21 5.093 4.502.711.307 1.266.491 1.699.628.714.227 1.364.195 1.878.118.573-.086 1.763-.721 2.011-1.417.248-.696.248-1.292.174-1.417-.075-.124-.273-.199-.572-.348Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Ícones modernos e autorais para Os 6 Pilares do Método ReStart na paleta Nobre */
function PillarBadgeIcon({ pillarNumber }) {
  return (
    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#543D30] via-[#6b4f3e] to-[#9E7E69] p-[2px] shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
      <div className="w-full h-full rounded-[14px] bg-[#0A0908] group-hover:bg-[#543D30] transition-colors flex items-center justify-center relative overflow-hidden">
        <span className="absolute top-1 right-1.5 w-2 h-2 rounded-full bg-[#C4A459]/70" />
        {pillarNumber === '01' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M26.5 11.5A10.5 10.5 0 1 0 28.5 18" stroke="#EAE8E5" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M27 7.5V12.5H22" stroke="#C4A459" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="18" cy="18" r="3" fill="#9E7E69" />
          </svg>
        )}
        {pillarNumber === '02' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M20.5 6L10 19.5H17.5L15.5 30L26 16.5H18.5L20.5 6Z" fill="#C4A459" stroke="#EAE8E5" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        )}
        {pillarNumber === '03' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="18" r="11" stroke="#EAE8E5" strokeWidth="2.2" />
            <circle cx="18" cy="18" r="6.5" stroke="#9E7E69" strokeWidth="2.2" />
            <circle cx="18" cy="18" r="2.8" fill="#C4A459" />
          </svg>
        )}
        {pillarNumber === '04' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="18" cy="18" r="11" stroke="#EAE8E5" strokeWidth="2.2" />
            <polygon points="21.5,14.5 19.5,19.5 14.5,21.5 16.5,16.5" fill="#C4A459" />
            <circle cx="18" cy="18" r="1.5" fill="#0A0908" />
          </svg>
        )}
        {pillarNumber === '05' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M5 18C7.8 12.8 12.6 10 18 10C23.4 10 28.2 12.8 31 18C28.2 23.2 23.4 26 18 26C12.6 26 7.8 23.2 5 18Z" stroke="#EAE8E5" strokeWidth="2.2" />
            <circle cx="18" cy="18" r="4.2" stroke="#C4A459" strokeWidth="2.2" />
            <circle cx="18" cy="18" r="1.6" fill="#C4A459" />
          </svg>
        )}
        {pillarNumber === '06' && (
          <svg viewBox="0 0 36 36" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M25.5 7.5C25.5 7.5 27.5 15.5 21.5 21.5L14.5 14.5C20.5 8.5 25.5 7.5 25.5 7.5Z" fill="#EAE8E5" stroke="#C4A459" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M14.5 17.5L10 19L12.5 23.5L17 21" stroke="#9E7E69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5 23.5L17 28L21.5 25.5L20 21" stroke="#9E7E69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="22" cy="13.5" r="2" fill="#C4A459" />
          </svg>
        )}
      </div>
    </div>
  );
}

/* Logotipo Nobre Consultoria fiel à identidade visual e paleta de cores */
function NobreBrandLogo({ size = 'md', variant = 'dark' }) {
  const isLarge = size === 'lg';
  const strokeColor = variant === 'dark' ? '#9E7E69' : '#543D30';
  const titleColor = variant === 'dark' ? 'text-[#EAE8E5]' : 'text-[#543D30]';
  const subtitleColor = variant === 'dark' ? 'text-[#9E7E69]' : 'text-[#9E7E69]';

  return (
    <div className="inline-flex items-center gap-3.5 select-none">
      <div className={`${isLarge ? 'w-16 h-16' : 'w-12 h-12'} shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            d="M93 26C84.2 17 72 11.5 58.5 11.5C32.2665 11.5 11 32.7665 11 59C11 85.2335 32.2665 106.5 58.5 106.5C72.2 106.5 84.5 100.8 93.2 91.6"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M38 85V35L78 85V47"
            stroke={strokeColor}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.5 35L81.5 81.5"
            stroke={strokeColor}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M78 27L80.2 32.8L86 35L80.2 37.2L78 43L75.8 37.2L70 35L75.8 32.8L78 27Z"
            fill={strokeColor}
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none text-left">
        <span className={`font-serif ${isLarge ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-[28px]'} tracking-[0.22em] font-semibold ${titleColor}`}>
          NOBRE
        </span>
        <span className={`${isLarge ? 'text-xs' : 'text-[10px]'} tracking-[0.4em] ${subtitleColor} uppercase mt-1.5 font-semibold`}>
          Consultoria
        </span>
      </div>
    </div>
  );
}

/* Barra Flutuante de Acessibilidade (WCAG) */
function AccessibilityToolbar() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [wideSpacing, setWideSpacing] = useState(false);
  const [underlineLinks, setUnderlineLinks] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${(18 * fontScale) / 100}px`;
  }, [fontScale]);

  useEffect(() => {
    document.documentElement.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle('wide-spacing', wideSpacing);
  }, [wideSpacing]);

  useEffect(() => {
    document.documentElement.classList.toggle('underline-links', underlineLinks);
  }, [underlineLinks]);

  const resetAll = () => {
    setFontScale(100);
    setHighContrast(false);
    setWideSpacing(false);
    setUnderlineLinks(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      {open && (
        <div
          role="dialog"
          aria-label="Recursos de Acessibilidade"
          className="mb-3 w-80 rounded-2xl bg-[#0A0908] text-[#EAE8E5] p-5 shadow-2xl border-2 border-[#9E7E69] space-y-4"
        >
          <div className="flex items-center justify-between border-b border-[#543D30] pb-3">
            <div className="flex items-center gap-2">
              <Accessibility className="w-5 h-5 text-[#C4A459]" />
              <span className="font-serif text-xl font-bold text-white">Acessibilidade</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-[#EAE8E5]/70 hover:text-white cursor-pointer"
              aria-label="Fechar painel de acessibilidade"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9E7E69] flex items-center gap-1.5">
              <Type className="w-4 h-4" /> Tamanho do Texto ({fontScale}%)
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setFontScale((s) => Math.max(90, s - 10))}
                className="py-2 px-3 rounded-xl bg-[#543D30] hover:bg-[#9E7E69] text-white text-sm font-bold cursor-pointer"
                aria-label="Diminuir fonte"
              >
                A-
              </button>
              <button
                onClick={() => setFontScale(100)}
                className="py-2 px-3 rounded-xl bg-[#543D30]/60 hover:bg-[#9E7E69] text-white text-sm font-bold cursor-pointer"
                aria-label="Tamanho padrão"
              >
                100%
              </button>
              <button
                onClick={() => setFontScale((s) => Math.min(130, s + 10))}
                className="py-2 px-3 rounded-xl bg-[#543D30] hover:bg-[#9E7E69] text-white text-sm font-bold cursor-pointer"
                aria-label="Aumentar fonte"
              >
                A+
              </button>
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <button
              onClick={() => setHighContrast(!highContrast)}
              aria-pressed={highContrast}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                highContrast
                  ? 'bg-[#C4A459] text-[#0A0908] border-white font-bold'
                  : 'bg-[#543D30]/30 text-[#EAE8E5] border-[#543D30] hover:border-[#9E7E69]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Contrast className="w-4 h-4" /> Alto Contraste
              </span>
              <span>{highContrast ? 'Ativo' : 'Off'}</span>
            </button>

            <button
              onClick={() => setWideSpacing(!wideSpacing)}
              aria-pressed={wideSpacing}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                wideSpacing
                  ? 'bg-[#C4A459] text-[#0A0908] border-white font-bold'
                  : 'bg-[#543D30]/30 text-[#EAE8E5] border-[#543D30] hover:border-[#9E7E69]'
              }`}
            >
              <span className="flex items-center gap-2">
                <AlignJustify className="w-4 h-4" /> Espaçamento Leitura
              </span>
              <span>{wideSpacing ? 'Ativo' : 'Off'}</span>
            </button>

            <button
              onClick={() => setUnderlineLinks(!underlineLinks)}
              aria-pressed={underlineLinks}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl border transition-colors cursor-pointer ${
                underlineLinks
                  ? 'bg-[#C4A459] text-[#0A0908] border-white font-bold'
                  : 'bg-[#543D30]/30 text-[#EAE8E5] border-[#543D30] hover:border-[#9E7E69]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Link2 className="w-4 h-4" /> Destacar Links
              </span>
              <span>{underlineLinks ? 'Ativo' : 'Off'}</span>
            </button>
          </div>

          <button
            onClick={resetAll}
            className="w-full py-2 text-xs font-semibold text-[#C4A459] hover:text-white flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Restaurar Padrão
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Abrir opções de acessibilidade"
        className="flex items-center gap-2 bg-[#543D30] hover:bg-[#0A0908] text-white border-2 border-[#C4A459] px-4 py-3 rounded-full shadow-xl transition-all cursor-pointer font-semibold text-sm"
      >
        <Accessibility className="w-5 h-5 text-[#C4A459]" />
        <span className="hidden sm:inline">Acessibilidade</span>
      </button>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState([
    { ...CONSULTING_PRODUCTS[0], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerBusiness, setCustomerBusiness] = useState('');

  const [leadName, setLeadName] = useState('');
  const [leadWhatsapp, setLeadWhatsapp] = useState('');
  const [leadGoal, setLeadGoal] = useState('Reorganizar meu negócio');
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalSavings = cart.reduce(
    (acc, item) => acc + (item.originalPrice - item.price) * item.quantity,
    0
  );

  const formatBRL = (value) =>
    value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  const handleAddToCart = (product = CONSULTING_PRODUCTS[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckoutWhatsApp = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    const itemsText = cart
      .map(
        (item) =>
          `• ${item.quantity}x ${item.name} (${formatBRL(item.price)} cada)`
      )
      .join('\n');

    const message = `Olá, Camila! Quero garantir minha vaga na *Consultoria Método ReStart* (Turma de Fevereiro). 🚀\n\n*Resumo do Pedido:*\n${itemsText}\n*Total com Desconto:* ${formatBRL(subtotal)} (Economia de ${formatBRL(totalSavings)})\n\n*Meus Dados:*\n• Nome: ${customerName || 'Não informado'}\n• WhatsApp: ${customerPhone || 'Não informado'}\n• Negócio/Área: ${customerBusiness || 'Não informado'}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleQuickLeadSubmit = (e) => {
    e.preventDefault();
    if (!leadName.trim() || !leadWhatsapp.trim()) return;

    setLeadSubmitted(true);
    const message = `Olá, Camila! Acabei de me cadastrar no site da *Nobre Consultoria* para a lista prioritária de Fevereiro do *Método ReStart*! 🚀\n\n• *Nome:* ${leadName}\n• *WhatsApp:* ${leadWhatsapp}\n• *Foco principal:* ${leadGoal}\n\nGostaria de garantir a condição especial de R$ 99,99!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4F0] text-[#0A0908]">
      {/* Barra Superior de Aviso (Agenda Dezembro 12/12/2026) */}
      <div className="bg-[#543D30] text-[#EAE8E5] text-sm py-3 px-4 text-center border-b border-[#9E7E69]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[#C4A459] font-bold uppercase tracking-wider text-xs">
            <Calendar className="w-4 h-4" /> Agenda Dezembro:
          </span>
          <span>
            <strong>12/12/2026</strong> •{' '}
            <strong className="text-white underline decoration-[#C4A459] decoration-2 underline-offset-4">
              Horário 11:00 às 13:00 (Sábado - Google Meet)
            </strong>
          </span>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className="sticky top-0 z-40 bg-[#0A0908]/95 backdrop-blur-md border-b border-[#543D30]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <a href="#" aria-label="Nobre Consultoria - Ir para o início" className="shrink-0">
            <NobreBrandLogo size="md" variant="dark" />
          </a>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm xl:text-base font-medium text-[#EAE8E5] whitespace-nowrap">
            <a href="#metodo" className="hover:text-[#C4A459] transition-colors">
              Método ReStart
            </a>
            <a href="#pilares" className="hover:text-[#C4A459] transition-colors">
              Os 6 Pilares
            </a>
            <a href="#mentora" className="hover:text-[#C4A459] transition-colors">
              Camila Nobre
            </a>
            <a href="#investimento" className="hover:text-[#C4A459] transition-colors">
              Turma Fevereiro
            </a>
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#EAE8E5] hover:text-[#C4A459] transition-colors border border-[#9E7E69]/60 rounded-full px-3.5 py-2 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-[#9E7E69]" />
              <span>@nobre.consult</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2 bg-[#9E7E69] hover:bg-[#876853] text-white px-4 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all shadow-lg cursor-pointer whitespace-nowrap"
              aria-label={`Abrir carrinho de compras com ${totalItems} item(ns)`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="hidden sm:inline">Carrinho</span>
              {totalItems > 0 && (
                <span className="bg-[#0A0908] text-[#EAE8E5] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border border-[#C4A459]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#EAE8E5] p-2"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <nav aria-label="Menu mobile" className="lg:hidden bg-[#0A0908] border-t border-[#543D30] px-6 py-5 space-y-4 text-base text-[#EAE8E5]">
            <a href="#metodo" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#C4A459]">
              Método ReStart
            </a>
            <a href="#pilares" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#C4A459]">
              Os 6 Pilares
            </a>
            <a href="#mentora" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#C4A459]">
              Camila Nobre
            </a>
            <a href="#investimento" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 hover:text-[#C4A459]">
              Turma Fevereiro
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-[#C4A459] font-semibold"
            >
              <Instagram className="w-5 h-5" /> @nobre.consult
            </a>
          </nav>
        )}
      </header>

      <main id="conteudo-principal">
        {/* HERO SECTION */}
        <section className="relative bg-[#0A0908] text-[#EAE8E5] overflow-hidden py-10 sm:py-14 lg:py-16">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#543D30]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#9E7E69]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Coluna Esquerda */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#543D30]/60 border border-[#9E7E69]/60 text-[#EAE8E5] text-xs sm:text-sm font-semibold tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#C4A459] shrink-0" />
                  <span>MÉTODO RESTART — RECOMECE, PLANO, VISÃO E AÇÃO</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold leading-[1.12] text-white">
                  Ative o ReStart —{' '}
                  <span className="text-[#9E7E69] italic">ajuste a rota</span> e avance para o propósito!
                </h1>

                <p className="text-base sm:text-lg text-[#EAE8E5]/90 max-w-2xl leading-snug">
                  Mentoria Exclusiva para ativar <strong>Estratégias de Gestão, Negócios e Marketing Digital</strong> com clareza, posicionamento e execução prática.
                </p>

                {/* Bloco de Preço Ancorado */}
                <div className="bg-[#543D30]/35 border border-[#9E7E69]/50 rounded-2xl p-5 max-w-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#C4A459] font-bold block">
                        Condição Especial • Turmas Dezembro e Fevereiro
                      </span>
                      <div className="flex items-baseline gap-3 mt-1">
                        <span className="text-sm sm:text-base text-[#EAE8E5]/60 line-through">
                          De R$ 597,00
                        </span>
                        <span className="text-3xl sm:text-4xl font-bold text-white leading-none">
                          R$ 99,99
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-[#EAE8E5]/85 mt-1.5 block">
                        Agenda Dezembro: 12/12/2026 • 11:00 às 13:00 (Sábado - Google Meet)
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => handleAddToCart(CONSULTING_PRODUCTS[0])}
                        className="inline-flex items-center justify-center gap-2 bg-[#9E7E69] hover:bg-[#876853] text-white font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base transition-all shadow-xl cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 shrink-0" />
                        <span>Turma Dezembro</span>
                      </button>
                      <button
                        onClick={() => handleAddToCart(CONSULTING_PRODUCTS[1])}
                        className="inline-flex items-center justify-center gap-2 bg-[#543D30] hover:bg-[#3d2b21] text-white border border-[#C4A459]/60 font-bold px-5 py-3.5 rounded-2xl text-sm sm:text-base transition-all shadow-xl cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4 shrink-0" />
                        <span>Turma Fevereiro</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Selos de Confiança */}
                <div className="pt-2 flex flex-wrap items-center gap-6 text-sm sm:text-base text-[#EAE8E5]/85">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#C4A459]" /> 2 Encontros no Mês
                  </span>
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#C4A459]" /> Método Validado
                  </span>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors font-medium"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#C4A459]" /> (21) 99439-2628
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Captura Rápida de Leads */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7F4F0] text-[#0A0908] rounded-3xl p-6 sm:p-7 shadow-2xl border-2 border-[#9E7E69]/50">
                  <div className="flex items-start justify-between gap-3 border-b border-[#543D30]/20 pb-3.5 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#543D30]">
                        Lista Prioritária • Vagas Limitadas
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0908] mt-0.5 leading-tight">
                        Garanta sua vaga com 83% OFF
                      </h2>
                    </div>
                    <span className="bg-[#543D30] text-white text-xs font-bold px-3 py-1.5 rounded-full shrink-0">
                      R$ 99,99
                    </span>
                  </div>

                  {leadSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h3 className="font-serif text-3xl font-bold">Pré-reserva iniciada!</h3>
                      <p className="text-base text-[#543D30]">
                        Direcionamos você para o WhatsApp da <strong>Nobre Consultoria</strong> para confirmar sua vaga de Fevereiro por <strong>R$ 99,99</strong>.
                      </p>
                      <button
                        onClick={() => setLeadSubmitted(false)}
                        className="text-sm font-bold text-[#543D30] underline cursor-pointer"
                      >
                        Cadastrar outro contato
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleQuickLeadSubmit} className="space-y-5">
                      <p className="text-base text-[#543D30]">
                        Preencha seus dados para travar o valor promocional de <strong>R$ 99,99</strong> (de R$ 597,00) antes do encerramento das vagas.
                      </p>

                      <div>
                        <label htmlFor="lead-name" className="block text-sm font-bold text-[#0A0908] mb-1.5">
                          Seu Nome Completo *
                        </label>
                        <input
                          id="lead-name"
                          type="text"
                          required
                          value={leadName}
                          onChange={(e) => setLeadName(e.target.value)}
                          placeholder="Ex: Ana Paula Silva"
                          className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[#543D30]/25 text-base text-[#0A0908] focus:outline-none focus:border-[#543D30]"
                        />
                      </div>

                      <div>
                        <label htmlFor="lead-whatsapp" className="block text-sm font-bold text-[#0A0908] mb-1.5">
                          Seu WhatsApp com DDD *
                        </label>
                        <input
                          id="lead-whatsapp"
                          type="tel"
                          required
                          value={leadWhatsapp}
                          onChange={(e) => setLeadWhatsapp(e.target.value)}
                          placeholder="(21) 99999-9999"
                          className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[#543D30]/25 text-base text-[#0A0908] focus:outline-none focus:border-[#543D30]"
                        />
                      </div>

                      <div>
                        <label htmlFor="lead-goal" className="block text-sm font-bold text-[#0A0908] mb-1.5">
                          Qual seu maior desafio hoje?
                        </label>
                        <select
                          id="lead-goal"
                          value={leadGoal}
                          onChange={(e) => setLeadGoal(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-[#543D30]/25 text-base text-[#0A0908] focus:outline-none focus:border-[#543D30]"
                        >
                          <option value="Reorganizar meu negócio">Reorganizar a rota do meu negócio</option>
                          <option value="Sair da inércia e executar">Sair da inércia e ter plano prático</option>
                          <option value="Fortalecer posicionamento e marca">Fortalecer meu posicionamento</option>
                          <option value="Aumentar vendas e resultados">Aumentar vendas com estratégia</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-[#543D30] hover:bg-[#3d2b21] text-white font-bold py-4 px-6 rounded-xl text-base transition-all flex items-center justify-center gap-2.5 shadow-lg cursor-pointer"
                      >
                        <span>Quero Minha Vaga em Fevereiro</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>

                      <p className="text-xs text-center text-[#543D30]">
                        Atendimento rápido e direto pelo WhatsApp • Sem spam
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE O MÉTODO RESTART */}
        <section id="metodo" className="py-14 sm:py-16 bg-[#F7F4F0]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#9E7E69]">
              Clareza, Estratégia e Propósito
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-[#0A0908]">
              O que é o Método ReStart?
            </h2>
            <p className="text-lg sm:text-2xl text-[#543D30] leading-relaxed max-w-3xl mx-auto">
              O <strong>ReStart</strong> nasce de uma ideia simples e poderosa: recomeçar não significa voltar ao ponto de partida. Significa <strong>reorganizar a rota, fortalecer a visão e entrar em movimento</strong> para avançar com consistência.
            </p>

            {/* Agenda Dezembro 12/12/2026 */}
            <div className="pt-8 max-w-3xl mx-auto text-left">
              <div className="bg-[#543D30] text-white rounded-3xl p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-xl border-2 border-[#9E7E69]">
                <div className="w-16 h-16 rounded-2xl bg-[#9E7E69] text-white flex flex-col items-center justify-center shrink-0 font-bold leading-tight">
                  <span className="text-xs uppercase tracking-wider">DEZ</span>
                  <span className="text-xl">12</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C4A459]">
                    Próximo Encontro Confirmado
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-0.5">
                    Agenda Dezembro: 12/12/2026
                  </h3>
                  <p className="text-base sm:text-lg text-[#EAE8E5] mt-1.5">
                    <strong>Horário: 11:00 às 13:00</strong> (Sábado • Ao vivo via <strong>Google Meet</strong>)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OS 6 PILARES DO MÉTODO RESTART */}
        <section id="pilares" className="py-14 sm:py-16 bg-[#EAE8E5] border-y border-[#543D30]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#543D30]">
                Jornada Estruturada
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-[#0A0908]">
                Os 6 Pilares do Método ReStart
              </h2>
              <p className="text-lg sm:text-xl text-[#543D30]">
                Cada encontro trabalha etapas práticas para tirar seu negócio da estagnação e gerar resultados reais.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PILLARS.map((pillar) => {
                return (
                  <article
                    key={pillar.number}
                    className="bg-white rounded-3xl p-8 border-2 border-[#543D30]/10 shadow-sm hover:shadow-xl hover:border-[#9E7E69] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <PillarBadgeIcon pillarNumber={pillar.number} />
                        <span className="font-serif text-4xl font-bold text-[#9E7E69]/50 group-hover:text-[#9E7E69] transition-colors">
                          {pillar.number}
                        </span>
                      </div>

                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#9E7E69]">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-serif text-3xl font-bold text-[#0A0908] mt-1">
                          {pillar.title}
                        </h3>
                      </div>

                      <p className="text-base text-[#543D30] leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-5 border-t border-[#EAE8E5]">
                      {pillar.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-base text-[#0A0908]">
                          <CheckCircle2 className="w-5 h-5 text-[#9E7E69] shrink-0 mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* QUEM É CAMILA NOBRE */}
        <section id="mentora" className="py-14 sm:py-16 bg-[#F7F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-6 sm:p-9 lg:p-10 border-2 border-[#543D30]/15 shadow-xl">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Coluna Esquerda: Foto Oficial */}
                <div className="lg:col-span-5 flex flex-col items-center space-y-6">
                  <div className="relative w-full max-w-sm rounded-3xl overflow-hidden border-4 border-[#9E7E69]/50 shadow-2xl bg-[#EAE8E5]">
                    <img
                      src="/images/camila-nobre.jpg"
                      alt="Retrato profissional de Camila Nobre, CEO da Nobre Consultoria e criadora do Método ReStart"
                      className="w-full h-auto object-cover aspect-[3/4]"
                    />
                    <div className="bg-[#0A0908] text-white p-5 text-center border-t-2 border-[#C4A459]">
                      <h3 className="font-serif text-3xl font-semibold text-white">
                        Camila Nobre
                      </h3>
                      <p className="text-xs uppercase tracking-[0.25em] text-[#C4A459] mt-1 font-semibold">
                        CEO • Nobre Consultoria
                      </p>
                    </div>
                  </div>
                </div>

                {/* Coluna Direita: Credenciais e Identidade */}
                <div className="lg:col-span-7 space-y-7">
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#EAE8E5] pb-6">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#9E7E69]">
                        Sua Mentora
                      </span>
                      <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#0A0908] mt-1">
                        Quem é Camila Nobre?
                      </h2>
                    </div>
                    <NobreBrandLogo size="sm" variant="light" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4F0] border border-[#543D30]/10">
                      <Award className="w-6 h-6 text-[#543D30] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#0A0908]">CEO Nobre Consultoria</h3>
                        <p className="text-base text-[#543D30] mt-1">
                          Criadora do Método ReStart — Recomeçar, Plano, Visão e Ação.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4F0] border border-[#543D30]/10">
                      <Users className="w-6 h-6 text-[#543D30] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#0A0908]">Gestão & Liderança</h3>
                        <p className="text-base text-[#543D30] mt-1">
                          Especialista em Gestão de Pessoas e Liderança de Alta Performance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4F0] border border-[#543D30]/10">
                      <Sparkles className="w-6 h-6 text-[#543D30] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#0A0908]">Mentora & Treinadora</h3>
                        <p className="text-base text-[#543D30] mt-1">
                          Mentora de Treinamentos, Workshops e desenvolvimento empresarial.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F7F4F0] border border-[#543D30]/10">
                      <ShieldCheck className="w-6 h-6 text-[#543D30] shrink-0 mt-1" />
                      <div>
                        <h3 className="font-serif text-xl font-bold text-[#0A0908]">Valores & Propósito</h3>
                        <p className="text-base text-[#543D30] mt-1">
                          Cristã, esposa, filha e mãe da Luisa Vitória e do Kaleb.
                        </p>
                      </div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-[#C4A459] pl-5 py-1 italic font-serif text-2xl text-[#543D30]">
                    "Paixão por transformar e desenvolver pessoas e negócios com clareza, propósito e alta performance."
                  </blockquote>

                  {/* Conecte-se no Instagram + QR Code */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-[#543D30] hover:bg-[#0A0908] text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#C4A459]" />
                      <span>Seguir @nobre.consult</span>
                    </a>

                    <button
                      onClick={() => setShowQrModal(true)}
                      className="inline-flex items-center gap-2 bg-[#EAE8E5] hover:bg-[#9E7E69] hover:text-white text-[#0A0908] font-semibold px-5 py-3.5 rounded-xl text-base transition-colors cursor-pointer"
                    >
                      <QrCode className="w-5 h-5" />
                      <span>Ver QR Code do Instagram</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DEPOIMENTO DE MENTORADO EM VÍDEO */}
        <section id="depoimento" className="py-14 sm:py-16 bg-[#0A0908] text-[#EAE8E5] border-t border-[#543D30]/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl overflow-hidden border-4 border-[#9E7E69]/60 shadow-2xl bg-[#543D30]/30">
                  <video
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-auto aspect-[9/16] object-cover bg-black"
                    aria-label="Vídeo de depoimento de Isabel, mentora e empreendedora transformada pelo Método ReStart"
                  >
                    <source src="/videos/depoimento-isabel.mp4" type="video/mp4" />
                    Seu navegador não suporta a reprodução de vídeo.
                  </video>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C4A459]">
                  História Real de Transformação
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-white leading-tight">
                  Resultados reais de quem ativou o <span className="text-[#9E7E69] italic">Método ReStart</span>
                </h2>
                <blockquote className="border-l-4 border-[#C4A459] pl-6 py-1 italic font-serif text-2xl sm:text-3xl text-[#EAE8E5] leading-relaxed">
                  "Antes do ReStart eu tinha muitas dúvidas sobre como divulgar, precificar e investir. Aprendi que recomeçar faz parte — recomeçar com visão, planejamento e ação."
                </blockquote>
                <div className="pt-2">
                  <p className="font-serif text-2xl font-bold text-white">Isabel</p>
                  <p className="text-sm uppercase tracking-wider text-[#9E7E69] font-semibold">
                    Professora de Música Empreendedora • Mentorada ReStart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DE INVESTIMENTO E CARRINHO */}
        <section id="investimento" className="py-14 sm:py-16 bg-[#0A0908] text-[#EAE8E5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C4A459]">
                Agenda Dezembro: 12/12/2026 • 11:00 às 13:00 (Sábado - Google Meet)
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-white">
                Pronto para Ativar ReStart
              </h2>
              <p className="text-lg sm:text-xl text-[#EAE8E5]/85 max-w-2xl mx-auto">
                Garanta sua vaga para o encontro ao vivo no dia <strong>12/12/2026 (Sábado, das 11:00 às 13:00 via Google Meet)</strong> com condição promocional exclusiva.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-6">
              {CONSULTING_PRODUCTS.map((turma) => (
                <div
                  key={turma.id}
                  className="bg-[#F7F4F0] text-[#0A0908] rounded-3xl pt-12 pb-8 px-6 sm:px-8 shadow-2xl border-4 border-[#9E7E69] relative flex flex-col justify-between"
                >
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#543D30] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg border border-[#C4A459]">
                    {turma.turmaLabel} • 83% OFF
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0A0908] mt-1">
                      {turma.name}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#543D30] mt-1.5">
                      {turma.agenda}
                    </p>

                    <div className="my-6 py-5 border-y border-[#543D30]/20">
                      <span className="text-sm text-[#543D30] line-through block">
                        Valor original: R$ 597,00
                      </span>
                      <div className="flex items-baseline justify-center gap-1.5 mt-1">
                        <span className="text-xl font-bold text-[#543D30]">R$</span>
                        <span className="text-5xl sm:text-6xl font-bold text-[#0A0908] tracking-tight">
                          99,99
                        </span>
                      </div>
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full inline-block mt-2.5">
                        Economia de R$ 497,01
                      </span>
                    </div>

                    <ul className="text-left space-y-3 text-sm sm:text-base text-[#0A0908] mb-8">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#543D30] shrink-0 mt-0.5" />
                        <span>{turma.description}</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#543D30] shrink-0 mt-0.5" />
                        <span>Aplicação completa dos <strong>6 Pilares ReStart</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#543D30] shrink-0 mt-0.5" />
                        <span>Estratégias de Gestão, Negócios e Marketing Digital</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => handleAddToCart(turma)}
                    className="w-full bg-[#9E7E69] hover:bg-[#876853] text-white font-bold py-4 px-5 rounded-2xl transition-all flex items-center justify-center gap-2.5 text-base shadow-xl cursor-pointer"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>Comprar {turma.turmaLabel}</span>
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Camila! Tenho dúvidas sobre a Turma de Dezembro (12/12/2026) ou Turma de Fevereiro do Método ReStart por R$ 99,99.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#EAE8E5] text-[#0A0908] border-2 border-[#543D30]/30 font-bold py-4 px-8 rounded-2xl transition-all text-base shadow-lg"
              >
                <Phone className="w-5 h-5 text-[#543D30]" />
                <span>Tirar Dúvidas no WhatsApp: (21) 99439-2628</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* BOTÃO FLUTUANTE DO WHATSAPP PARA ACESSO E DÚVIDAS */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Camila! Gostaria de tirar uma dúvida sobre a Consultoria Método ReStart.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Nobre Consultoria no WhatsApp para acesso e dúvidas"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 bg-[#543D30] hover:bg-[#0A0908] text-white border-2 border-[#C4A459] px-4 py-3.5 rounded-full shadow-2xl transition-all font-bold text-sm"
      >
        <WhatsAppIcon className="w-5 h-5 text-[#C4A459]" />
        <span className="hidden sm:inline">WhatsApp • Dúvidas</span>
      </a>

      {/* RODAPÉ */}
      <footer className="bg-[#0A0908] text-[#EAE8E5] border-t border-[#543D30] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <NobreBrandLogo size="lg" variant="dark" />

          <div className="flex flex-wrap items-center justify-center gap-6 text-base">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#C4A459] transition-colors font-medium"
            >
              <Instagram className="w-5 h-5 text-[#9E7E69]" />
              <span>@nobre.consult</span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#C4A459] transition-colors font-medium"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#9E7E69]" />
              <span>(21) 99439-2628</span>
            </a>
          </div>

          <p className="text-sm text-[#EAE8E5]/70 text-center md:text-right">
            © {new Date().getFullYear()} Nobre Consultoria • Camila Nobre.<br className="hidden md:inline" /> Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* BARRA FLUTUANTE DE ACESSIBILIDADE */}
      <AccessibilityToolbar />

      {/* MODAL QR CODE INSTAGRAM */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div onClick={() => setShowQrModal(false)} className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
          <div role="dialog" aria-modal="true" aria-label="QR Code Instagram Nobre Consultoria" className="relative z-10 bg-white rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl border-2 border-[#9E7E69]">
            <div className="flex justify-between items-center">
              <span className="font-serif text-2xl font-bold text-[#0A0908]">Instagram Oficial</span>
              <button onClick={() => setShowQrModal(false)} className="p-1 text-[#543D30] hover:text-black cursor-pointer" aria-label="Fechar QR Code">
                <X className="w-6 h-6" />
              </button>
            </div>
            <img
              src="/images/qrcode-instagram.png"
              alt="QR Code para acessar @nobre.consult no Instagram"
              className="w-64 h-64 mx-auto object-contain rounded-2xl border border-[#EAE8E5]"
            />
            <p className="text-base text-[#543D30]">
              Aponte a câmera do celular ou clique abaixo para acessar <strong>@nobre.consult</strong>
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-[#543D30] text-white font-bold py-3 rounded-xl text-base"
            >
              Abrir Instagram
            </a>
          </div>
        </div>
      )}

      {/* CARRINHO DE COMPRAS LATERAL */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Carrinho de compras"
            className="relative z-10 w-full max-w-lg bg-[#F7F4F0] text-[#0A0908] h-full flex flex-col shadow-2xl"
          >
            <div className="bg-[#0A0908] text-white px-6 py-5 flex items-center justify-between border-b border-[#543D30]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#9E7E69]" />
                <h2 className="font-serif text-2xl font-semibold">Seu Carrinho</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#EAE8E5]/80 hover:text-white p-1.5 cursor-pointer"
                aria-label="Fechar carrinho"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="text-center py-14 space-y-5">
                  <ShoppingBag className="w-14 h-14 text-[#9E7E69]/60 mx-auto" />
                  <p className="text-base text-[#543D30]">Seu carrinho está vazio no momento.</p>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handleAddToCart(CONSULTING_PRODUCTS[0])}
                      className="bg-[#543D30] hover:bg-[#3d2b21] text-white text-sm font-bold px-5 py-3 rounded-xl cursor-pointer"
                    >
                      Adicionar Turma de Dezembro (R$ 99,99)
                    </button>
                    <button
                      onClick={() => handleAddToCart(CONSULTING_PRODUCTS[1])}
                      className="bg-[#9E7E69] hover:bg-[#876853] text-white text-sm font-bold px-5 py-3 rounded-xl cursor-pointer"
                    >
                      Adicionar Turma de Fevereiro (R$ 99,99)
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex flex-wrap gap-2 pb-1">
                    {CONSULTING_PRODUCTS.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => handleAddToCart(t)}
                        className="text-xs font-bold bg-[#EAE8E5] hover:bg-[#9E7E69] hover:text-white text-[#543D30] px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                      >
                        + {t.turmaLabel}
                      </button>
                    ))}
                  </div>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-5 border-2 border-[#543D30]/15 shadow-sm space-y-4"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#9E7E69] block">
                              {item.turmaLabel}
                            </span>
                            <span className="text-xs font-medium text-[#543D30] block mt-0.5">
                              {item.agenda}
                            </span>
                            <h3 className="font-serif text-xl font-bold text-[#0A0908] mt-0.5">
                              {item.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[#543D30]/60 hover:text-red-700 transition-colors cursor-pointer p-1"
                            aria-label="Remover item do carrinho"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-sm text-[#543D30] leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between pt-3 border-t border-[#EAE8E5]">
                          <div className="flex items-center gap-2 bg-[#F7F4F0] rounded-xl p-1 border border-[#543D30]/15">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-[#0A0908] cursor-pointer"
                              aria-label="Diminuir quantidade"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-base font-bold w-7 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white text-[#0A0908] cursor-pointer"
                              aria-label="Aumentar quantidade"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-right">
                            <span className="text-xs text-[#543D30] line-through block">
                              {formatBRL(item.originalPrice * item.quantity)}
                            </span>
                            <span className="text-xl font-bold text-[#0A0908]">
                              {formatBRL(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <form id="checkout-form" onSubmit={handleCheckoutWhatsApp} className="space-y-4 pt-2">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#543D30]">
                      Dados para Agendamento (Fevereiro)
                    </h4>
                    <div>
                      <label htmlFor="cart-name" className="sr-only">Seu nome completo</label>
                      <input
                        id="cart-name"
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Seu nome completo *"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#543D30]/20 text-base focus:outline-none focus:border-[#543D30]"
                      />
                    </div>
                    <div>
                      <label htmlFor="cart-phone" className="sr-only">Seu WhatsApp</label>
                      <input
                        id="cart-phone"
                        type="tel"
                        required
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="Seu WhatsApp (DDD + número) *"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#543D30]/20 text-base focus:outline-none focus:border-[#543D30]"
                      />
                    </div>
                    <div>
                      <label htmlFor="cart-business" className="sr-only">Nome do seu negócio</label>
                      <input
                        id="cart-business"
                        type="text"
                        value={customerBusiness}
                        onChange={(e) => setCustomerBusiness(e.target.value)}
                        placeholder="Nome do seu negócio ou área (opcional)"
                        className="w-full px-4 py-3 rounded-xl bg-white border-2 border-[#543D30]/20 text-base focus:outline-none focus:border-[#543D30]"
                      />
                    </div>
                  </form>
                </>
              )}
            </div>

            {cart.length > 0 && (
              <div className="bg-white border-t-2 border-[#543D30]/15 p-6 space-y-4">
                <div className="space-y-1.5 text-base">
                  <div className="flex justify-between text-emerald-800 font-semibold">
                    <span>Desconto aplicado (83% OFF)</span>
                    <span>- {formatBRL(totalSavings)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-[#0A0908] pt-1">
                    <span>Total a pagar</span>
                    <span>{formatBRL(subtotal)}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full bg-[#543D30] hover:bg-[#3d2b21] text-white font-bold py-4 px-6 rounded-2xl text-base transition-all flex items-center justify-center gap-2.5 shadow-xl cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-[#C4A459]" />
                  <span>Enviar Compra no WhatsApp</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
