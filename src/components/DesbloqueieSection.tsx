import React from 'react';
import { DESBLOQUEIOS } from '../data/content';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface DesbloqueieSectionProps {
  onOpenCheckout: () => void;
}

export const DesbloqueieSection: React.FC<DesbloqueieSectionProps> = ({ onOpenCheckout }) => {
  return (
    <Section id="desbloqueio" variant="default" glow="none">
      {/* Section Header */}
      <SectionHeading
        kicker="CONTEÚDO E ESTRUTURA"
        kickerSecondary="ACESSO COMPLETO"
        title="O QUE VOCÊ VAI DESBLOQUEAR DENTRO DO PROTOCOLO TAJ"
        subtitle="Cada pilar foi desenhado para eliminar a incerteza e transformar seus 30 dias em uma preparação metódica, direta ao ponto e sem desperdício de energia."
      />

      {/* 5 Blocks Grid */}
      <div className="mt-12 space-y-6 max-w-4xl mx-auto">
        {DESBLOQUEIOS.map((item, idx) => (
          <Card
            key={item.number}
            variant="default"
            padding="md"
            className="group"
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              {/* Numeric Indicator */}
              <div className="w-12 h-12 rounded-xl bg-[#0f5557]/30 border border-[#0f5557] group-hover:border-[#b38d4c] flex items-center justify-center shrink-0 text-[#b38d4c] font-heading font-black text-2xl transition-colors">
                {item.number}
              </div>

              <div className="space-y-3 flex-1">
                {/* Title with checkmark */}
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#0f5557] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide group-hover:text-[#b38d4c] transition-colors">
                    {idx + 1}. {item.title}
                  </h3>
                </div>

                {/* Lead text */}
                <p className="text-sm sm:text-base font-semibold text-neutral-200 leading-snug">
                  {item.lead}
                </p>

                {/* Body copy */}
                <p className="text-sm text-neutral-400 leading-relaxed pt-1">
                  {item.body}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Section Call to action */}
      <div className="mt-12 text-center">
        <Button
          variant="gold"
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
          onClick={onOpenCheckout}
        >
          DESBLOQUEAR ACESSO AO PROTOCOLO NO APP
        </Button>
      </div>
    </Section>
  );
};
