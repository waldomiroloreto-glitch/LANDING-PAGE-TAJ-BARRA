import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { TRACKS_COPY } from '../data/content';
import { TrackType } from '../types';

interface TrilhasSectionProps {
  onSelectTrack: (track: TrackType) => void;
}

export const TrilhasSection: React.FC<TrilhasSectionProps> = ({ onSelectTrack }) => {
  const [activeTab, setActiveTab] = useState<'ambas' | 'masculina' | 'feminina'>('ambas');

  return (
    <Section id="trilhas" variant="default" glow="none">
      {/* Section Header */}
      <SectionHeading
        kicker={TRACKS_COPY.kicker}
        kickerSecondary={TRACKS_COPY.kickerSecondary}
        title={TRACKS_COPY.title}
        subtitle={TRACKS_COPY.subtitle}
      >
        {/* Tab Selector */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex p-1 rounded-xl bg-[#121618] border border-neutral-800 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('ambas')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'ambas'
                  ? 'bg-[#0f5557] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Visualizar as Duas Trilhas
            </button>
            <button
              onClick={() => setActiveTab('masculina')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'masculina'
                  ? 'bg-[#0f5557] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Trilha Masculina
            </button>
            <button
              onClick={() => setActiveTab('feminina')}
              className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                activeTab === 'feminina'
                  ? 'bg-[#0f5557] text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Trilha Feminina
            </button>
          </div>
        </div>
      </SectionHeading>

      {/* Tracks Grid */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* TRILHA 1: TAF BARRA FIXA MASCULINA */}
        {(activeTab === 'ambas' || activeTab === 'masculina') && (
          <Card
            variant="default"
            padding="lg"
            className="flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-[#b38d4c] font-semibold uppercase">
                    TRILHA 1
                  </span>
                  <Badge variant="teal">{TRACKS_COPY.male.tag}</Badge>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[#f6f6f4] tracking-tight">
                  {TRACKS_COPY.male.title}
                </h3>
                <p className="text-sm sm:text-base font-medium text-neutral-300">
                  {TRACKS_COPY.male.audience}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 space-y-3.5">
                {TRACKS_COPY.male.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0f5557]/40 border border-[#0f5557] flex items-center justify-center shrink-0 mt-0.5 text-[#b38d4c]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm text-neutral-300">
                      <strong className="text-white">{b.bold} </strong>
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 space-y-2">
                <div className="text-xs font-mono uppercase text-neutral-400">Etapas Metodológicas Masculinas:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 1:</span> Pegada & Dead Hang
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 2:</span> Barra Australiana & Negativas
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 3:</span> Transição para 1ª Repetição
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 4:</span> Volume & Simulado de Banca
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800">
              <Button
                variant="gold"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onSelectTrack('masculina')}
              >
                ESCOLHER TRILHA MASCULINA
              </Button>
            </div>
          </Card>
        )}

        {/* TRILHA 2: BARRA FEMININA PARA TAF */}
        {(activeTab === 'ambas' || activeTab === 'feminina') && (
          <Card
            variant="default"
            padding="lg"
            className="flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-[#b38d4c] font-semibold uppercase">
                    TRILHA 2
                  </span>
                  <Badge variant="teal">{TRACKS_COPY.female.tag}</Badge>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-[#f6f6f4] tracking-tight">
                  {TRACKS_COPY.female.title}
                </h3>
                <div className="text-xs font-mono text-[#b38d4c] font-semibold">
                  {TRACKS_COPY.female.sub}
                </div>
                <p className="text-sm sm:text-base font-medium text-neutral-300">
                  {TRACKS_COPY.female.audience}
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800 space-y-3.5">
                {TRACKS_COPY.female.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0f5557]/40 border border-[#0f5557] flex items-center justify-center shrink-0 mt-0.5 text-[#b38d4c]">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <p className="text-sm text-neutral-300">
                      <strong className="text-white">{b.bold} </strong>
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#0b0d0e] border border-neutral-800 space-y-2">
                <div className="text-xs font-mono uppercase text-neutral-400">Etapas Metodológicas Femininas:</div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 1:</span> Estabilidade Escapular & Pegada
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 2:</span> Isometria com Apoio Gradual
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 3:</span> Sustentação Queixo Livre (5s a 15s)
                  </div>
                  <div className="p-2 rounded bg-[#161c1e] text-neutral-300 border border-neutral-800">
                    <span className="text-[#b38d4c] font-bold block">Fase 4:</span> Bater Meta e Margem de Segurança
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800">
              <Button
                variant="gold"
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => onSelectTrack('feminina')}
              >
                ESCOLHER TRILHA FEMININA
              </Button>
            </div>
          </Card>
        )}

      </div>
    </Section>
  );
};
