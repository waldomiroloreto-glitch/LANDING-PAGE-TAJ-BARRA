import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { TrilhasSection } from './components/TrilhasSection';
import { AppShowcaseSection } from './components/AppShowcaseSection';
import { DesbloqueieSection } from './components/DesbloqueieSection';
import { VideosExecucaoSection } from './components/VideosExecucaoSection';
import { RealityCheckSection } from './components/RealityCheckSection';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { ParaQuemSection } from './components/ParaQuemSection';
import { NaPraticaSection } from './components/NaPraticaSection';
import { TrintaDiasSection } from './components/TrintaDiasSection';
import { BonusSection } from './components/BonusSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
import { BonusModal } from './components/BonusModal';
import { TafCalculatorModal } from './components/TafCalculatorModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { TrackType, BonusItem } from './types';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

export default function App() {
  // Trigger subtle fade-in + slide-up on sections as the user scrolls
  useIntersectionObserver({
    selector: '.reveal-on-scroll',
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px',
  });

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<TrackType>('masculina');
  const [activeBonus, setActiveBonus] = useState<BonusItem | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const handleOpenCheckout = (track?: TrackType) => {
    if (track) setSelectedTrack(track);
    setIsCheckoutOpen(true);
  };

  const handleOpenBonus = (bonus: BonusItem) => {
    setActiveBonus(bonus);
  };

  const handleOpenCalculator = () => {
    setIsCalculatorOpen(true);
  };

  const handleStartTrackFromCalculator = (track: TrackType) => {
    setSelectedTrack(track);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0d0e] text-[#f6f6f4] font-body selection:bg-[#b38d4c] selection:text-black">
      {/* Top Bar navigation */}
      <Navbar
        onOpenCheckout={handleOpenCheckout}
        onOpenCalculator={handleOpenCalculator}
      />

      {/* Main Content Sections following the exact copy layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCheckout={handleOpenCheckout}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Athletic Marquee Strip inspired by the reference layout */}
        <MarqueeStrip />

        {/* Escolha Sua Trilha (Trilha 1 Masculina & Trilha 2 Feminina) */}
        <TrilhasSection onSelectTrack={handleOpenCheckout} />

        {/* App Showcase (Saia do improviso e tenha um plano na palma da mão) */}
        <AppShowcaseSection onOpenCheckout={() => handleOpenCheckout()} />

        {/* O que você vai desbloquear dentro do Protocolo TAJ (5 Pilares) */}
        <DesbloqueieSection onOpenCheckout={() => handleOpenCheckout()} />

        {/* Vídeos de Execução Correta (Padrão de Banca) */}
        <VideosExecucaoSection onOpenCheckout={() => handleOpenCheckout()} />

        {/* Reality Check (Você pode estar a um edital de realizar seu objetivo...) */}
        <RealityCheckSection onOpenCheckout={() => handleOpenCheckout()} />

        {/* Success Stories / Histórias de Sucesso */}
        <SuccessStoriesSection onOpenCheckout={handleOpenCheckout} />

        {/* Para quem é o Protocolo TAJ (6 Perfis) */}
        <ParaQuemSection />

        {/* O que você está comprando, na prática? */}
        <NaPraticaSection onOpenCheckout={() => handleOpenCheckout()} />

        {/* O que você pode esperar dos próximos 30 dias */}
        <TrintaDiasSection />

        {/* 3 Bônus Exclusivos com prévia interativa */}
        <BonusSection
          onOpenBonus={handleOpenBonus}
          onOpenCheckout={() => handleOpenCheckout()}
        />

        {/* Faça as Contas & Preço & Resumo Completo (Reference Pricing Card) */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* Perguntas Frequentes (7 Dúvidas Oficiais) */}
        <FaqSection />

        {/* Final Push CTA (Sua preparação não precisa continuar no improviso) */}
        <FinalCtaSection onOpenCheckout={() => handleOpenCheckout()} />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Compact Mobile Sticky CTA Bar */}
      <MobileStickyBar onOpenCheckout={() => handleOpenCheckout()} />

      {/* Interactive Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        selectedTrack={selectedTrack}
      />

      <BonusModal
        bonus={activeBonus}
        onClose={() => setActiveBonus(null)}
        onOpenCheckout={() => handleOpenCheckout()}
      />

      <TafCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        onStartTrack={handleStartTrackFromCalculator}
      />
    </div>
  );
}
