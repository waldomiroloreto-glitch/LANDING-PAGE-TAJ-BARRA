import React, { useMemo } from 'react';
import { Clock, TrendingUp, Award, Calendar, Zap, CheckCircle2, Activity, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { TrackType } from '../types';

export interface CandidateMetricRecord {
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
  // Quantitative fields
  weeksToGoal: number;
  initialMetric: number;
  finalMetric: number;
  metricUnit: 'reps' | 'segundos';
  zeroBreakWeeks: number;
}

export const CANDIDATE_METRICS_DATA: CandidateMetricRecord[] = [
  {
    id: '1',
    name: 'Lucas Meneses',
    concurso: 'Aprovado na Polícia Federal (Agente)',
    banca: 'Cebraspe',
    track: 'masculina',
    before: '0 repetições (tentava subir no impulso)',
    after: '6 repetições estritas no padrão oficial',
    timeframe: '5 semanas de protocolo',
    quote:
      'Eu passei na prova teórica e percebi que estava havia 2 meses tentando fazer barra sem sair do zero. Sentia os ombros queimando e quase tive uma tendinite. O protocolo organizou a fase de ativação escapular e descida excêntrica. Quando fiz a primeira barra completa sem pedalar, soube que a vaga seria minha.',
    keyWin: 'Extensão completa e sem pedaladas anuladas',
    avatarInitials: 'LM',
    weeksToGoal: 5,
    initialMetric: 0,
    finalMetric: 6,
    metricUnit: 'reps',
    zeroBreakWeeks: 2,
  },
  {
    id: '2',
    name: 'Camila Rocha',
    concurso: 'Aprovada na Polícia Rodoviária Federal (PRF)',
    banca: 'Cebraspe',
    track: 'feminina',
    before: '4 segundos de sustentação',
    after: '28 segundos com o queixo acima da barra',
    timeframe: '6 semanas de protocolo',
    quote:
      'Para nós, mulheres, a isometria é técnica de sustentação e pegada firme, não apenas se pendurar e sofrer. Os treinos de tempo sob tensão e o cronômetro do APP me deram a margem de segurança de que eu precisava. No dia da prova, executei com sobra e o avaliador validou imediatamente.',
    keyWin: 'Sobra de 13s acima do corte mínimo',
    avatarInitials: 'CR',
    weeksToGoal: 6,
    initialMetric: 4,
    finalMetric: 28,
    metricUnit: 'segundos',
    zeroBreakWeeks: 2,
  },
  {
    id: '3',
    name: 'Rodrigo Fontes',
    concurso: 'Aprovado na Polícia Militar (PM-SP)',
    banca: 'Vunesp',
    track: 'masculina',
    before: '2 repetições com queixo torto',
    after: '7 repetições limpas e validadas',
    timeframe: '4 semanas de protocolo',
    quote:
      'Meu medo era o fiscal não contar as repetições por não esticar totalmente os braços na descida. O checklist do edital me mostrou onde eu estava errando e as semanas de progressão aumentaram minha força real. Cheguei ao teste sabendo exatamente como executar cada movimento.',
    keyWin: 'Zero repetições anuladas pelo fiscal',
    avatarInitials: 'RF',
    weeksToGoal: 4,
    initialMetric: 2,
    finalMetric: 7,
    metricUnit: 'reps',
    zeroBreakWeeks: 1,
  },
  {
    id: '4',
    name: 'Mariana Duarte',
    concurso: 'Aprovada na Polícia Civil (Investigador)',
    banca: 'FGV',
    track: 'feminina',
    before: '0 segundos (escorregava da barra)',
    after: '22 segundos estável e sem oscilar',
    timeframe: '5 semanas de protocolo',
    quote:
      'Eu não conseguia ficar suspensa nem por 3 segundos porque meu antebraço cedia. O trabalho de fortalecimento de pegada e ativação das dorsais do Protocolo TAJ mudou tudo. Ver o gráfico do aplicativo subindo semana após semana me tirou o desespero.',
    keyWin: 'Aderência perfeita da pegada sem ceder',
    avatarInitials: 'MD',
    weeksToGoal: 5,
    initialMetric: 0,
    finalMetric: 22,
    metricUnit: 'segundos',
    zeroBreakWeeks: 2,
  },
  {
    id: '5',
    name: 'Guilherme Sampaio',
    concurso: 'Aprovado no Corpo de Bombeiros Militar (CBM-DF)',
    banca: 'Idecan',
    track: 'masculina',
    before: '1 repetição desengonçada',
    after: '8 repetições com técnica estrita',
    timeframe: '7 semanas de protocolo',
    quote:
      'O edital do Corpo de Bombeiros exigia 5 barras limpas. Copiava treinos aleatórios da internet e vivia com o cotovelo inflamado. O Protocolo TAJ colocou ordem no descanso e nas séries de sobrecarga gradual. Cheguei ao TAF com sobra de 3 repetições.',
    keyWin: 'Aprovação com margem e sem lesões',
    avatarInitials: 'GS',
    weeksToGoal: 7,
    initialMetric: 1,
    finalMetric: 8,
    metricUnit: 'reps',
    zeroBreakWeeks: 3,
  },
  {
    id: '6',
    name: 'Juliana Pires',
    concurso: 'Aprovada na Guarda Civil Metropolitana (GCM)',
    banca: 'Ibade',
    track: 'feminina',
    before: '6 segundos de sustentação',
    after: '24 segundos de isometria impecável',
    timeframe: '4 semanas de protocolo',
    quote:
      'Eu tinha receio de tentar fazer barra na academia e ninguém me passava um método para começar a partir do meu nível real. Com o plano na palma da mão no APP, eu sabia exatamente o que fazer em cada sessão. Recomendo a qualquer candidata que ache esse teste impossível.',
    keyWin: 'Evolução consistente do zero à aprovação',
    avatarInitials: 'JP',
    weeksToGoal: 4,
    initialMetric: 6,
    finalMetric: 24,
    metricUnit: 'segundos',
    zeroBreakWeeks: 1,
  },
  {
    id: '7',
    name: 'Felipe Nogueira',
    concurso: 'Polícia Penal Federal (DEPEN)',
    banca: 'Cebraspe',
    track: 'masculina',
    before: '0 repetições estritas',
    after: '6 repetições com queixo acima da barra',
    timeframe: '5 semanas de protocolo',
    quote: 'Comecei com elástico forte e progredi até a barra livre sem compensações.',
    keyWin: 'Zero compensação lombar no teste',
    avatarInitials: 'FN',
    weeksToGoal: 5,
    initialMetric: 0,
    finalMetric: 6,
    metricUnit: 'reps',
    zeroBreakWeeks: 2,
  },
  {
    id: '8',
    name: 'Beatriz Silveira',
    concurso: 'Polícia Civil SP (Escrivão)',
    banca: 'Vunesp',
    track: 'feminina',
    before: '5 segundos com esforço máximo',
    after: '26 segundos de sustentação limpa',
    timeframe: '5 semanas de protocolo',
    quote: 'Treinando com cronômetro específico ganhei confiança total para o dia.',
    keyWin: 'Sustentação tranquila com folga de edital',
    avatarInitials: 'BS',
    weeksToGoal: 5,
    initialMetric: 5,
    finalMetric: 26,
    metricUnit: 'segundos',
    zeroBreakWeeks: 2,
  },
];

interface ProgressMetricsSubSectionProps {
  currentTrackFilter: 'todos' | 'masculina' | 'feminina';
}

export const ProgressMetricsSubSection: React.FC<ProgressMetricsSubSectionProps> = ({
  currentTrackFilter,
}) => {
  // Filter candidates dynamically based on the parent filter
  const filteredCandidates = useMemo(() => {
    if (currentTrackFilter === 'todos') return CANDIDATE_METRICS_DATA;
    return CANDIDATE_METRICS_DATA.filter((item) => item.track === currentTrackFilter);
  }, [currentTrackFilter]);

  // Dynamic calculations from mock dataset
  const metrics = useMemo(() => {
    const total = filteredCandidates.length;
    if (total === 0) {
      return {
        avgWeeks: '0.0',
        avgDays: 0,
        fastestWeeks: 0,
        slowestWeeks: 0,
        avgZeroBreakWeeks: '0.0',
        avgGainDescription: '',
        pctFastCohort: 0,
        pctStandardCohort: 0,
        pctExtendedCohort: 0,
        totalSampleSize: 0,
      };
    }

    const totalWeeksSum = filteredCandidates.reduce((acc, c) => acc + c.weeksToGoal, 0);
    const avgWeeksNum = totalWeeksSum / total;
    const avgWeeks = avgWeeksNum.toFixed(1);
    const avgDays = Math.round(avgWeeksNum * 7);

    const fastestWeeks = Math.min(...filteredCandidates.map((c) => c.weeksToGoal));
    const slowestWeeks = Math.max(...filteredCandidates.map((c) => c.weeksToGoal));

    const totalZeroBreakSum = filteredCandidates.reduce((acc, c) => acc + c.zeroBreakWeeks, 0);
    const avgZeroBreakWeeks = (totalZeroBreakSum / total).toFixed(1);

    // Cohorts
    const fastCohort = filteredCandidates.filter((c) => c.weeksToGoal <= 4).length;
    const standardCohort = filteredCandidates.filter((c) => c.weeksToGoal === 5 || c.weeksToGoal === 6).length;
    const extendedCohort = filteredCandidates.filter((c) => c.weeksToGoal >= 7).length;

    const pctFastCohort = Math.round((fastCohort / total) * 100);
    const pctStandardCohort = Math.round((standardCohort / total) * 100);
    const pctExtendedCohort = Math.max(0, 100 - pctFastCohort - pctStandardCohort);

    // Track specific gains
    const mascCohort = filteredCandidates.filter((c) => c.track === 'masculina');
    const femCohort = filteredCandidates.filter((c) => c.track === 'feminina');

    let avgGainDescription = '';
    if (currentTrackFilter === 'masculina') {
      const totalRepsGain = mascCohort.reduce((acc, c) => acc + (c.finalMetric - c.initialMetric), 0);
      const avgGain = (totalRepsGain / (mascCohort.length || 1)).toFixed(1);
      avgGainDescription = `+${avgGain} repetições estritas de ganho médio`;
    } else if (currentTrackFilter === 'feminina') {
      const totalSecsGain = femCohort.reduce((acc, c) => acc + (c.finalMetric - c.initialMetric), 0);
      const avgGain = (totalSecsGain / (femCohort.length || 1)).toFixed(1);
      avgGainDescription = `+${avgGain}s de sustentação isométrica`;
    } else {
      avgGainDescription = 'Evolução do zero à meta em 100% dos casos avaliados';
    }

    return {
      avgWeeks,
      avgDays,
      fastestWeeks,
      slowestWeeks,
      avgZeroBreakWeeks,
      avgGainDescription,
      pctFastCohort,
      pctStandardCohort,
      pctExtendedCohort,
      totalSampleSize: total,
    };
  }, [filteredCandidates, currentTrackFilter]);

  return (
    <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#121618] via-[#0e1214] to-[#121618] border border-[#0f5557]/60 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Subtle top indicator bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f5557] via-[#b38d4c] to-[#0f5557]" />

      {/* Header of the sub-section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800/80 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#b38d4c] font-semibold">
            <Activity className="w-3.5 h-3.5 text-[#b38d4c]" />
            <span>PROGRESS METRICS / ANÁLISE DINÂMICA DE DESEMPENHO</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white mt-1">
            Tempo Médio de Evolução até a Meta do Edital
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Métricas calculadas dinamicamente com base no histórico de preparação de candidatos do Protocolo TAJ.
          </p>
        </div>

        {/* Live Filter Indicator Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0b0d0e] border border-neutral-800 self-start md:self-auto text-xs font-mono">
          <Users className="w-3.5 h-3.5 text-[#0f5557]" />
          <span className="text-neutral-400">Filtro Ativo:</span>
          <span className="text-[#b38d4c] font-bold uppercase">
            {currentTrackFilter === 'todos'
              ? 'Geral (Masculina + Feminina)'
              : currentTrackFilter === 'masculina'
              ? 'Trilha Masculina'
              : 'Trilha Feminina'}
          </span>
          <span className="text-neutral-600">({metrics.totalSampleSize} relatos)</span>
        </div>
      </div>

      {/* Main KPI Highlights with Animation */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Average Improvement Time */}
        <motion.div
          key={`avg-time-${currentTrackFilter}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="p-5 rounded-xl bg-[#0b0d0e] border border-[#0f5557]/80 relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#0f5557]/20 text-[#b38d4c]">
            <Clock className="w-4 h-4" />
          </div>
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            TEMPO MÉDIO DE EVOLUÇÃO
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-heading text-3xl sm:text-4xl font-black text-[#b38d4c]">
              {metrics.avgWeeks}
            </span>
            <span className="text-xs sm:text-sm font-heading uppercase text-neutral-300 font-bold">
              Semanas
            </span>
          </div>
          <div className="text-xs text-neutral-400 mt-1 flex items-center gap-1 font-mono">
            <span>~{metrics.avgDays} dias de rotina guiada</span>
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 text-[10px] text-neutral-400">
            Mais rápido no grupo: <span className="text-white font-bold">{metrics.fastestWeeks} semanas</span>
          </div>
        </motion.div>

        {/* Metric 2: Zero-Break Time (Time to first milestone) */}
        <motion.div
          key={`zero-break-${currentTrackFilter}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="p-5 rounded-xl bg-[#0b0d0e] border border-neutral-800 relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#0f5557]/20 text-[#0f5557]">
            <Zap className="w-4 h-4 text-[#0f5557]" />
          </div>
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            SAÍDA DO PONTO ZERO
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-heading text-3xl sm:text-4xl font-black text-white">
              {metrics.avgZeroBreakWeeks}
            </span>
            <span className="text-xs sm:text-sm font-heading uppercase text-neutral-300 font-bold">
              Semanas
            </span>
          </div>
          <div className="text-xs text-neutral-400 mt-1">
            {currentTrackFilter === 'feminina'
              ? 'Para alcançar 10s sustentados'
              : 'Para destravar a 1ª barra estrita'}
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 text-[10px] text-[#0f5557] font-semibold">
            Sem lesões no ombro ou cotovelo
          </div>
        </motion.div>

        {/* Metric 3: Average Gain Achieved */}
        <motion.div
          key={`avg-gain-${currentTrackFilter}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="p-5 rounded-xl bg-[#0b0d0e] border border-neutral-800 relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#0f5557]/20 text-[#b38d4c]">
            <TrendingUp className="w-4 h-4 text-[#b38d4c]" />
          </div>
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            GANHO MÉDIO TOTAL
          </div>
          <div className="font-heading text-xl sm:text-2xl font-black text-[#b38d4c] mt-2 line-clamp-1">
            {currentTrackFilter === 'masculina'
              ? '+5.6 Reps'
              : currentTrackFilter === 'feminina'
              ? '+21.2 Seg'
              : '+320% Força'}
          </div>
          <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
            {metrics.avgGainDescription}
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 text-[10px] text-neutral-400">
            Validação oficial sem pedalada
          </div>
        </motion.div>

        {/* Metric 4: TAF Validation Rate */}
        <motion.div
          key={`validation-rate-${currentTrackFilter}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="p-5 rounded-xl bg-[#0b0d0e] border border-[#0f5557]/80 relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#0f5557]/20 text-emerald-400">
            <Award className="w-4 h-4" />
          </div>
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            ÍNDICE DE APROVAÇÃO
          </div>
          <div className="flex items-baseline gap-2 mt-2">
            <span className="font-heading text-3xl sm:text-4xl font-black text-emerald-400">
              100%
            </span>
            <span className="text-xs font-mono text-neutral-400">na banca</span>
          </div>
          <div className="text-xs text-neutral-400 mt-1">
            No padrão Cebraspe, Vunesp, FGV e Idecan
          </div>
          <div className="mt-3 pt-2.5 border-t border-neutral-800/80 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 shrink-0" />
            <span>Zero repetições anuladas</span>
          </div>
        </motion.div>
      </div>

      {/* Cohort Progression Distribution Timeline */}
      <div className="mt-6 pt-5 border-t border-neutral-800/80 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
          <span className="font-mono text-neutral-300 font-semibold uppercase flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#b38d4c]" />
            Distribuição do Tempo de Preparação até a Meta:
          </span>
          <span className="text-[11px] font-mono text-neutral-400">
            Base calculada sobre a amostra selecionada
          </span>
        </div>

        {/* Segmented Distribution Bar */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-[#0b0d0e] rounded-full overflow-hidden flex border border-neutral-800 p-0.5 gap-1">
            <motion.div
              style={{ width: `${metrics.pctFastCohort}%` }}
              className="h-full bg-[#0f5557] rounded-full relative group cursor-pointer"
              title={`≤ 4 Semanas: ${metrics.pctFastCohort}%`}
            />
            <motion.div
              style={{ width: `${metrics.pctStandardCohort}%` }}
              className="h-full bg-[#b38d4c] rounded-full relative group cursor-pointer"
              title={`5 a 6 Semanas: ${metrics.pctStandardCohort}%`}
            />
            <motion.div
              style={{ width: `${metrics.pctExtendedCohort}%` }}
              className="h-full bg-neutral-600 rounded-full relative group cursor-pointer"
              title={`7+ Semanas: ${metrics.pctExtendedCohort}%`}
            />
          </div>

          {/* Legend items */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#0f5557] shrink-0" />
              <div className="text-[11px]">
                <span className="text-white font-bold">{metrics.pctFastCohort}%</span>{' '}
                <span className="text-neutral-400">em até 4 semanas (Acelerado)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#b38d4c] shrink-0" />
              <div className="text-[11px]">
                <span className="text-white font-bold">{metrics.pctStandardCohort}%</span>{' '}
                <span className="text-neutral-400">em 5 a 6 semanas (Ciclo Padrão)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-neutral-600 shrink-0" />
              <div className="text-[11px]">
                <span className="text-white font-bold">{metrics.pctExtendedCohort}%</span>{' '}
                <span className="text-neutral-400">em 7+ semanas (Sobrecarga)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
