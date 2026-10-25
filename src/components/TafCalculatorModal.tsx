import React, { useState } from 'react';
import { X, Dumbbell, Award, ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import { TrackType } from '../types';

interface TafCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartTrack: (track: TrackType) => void;
}

export const TafCalculatorModal: React.FC<TafCalculatorModalProps> = ({
  isOpen,
  onClose,
  onStartTrack,
}) => {
  if (!isOpen) return null;

  const [gender, setGender] = useState<TrackType>('masculina');
  const [level, setLevel] = useState<string>('zero');
  const [weeks, setWeeks] = useState<string>('4_8');
  const [showResult, setShowResult] = useState<boolean>(false);

  const maleOptions = [
    { id: 'zero', label: '0 repetições (não consigo subir)' },
    { id: 'low', label: '1 a 2 repetições (com muito esforço)' },
    { id: 'mid', label: '3 a 4 repetições (estagnado)' },
    { id: 'high', label: '5+ repetições (preciso lapidar execução)' },
  ];

  const femaleOptions = [
    { id: 'zero', label: '0 segundos (não consigo sustentar)' },
    { id: 'low', label: '5 a 10 segundos de sustentação' },
    { id: 'mid', label: '11 a 20 segundos de sustentação' },
    { id: 'high', label: 'Mais de 20 segundos / repetições completas' },
  ];

  const currentOptions = gender === 'masculina' ? maleOptions : femaleOptions;

  const calculateResult = () => {
    setShowResult(true);
  };

  const getDiagnosis = () => {
    if (gender === 'masculina') {
      if (level === 'zero') {
        return {
          phase: 'Fase 1: Ativação Escapular, Dead Hang e Barra Australiana',
          focus: 'Desenvolvimento inicial de força de tração e fortalecimento dos tendões do antebraço e dorsais.',
          routine: '3 sessões semanais de 30min com foco em contração isométrica e descida negativa.',
          editalMargin: 'Construção da base necessária para desbloquear as primeiras 3 repetições limpas.'
        };
      }
      if (level === 'low') {
        return {
          phase: 'Fase 2: Sobrecarga Excêntrica e Força Muscular',
          focus: 'Transição das repetições assistidas para repetições estritas no padrão da banca.',
          routine: '3 a 4 sessões semanais organizadas por descanso programado no APP.',
          editalMargin: 'Atingir de 4 a 6 repetições sem pedalada ou oscilação de pernas.'
        };
      }
      return {
        phase: 'Fase 3 & 4: Volume de Séries e Simulado de Banca',
        focus: 'Consistência de aprovação sob fadiga e eliminação de vícios de movimento que anulam contagem.',
        routine: 'Protocolo de potência e teste simulado com câmera no ângulo do avaliador.',
        editalMargin: 'Garantir margem de +2 a +3 repetições acima da nota mínima de corte.'
      };
    } else {
      if (level === 'zero') {
        return {
          phase: 'Fase 1: Estabilidade Escapular e Isometria com Suporte',
          focus: 'Ajuste de pegada pronada ou supinada e fortalecimento da musculatura escapular.',
          routine: '3 sessões semanais com blocos de sustentação gradual de 3 a 8 segundos.',
          editalMargin: 'Construção da pegada firme para não escorregar da barra no dia do teste.'
        };
      }
      if (level === 'low') {
        return {
          phase: 'Fase 2: Sustentação de Queixo Acima da Barra',
          focus: 'Resistência láctica para sustentar o queixo elevado sem encostar ou apoiar na barra.',
          routine: 'Protocolo de tempo sob tensão e recuperação guiada no APP.',
          editalMargin: 'Bater de 15 a 20 segundos de sustentação estrita.'
        };
      }
      return {
        phase: 'Fase 3 & 4: Margem de Segurança e Critérios de Banca',
        focus: 'Superação da meta de tempo com sobra psicológica e postura impecável.',
        routine: 'Treinos de sustentação estendida e simulado com cronômetro oficial.',
        editalMargin: 'Segurança absoluta para aprovação no TAF feminino.'
      };
    }
  };

  const diagnosis = getDiagnosis();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl rounded-3xl bg-[#121618] border border-[#0f5557] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white bg-neutral-800/80 hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Fechar diagnóstico"
        >
          <X className="w-5 h-5" />
        </button>

        {!showResult ? (
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#b38d4c] font-bold uppercase tracking-wider">
                DIAGNÓSTICO GRATUITO
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                Descubra seu Ponto de Partida
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                Responda a 3 perguntas rápidas para identificar por onde você deve começar no Protocolo TAJ.
              </p>
            </div>

            {/* Step 1: Gender */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-300 font-semibold block">
                1. Qual é o seu gênero / modalidade do edital?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setGender('masculina');
                    setLevel('zero');
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    gender === 'masculina'
                      ? 'bg-[#0f5557] border-[#b38d4c] text-white'
                      : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400'
                  }`}
                >
                  <div className="text-xs font-bold uppercase">Masculino</div>
                  <div className="text-[11px] opacity-80">Teste em Repetições</div>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setGender('feminina');
                    setLevel('zero');
                  }}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    gender === 'feminina'
                      ? 'bg-[#0f5557] border-[#b38d4c] text-white'
                      : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400'
                  }`}
                >
                  <div className="text-xs font-bold uppercase">Feminino</div>
                  <div className="text-[11px] opacity-80">Sustentação Isométrica</div>
                </button>
              </div>
            </div>

            {/* Step 2: Current Level */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-300 font-semibold block">
                2. Qual é o seu desempenho atual na barra fixa?
              </label>
              <div className="space-y-2">
                {currentOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => setLevel(opt.id)}
                    className={`p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all flex items-center justify-between ${
                      level === opt.id
                        ? 'bg-[#0f5557]/40 border-[#b38d4c] text-white font-medium'
                        : 'bg-[#0b0d0e] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {level === opt.id && <CheckCircle2 className="w-4 h-4 text-[#b38d4c]" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Weeks until TAF */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-neutral-300 font-semibold block">
                3. Quanto tempo você tem até o TAF?
              </label>
              <select
                value={weeks}
                onChange={(e) => setWeeks(e.target.value)}
                className="w-full px-4 py-2.5 text-xs sm:text-sm bg-[#0b0d0e] border border-neutral-800 rounded-xl text-white focus:outline-none focus:border-[#0f5557]"
              >
                <option value="2_4">2 a 4 semanas (emergencial)</option>
                <option value="4_8">1 a 2 meses (ciclo ideal)</option>
                <option value="8_16">3 a 4 meses (preparação antecipada)</option>
                <option value="sem_data">Ainda aguardando o edital ser publicado</option>
              </select>
            </div>

            {/* Action */}
            <button
              onClick={calculateResult}
              className="w-full py-4 px-6 rounded-xl font-heading font-black text-sm uppercase tracking-wider text-black bg-[#b38d4c] hover:bg-[#c99f58] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg glow-gold"
            >
              <span>VER MINHA RECOMENDAÇÃO DE TREINO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Diagnosis Result */
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#b38d4c] font-bold uppercase tracking-wider">
                DIAGNÓSTICO PERSONALIZADO CONCLUÍDO
              </span>
              <button
                onClick={() => setShowResult(false)}
                className="text-xs text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Refazer</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0d0e] border border-[#0f5557] space-y-3">
              <div className="text-xs font-mono text-[#0f5557] uppercase font-bold">
                Ponto de Partida Recomendado:
              </div>
              <h4 className="font-heading text-xl sm:text-2xl font-black uppercase text-white">
                {diagnosis.phase}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {diagnosis.focus}
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-[#14191c] border border-neutral-800 flex justify-between">
                <span className="text-neutral-400">Rotina sugerida:</span>
                <span className="text-white font-medium text-right">{diagnosis.routine}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#14191c] border border-neutral-800 flex justify-between">
                <span className="text-neutral-400">Meta do ciclo de 30 dias:</span>
                <span className="text-[#b38d4c] font-bold text-right">{diagnosis.editalMargin}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  onClose();
                  onStartTrack(gender);
                }}
                className="w-full py-4 px-6 rounded-xl font-heading font-black text-sm uppercase tracking-wider text-black bg-[#b38d4c] hover:bg-[#c99f58] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg glow-gold"
              >
                <span>ACESSAR PROTOCOLO NESTA FASE NO APP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
