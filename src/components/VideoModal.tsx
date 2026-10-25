import React, { useState, useEffect } from 'react';
import { X, Play, Pause, AlertOctagon, CheckCircle2, ChevronRight, Eye, ShieldAlert, Sparkles, Volume2, RotateCcw } from 'lucide-react';
import { Button } from './ui/Button';

export interface VideoTutorial {
  id: string;
  title: string;
  subtitle: string;
  category: 'padrao-banca' | 'biomecanica' | 'feminina' | 'erros-fatais';
  categoryLabel: string;
  duration: string;
  thumbnailBadge: string;
  thumbnailAngle: string;
  summary: string;
  bancaExigencia: string;
  errosQueZeram: string[];
  passosBiomecanica: string[];
  dicaTaj: string;
}

interface VideoModalProps {
  video: VideoTutorial | null;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose, onOpenCheckout }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeAngle, setActiveAngle] = useState<'fiscal' | 'lateral' | 'frontal'>('fiscal');
  const [activeTab, setActiveTab] = useState<'biomecanica' | 'erros' | 'edital'>('biomecanica');
  const [playbackProgress, setPlaybackProgress] = useState(35);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset player state when video opens
  useEffect(() => {
    if (video) {
      setIsPlaying(false);
      setPlaybackProgress(28);
      setActiveTab('biomecanica');
    }
  }, [video]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl bg-[#0e1214] border border-[#0f5557]/80 shadow-2xl overflow-hidden my-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-[#121618]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#b38d4c] font-bold">
              LAB DE EXECUÇÃO TAF · PADRÃO OFICIAL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-7 space-y-6 max-h-[85vh] overflow-y-auto">
          {/* Main Title and Badge */}
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#0f5557]/30 border border-[#0f5557] text-[#f6f6f4] font-semibold">
                {video.categoryLabel}
              </span>
              <span className="text-[11px] font-mono text-[#b38d4c] bg-[#b38d4c]/10 px-2 py-0.5 rounded border border-[#b38d4c]/30">
                {video.thumbnailBadge}
              </span>
              <span className="text-xs font-mono text-neutral-500 ml-auto">
                Duração da aula: {video.duration}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mt-1">
              {video.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              {video.subtitle}
            </p>
          </div>

          {/* Interactive Mockup Video Player */}
          <div className="relative rounded-2xl bg-[#050607] border border-neutral-800 overflow-hidden shadow-2xl">
            {/* Visual Simulated Screen */}
            <div className="aspect-video w-full bg-gradient-to-b from-[#101517] via-[#0b0e10] to-[#060809] relative flex flex-col justify-between p-4 sm:p-6 overflow-hidden">
              {/* Tactical grid background simulation */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#0f555715_1px,transparent_1px),linear-gradient(to_bottom,#0f555715_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" 
                aria-hidden="true"
              />

              {/* Angle selector badge inside the player */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/60 backdrop-blur-sm border border-neutral-800 text-[11px] font-mono">
                  <span className="text-neutral-400 px-1">CÂMERA:</span>
                  <button
                    onClick={() => setActiveAngle('fiscal')}
                    className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                      activeAngle === 'fiscal' ? 'bg-[#0f5557] text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Ângulo do Fiscal
                  </button>
                  <button
                    onClick={() => setActiveAngle('lateral')}
                    className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                      activeAngle === 'lateral' ? 'bg-[#0f5557] text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Visão Lateral 90°
                  </button>
                  <button
                    onClick={() => setActiveAngle('frontal')}
                    className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                      activeAngle === 'frontal' ? 'bg-[#0f5557] text-white font-bold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Frontal Biomecânica
                  </button>
                </div>

                <div className="text-[10px] font-mono text-[#b38d4c] px-2 py-1 rounded bg-black/70 border border-[#b38d4c]/30 flex items-center gap-1.5">
                  <Eye className="w-3 h-3 text-[#b38d4c]" />
                  <span>PADRÃO OFICIAL 4K</span>
                </div>
              </div>

              {/* Center Play Button Overlay and Graphic representation */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6 sm:py-10 text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#b38d4c] to-[#e4c27f] flex items-center justify-center text-black shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer group"
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 sm:w-8 sm:h-8 fill-black" />
                  ) : (
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-black" />
                  )}
                </button>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span>{isPlaying ? 'Reproduzindo Análise Técnica...' : 'Clique para Iniciar a Demonstração'}</span>
                </div>
              </div>

              {/* Bottom Scrubber & Controls */}
              <div className="relative z-10 space-y-2 pt-2 bg-gradient-to-t from-black/80 to-transparent p-2 rounded-xl">
                {/* Simulated Progress Bar */}
                <div 
                  className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden cursor-pointer relative"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
                    setPlaybackProgress(pct);
                  }}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-[#0f5557] via-[#b38d4c] to-[#e4c27f] transition-all"
                    style={{ width: `${playbackProgress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">
                      {Math.floor((playbackProgress / 100) * 180)}s / {video.duration}
                    </span>
                    <span className="text-neutral-500">|</span>
                    <span className="text-[#b38d4c]">Ângulo Ativo: {activeAngle.toUpperCase()}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-neutral-500 flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5" /> Áudio Explicativo
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Technical Explanatory Tabs */}
          <div className="space-y-4">
            <div className="flex border-b border-neutral-800 gap-2">
              <button
                onClick={() => setActiveTab('biomecanica')}
                className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'biomecanica'
                    ? 'border-[#b38d4c] text-[#b38d4c]'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Passo a Passo Biomecânico</span>
              </button>

              <button
                onClick={() => setActiveTab('erros')}
                className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'erros'
                    ? 'border-rose-500 text-rose-400'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <AlertOctagon className="w-4 h-4" />
                <span>Erros que Anulam a Barra</span>
              </button>

              <button
                onClick={() => setActiveTab('edital')}
                className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center gap-2 ${
                  activeTab === 'edital'
                    ? 'border-[#0f5557] text-[#0f5557]'
                    : 'border-transparent text-neutral-400 hover:text-white'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>Exigência nos Editais</span>
              </button>
            </div>

            {/* Tab 1: Biomecânica Passo a Passo */}
            {activeTab === 'biomecanica' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <p className="text-xs sm:text-sm text-neutral-300">
                  {video.summary}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {video.passosBiomecanica.map((passo, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#121618] border border-neutral-800 space-y-1.5"
                    >
                      <div className="w-6 h-6 rounded-md bg-[#0f5557] flex items-center justify-center text-xs font-mono font-bold text-white">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {passo}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Erros que Anulam a Barra */}
            {activeTab === 'erros' && (
              <div className="space-y-3 animate-in fade-in duration-150">
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/40 text-xs text-rose-300">
                  Atenção: A maioria das reprovações em teste físico ocorre não por falta de força bruta, mas pela anulação da repetição pelo avaliador.
                </div>
                <div className="space-y-2">
                  {video.errosQueZeram.map((erro, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121618] border border-rose-900/30 text-xs text-neutral-300"
                    >
                      <AlertOctagon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <span>{erro}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 3: Exigência nos Editais */}
            {activeTab === 'edital' && (
              <div className="p-4 rounded-xl bg-[#121618] border border-[#0f5557]/60 space-y-2 animate-in fade-in duration-150">
                <div className="text-xs font-mono text-[#b38d4c] uppercase font-bold">
                  REGULAMENTAÇÃO TÍPICA DE BANCA
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {video.bancaExigencia}
                </p>
              </div>
            )}

            {/* Protocolo TAJ Pro-Tip Callout */}
            <div className="p-4 rounded-xl bg-[#0b0d0e] border border-[#b38d4c]/50 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#b38d4c] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#b38d4c] font-bold block mb-0.5">
                  DICA DE OURO DO PROTOCOLO TAJ
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  "{video.dicaTaj}"
                </p>
              </div>
            </div>
          </div>

          {/* Modal Action Footer */}
          <div className="pt-2 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-400">
              Acesso a todos os vídeos em alta definição e cronômetro integrado no aplicativo.
            </span>
            <Button
              variant="gold"
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              icon={<ChevronRight className="w-4 h-4" />}
            >
              LIBERAR ACESSO AOS VÍDEOS NO APP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
