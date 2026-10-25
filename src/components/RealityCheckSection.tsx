import React from 'react';
import { Calendar, ArrowRight, Quote } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface RealityCheckSectionProps {
  onOpenCheckout: () => void;
}

export const RealityCheckSection: React.FC<RealityCheckSectionProps> = ({ onOpenCheckout }) => {
  return (
    <Section variant="alt" glow="teal" maxWidth="4xl">
      {/* Section Header */}
      <SectionHeading
        kicker="A REALIDADE DO CONCURSO"
        kickerSecondary="ALERTA ESTRATÉGICO"
        title="VOCÊ PODE ESTAR A UM EDITAL DE REALIZAR SEU OBJETIVO. MAS A BARRA AINDA ESTÁ NO CAMINHO."
        highlightWords="MAS A BARRA AINDA ESTÁ NO CAMINHO."
      />

      {/* Narrative Card */}
      <Card variant="elevated" padding="lg" className="mt-12 space-y-6 text-neutral-300 leading-relaxed text-base sm:text-lg">
        <p className="font-medium text-white/95 text-lg sm:text-xl">
          Você estudou. Fez questões. Abriu mão de tempo livre. Talvez tenha passado meses tentando conquistar uma vaga que pode mudar sua vida.
        </p>

        <p className="text-neutral-300">
          Então chega a parte física.
        </p>

        <p className="text-neutral-300">
          Você olha para o requisito da barra fixa e percebe que existe uma diferença incômoda entre o candidato que você quer ser e o desempenho que consegue entregar hoje.
        </p>

        <p className="text-neutral-400">
          Talvez você ainda não faça nenhuma repetição. Talvez consiga uma ou duas, mas precise de mais. Talvez treine há algum tempo e continue sem saber se está seguindo uma estratégia adequada.
        </p>

        {/* Doubt callout box */}
        <div className="p-6 rounded-2xl bg-[#0b0d0e] border border-[#b38d4c]/50 relative my-6">
          <Quote className="w-8 h-8 text-[#b38d4c]/30 absolute top-4 right-4 pointer-events-none" />
          <div className="text-xs font-mono text-[#b38d4c] uppercase tracking-wider mb-2 font-semibold">
            E quanto mais o TAF se aproxima, mais pesada fica a dúvida:
          </div>
          <p className="font-heading text-xl sm:text-2xl font-bold uppercase text-white tracking-wide leading-snug">
            “E se eu fizer tudo certo na prova teórica e acabar ficando pelo caminho na etapa física?”
          </p>
        </div>

        <p className="text-neutral-300">
          O problema é que a internet está cheia de exercícios isolados, dicas contraditórias e rotinas de pessoas que já estão em outro nível.
        </p>

        <p className="text-neutral-400">
          Um vídeo recomenda uma coisa. Outro recomenda o contrário. Você tenta montar seu próprio treino, muda de estratégia e fica sem um caminho consistente para acompanhar.
        </p>

        <div className="flex items-center gap-3 py-2 text-[#b38d4c] font-heading font-bold text-lg uppercase">
          <Calendar className="w-5 h-5 text-[#b38d4c]" />
          <span>Enquanto isso, o calendário continua avançando.</span>
        </div>

        <p className="text-neutral-300">
          Você não precisa de mais uma coleção de vídeos salvos. Precisa transformar sua preparação em uma rotina que consiga consultar, executar e acompanhar.
        </p>

        <div className="p-5 rounded-2xl bg-[#0f5557]/20 border border-[#0f5557] space-y-2">
          <div className="text-sm font-bold uppercase text-white">É essa a proposta do Protocolo TAJ — TAF Barra Fixa.</div>
          <p className="text-sm text-neutral-300">
            Um programa de preparação organizado em um APP, com trilhas masculina e feminina, para ajudar você a estruturar o treino, compreender as etapas da progressão e acompanhar seu desenvolvimento.
          </p>
        </div>

        {/* 3 "Imagine" points */}
        <div className="space-y-3 pt-2">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#b38d4c] mt-2 shrink-0"></span>
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Imagine</strong> abrir o aplicativo e encontrar a orientação do seu treino, em vez de gastar mais uma sessão tentando decidir por onde começar.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#b38d4c] mt-2 shrink-0"></span>
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Imagine</strong> conseguir olhar para seus registros e identificar o que já melhorou e o que ainda precisa desenvolver.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 rounded-full bg-[#b38d4c] mt-2 shrink-0"></span>
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white">Imagine</strong> chegar mais perto do TAF com menos improviso e mais clareza sobre sua preparação.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-800 space-y-3">
          <p className="font-heading text-lg sm:text-xl font-bold uppercase text-white">
            Você não controla todas as variáveis do concurso. <span className="text-[#b38d4c]">Mas pode começar a controlar melhor a maneira como se prepara.</span>
          </p>
          <p className="text-sm text-neutral-400 font-medium">
            Não espere a data da prova se aproximar ainda mais para organizar o que pode começar a fazer agora.
          </p>
        </div>

        <div className="pt-4 text-center">
          <Button
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            onClick={onOpenCheckout}
          >
            COMEÇAR MINHA PREPARAÇÃO AGORA
          </Button>
        </div>
      </Card>
    </Section>
  );
};
