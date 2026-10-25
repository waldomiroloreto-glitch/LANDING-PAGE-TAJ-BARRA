import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';
import { TOKENS } from '../theme/tokens';

interface NaPraticaSectionProps {
  onOpenCheckout: () => void;
}

export const NaPraticaSection: React.FC<NaPraticaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <Section variant="alt" glow="teal" maxWidth="4xl">
      {/* Section Header */}
      <SectionHeading
        kicker="TRANSPARÊNCIA TOTAL"
        kickerSecondary="OBJETIVIDADE"
        title="O QUE VOCÊ ESTÁ COMPRANDO, NA PRÁTICA?"
      />

      {/* Content Box */}
      <Card variant="elevated" padding="lg" className="mt-12 space-y-6">
        <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
          Você está adquirindo acesso ao <strong className="text-[#b38d4c]">{TOKENS.brand.name}</strong>, um programa de preparação com acesso pelo APP e duas trilhas de treinamento: masculina e feminina.
        </p>

        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
          A proposta é reunir a estrutura de treino, as orientações de progressão e o acompanhamento da evolução em um lugar organizado.
        </p>

        {/* Contrasts */}
        <div className="space-y-3 pt-2">
          <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#b38d4c] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Em vez de improvisar a cada sessão:</strong> você passa a ter um plano de referência para sua preparação.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#b38d4c] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Em vez de depender apenas da memória:</strong> pode acompanhar seus registros.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#b38d4c] shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Em vez de ignorar as diferenças entre as avaliações:</strong> pode direcionar sua preparação ao padrão exigido no seu concurso.
            </p>
          </div>
        </div>

        {/* Final verdict */}
        <div className="pt-4 border-t border-neutral-800">
          <div className="p-5 rounded-xl bg-gradient-to-r from-[#0f5557]/40 to-[#121618] border border-[#0f5557]">
            <p className="font-heading text-lg sm:text-xl font-bold uppercase text-white leading-snug">
              Você não está comprando uma aprovação garantida. <span className="text-[#b38d4c]">Está comprando uma forma mais organizada de se preparar para buscá-la.</span>
            </p>
          </div>
        </div>
      </Card>
    </Section>
  );
};
