import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Dumbbell, Smartphone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCheckout: (track?: 'masculina' | 'feminina') => void;
  onOpenCalculator: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout, onOpenCalculator }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0b0d0e]/95 backdrop-blur-md border-b border-[#0f5557]/30 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b38d4c]"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0f5557] to-[#072526] border border-[#b38d4c]/50 flex items-center justify-center text-[#b38d4c] shadow-sm group-hover:border-[#b38d4c] transition-colors">
            <Dumbbell className="w-5 h-5 text-[#b38d4c]" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-black text-2xl tracking-wider text-[#f6f6f4] uppercase leading-none">
              PROTOCOLO <span className="text-[#b38d4c]">TAJ</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mt-0.5">
              TAF BARRA FIXA
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Single-line, 4-5 links) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <button 
            onClick={() => scrollToSection('trilhas')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Trilhas Masculina & Feminina
          </button>
          <button 
            onClick={() => scrollToSection('app-preview')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            O Plano no APP
          </button>
          <button 
            onClick={() => scrollToSection('desbloqueio')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            O que Inclui
          </button>
          <button 
            onClick={() => scrollToSection('videos-execucao')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Vídeos Técnicos
          </button>
          <button 
            onClick={() => scrollToSection('depoimentos')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer text-[#b38d4c] font-semibold"
          >
            Aprovações
          </button>
          <button 
            onClick={() => scrollToSection('bonus')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Bônus Exclusivos
          </button>
          <button 
            onClick={() => scrollToSection('faq')} 
            className="hover:text-[#b38d4c] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: Primary Action & Quick Tools */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCalculator}
            className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-[#121618] hover:bg-[#181d20] border border-neutral-700/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Teste de Nível TAF</span>
          </button>

          <button
            onClick={() => onOpenCheckout()}
            className="px-5 py-2 text-xs uppercase font-heading tracking-wider font-bold text-black bg-[#b38d4c] hover:bg-[#c99f58] active:scale-[0.98] rounded-lg transition-all shadow-md glow-gold flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
          >
            <span>Acessar no APP</span>
            <ChevronRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => onOpenCheckout()}
            className="sm:hidden px-3 py-1.5 text-xs font-heading font-bold text-black bg-[#b38d4c] rounded-md"
          >
            Acessar
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0e1214] border-b border-[#0f5557]/40 px-5 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 text-sm font-medium text-neutral-300">
            <button
              onClick={() => scrollToSection('trilhas')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              Trilhas Masculina & Feminina
            </button>
            <button
              onClick={() => scrollToSection('app-preview')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              O Plano no APP
            </button>
            <button
              onClick={() => scrollToSection('desbloqueio')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              O que Você Vai Desbloquear
            </button>
            <button
              onClick={() => scrollToSection('videos-execucao')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors text-[#b38d4c]"
            >
              Vídeos de Execução Correta
            </button>
            <button
              onClick={() => scrollToSection('depoimentos')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors text-[#b38d4c] font-semibold"
            >
              Histórias de Aprovação
            </button>
            <button
              onClick={() => scrollToSection('para-quem')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              Para Quem É
            </button>
            <button
              onClick={() => scrollToSection('bonus')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              Bônus Exclusivos
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors text-[#b38d4c] font-semibold"
            >
              Investimento & Acesso
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-left py-2 px-2 hover:bg-[#151c1f] rounded-md transition-colors"
            >
              Perguntas Frequentes
            </button>
          </div>

          <div className="pt-2 border-t border-neutral-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCalculator();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-center text-neutral-200 bg-[#161c1e] border border-neutral-700 rounded-lg"
            >
              Descobrir meu Nível Atual no TAF (Grátis)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 px-4 text-sm font-heading tracking-wider uppercase font-bold text-center text-black bg-[#b38d4c] rounded-lg shadow-md"
            >
              Acessar Protocolo TAJ no APP
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
