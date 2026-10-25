import React from 'react';
import { PARA_QUEM } from '../data/content';
import { Target, Compass, AlertTriangle, Sparkles, Smartphone, CheckCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

export const ParaQuemSection: React.FC = () => {
  const icons = [
    <Target className="w-5 h-5 text-[#b38d4c]" />,
    <Compass className="w-5 h-5 text-[#b38d4c]" />,
    <AlertTriangle className="w-5 h-5 text-[#b38d4c]" />,
    <Sparkles className="w-5 h-5 text-[#b38d4c]" />,
    <Smartphone className="w-5 h-5 text-[#b38d4c]" />,
    <CheckCircle className="w-5 h-5 text-[#b38d4c]" />,
  ];

  return (
    <Section id="para-quem" variant="default" glow="none">
      {/* Section Header */}
      <SectionHeading
        kicker="PERFIL DO CANDIDATO"
        kickerSecondary="IDENTIFICAÇÃO"
        title="PARA QUEM É O PROTOCOLO TAJ?"
        subtitle="Desenvolvido para candidatos que buscam seriedade, método e um plano compatível com o seu ponto de partida."
      />

      {/* 6 Profiles Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARA_QUEM.map((item, index) => (
          <Card
            key={item.num}
            variant="default"
            padding="md"
            className="flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#0f5557]/30 border border-[#0f5557] flex items-center justify-center">
                  {icons[index]}
                </div>
                <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-[#b38d4c] transition-colors">
                  0{item.num}
                </span>
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white group-hover:text-[#b38d4c] transition-colors leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] text-[#0f5557] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0f5557]"></span>
              <span className="text-neutral-400">Atendido no Protocolo</span>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
