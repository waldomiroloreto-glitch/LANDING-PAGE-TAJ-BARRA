import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Card } from './ui/Card';

export const TrintaDiasSection: React.FC = () => {
  return (
    <Section variant="default" glow="none" maxWidth="4xl">
      {/* Section Header */}
      <SectionHeading
        kicker="CICLO DE 30 DIAS"
        kickerSecondary="EXPECTATIVAS REAIS"
        title="O QUE VOCÊ PODE ESPERAR DOS PRÓXIMOS 30 DIAS"
      />

      {/* 3 Pillars */}
      <div className="mt-12 space-y-6">
        <Card variant="default" padding="md" className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#0f5557]/30 border border-[#0f5557] flex items-center justify-center shrink-0 text-[#b38d4c] font-heading font-black text-2xl">
            1
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
              Sair da confusão e organizar sua rotina
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Tenha mais clareza sobre como consultar seu treino, acompanhar as orientações e encaixar a preparação na sua rotina.
            </p>
          </div>
        </Card>

        <Card variant="default" padding="md" className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#0f5557]/30 border border-[#0f5557] flex items-center justify-center shrink-0 text-[#b38d4c] font-heading font-black text-2xl">
            2
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
              Entender melhor seu ponto de partida
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Registre seu desempenho e acompanhe os exercícios realizados. Assim, você pode observar mudanças concretas, em vez de depender apenas da impressão de que está melhorando.
            </p>
          </div>
        </Card>

        <Card variant="default" padding="md" className="flex flex-col sm:flex-row items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-[#0f5557]/30 border border-[#0f5557] flex items-center justify-center shrink-0 text-[#b38d4c] font-heading font-black text-2xl">
            3
          </div>
          <div className="space-y-2">
            <h3 className="font-heading text-xl sm:text-2xl font-bold uppercase text-white">
              Preparar-se com mais direção para o TAF
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Conheça o padrão exigido no edital, identifique a distância entre seu nível atual e a meta e mantenha o foco no desenvolvimento das capacidades necessárias.
            </p>
          </div>
        </Card>
      </div>

      {/* Atenção disclaimer */}
      <div className="mt-8 p-6 rounded-2xl bg-[#161a1d] border border-amber-500/30 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs sm:text-sm text-neutral-300 leading-relaxed">
          <span className="font-bold text-amber-300 uppercase tracking-wider block font-mono text-xs">
            Atenção
          </span>
          <p>
            Os 30 dias representam o período proposto para organizar e aplicar o protocolo. Não existe garantia de atingir uma quantidade específica de repetições ou ser aprovado nesse prazo. Os resultados variam conforme o condicionamento inicial, a regularidade, a recuperação e as exigências da prova.
          </p>
        </div>
      </div>
    </Section>
  );
};
