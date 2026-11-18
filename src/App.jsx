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

const CONSULTING_PRODUCT = {
  id: 'consultoria-restart-fevereiro',
  name: 'Consultoria Estratégica ReStart (2 Encontros)',
  turma: 'Turma de Fevereiro • Vagas Limitadas',
  originalPrice: 597.00,
  price: 99.99,
  description: 'Acompanhamento prático em 2 encontros mensais para aplicar os 6 pilares do Método ReStart no seu negócio.'
};

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
    { ...CONSULTING_PRODUCT, quantity: 1 }
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

  const handleAddToCart = () => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === CONSULTING_PRODUCT.id);
      if (existing) {
        return prev.map((item) =>
          item.id === CONSULTING_PRODUCT.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...CONSULTING_PRODUCT, quantity: 1 }];
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
      {/* Barra Superior de Aviso (Agenda Janeiro / Fevereiro) */}
      <div className="bg-[#543D30] text-[#EAE8E5] text-sm py-3 px-4 text-center border-b border-[#9E7E69]/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-[#C4A459] font-bold uppercase tracking-wider text-xs">
            <Calendar className="w-4 h-4" /> Agenda Oficial:
          </span>
          <span>
            <strong>Janeiro:</strong> Recesso / Férias •{' '}
            <strong className="text-white underline decoration-[#C4A459] decoration-2 underline-offset-4">
              Fevereiro: Retorno com 2 Encontros Estratégicos
            </strong>
          </span>
        </div>
      </div>

      {/* Cabeçalho Principal */}
      <header className="sticky top-0 z-40 bg-[#0A0908]/95 backdrop-blur-md border-b border-[#543D30]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          <a href="#" aria-label="Nobre Consultoria - Ir para o início">
            <NobreBrandLogo size="md" variant="dark" />
          </a>

          {/* Navegação Desktop */}
          <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-8 text-base font-medium text-[#EAE8E5]">
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
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-[#EAE8E5] hover:text-[#C4A459] transition-colors border border-[#9E7E69]/60 rounded-full px-4 py-2.5"
            >
              <Instagram className="w-4 h-4 text-[#9E7E69]" />
              <span>@nobre.consult</span>
            </a>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-2.5 bg-[#9E7E69] hover:bg-[#876853] text-white px-5 py-3 rounded-full text-base font-semibold transition-all shadow-lg cursor-pointer"
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
        <section className="relative bg-[#0A0908] text-[#EAE8E5] overflow-hidden py-16 sm:py-24 lg:py-28">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#543D30]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#9E7E69]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Coluna Esquerda */}
              <div className="lg:col-span-7 space-y-7">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#543D30]/60 border border-[#9E7E69]/60 text-[#EAE8E5] text-sm font-semibold tracking-wide">
                  <Sparkles className="w-4 h-4 text-[#C4A459]" />
                  <span>MÉTODO RESTART — RECOMECE, PLANO, VISÃO E AÇÃO</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-[64px] font-semibold leading-[1.08] text-white">
                  Recomeçar não é voltar atrás. É{' '}
                  <span className="text-[#9E7E69] italic">reorganizar a rota</span> para avançar com propósito.
                </h1>

                <p className="text-lg sm:text-xl text-[#EAE8E5]/90 max-w-2xl leading-relaxed">
                  Uma consultoria prática criada para empreendedores que precisam sair da inércia, fortalecer seu posicionamento e transformar intenção em execução estratégica em <strong>2 encontros mensais</strong>.
                </p>

                {/* Bloco de Preço Ancorado */}
                <div className="bg-[#543D30]/35 border border-[#9E7E69]/50 rounded-3xl p-6 sm:p-7 max-w-2xl">
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#C4A459] font-bold block">
                        Condição Especial • Turma Fevereiro
                      </span>
                      <div className="flex items-baseline gap-3.5 mt-1.5">
                        <span className="text-base sm:text-lg text-[#EAE8E5]/60 line-through">
                          De R$ 597,00
                        </span>
                        <span className="text-4xl sm:text-5xl font-bold text-white">
                          R$ 99,99
                        </span>
                      </div>
                      <span className="text-sm text-[#EAE8E5]/85 mt-1.5 block">
                        Janeiro em recesso (Férias) • Garanta sua vaga agora para Fevereiro
                      </span>
                    </div>

                    <button
                      onClick={handleAddToCart}
                      className="inline-flex items-center gap-2.5 bg-[#9E7E69] hover:bg-[#876853] text-white font-bold px-7 py-4 rounded-2xl text-base transition-all shadow-xl cursor-pointer"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      <span>Adicionar ao Carrinho</span>
                    </button>
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
                    <Phone className="w-5 h-5 text-[#C4A459]" /> (21) 99439-2628
                  </a>
                </div>
              </div>

              {/* Coluna Direita: Captura Rápida de Leads */}
              <div className="lg:col-span-5">
                <div className="bg-[#F7F4F0] text-[#0A0908] rounded-3xl p-7 sm:p-9 shadow-2xl border-2 border-[#9E7E69]/50">
                  <div className="flex items-start justify-between gap-3 border-b border-[#543D30]/20 pb-5 mb-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#543D30]">
                        Lista Prioritária • Fevereiro
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0908] mt-1 leading-tight">
                        Garanta sua vaga com 83% OFF
                      </h2>
                    </div>
                    <span className="bg-[#543D30] text-white text-xs font-bold px-3.5 py-2 rounded-full shrink-0">
                      2 Encontros
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
        <section id="metodo" className="py-20 sm:py-28 bg-[#F7F4F0]">
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

            {/* Cronograma Janeiro / Fevereiro */}
            <div className="pt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="bg-white border-2 border-[#543D30]/15 rounded-3xl p-7 flex items-start gap-5 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-[#EAE8E5] text-[#543D30] flex items-center justify-center shrink-0 font-bold text-base">
                  JAN
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#0A0908]">Janeiro • Pausa Estratégica</h3>
                  <p className="text-base text-[#543D30] mt-1.5">
                    Período de férias e recesso da consultoria. Inscrições abertas antecipadamente para garantir sua cadeira na turma de retorno.
                  </p>
                </div>
              </div>

              <div className="bg-[#543D30] text-white rounded-3xl p-7 flex items-start gap-5 shadow-xl border-2 border-[#9E7E69]">
                <div className="w-14 h-14 rounded-2xl bg-[#9E7E69] text-white flex items-center justify-center shrink-0 font-bold text-base">
                  FEV
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">Fevereiro • Retorno Oficial (2 Encontros)</h3>
                  <p className="text-base text-[#EAE8E5] mt-1.5">
                    Meta de <strong>2 encontros no mês</strong> com acompanhamento prático para estruturar seu plano e colocar em ação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OS 6 PILARES DO MÉTODO RESTART */}
        <section id="pilares" className="py-20 sm:py-28 bg-[#EAE8E5] border-y border-[#543D30]/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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
                const IconComponent = pillar.icon;
                return (
                  <article
                    key={pillar.number}
                    className="bg-white rounded-3xl p-8 border-2 border-[#543D30]/10 shadow-sm hover:shadow-xl hover:border-[#9E7E69] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#F7F4F0] text-[#543D30] group-hover:bg-[#543D30] group-hover:text-white transition-colors flex items-center justify-center">
                          <IconComponent className="w-7 h-7" />
                        </div>
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
        <section id="mentora" className="py-20 sm:py-28 bg-[#F7F4F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border-2 border-[#543D30]/15 shadow-xl">
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

        {/* SEÇÃO DE INVESTIMENTO E CARRINHO */}
        <section id="investimento" className="py-20 sm:py-28 bg-[#0A0908] text-[#EAE8E5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-4">
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#C4A459]">
                Inscrições Abertas • Retorno em Fevereiro
              </span>
              <h2 className="font-serif text-4xl sm:text-6xl font-semibold text-white">
                Pronto para dar o seu ReStart?
              </h2>
              <p className="text-lg sm:text-xl text-[#EAE8E5]/85 max-w-2xl mx-auto">
                Aproveite o período de férias de Janeiro para garantir sua vaga na turma de Fevereiro com condição promocional exclusiva.
              </p>
            </div>

            <div className="bg-[#F7F4F0] text-[#0A0908] rounded-3xl p-8 sm:p-12 max-w-2xl mx-auto shadow-2xl border-4 border-[#9E7E69] relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#543D30] text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-lg border border-[#C4A459]">
                Oferta Limitada • 83% de Desconto
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#0A0908] mt-3">
                Consultoria Método ReStart
              </h3>
              <p className="text-base sm:text-lg text-[#543D30] mt-1">
                2 Encontros Estratégicos no mês de Fevereiro
              </p>

              <div className="my-7 py-6 border-y border-[#543D30]/20">
                <span className="text-base text-[#543D30] line-through block">
                  Valor original: R$ 597,00
                </span>
                <div className="flex items-baseline justify-center gap-1.5 mt-1">
                  <span className="text-2xl font-bold text-[#543D30]">R$</span>
                  <span className="text-6xl sm:text-7xl font-bold text-[#0A0908] tracking-tight">
                    99,99
                  </span>
                </div>
                <span className="text-sm font-bold text-emerald-800 bg-emerald-100 px-4 py-1.5 rounded-full inline-block mt-3">
                  Você economiza R$ 497,01 hoje
                </span>
              </div>

              <ul className="text-left space-y-4 text-base sm:text-lg text-[#0A0908] mb-9">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#543D30] shrink-0 mt-0.5" />
                  <span><strong>2 encontros mensais</strong> focados no seu negócio</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#543D30] shrink-0 mt-0.5" />
                  <span>Aplicação completa dos <strong>6 Pilares ReStart</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#543D30] shrink-0 mt-0.5" />
                  <span>Plano de ação prático, posicionamento e metas claras</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#543D30] shrink-0 mt-0.5" />
                  <span>Agendamento prioritário para <strong>Fevereiro</strong> (após férias de Janeiro)</span>
                </li>
              </ul>

              <div className="space-y-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#9E7E69] hover:bg-[#876853] text-white font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-3 text-lg shadow-xl cursor-pointer"
                >
                  <ShoppingBag className="w-6 h-6" />
                  <span>Adicionar Consultoria ao Carrinho</span>
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Camila! Tenho interesse na Consultoria Método ReStart de Fevereiro por R$ 99,99.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white hover:bg-[#EAE8E5] text-[#0A0908] border-2 border-[#543D30]/30 font-bold py-4 px-6 rounded-2xl transition-all flex items-center justify-center gap-2.5 text-base"
                >
                  <Phone className="w-5 h-5 text-[#543D30]" />
                  <span>Tirar Dúvidas no WhatsApp: (21) 99439-2628</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

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
              <Phone className="w-5 h-5 text-[#9E7E69]" />
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
                  <button
                    onClick={handleAddToCart}
                    className="bg-[#543D30] text-white text-base font-bold px-6 py-3 rounded-xl cursor-pointer"
                  >
                    Adicionar Consultoria ReStart (R$ 99,99)
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl p-5 border-2 border-[#543D30]/15 shadow-sm space-y-4"
                      >
                        <div className="flex justify-between items-start gap-3">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#9E7E69]">
                              {item.turma}
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
                  <span>Finalizar Pedido no WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
