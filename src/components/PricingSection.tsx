import React from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { TOKENS } from '../theme/tokens';
import { PRICING_COPY } from '../data/content';

interface PricingSectionProps {
  onOpenCheckout: (track?: 'masculina' | 'feminina') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  return (
    <Section id="precos" variant="default" glow="teal" maxWidth="5xl">
      {/* Header: FAÇA AS CONTAS... */}
      <SectionHeading
        kicker={PRICING_COPY.kicker}
        kickerSecondary={PRICING_COPY.kickerSecondary}
        title={PRICING_COPY.title}
      >
        <div className="space-y-3 text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          {PRICING_COPY.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="p-4 rounded-xl bg-[#121618] border border-[#0f5557]/50 max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300">
            {PRICING_COPY.transparencyNote}
          </div>
        </div>
      </SectionHeading>

      {/* Pricing Card from Reference Image */}
      <div className="mt-14 rounded-3xl bg-[#121618] border border-[#0f5557] overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-neutral-800">
          
          {/* Left: Pricing & Details */}
          <div className="lg:col-span-7 p-6 sm:p-10 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#b38d4c] uppercase font-bold tracking-wider">
                Invista em você
              </span>
              <div className="text-sm font-semibold text-neutral-400 mt-0.5">
                Hoje, você pode garantir acesso ao {TOKENS.brand.name} por:
              </div>
            </div>

            {/* Price Display connected to tokens */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-mono uppercase text-neutral-400">
                  {TOKENS.pricing.installmentsCount}x de
                </span>
                <span className="font-heading text-5xl sm:text-6xl font-black text-[#b38d4c] tracking-tight">
                  {TOKENS.pricing.installmentValue}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-mono text-neutral-300">
                ou apenas <strong className="text-white">{TOKENS.pricing.cashPrice}</strong> à vista
              </div>
              <div className="text-[11px] text-neutral-400 pt-1">
                Acesso pelo APP conforme as condições informadas na página de compra.
              </div>
            </div>

            {/* Inclusions */}
            <div className="pt-4 border-t border-neutral-800 space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#0f5557] shrink-0 stroke-[2.5]" />
                <span><strong>Protocolo TAJ {TOKENS.brand.durationDays} Dias:</strong> Planejamento estruturado</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#0f5557] shrink-0 stroke-[2.5]" />
                <span><strong>Acesso pelo APP:</strong> Treino completo no seu celular</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#0f5557] shrink-0 stroke-[2.5]" />
                <span><strong>Trilha Masculina & Feminina:</strong> Escolha seu padrão</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#0f5557] shrink-0 stroke-[2.5]" />
                <span><strong>Estrutura de Progressão:</strong> Métricas e evolução contínua</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-[#b38d4c] shrink-0 stroke-[2.5]" />
                <span><strong>4 Bônus Estratégicos Inclusos:</strong> Abdominal & Core (sem custo a mais), Checklists do Edital, Diário e Pré-TAF</span>
              </div>
            </div>

            {/* Direct Purchase CTA */}
            <div className="pt-4">
              <Button
                variant="gold"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-5 h-5 stroke-[2.5]" />}
                onClick={() => onOpenCheckout()}
              >
                {TOKENS.cta.accessApp}
              </Button>
              <p className="text-[11px] text-center text-neutral-400 mt-2.5">
                Antes de pagar por mais um treino aleatório, considere o valor de ter sua preparação organizada em um só lugar.
              </p>
            </div>
          </div>

          {/* Right: Guarantee Block */}
          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-center items-center text-center bg-[#0e1214] space-y-5">
            <div className="relative">
              <span className="font-heading text-8xl sm:text-9xl font-black text-[#b38d4c] leading-none select-none">
                {TOKENS.pricing.guaranteeDays}
              </span>
              <span className="block font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider text-white -mt-2">
                {TOKENS.pricing.guaranteeTitle}
              </span>
            </div>

            <div className="space-y-3 max-w-xs">
              <h4 className="font-heading text-lg font-bold uppercase text-white">
                {TOKENS.pricing.guaranteeSubtitle}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {TOKENS.pricing.guaranteeText}
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#0f5557] font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Compra Segura & Cancelamento Simples</span>
            </div>
          </div>

        </div>
      </div>

      {/* Recap */}
      <Card variant="default" padding="lg" className="mt-14 space-y-6">
        <div className="border-b border-neutral-800 pb-4">
          <span className="text-xs font-mono text-[#b38d4c] uppercase font-bold tracking-wider">
            RESUMO COMPLETO
          </span>
          <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
            RECAPITULANDO TUDO O QUE VOCÊ VAI RECEBER
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-300">
          {PRICING_COPY.recapList.map((item, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-[#0b0d0e] border border-neutral-800/80 space-y-1">
              <div className={`font-bold flex items-center gap-2 ${item.isBonus ? 'text-[#b38d4c]' : 'text-white'}`}>
                {item.isBonus ? (
                  <Sparkles className="w-4 h-4 text-[#b38d4c]" />
                ) : (
                  <Check className="w-4 h-4 text-[#0f5557]" />
                )}
                <span>{item.title}</span>
              </div>
              <p className="text-xs text-neutral-400 pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-neutral-400">Tudo isso por apenas:</span>
            <div className="font-heading text-2xl sm:text-3xl font-black text-[#b38d4c]">
              {TOKENS.pricing.installments} <span className="text-sm font-normal text-neutral-300">(ou {TOKENS.pricing.cashPrice})</span>
            </div>
          </div>

          <Button
            variant="gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={() => onOpenCheckout()}
          >
            {TOKENS.cta.accessApp}
          </Button>
        </div>
      </Card>
    </Section>
  );
};
