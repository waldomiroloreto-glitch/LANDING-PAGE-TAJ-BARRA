import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Smartphone } from 'lucide-react';
import { Button } from './ui/Button';
import { TOKENS } from '../theme/tokens';
import { HERO_COPY } from '../data/content';

interface HeroProps {
  onOpenCheckout: (track?: 'masculina' | 'feminina') => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onOpenCalculator }) => {
  const scrollToTracks = () => {
    const el = document.getElementById('trilhas');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#0f5557]/30 reveal-on-scroll is-visible">
      {/* Background atmospheric glows */}
      <div 
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#0f5557]/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-0 left-10 w-[420px] h-[420px] bg-[#b38d4c]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle tactical grid lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className={`relative ${TOKENS.layout.maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-wider text-[#b38d4c] uppercase font-semibold">
              <span className="w-2 h-2 bg-[#b38d4c] rounded-full inline-block"></span>
              <span>{HERO_COPY.kicker}</span>
              <span className="text-neutral-600">/</span>
              <span className="text-neutral-400">{HERO_COPY.kickerSecondary}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#f6f6f4] uppercase leading-[1.05] text-balance">
              Preparação de teste masculino e feminino para chegar no TAF com um <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b38d4c] via-[#e2be7a] to-[#b38d4c]">{HERO_COPY.headlineHighlight}</span>, não com improvisos.
            </h1>

            {/* Subtitles from tokenized copy */}
            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              <p className="font-medium text-white/95">
                {HERO_COPY.subtitles[0]}
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                {HERO_COPY.subtitles[1]}
              </p>
              <p className="text-neutral-400 text-sm sm:text-base">
                {HERO_COPY.subtitles[2]}
              </p>
              
              <div className="p-4 rounded-xl bg-[#121618] border border-[#0f5557]/50 shadow-inner flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#b38d4c] mt-2 shrink-0"></div>
                <p className="font-heading text-lg sm:text-xl font-bold tracking-wide uppercase text-[#f6f6f4]">
                  Uma preparação. Duas trilhas específicas. Um objetivo: <span className="text-[#b38d4c]">chegar ao teste sabendo o que precisa executar.</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="gold"
                size="lg"
                icon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                onClick={scrollToTracks}
              >
                {TOKENS.cta.heroChooseTrack}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOpenCalculator}
              >
                {TOKENS.cta.heroDiagnostic}
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400 border-t border-neutral-800/80">
              {HERO_COPY.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0f5557] stroke-[2.5]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual / Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-b from-[#0f5557] to-[#b38d4c] rounded-3xl opacity-30 blur-lg"></div>

              <div className="relative rounded-2xl bg-[#121618] border border-[#0f5557]/60 overflow-hidden shadow-2xl p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0f5557]/40 border border-[#b38d4c]/40 flex items-center justify-center text-[#b38d4c]">
                      <Smartphone className="w-5 h-5 text-[#b38d4c]" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-neutral-400">APLICATIVO DO ALUNO</div>
                      <div className="text-sm font-heading font-bold text-white uppercase tracking-wider">{TOKENS.brand.name}</div>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-[#0f5557]/50 text-[11px] font-mono text-[#f6f6f4] border border-[#0f5557]">
                    {TOKENS.brand.durationDays} DIAS
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 p-1 bg-[#0b0d0e] rounded-xl border border-neutral-800 text-xs font-semibold">
                  <div className="py-2 px-3 text-center rounded-lg bg-[#0f5557] text-white shadow-sm flex items-center justify-center gap-1.5">
                    <span>Trilha Masculina</span>
                  </div>
                  <div className="py-2 px-3 text-center rounded-lg text-neutral-400 hover:text-white transition-colors flex items-center justify-center gap-1.5">
                    <span>Trilha Feminina</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0e1214] border border-[#0f5557]/40 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-400">DIAGNÓSTICO INICIAL</span>
                    <span className="text-[#b38d4c] font-semibold">Semana 01 / 04</span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-neutral-300">Ponto de Partida:</span>
                      <span className="text-white font-mono">0 a 2 Repetições</span>
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#0f5557] to-[#b38d4c] h-full w-[42%] rounded-full"></div>
                    </div>
                    <div className="flex justify-between text-[11px] text-neutral-400 font-mono">
                      <span>Início: Adaptação Escapular</span>
                      <span className="text-[#b38d4c]">Alvo: Padrão Edital</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-800/80 space-y-2 text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5557] shrink-0" />
                      <span>Orientações de pegada pronada & supinada</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5557] shrink-0" />
                      <span>Exercícios de regressão para quem faz 0 barras</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0f5557] shrink-0" />
                      <span>Cronômetro oficial de sustentação para mulheres</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="gold"
                  fullWidth
                  onClick={() => onOpenCheckout()}
                >
                  ACESSAR PLANO DE 30 DIAS NO APP
                </Button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                  <Shield className="w-3.5 h-3.5 text-[#0f5557]" />
                  <span>Ambiente Seguro · Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
