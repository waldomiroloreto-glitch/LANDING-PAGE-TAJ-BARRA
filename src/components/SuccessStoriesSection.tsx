import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, TrendingUp, Quote, ArrowRight, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TrackType } from '../types';
import { ProgressMetricsSubSection, CANDIDATE_METRICS_DATA } from './ProgressMetricsSubSection';

interface Testimonial {
  id: string;
  name: string;
  concurso: string;
  banca: string;
  track: TrackType;
  before: string;
  after: string;
  timeframe: string;
  quote: string;
  keyWin: string;
  avatarInitials: string;
}

interface SuccessStoriesSectionProps {
  onOpenCheckout: (track?: TrackType) => void;
}

export const SuccessStoriesSection: React.FC<SuccessStoriesSectionProps> = ({ onOpenCheckout }) => {
  const [filter, setFilter] = useState<'todos' | 'masculina' | 'feminina'>('todos');

  const filteredTestimonials = CANDIDATE_METRICS_DATA.filter(
    (item) => filter === 'todos' || item.track === filter
  );

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-[#0e1214] relative border-b border-[#0f5557]/30 reveal-on-scroll">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#0f5557]/15 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#b38d4c]/10 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b38d4c] font-semibold">
            <span>HISTÓRIAS DE SUPERAÇÃO NO TAF</span>
            <span className="text-neutral-600">/</span>
            <span>DO ZERO AO EDITAL</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#f6f6f4]">
            QUEM SAIU DO IMPROVISO E <span className="text-[#b38d4c]">CONQUISTOU A BARRA</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Veja a evolução real de candidatos que estavam estagnados ou que não conseguiam fazer nenhuma barra, e construíram a força necessária com o Protocolo TAJ.
          </p>

          {/* Interactive Filter Controls (Functional button elements) */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1 rounded-xl bg-[#121618] border border-neutral-800 text-xs font-semibold">
              <button
                onClick={() => setFilter('todos')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'todos'
                    ? 'bg-[#0f5557] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Todas as Histórias ({CANDIDATE_METRICS_DATA.length})
              </button>
              <button
                onClick={() => setFilter('masculina')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'masculina'
                    ? 'bg-[#0f5557] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Trilha Masculina (Repetições)
              </button>
              <button
                onClick={() => setFilter('feminina')}
                className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
                  filter === 'feminina'
                    ? 'bg-[#0f5557] text-white shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Trilha Feminina (Isometria)
              </button>
            </div>
          </div>
        </div>

        {/* Progress Metrics Sub-Section with dynamically calculated averages from mock data */}
        <ProgressMetricsSubSection currentTrackFilter={filter} />

        {/* Testimonials Bento Grid with Scroll Slide-Up & Fade-In */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#121618] border border-[#0f5557]/50 hover:border-[#b38d4c]/70 transition-colors flex flex-col justify-between shadow-xl group cursor-default"
              >
                <div className="space-y-4">
                  
                  {/* Header of card: Avatar + Candidate details */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#0f5557] to-[#121618] border border-[#b38d4c]/50 flex items-center justify-center text-sm font-heading font-black text-[#b38d4c] shadow-sm">
                        {item.avatarInitials}
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold uppercase text-white leading-tight">
                          {item.name}
                        </h3>
                        <div className="text-xs text-neutral-400">
                          {item.concurso}
                        </div>
                      </div>
                    </div>

                    {/* Banca Tag */}
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0b0d0e] border border-neutral-800 text-neutral-300">
                      Banca {item.banca}
                    </span>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-[#b38d4c]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#b38d4c]" />
                    ))}
                    <span className="text-[11px] font-mono text-neutral-400 ml-1.5">
                      {item.timeframe}
                    </span>
                  </div>

                  {/* Transformation Delta Box */}
                  <div className="p-3.5 rounded-xl bg-[#0b0d0e] border border-neutral-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-400 font-mono text-[11px]">PONTO INICIAL:</span>
                      <span className="text-rose-400 font-medium text-right text-[11px]">{item.before}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-neutral-800/80">
                      <span className="text-neutral-400 font-mono text-[11px]">RESULTADO TAF:</span>
                      <span className="text-[#b38d4c] font-bold text-right text-[12px]">{item.after}</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="relative pt-1">
                    <Quote className="w-6 h-6 text-[#0f5557]/40 absolute -top-1 -left-1 pointer-events-none" />
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pl-4 italic">
                      "{item.quote}"
                    </p>
                  </div>

                </div>

                {/* Card Footer: Key Win Badge */}
                <div className="pt-4 mt-5 border-t border-neutral-800/80 flex items-center gap-2 text-xs text-[#0f5557] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#0f5557] shrink-0" />
                  <span className="text-neutral-300 text-[11px] font-medium">{item.keyWin}</span>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-14 text-center space-y-3">
          <p className="text-sm text-neutral-400">
            Você também pode sair do improviso e garantir a sua aprovação na etapa física.
          </p>
          <button
            onClick={() => onOpenCheckout()}
            className="px-8 py-4 rounded-xl font-heading font-bold uppercase tracking-wider text-black bg-[#b38d4c] hover:bg-[#c99f58] transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg glow-gold"
          >
            <span>QUERO ESCREVER MINHA HISTÓRIA DE APROVAÇÃO</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
