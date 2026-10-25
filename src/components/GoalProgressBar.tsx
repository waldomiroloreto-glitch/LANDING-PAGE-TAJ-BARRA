import React, { useState } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ReferenceLine,
} from 'recharts';
import { Dumbbell, Timer, CheckCircle2, AlertTriangle, Trophy, Zap, ChevronRight } from 'lucide-react';

interface StageData {
  id: number;
  label: string;
  shortLabel: string;
  loadPercent: number;
  masculinoValue: number;
  masculinoUnit: string;
  masculinoDesc: string;
  femininoValue: number;
  femininoUnit: string;
  femininoDesc: string;
  status: 'critico' | 'desenvolvimento' | 'avancado' | 'aprovado' | 'excelencia';
  prescricao: string;
}

const STAGES: StageData[] = [
  {
    id: 1,
    label: 'Ponto Zero / Diagnóstico',
    shortLabel: 'Sem 1',
    loadPercent: 15,
    masculinoValue: 0,
    masculinoUnit: 'reps',
    masculinoDesc: 'Dificuldade para sair da posição estendida',
    femininoValue: 3,
    femininoUnit: 'seg',
    femininoDesc: 'Queda antes de estabilizar a isometria',
    status: 'critico',
    prescricao: 'Dead Hang, fortalecimento de antebraço e retração escapular.',
  },
  {
    id: 2,
    label: 'Ativação & Força Excêntrica',
    shortLabel: 'Sem 2',
    loadPercent: 38,
    masculinoValue: 1,
    masculinoUnit: 'rep parcial',
    masculinoDesc: 'Primeira puxada parcial e subida assistida',
    femininoValue: 9,
    femininoUnit: 'seg',
    femininoDesc: 'Sustentação inicial com apoio e queixo sobre a barra',
    status: 'desenvolvimento',
    prescricao: 'Barra negativa com descida de 5 a 6s e remadas invertidas.',
  },
  {
    id: 3,
    label: 'Destravamento Motor',
    shortLabel: 'Sem 3',
    loadPercent: 65,
    masculinoValue: 2,
    masculinoUnit: 'reps limpas',
    masculinoDesc: 'Primeira barra estrita com extensão completa',
    femininoValue: 16,
    femininoUnit: 'seg',
    femininoDesc: 'Isometria consistente sem oscilação das pernas',
    status: 'desenvolvimento',
    prescricao: 'Séries fracionadas, pausas no topo e barra com auxílio elástico.',
  },
  {
    id: 4,
    label: 'Resistência Específica TAF',
    shortLabel: 'Sem 4',
    loadPercent: 88,
    masculinoValue: 4,
    masculinoUnit: 'reps válidas',
    masculinoDesc: 'Ritmo contínuo e padrão oficial sem pedalada',
    femininoValue: 22,
    femininoUnit: 'seg',
    femininoDesc: 'Sustentação firme no limite da maioria dos editais',
    status: 'avancado',
    prescricao: 'Volume acumulado, simulação com descanso oficial da banca.',
  },
  {
    id: 5,
    label: 'Meta do Edital Atingida',
    shortLabel: 'Sem 5 (TAF)',
    loadPercent: 100,
    masculinoValue: 6,
    masculinoUnit: 'reps completas',
    masculinoDesc: 'Aprovação com folga no padrão da banca examinadora',
    femininoValue: 28,
    femininoUnit: 'seg',
    femininoDesc: 'Aprovação com folga e queixo acima do travessão',
    status: 'aprovado',
    prescricao: 'Polimento técnico, recuperação neuromuscular e teste simulado.',
  },
  {
    id: 6,
    label: 'Margem de Segurança / Sobrecarga',
    shortLabel: 'Meta +',
    loadPercent: 118,
    masculinoValue: 8,
    masculinoUnit: 'reps',
    masculinoDesc: 'Garantia contra descontos rigorosos dos avaliadores',
    femininoValue: 35,
    femininoUnit: 'seg',
    femininoDesc: 'Segurança absoluta mesmo em dia de pressão ou calor',
    status: 'excelencia',
    prescricao: 'Manutenção de pico de força e estabilidade máxima de core.',
  },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      name: string;
      valueDisplay: string;
      description: string;
      isTarget: boolean;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#121618] border border-[#0f5557] p-3 rounded-xl shadow-xl text-xs max-w-[200px]">
        <p className="font-heading font-bold text-white uppercase text-sm mb-1">{data.name}</p>
        <p className="text-[#b38d4c] font-mono font-bold text-base mb-1">{data.valueDisplay}</p>
        <p className="text-neutral-400 text-[11px] leading-snug">{data.description}</p>
      </div>
    );
  }
  return null;
};

