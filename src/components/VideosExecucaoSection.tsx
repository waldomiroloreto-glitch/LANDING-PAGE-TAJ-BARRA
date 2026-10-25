import React, { useState } from 'react';
import { Play, Eye, ShieldCheck, CheckCircle2, AlertOctagon, ArrowRight, Video, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { VideoTutorial, VideoModal } from './VideoModal';

export const VIDEO_TUTORIALS: VideoTutorial[] = [
  {
    id: 'pegada-pronada',
    title: 'Pegada Pronada Oficial & Largura dos Ombros',
    subtitle: 'Envolvimento do polegar e largura biacromial exigida pelos editais',
    category: 'padrao-banca',
    categoryLabel: 'Padrão de Banca',
    duration: '03:42',
    thumbnailBadge: 'REGRA FUNDAMENTAL',
    thumbnailAngle: 'Ângulo Frontal & Macro',
    summary:
      'A pegada pronada (dorso das mãos voltado para o candidato) é a exigência quase unânime nos concursos federais e estaduais (PF, PRF, PCDF, PMs). A abertura ideal deve acompanhar a largura dos ombros para garantir vantagem mecânica.',
    bancaExigencia:
      'Cebraspe, Vunesp, FGV e Idecan exigem estritamente a empunhadura em pronação. Tentar usar pegada mista ou supinada sem previsão no edital acarreta eliminação imediata.',
    errosQueZeram: [
      'Girar a mão para posição supinada durante a subida',
      'Polegar frouxo ou descolado sem envolver a barra firmemente',
      'Abertura excessiva que reduz a amplitude e sobrecarrega os tendões',
    ],
    passosBiomecanica: [
      'Posicione as mãos na largura dos acrômios (ombros), nem muito aberta, nem muito fechada.',
      'Envolva a barra com os 4 dedos e trave o polegar por baixo para firmeza absoluta.',
      'Mantenha os punhos levemente estendidos sobre a barra, e não pendurados pelos dedos.',
    ],
    dicaTaj:
      'Apertar a barra como se quisesse esmagá-la ativa o reflexo de irradiação neural, recrutando até 20% mais fibras do antebraço e costas.',
  },
  {
    id: 'ativacao-escapular',
    title: 'Ativação & Depressão Escapular Inicial',
    subtitle: 'Como iniciar o movimento pelas dorsais sem forçar bíceps ou tranco',
    category: 'biomecanica',
    categoryLabel: 'Biomecânica',
    duration: '04:15',
    thumbnailBadge: 'MÁXIMA FORÇA',
    thumbnailAngle: 'Costas 45° Posterior',
    summary:
      'A primeira fase da barra fixa não deve começar dobrando os braços, mas puxando as escápulas para baixo e para trás. É essa transição que constrói a arrancada limpa e sem trancos.',
    bancaExigencia:
      'A barra deve partir do repouso total com os braços estendidos. Balanços ou puxadas com tranco inicial são desconsiderados pela banca examinadora.',
    errosQueZeram: [
      'Dar tranco nos cotovelos para ganhar inércia na saída',
      'Puxar apenas com a força dos braços deixando as costas moles',
      'Subir os ombros perto das orelhas comprimindo as articulações',
    ],
    passosBiomecanica: [
      'Suspenda-se na barra em posição neutra com braços 100% retos.',
      'Acione o latíssimo fazendo a depressão escapular (abaixar os ombros afastando-os das orelhas).',
      'Somente após o travamento escapular inicie a flexão dos cotovelos rumo ao chão.',
    ],
    dicaTaj:
      'Pense em enfiar os cotovelos nos bolsos de trás da calça. Essa deixa mental garante tração perfeita das costas inteiras.',
  },
  {
    id: 'extensao-180',
    title: 'Extensão Articular Completa na Descida (180°)',
    subtitle: 'O bloqueio articular que impede o fiscal de anular sua repetição',
    category: 'erros-fatais',
    categoryLabel: 'Erros Fatais',
    duration: '02:58',
    thumbnailBadge: 'MAIOR CAUSA DE ZERO',
    thumbnailAngle: 'Lateral Rigoroso 90°',
    summary:
      'Mais de 70% das repetições anuladas em testes físicos decorrem da falta de extensão completa dos cotovelos na descida. O candidato precisa retornar ao ponto de 180° antes de puxar de novo.',
    bancaExigencia:
      'O edital estabelece: os cotovelos devem retornar à posição de extensão total antes do início da repetição subsequente. Repetições incompletas não são contadas.',
    errosQueZeram: [
      'Subir novamente com o braço a 160° sem travar embaixo',
      'Despencar sem freio excêntrico e machucar os ombros',
      'Acelerar o movimento para evitar o cansaço na fase de extensão',
    ],
    passosBiomecanica: [
      'Controle a descida em 1,5 a 2 segundos segurando a gravidade.',
      'Permita que os cotovelos cheguem aos 180° completos de abertura.',
      'Sinta a pausa de uma fração de segundo na suspensão estrita antes de iniciar a nova puxada.',
    ],
    dicaTaj:
      'Treine seus treinos simulados esperando o comando mental "DESCEU, VALEU". Acostume-se a nunca cortar a descida.',
  },
  {
    id: 'queixo-travessao',
    title: 'Passagem Limpa do Queixo Acima do Travessão',
    subtitle: 'Altura regulamentar com olhar no horizonte sem hiperextensão',
    category: 'padrao-banca',
    categoryLabel: 'Padrão de Banca',
    duration: '03:10',
    thumbnailBadge: 'PONTO DE VALIDAÇÃO',
    thumbnailAngle: 'Frontal Nível dos Olhos',
    summary:
      'Para a repetição ser computada no placar oficial, a linha horizontal do queixo deve ultrapassar o topo da barra. O olhar deve permanecer paralelo ao solo.',
    bancaExigencia:
      'O queixo do candidato deverá ultrapassar a barra, sem tocá-la, mantendo o pescoço em posição neutra e alinhada com o tronco.',
    errosQueZeram: [
      'Jogar a cabeça para trás e esticar o pescoço tentando alcançar a barra com o queixo esticado',
      'Encostar ou apoiar o queixo sobre a barra de metal',
      'Descer antes da quebra nítida da linha superior da barra',
    ],
    passosBiomecanica: [
      'Conduza o peito em direção ao topo da barra mantendo a postura ereta.',
      'Ultrapasse a barra com folga visual de 2 a 3 centímetros.',
      'Mantenha o olhar fixo no horizonte, sem olhar para cima ou para baixo.',
    ],
    dicaTaj:
      'Mire encostar a fúrcula esternal (topo do peito) na barra. Assim, seu queixo passa com margem incontestável.',
  },
  {
    id: 'isometria-feminina',
    title: 'Sustentação Isométrica Feminina no Edital',
    subtitle: 'Como cravar o tempo de sustentação sem balanço ou queda prematura',
    category: 'feminina',
    categoryLabel: 'Trilha Feminina',
    duration: '04:40',
    thumbnailBadge: 'FOCO FEMININO',
    thumbnailAngle: 'Visão Lateral HD',
    summary:
      'A isometria feminina testa a resistência de força com o queixo acima do travessão. Cada segundo conta e o posicionamento de core e respiração fazem a diferença entre 10s e 30s.',
    bancaExigencia:
      'A contagem é iniciada quando a candidata retira os apoios e cessa no instante em que o queixo atingir a barra ou descer do nível do travessão.',
    errosQueZeram: [
      'Apoiar o queixo na barra para descansar durante a sustentação',
      'Balançar o corpo para frente e para trás para amortecer o cansaço',
      'Cruzar pernas e flexionar joelhos quando o edital exige membros alinhados',
    ],
    passosBiomecanica: [
      'Use o banco de apoio para posicionar o queixo já acima da barra com os cotovelos colados no corpo.',
      'Tranque as escápulas com máxima contração dorsal antes de soltar os pés.',
      'Ative glúteos e abdômen em bloco (hollow position) respirando curto pelo diafragma.',
    ],
    dicaTaj:
      'Na isometria, não olhe para o cronômetro do avaliador. Foque em um ponto fixo e conte séries de 5 respirações lentas.',
  },
  {
    id: 'sem-kipping',
    title: 'Eliminação de Kipping, Pedalada e Balanço',
    subtitle: 'Técnica de corpo em bloco para blindar repetições contra anulações',
    category: 'erros-fatais',
    categoryLabel: 'Erros Fatais',
    duration: '03:25',
    thumbnailBadge: 'RIGOR EXTREMO',
    thumbnailAngle: 'Plano Geral Corpo Inteiro',
    summary:
      'Movimentos de pernas e impulsos com o quadril (conhecidos como kipping ou pedalada) são estritamente proibidos na esmagadora maioria dos concursos policiais e militares.',
    bancaExigencia:
      'Não será permitido qualquer impulso das pernas ou do quadril. O corpo deve permanecer alinhado verticalmente durante todo o teste.',
    errosQueZeram: [
      'Dobrar os joelhos em 90° e chutar o ar na tentativa de subir',
      'Jogar o quadril à frente fazendo onda ou balanço',
      'Descompasso entre subida dos braços e subida do tronco',
    ],
    passosBiomecanica: [
      'Junte os calcanhares e aponte as pontas dos pés levemente para o chão.',
      'Mantenha o quadril travado em retroversão com abdômen rígido.',
      'Toda a força vetorial deve ser direcionada para cima, sem vetor horizontal.',
    ],
    dicaTaj:
      'Imagine que você está vestindo uma cinta de ferro do tórax aos pés: seu corpo vira uma haste sólida e a barra sobe reta.',
  },
];

interface VideosExecucaoSectionProps {
  onOpenCheckout: () => void;
}

export const VideosExecucaoSection: React.FC<VideosExecucaoSectionProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [selectedVideo, setSelectedVideo] = useState<VideoTutorial | null>(null);

  const filteredVideos = VIDEO_TUTORIALS.filter((v) => {
    if (activeCategory === 'todos') return true;
    return v.category === activeCategory;
  });

  return (
    <Section id="videos-execucao" variant="default" glow="teal">
      {/* Section Header */}
      <SectionHeading
        kicker="VÍDEOS DE EXECUÇÃO CORRETA"
        kickerSecondary="PADRÃO OFICIAL DE BANCA"
        title="TÉCNICA QUE APROVA: VEJA COMO CADA MOVIMENTO DEVE SER EXECUTADO"
      >
        <p className="font-heading text-xl sm:text-2xl font-bold uppercase text-[#b38d4c] tracking-wide">
          Aprenda o que os avaliadores buscam e o que anula sua repetição
        </p>
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Sem achismos da internet. No Protocolo TAJ, você tem acesso às demonstrações visuais filmadas sob os exatos critérios das bancas examinadoras.
        </p>
      </SectionHeading>

      {/* Category Filter Pills */}
      <div className="mt-8 flex justify-center">
        <div className="inline-flex flex-wrap justify-center p-1.5 rounded-2xl bg-[#121618] border border-neutral-800 text-xs font-semibold gap-1">
          <button
            onClick={() => setActiveCategory('todos')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'todos'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Todos os Vídeos (6)
          </button>
          <button
            onClick={() => setActiveCategory('padrao-banca')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'padrao-banca'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Padrão de Banca
          </button>
          <button
            onClick={() => setActiveCategory('biomecanica')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'biomecanica'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Biomecânica
          </button>
          <button
            onClick={() => setActiveCategory('feminina')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'feminina'
                ? 'bg-[#0f5557] text-white shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Trilha Feminina (Isometria)
          </button>
          <button
            onClick={() => setActiveCategory('erros-fatais')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeCategory === 'erros-fatais'
                ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Erros Fatais
          </button>
        </div>
      </div>

      {/* Video Mockup Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedVideo(item)}
            className="group rounded-2xl bg-[#121618] border border-[#0f5557]/40 hover:border-[#b38d4c] transition-all overflow-hidden cursor-pointer flex flex-col justify-between shadow-xl hover:-translate-y-1.5 duration-300"
          >
            {/* Top Video Preview Thumbnail Box */}
            <div className="relative aspect-video bg-gradient-to-br from-[#182024] via-[#0d1214] to-[#07090a] overflow-hidden border-b border-neutral-800/80 flex items-center justify-center">
              {/* Tactical technical background grid */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,#0f555710_1px,transparent_1px),linear-gradient(to_bottom,#0f555710_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-60" 
                aria-hidden="true" 
              />

              {/* Glowing center circle */}
              <div 
                className="absolute w-32 h-32 rounded-full bg-[#0f5557]/20 blur-2xl group-hover:bg-[#b38d4c]/20 transition-all pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Angle Tag Overlay */}
              <div className="absolute top-3 left-3 z-10">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 border border-neutral-800 text-neutral-300 uppercase">
                  {item.thumbnailAngle}
                </span>
              </div>

              {/* Duration Tag */}
              <div className="absolute top-3 right-3 z-10">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-black/80 text-[#b38d4c] font-bold border border-[#b38d4c]/40">
                  {item.duration}
                </span>
              </div>

              {/* Play Button Icon Overlay */}
              <div className="relative z-10 w-14 h-14 rounded-full bg-[#b38d4c] group-hover:bg-[#c99f58] group-hover:scale-110 transition-transform flex items-center justify-center text-black shadow-2xl">
                <Play className="w-6 h-6 ml-0.5 fill-black" />
              </div>

              {/* Bottom bar inside thumbnail */}
              <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="text-white flex items-center gap-1">
                  <Video className="w-3 h-3 text-[#b38d4c]" />
                  AULA TÉCNICA EM VÍDEO
                </span>
                <span className="text-[#b38d4c] font-bold">CLIQUE P/ ABRIR</span>
              </div>
            </div>

            {/* Video Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#0f5557]/20 text-[#0f5557] font-semibold border border-[#0f5557]/40">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400">
                    {item.thumbnailBadge}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold uppercase text-white group-hover:text-[#b38d4c] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Interactive prompt button */}
              <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-[#b38d4c]">
                <span className="group-hover:translate-x-0.5 transition-transform">
                  Ver Análise & Erros da Banca
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Callout Footer */}
      <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-[#121618] border border-[#0f5557]/60 p-6 text-center space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#b38d4c] font-semibold">
          <Sparkles className="w-4 h-4 text-[#b38d4c]" />
          <span>VÍDEOS COMPLETOS DISPONÍVEIS NO APP</span>
        </div>
        <p className="text-sm text-neutral-300 max-w-xl mx-auto leading-relaxed">
          Cada exercício da sua planilha diária possui um vídeo direto ao ponto, com instruções biomecânicas e alertas do que não fazer para nunca ter sua barra anulada.
        </p>
        <Button
          variant="gold"
          onClick={onOpenCheckout}
          icon={<ArrowRight className="w-4 h-4" />}
        >
          ACESSAR TODOS OS VÍDEOS PELO APP
        </Button>
      </div>

      {/* Explanatory Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onOpenCheckout={onOpenCheckout}
      />
    </Section>
  );
};
