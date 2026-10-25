import React, { useState } from 'react';
import { Smartphone, Play, Timer, TrendingUp, CheckCircle, Dumbbell, ArrowRight, Activity } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { GoalProgressBar } from './GoalProgressBar';
import { APP_SHOWCASE_COPY } from '../data/content';
import { TOKENS } from '../theme/tokens';

interface AppShowcaseSectionProps {
  onOpenCheckout: () => void;
}

export const AppShowcaseSection: React.FC<AppShowcaseSectionProps> = ({ onOpenCheckout }) => {
  const [activeScreen, setActiveScreen] = useState<'treino' | 'cronometro' | 'padrao' | 'diario' | 'core'>('treino');

  return (
    <Section id="app-preview" variant="alt" glow="both">
      {/* Header with centralized copy */}
      <SectionHeading
        kicker={APP_SHOWCASE_COPY.kicker}
        kickerSecondary={APP_SHOWCASE_COPY.kickerSecondary}
        title={APP_SHOWCASE_COPY.title}
      >
        <p className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#b38d4c] tracking-wide">
          {APP_SHOWCASE_COPY.subtitle}
        </p>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          {APP_SHOWCASE_COPY.description}
        </p>
      </SectionHeading>

      {/* 3 Pillars */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {APP_SHOWCASE_COPY.pillars.map((pillar) => (
          <Card key={pillar.num} variant="default" padding="md">
            <div className="w-10 h-10 rounded-lg bg-[#0f5557]/40 border border-[#0f5557] flex items-center justify-center text-[#b38d4c] mb-4 font-mono font-bold">
              {pillar.num}
            </div>
            <h3 className="font-heading text-lg font-bold uppercase text-white mb-2">
              {pillar.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {pillar.desc}
            </p>
          </Card>
        ))}
      </div>

      {/* Lead sentence */}
      <div className="mt-10 text-center">
        <p className="font-heading text-lg sm:text-xl font-bold tracking-wider uppercase text-[#f6f6f4] inline-block px-6 py-2.5 rounded-full bg-[#14181a] border border-[#0f5557]/70">
          {APP_SHOWCASE_COPY.callout}
        </p>
      </div>

      {/* Interactive App Screen Showcase */}
      <div className="mt-14 max-w-5xl mx-auto rounded-3xl bg-[#121618] border border-[#0f5557]/60 p-6 sm:p-10 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Selector Column */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-[#b38d4c] uppercase tracking-wider font-semibold">
              NAVEGUE PELO APP
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white">
              O que você vê na tela do celular
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Toque nos módulos abaixo para visualizar como o conteúdo e as ferramentas são apresentadas na interface:
            </p>

            <div className="space-y-2 pt-2">
              <button
                onClick={() => setActiveScreen('treino')}
                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                  activeScreen === 'treino'
                    ? 'bg-[#0f5557] text-white border-[#b38d4c]/60 shadow-md'
                    : 'bg-[#0b0d0e] text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Dumbbell className="w-4 h-4 text-[#b38d4c]" />
                  <span className="text-sm font-semibold">Plano de Treino do Dia</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                onClick={() => setActiveScreen('cronometro')}
                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                  activeScreen === 'cronometro'
                    ? 'bg-[#0f5557] text-white border-[#b38d4c]/60 shadow-md'
                    : 'bg-[#0b0d0e] text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Timer className="w-4 h-4 text-[#b38d4c]" />
                  <span className="text-sm font-semibold">Timer de Descanso & Isometria</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                onClick={() => setActiveScreen('padrao')}
                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                  activeScreen === 'padrao'
                    ? 'bg-[#0f5557] text-white border-[#b38d4c]/60 shadow-md'
                    : 'bg-[#0b0d0e] text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Play className="w-4 h-4 text-[#b38d4c]" />
                  <span className="text-sm font-semibold">Vídeos com Padrão do Edital</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                onClick={() => setActiveScreen('diario')}
                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                  activeScreen === 'diario'
                    ? 'bg-[#0f5557] text-white border-[#b38d4c]/60 shadow-md'
                    : 'bg-[#0b0d0e] text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-4 h-4 text-[#b38d4c]" />
                  <span className="text-sm font-semibold">Diário de Evolução TAJ</span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>

              <button
                onClick={() => setActiveScreen('core')}
                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between border cursor-pointer ${
                  activeScreen === 'core'
                    ? 'bg-[#0f5557] text-white border-[#b38d4c]/60 shadow-md'
                    : 'bg-[#0b0d0e] text-neutral-300 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Activity className="w-4 h-4 text-[#b38d4c]" />
                  <div>
                    <span className="text-sm font-semibold block leading-tight">Módulo Bônus: Core & Abdômen</span>
                    <span className="text-[10px] text-[#b38d4c] font-mono">Atividade Sinergista · Sem Custo</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            </div>

            <div className="pt-2">
              <Button
                variant="gold"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={onOpenCheckout}
              >
                GARANTIR MEU ACESSO AO APP
              </Button>
            </div>
          </div>

          {/* Simulated Phone Device */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[320px] rounded-[36px] bg-[#050607] border-[6px] border-[#252c30] p-3 shadow-2xl">
              <div className="w-24 h-4 bg-[#252c30] rounded-full mx-auto mb-3 flex items-center justify-center">
                <div className="w-3 h-1 bg-neutral-600 rounded-full"></div>
              </div>

              <div className="w-full bg-[#0d1012] rounded-[24px] p-4 text-white min-h-[460px] flex flex-col justify-between border border-neutral-800">
                <div className="flex items-center justify-between border-b border-neutral-800/80 pb-2.5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#b38d4c]"></div>
                    <span className="text-[11px] font-mono font-bold tracking-wider">{TOKENS.brand.name}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#0f5557] bg-[#0f5557]/30 px-2 py-0.5 rounded border border-[#0f5557]">
                    PROCESSO ATIVO
                  </span>
                </div>

                <div className="py-3 flex-1 flex flex-col justify-center">
                  {activeScreen === 'treino' && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">TREINO #08 · FASE 2</span>
                        <span className="text-[#b38d4c] font-bold font-mono">30 MIN</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#14191c] border border-neutral-800 space-y-2">
                        <div className="text-xs font-bold text-white uppercase">1. Barra Negativa Controlada</div>
                        <div className="text-[11px] text-neutral-400">4 séries × 3 repetições (descida em 5 seg)</div>
                        <div className="flex items-center justify-between text-[10px] text-[#0f5557] font-semibold bg-[#0f5557]/20 p-1.5 rounded">
                          <span>Descanso prescrito: 90s</span>
                          <CheckCircle className="w-3 h-3 text-[#0f5557]" />
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-[#14191c] border border-neutral-800 space-y-2">
                        <div className="text-xs font-bold text-white uppercase">2. Ativação Escapular na Barra</div>
                        <div className="text-[11px] text-neutral-400">3 séries × 8 repetições (pausa 2 seg)</div>
                        <div className="flex items-center justify-between text-[10px] text-[#b38d4c] font-semibold bg-[#b38d4c]/10 p-1.5 rounded">
                          <span>Foco: Não dobrar o cotovelo</span>
                          <span>Executar</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'cronometro' && (
                    <div className="space-y-4 text-center">
                      <span className="text-[11px] font-mono text-neutral-400">ISOMETRIA DE SUSTENTAÇÃO</span>
                      <div className="w-32 h-32 mx-auto rounded-full border-4 border-[#0f5557] border-t-[#b38d4c] flex flex-col items-center justify-center bg-[#121618]">
                        <span className="font-mono text-3xl font-black text-white">00:25</span>
                        <span className="text-[9px] text-[#b38d4c] font-mono">SEGUNDOS</span>
                      </div>
                      <div className="text-xs text-neutral-300">
                        Meta do edital atingida! Mantenha o queixo alinhado e sem balançar o corpo.
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 py-1.5 rounded-lg bg-[#0f5557] text-white text-xs font-semibold">Iniciar</button>
                        <button className="flex-1 py-1.5 rounded-lg bg-neutral-800 text-neutral-300 text-xs">Pausar</button>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'padrao' && (
                    <div className="space-y-3">
                      <div className="aspect-video bg-neutral-900 rounded-xl relative border border-neutral-800 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="w-10 h-10 rounded-full bg-[#b38d4c] flex items-center justify-center text-black shadow-lg">
                          <Play className="w-5 h-5 ml-0.5 fill-black" />
                        </div>
                        <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white">
                          Ângulo Oficial do Avaliador
                        </span>
                      </div>
                      <div className="text-xs font-bold text-white">Padrão Correto vs Erros Mais Comuns</div>
                      <ul className="text-[11px] text-neutral-300 space-y-1">
                        <li>• Posição do polegar envolvente</li>
                        <li>• Extensão articular de 180° no final</li>
                        <li>• O que zera a repetição na banca</li>
                      </ul>
                    </div>
                  )}

                  {activeScreen === 'diario' && (
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs">
                        <span className="text-neutral-400">REGISTRO DE DESEMPENHO</span>
                        <span className="text-emerald-400 font-mono font-bold">+2 Repetições</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#14191c] border border-neutral-800 space-y-2">
                        <div className="flex justify-between text-[11px]">
                          <span className="text-neutral-400">Semana 1:</span>
                          <span className="text-white font-mono">0 repetições / 4s sust.</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-neutral-400">Semana 2:</span>
                          <span className="text-white font-mono">1 repetição / 11s sust.</span>
                        </div>
                        <div className="flex justify-between text-[11px]">
                          <span className="text-neutral-400">Semana 3:</span>
                          <span className="text-[#b38d4c] font-mono font-bold">3 repetições / 19s sust.</span>
                        </div>
                      </div>
                      <div className="text-[10px] text-neutral-400 text-center">
                        Gráfico atualizado após cada treino executado.
                      </div>
                    </div>
                  )}

                  {activeScreen === 'core' && (
                    <div className="space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-neutral-400">MÓDULO BÔNUS · CORE</span>
                        <span className="text-[#b38d4c] font-bold font-mono">100% INCLUSO</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#14191c] border border-[#0f5557] space-y-1.5">
                        <div className="text-xs font-bold text-white uppercase">1. Hollow Body na Barra</div>
                        <div className="text-[11px] text-neutral-300">3 séries × 20s · Trava do tronco em bloco</div>
                        <div className="flex items-center justify-between text-[10px] text-[#b38d4c] font-semibold bg-[#b38d4c]/10 p-1.5 rounded">
                          <span>Sinergia: Elimina balanço e pedaladas</span>
                          <CheckCircle className="w-3 h-3 text-[#b38d4c]" />
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-[#14191c] border border-neutral-800 space-y-1">
                        <div className="text-xs font-bold text-white uppercase">2. Elevação Estrita de Joelhos</div>
                        <div className="text-[11px] text-neutral-400">3 séries × 8 reps sem pêndulo lombar</div>
                      </div>
                      <div className="text-[10px] text-emerald-400/90 text-center font-mono">
                        Atividade sinergista para eficácia e aprovação
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-neutral-800/80 flex justify-around text-neutral-500 text-[10px]">
                  <span className="text-[#b38d4c] font-bold">Treinos</span>
                  <span>Progresso</span>
                  <span>Critérios</span>
                  <span>Perfil</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Symbolic Load & Goal Progress Visualizer (Powered by Recharts) */}
      <div className="mt-14 max-w-5xl mx-auto">
        <GoalProgressBar />
      </div>
    </Section>
  );
};
