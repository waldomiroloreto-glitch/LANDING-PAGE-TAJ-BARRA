import React from 'react';
import { BONUSES } from '../data/content';
import { BonusItem } from '../types';
import { FileText, TrendingUp, CheckSquare, Activity, Eye, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { TOKENS } from '../theme/tokens';

interface BonusSectionProps {
  onOpenBonus: (bonus: BonusItem) => void;
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenBonus, onOpenCheckout }) => {
  const bonusIcons = [
    <FileText key="1" className="w-6 h-6 text-[#b38d4c]" />,
    <TrendingUp key="2" className="w-6 h-6 text-[#b38d4c]" />,
    <CheckSquare key="3" className="w-6 h-6 text-[#b38d4c]" />,
    <Activity key="4" className="w-6 h-6 text-[#b38d4c]" />
  ];

  return (
    <Section id="bonus" variant="alt" glow="teal">
      {/* Section Header */}
      <SectionHeading
        kicker="MATERIAIS COMPLEMENTARES & MÓDULO ESTRATÉGICO"
        kickerSecondary="100% INCLUSOS HOJE"
        title="🎁 BÔNUS ESTRATÉGICOS PARA ACELERAR SUA APROVAÇÃO"
        subtitle="Ferramentas reais de organização e módulo biomecânico de core para eliminar incertezas, evitar repetições invalidadas e chegar ao dia do teste com total segurança."
      />

      {/* Strategic Synergy Callout Banner */}
      <div className="mt-10 max-w-5xl mx-auto rounded-2xl bg-gradient-to-r from-[#0f5557]/40 via-[#121618] to-[#0f5557]/20 border border-[#0f5557] p-5 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#0f5557] border border-[#b38d4c] flex items-center justify-center text-[#b38d4c] shrink-0 shadow-md">
            <Zap className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="space-y-1 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#b38d4c]">
                Módulo Bônus Estratégico Integrado
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0f5557] text-[#f6f6f4] font-semibold">
                Sem Custo a Mais
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-semibold">
                Atividade Sinergista Muscular
              </span>
            </div>
            <h4 className="font-heading text-base sm:text-lg font-bold text-white uppercase">
              Por que o Treinamento de Abdominal & Core foi integrado sem custo adicional?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Na barra fixa, a musculatura do abdômen e do core atua em <strong className="text-white">atividade sinergista direta</strong> com os membros superiores e as dorsais. Um core enfraquecido gera balanço de pernas, perda de tensão corporal e hiperextensão lombar — o que leva os avaliadores do concurso a desclassificarem repetições por "kipping". Ao integrar esse módulo ao aplicativo sem nenhum acréscimo de valor, garantimos estabilidade rígida em bloco, elevamos a eficácia de cada repetição e facilitamos sua aprovação.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Bonuses Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {BONUSES.map((bonus, idx) => {
          const isCoreBonus = bonus.id === 'bonus-core';
          return (
            <Card
              key={bonus.id}
              variant="default"
              padding="md"
              className={`flex flex-col justify-between group transition-all ${
                isCoreBonus
                  ? 'border-[#b38d4c]/80 bg-gradient-to-b from-[#141d20] to-[#121618] ring-1 ring-[#b38d4c]/40'
                  : ''
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                    isCoreBonus 
                      ? 'bg-[#0f5557] border border-[#b38d4c]' 
                      : 'bg-[#0f5557]/30 border border-[#0f5557]'
                  }`}>
                    {bonusIcons[idx]}
                  </div>
                  <Badge variant={isCoreBonus ? 'teal' : 'gold'}>
                    {isCoreBonus ? 'INCLUSO · R$ 0' : 'GRATUITO'}
                  </Badge>
                </div>

                <div>
                  <span className="text-[11px] font-mono tracking-wider text-[#b38d4c] font-bold block uppercase">
                    {bonus.number}
                  </span>
                  <h3 className="font-heading text-lg sm:text-xl font-black uppercase text-white mt-1 group-hover:text-[#b38d4c] transition-colors leading-tight min-h-[48px]">
                    {bonus.title}
                  </h3>
                </div>

                <div className="p-2.5 rounded-lg bg-[#0b0d0e] border border-neutral-800 text-[11px] text-[#f6f6f4] font-medium italic">
                  "{bonus.subtitle}"
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-4">
                  {bonus.description}
                </p>

                <div className="pt-1">
                  <span className="text-[10px] font-mono text-[#0f5557] uppercase tracking-wider block font-semibold truncate">
                    • {bonus.tag}
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-800 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  fullWidth
                  icon={<Eye className="w-3.5 h-3.5 text-[#b38d4c]" />}
                  iconPosition="left"
                  onClick={() => onOpenBonus(bonus)}
                >
                  {TOKENS.cta.bonusPreview}
                </Button>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center space-y-3">
        <Button
          variant="gold"
          size="lg"
          icon={<ArrowRight className="w-4 h-4" />}
          onClick={onOpenCheckout}
        >
          {TOKENS.cta.bonusClaim}
        </Button>
        <p className="text-xs text-neutral-400">
          Todos os 4 bônus, checklists e o módulo de atividade sinergista de core são liberados imediatamente no APP.
        </p>
      </div>
    </Section>
  );
};