export const GoalProgressBar: React.FC = () => {
  const [track, setTrack] = useState<'masculino' | 'feminino'>('masculino');
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(3); // Default to stage 4 (progressing)

  const currentStage = STAGES[selectedStageIndex];

  // Data for the weekly evolution Recharts chart
  const weeklyData = STAGES.map((s, index) => {
    const isSelected = index === selectedStageIndex;
    const isTarget = s.loadPercent === 100;
    const value = track === 'masculino' ? s.masculinoValue : s.femininoValue;
    const unit = track === 'masculino' ? s.masculinoUnit : s.femininoUnit;
    const desc = track === 'masculino' ? s.masculinoDesc : s.femininoDesc;

    return {
      name: s.shortLabel,
      fullLabel: s.label,
      loadPercent: s.loadPercent,
      metricValue: value,
      valueDisplay: `${value} ${unit}`,
      description: desc,
      isSelected,
      isTarget,
    };
  });

  // Data for the symbolic load progress bar (single horizontal bar animated via Recharts)
  const singleBarData = [
    {
      name: 'Capacidade do Candidato',
      progresso: currentStage.loadPercent,
      target: 100,
    },
  ];

  return (
    <div className="w-full rounded-2xl bg-[#0e1214] border border-[#0f5557]/60 p-5 sm:p-7 shadow-xl space-y-6">
      {/* Header with Title and Track Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-[#0f5557]/30 text-[#b38d4c]">
              <Zap className="w-4 h-4 text-[#b38d4c]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#b38d4c] font-semibold">
              SIMULADOR DE CARGA DO PROTOCOLO
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-white mt-1">
            Evolução de Metas: Do Zero à Aprovação
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
            Visualize o preenchimento da capacidade física necessária para passar no teste de barra.
          </p>
        </div>

        {/* Trilha switch buttons */}
        <div className="inline-flex p-1 rounded-xl bg-[#0b0d0e] border border-neutral-800 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setTrack('masculino')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              track === 'masculino'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Dumbbell className="w-3.5 h-3.5 text-[#b38d4c]" />
            <span>Trilha Masculina (Reps)</span>
          </button>
          <button
            type="button"
            onClick={() => setTrack('feminino')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
              track === 'feminino'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            <Timer className="w-3.5 h-3.5 text-[#b38d4c]" />
            <span>Trilha Feminina (Isometria)</span>
          </button>
        </div>
      </div>

      {/* Main Symbolic Progress Bar (Horizontal Recharts) */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <div className="flex items-center gap-2 font-mono">
            <span className="text-neutral-400">CARGA ATUAL ACUMULADA:</span>
            <span className="text-[#b38d4c] font-bold text-sm">
              {currentStage.loadPercent}%
            </span>
            <span className="text-neutral-500 text-[11px]">
              ({currentStage.loadPercent >= 100 ? 'Meta Superada' : `${100 - currentStage.loadPercent}% para a aprovação`})
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#b38d4c]">
            <Trophy className="w-3.5 h-3.5" />
            <span>CORTE DO EDITAL: 100%</span>
          </div>
        </div>

        {/* Recharts Horizontal Progress Gauge */}
        <div className="h-10 w-full bg-[#0b0d0e] rounded-xl border border-neutral-800/90 p-1.5 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={singleBarData}
              layout="vertical"
              margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
            >
              <XAxis type="number" domain={[0, 120]} hide />
              <YAxis type="category" dataKey="name" hide />
              <ReferenceLine
                x={100}
                stroke="#b38d4c"
                strokeDasharray="3 3"
                strokeWidth={2}
              />
              <Bar
                dataKey="progresso"
                radius={[8, 8, 8, 8]}
                isAnimationActive={true}
                animationDuration={900}
                animationEasing="ease-out"
              >
                <Cell
                  fill={
                    currentStage.loadPercent >= 100
                      ? '#b38d4c'
                      : currentStage.loadPercent >= 60
                      ? '#0f5557'
                      : '#1e3a3b'
                  }
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Percentage markers guide */}
        <div className="flex justify-between text-[10px] font-mono text-neutral-500 px-1 pt-0.5">
          <span>0% (Início)</span>
          <span>25%</span>
          <span>50%</span>
          <span>75%</span>
          <span className="text-[#b38d4c] font-bold">100% (Aprovação)</span>
          <span>120% (Folga)</span>
        </div>
      </div>

      {/* Interactive Stage Step Buttons */}
      <div className="space-y-2">
        <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
          Clique nas etapas para simular a evolução ao longo das semanas:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STAGES.map((stage, idx) => {
            const isSelected = idx === selectedStageIndex;
            const isCompleted = idx <= selectedStageIndex;
            const isPassedGoal = stage.loadPercent >= 100;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#182326] border-[#b38d4c] shadow-lg ring-1 ring-[#b38d4c]'
                    : isCompleted
                    ? 'bg-[#111618] border-[#0f5557]/60 text-neutral-300 hover:border-[#0f5557]'
                    : 'bg-[#0b0d0e] border-neutral-800 text-neutral-500 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isSelected ? 'text-[#b38d4c] font-bold' : 'text-neutral-400'}>
                    {stage.shortLabel}
                  </span>
                  <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${
                    isPassedGoal
                      ? 'bg-[#b38d4c]/20 text-[#b38d4c]'
                      : 'bg-[#0f5557]/20 text-[#0f5557]'
                  }`}>
                    {stage.loadPercent}%
                  </span>
                </div>
                <div className="text-xs font-heading font-bold uppercase truncate text-white">
                  {stage.label.split('/')[0]}
                </div>
                <div className="text-[11px] font-mono mt-1 text-[#b38d4c]">
                  {track === 'masculino' ? `${stage.masculinoValue} ${stage.masculinoUnit}` : `${stage.femininoValue} ${stage.femininoUnit}`}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Recharts Multi-Bar Visualizer + Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-2">
        {/* Recharts Bar Graph (Weekly Load Animation) */}
        <div className="lg:col-span-7 bg-[#0b0d0e] border border-neutral-800/90 rounded-xl p-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-neutral-400 uppercase">
              Curva de Capacidade Física (TAF)
            </span>
            <span className="text-[11px] font-mono text-neutral-400">
              Unidade: {track === 'masculino' ? 'Repetições Estritas' : 'Segundos de Isometria'}
            </span>
          </div>

          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                margin={{ top: 15, right: 10, left: -20, bottom: 5 }}
              >
                <XAxis
                  dataKey="name"
                  stroke="#525252"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#262626' }}
                />
                <YAxis
                  stroke="#525252"
                  fontSize={11}
                  tickLine={false}
                  axisLine={{ stroke: '#262626' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine
                  y={track === 'masculino' ? 6 : 28}
                  stroke="#b38d4c"
                  strokeDasharray="4 4"
                  label={{
                    value: 'META',
                    position: 'insideTopRight',
                    fill: '#b38d4c',
                    fontSize: 10,
                    fontWeight: 'bold',
                  }}
                />
                <Bar
                  dataKey="metricValue"
                  radius={[6, 6, 0, 0]}
                  isAnimationActive={true}
                  animationDuration={800}
                >
                  {weeklyData.map((entry, index) => {
                    const isSelected = index === selectedStageIndex;
                    const isPastTarget = entry.loadPercent >= 100;
                    let fill = '#0f5557';
                    if (isPastTarget) fill = '#b38d4c';
                    if (isSelected) fill = isPastTarget ? '#dcb46e' : '#178184';

                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={fill}
                        stroke={isSelected ? '#ffffff' : 'none'}
                        strokeWidth={isSelected ? 1.5 : 0}
                      />
                    );
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-2 border-t border-neutral-800/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#0f5557]"></span>
              <span>Em Progressão</span>
              <span className="w-2.5 h-2.5 rounded-sm bg-[#b38d4c] ml-2"></span>
              <span>Nível Aprovado no Edital</span>
            </div>
            <span className="font-mono text-neutral-400">Recharts animado</span>
          </div>
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-5 bg-[#121618] border border-neutral-800 rounded-xl p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#b38d4c] uppercase tracking-wider font-semibold">
                DIAGNÓSTICO DA ETAPA
              </span>
              <span
                className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold flex items-center gap-1 ${
                  currentStage.status === 'aprovado' || currentStage.status === 'excelencia'
                    ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-700/50'
                    : currentStage.status === 'critico'
                    ? 'bg-rose-950/80 text-rose-400 border border-rose-800/50'
                    : 'bg-amber-950/80 text-amber-400 border border-amber-700/50'
                }`}
              >
                {currentStage.status === 'aprovado' || currentStage.status === 'excelencia' ? (
                  <>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Aprovado no TAF</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-3 h-3" />
                    <span>{currentStage.status === 'critico' ? 'Risco Alto' : 'Em Preparação'}</span>
                  </>
                )}
              </span>
            </div>

            <h4 className="font-heading text-lg font-bold uppercase text-white leading-tight">
              {currentStage.label}
            </h4>

            {/* Performance Metric Badge */}
            <div className="p-3 rounded-lg bg-[#0b0d0e] border border-neutral-800">
              <div className="text-[10px] font-mono text-neutral-400 uppercase">
                Resultado Esperado Nesta Fase
              </div>
              <div className="font-heading text-2xl font-black text-[#b38d4c] mt-0.5">
                {track === 'masculino'
                  ? `${currentStage.masculinoValue} ${currentStage.masculinoUnit}`
                  : `${currentStage.femininoValue} ${currentStage.femininoUnit}`}
              </div>
              <div className="text-xs text-neutral-300 mt-1">
                {track === 'masculino' ? currentStage.masculinoDesc : currentStage.femininoDesc}
              </div>
            </div>

            {/* Protocol Prescription */}
            <div className="space-y-1">
              <div className="text-[11px] font-mono text-neutral-400 uppercase flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-[#0f5557]" />
                <span>O Que o APP Prescreve Aqui:</span>
              </div>
              <p className="text-xs text-neutral-300 leading-relaxed pl-4 border-l-2 border-[#0f5557]">
                {currentStage.prescricao}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 text-[11px] text-neutral-400 flex items-center justify-between">
            <span>Metodologia Protocolo TAJ</span>
            <span className="text-[#b38d4c] font-semibold">100% Padrão de Banca</span>
          </div>
        </div>
      </div>
    </div>
  );
};
