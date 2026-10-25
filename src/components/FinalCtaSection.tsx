import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { TOKENS } from '../theme/tokens';
import { FINAL_CTA_COPY } from '../data/content';

interface FinalCtaSectionProps {
  onOpenCheckout: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenCheckout }) => {
  return (
    <Section variant="default" glow="both" maxWidth="4xl" className="py-20 lg:py-28 text-center space-y-8">
      {/* Kicker & Title */}
      <SectionHeading
        kicker={FINAL_CTA_COPY.kicker}
        kickerSecondary={FINAL_CTA_COPY.kickerSecondary}
        title={FINAL_CTA_COPY.title}
        highlightWords={FINAL_CTA_COPY.highlight}
      />

      {/* Copy paragraphs */}
      <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
        <p className="font-semibold text-white">
          {FINAL_CTA_COPY.lead}
        </p>

        {FINAL_CTA_COPY.paragraphs.slice(0, 1).map((p, i) => (
          <p key={i}>{p}</p>
        ))}

        <p className="text-white font-medium">
          {FINAL_CTA_COPY.paragraphs[1]}
        </p>

        <div className="p-5 rounded-2xl bg-[#121618] border border-[#0f5557]/60 text-sm sm:text-base text-neutral-200 text-left sm:text-center">
          {FINAL_CTA_COPY.paragraphs[2]}
        </div>

        <p className="text-neutral-400 text-sm sm:text-base">
          {FINAL_CTA_COPY.paragraphs[3]}
        </p>

        <div className="p-4 rounded-xl bg-[#0f5557]/20 border border-[#0f5557] text-sm text-[#f6f6f4] font-medium">
          {FINAL_CTA_COPY.verdict}
        </div>

        <p className="font-heading text-xl sm:text-2xl font-bold uppercase text-white pt-2">
          {FINAL_CTA_COPY.closingPush.replace(' Comece a organizar sua preparação agora.', '')}{' '}
          <span className="text-[#b38d4c]">Comece a organizar sua preparação agora.</span>
        </p>
      </div>

      {/* Big CTA */}
      <div className="pt-4 flex flex-col items-center">
        <Button
          variant="gold"
          size="xl"
          icon={<ArrowRight className="w-6 h-6 stroke-[2.5]" />}
          onClick={onOpenCheckout}
        >
          👉 {TOKENS.cta.startApp}
        </Button>

        <div className="pt-4 flex items-center gap-3 text-xs text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-[#0f5557]" />
          <span>Acesso Imediato ao APP · Garantia de {TOKENS.pricing.guaranteeDays} Dias · Suporte ao Aluno</span>
        </div>
      </div>
    </Section>
  );
};
