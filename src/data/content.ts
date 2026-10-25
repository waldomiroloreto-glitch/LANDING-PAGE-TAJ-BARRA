import { BonusItem, FaqItem } from '../types';

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'BÔNUS #1',
    title: 'CHECKLIST ESTRATÉGICO DO EDITAL',
    subtitle: 'Treinar para a prova errada pode custar caro.',
    description:
      'Você pode desenvolver força e resistência e, mesmo assim, descobrir tarde demais que não estava praticando o padrão de execução exigido pela banca. Este checklist foi pensado para ajudar você a conferir os pontos essenciais do edital: tipo de avaliação, padrão de execução, quantidade mínima ou tempo exigido e critérios de aprovação. Você começa a preparação sabendo qual é o alvo que precisa perseguir.',
    tag: 'Material Real Incluso no Produto',
    features: [
      'Identificação exata do padrão: pegada pronada (palmas para frente) ou supinada',
      'Critérios de altura do queixo e linha superior da barra',
      'Regras sobre flexão de quadril, impulsos das pernas (pedalar) e tempo de parada',
      'Critérios femininos: sustentação estática (isometria) vs repetições completas',
      'Folha de verificação direta para imprimir ou consultar no celular'
    ]
  },
  {
    id: 'bonus-2',
    number: 'BÔNUS #2',
    title: 'DIÁRIO DE EVOLUÇÃO TAJ',
    subtitle: 'Pare de depender da memória para descobrir se está avançando.',
    description:
      'Registre suas sessões, os exercícios executados e os resultados obtidos. Ao comparar os registros, você terá uma visão mais clara do seu desenvolvimento e poderá identificar pontos que merecem atenção. É uma ferramenta simples, mas importante para quem está cansado de treinar sem saber como o desempenho está mudando.',
    tag: 'Disponível no APP e Complementar',
    features: [
      'Registro diário de séries, repetições válidas e tempo sob tensão',
      'Histórico de evolução por semana para comparar seu ponto inicial e atual',
      'Métricas de descanso entre séries e percepção subjetiva de esforço (PSE)',
      'Identificação rápida de estagnação para ajustar a carga e a recuperação',
      'Interface limpa de acompanhamento integrada à sua rotina'
    ]
  },
  {
    id: 'bonus-3',
    number: 'BÔNUS #3',
    title: 'CHECKLIST PRÉ-TAF',
    subtitle: 'Não deixe um detalhe de execução virar um problema no dia da avaliação.',
    description:
      'Organize uma revisão dos requisitos do concurso, dos documentos e das orientações oficiais que precisam ser conferidos antes da prova. Use o checklist para reduzir esquecimentos evitáveis e revisar os pontos essenciais da sua preparação. O foco é chegar ao dia do teste com os requisitos conferidos e a atenção direcionada ao que realmente importa.',
    tag: 'Ferramenta de Organização Estratégica',
    features: [
      'Documentos e atestados médicos específicos para o teste físico',
      'Uniforme e calçado permitido no padrão do edital',
      'Protocolo de aquecimento e ativação articular antes de subir na barra',
      'Estratégia mental para controlar a ansiedade nos minutos que antecedem a chamada',
      'Como se posicionar e ouvir com atenção os comandos do avaliador'
    ]
  },
  {
    id: 'bonus-core',
    number: 'BÔNUS #4 · MÓDULO ESTRATÉGICO',
    title: 'TREINAMENTO DE ABDOMINAL & FORTALECIMENTO DE CORE',
    subtitle: 'Atividade sinergista da musculatura corporal para máxima eficácia do treinamento e aprovação no TAF.',
    description:
      'Integrado ao projeto do aplicativo como um Módulo Bônus Estratégico sem custo a mais. Na barra fixa — tanto nas repetições masculinas quanto na sustentação isométrica feminina —, o abdômen e a musculatura profunda do core atuam em atividade sinergista fundamental: estabilizam o tronco em bloco ("posição hollow body"), eliminam o balanço das pernas, protegem a coluna lombar de hiperextensões e impedem o "kipping" que desclassifica repetições no TAF. Fortalecer essa musculatura estabilizadora canaliza toda a potência das dorsais e braços, aumentando a eficácia do treinamento e acelerando sua aprovação.',
    tag: 'Módulo Bônus Estratégico · Sem Custo a Mais',
    features: [
      'Ativação sinergista de reto abdominal, oblíquos e transverso durante a tração na barra',
      'Protocolos de "Hollow Body" e anti-extensão lombar para anular pêndulos e pedaladas',
      'Treino específico para sustentar o tronco estático na isometria feminina (sem oscilações)',
      'Prevenção biomecânica de compensações articulares nos ombros e na região lombar',
      'Rotinas práticas de 10 a 15 minutos adicionadas ao APP sem nenhum custo a mais'
    ]
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '1. Como funciona o treinamento pelo APP?',
    answer:
      'O Protocolo TAJ será disponibilizado por aplicativo, conforme as condições de acesso informadas na compra. Nele, o aluno poderá consultar o conteúdo de preparação incluído no programa. Antes da publicação da oferta, devem ser especificados o nome do aplicativo, o processo de acesso e o período de disponibilidade.',
    category: 'app'
  },
  {
    question: '2. Sou iniciante e não consigo fazer nenhuma barra. Posso começar?',
    answer:
      'A proposta é atender candidatos em diferentes níveis de preparação, inclusive iniciantes. A progressão deve partir da capacidade atual do aluno. Se você sentir dor, tiver uma lesão ou possuir alguma restrição médica, procure orientação profissional antes de começar.',
    category: 'treino'
  },
  {
    question: '3. Quanto tempo preciso dedicar ao treino?',
    answer:
      'A frequência e a duração devem seguir a programação efetivamente incluída no protocolo e respeitar sua recuperação. O objetivo é ter uma rotina organizada, não treinar sem descanso. Consulte a programação completa antes de iniciar.',
    category: 'treino'
  },
  {
    question: '4. Vou conseguir atingir a meta do edital em 30 dias?',
    answer:
      'Não é possível garantir isso para todas as pessoas. A evolução depende do condicionamento inicial, da execução, da regularidade, da recuperação e das exigências da prova. O protocolo oferece uma estrutura para orientar sua preparação, mas não garante uma quantidade específica de repetições nem aprovação.',
    category: 'geral'
  },
  {
    question: '5. O produto serve para homens e mulheres?',
    answer:
      'Sim, a oferta contempla uma trilha masculina e uma trilha feminina. É fundamental escolher a preparação correspondente ao formato exigido no seu concurso, pois alguns editais utilizam critérios e modalidades de avaliação diferentes. Confira se o conteúdo atende ao padrão específico da sua prova.',
    category: 'geral'
  },
  {
    question: '6. Preciso ter uma academia?',
    answer:
      'Você precisará ter acesso às condições e aos equipamentos necessários para executar os exercícios previstos no programa. O APP organiza o conteúdo, mas não substitui os equipamentos físicos exigidos para treinar com segurança. Confira os requisitos antes da compra.',
    category: 'treino'
  },
  {
    question: '7. Por quanto tempo terei acesso ao APP? Existe garantia?',
    answer:
      'O período de acesso, o preço e as condições de garantia ou reembolso devem estar expressamente informados na página de compra. Confira essas condições antes de finalizar o pedido.',
    category: 'geral'
  }
];

export const DESBLOQUEIOS = [
  {
    number: '01',
    title: 'Seu Plano de Treino Organizado no APP',
    lead: 'Chega de abrir o YouTube, procurar um exercício, assistir a três vídeos diferentes e terminar sem saber qual seguir.',
    body: 'Tenha acesso à estrutura de treinamento do Protocolo TAJ pelo aplicativo, para consultar as orientações e acompanhar o plano no celular. Você deixa de depender da memória ou de anotações espalhadas. Abre o APP e consulta o que foi preparado para sua rotina.'
  },
  {
    number: '02',
    title: 'Uma Progressão Para Quem Ainda Não Consegue Fazer Barra',
    lead: 'Você olha para a barra, tenta subir e não consegue. Na tentativa seguinte, sente os braços pesados. Depois de algumas semanas repetindo a mesma coisa, a dúvida continua: estou evoluindo ou só estou me desgastando?',
    body: 'O protocolo organiza uma progressão de exercícios de acordo com o nível inicial, para que você tenha etapas claras de preparação. Você não precisa fingir que já está no nível da prova. Precisa saber como começar a desenvolver as capacidades necessárias.'
  },
  {
    number: '03',
    title: 'Trilha Masculina e Trilha Feminina',
    lead: 'O edital pode mudar tudo. A quantidade de repetições, o padrão de execução e até o tipo de avaliação podem ser diferentes entre concursos e categorias.',
    body: 'Por isso, o Protocolo TAJ inclui uma proposta de preparação masculina e outra feminina, direcionadas às exigências aplicáveis a cada prova. Você deixa de tratar todo TAF como se fosse igual e passa a organizar sua preparação considerando o teste que realmente precisa enfrentar.'
  },
  {
    number: '04',
    title: 'Acompanhamento da Sua Evolução',
    lead: 'É frustrante treinar por semanas e não saber dizer se você está mais perto da meta.',
    body: 'Com um registro organizado dos treinos e do desempenho, você pode comparar seus resultados, observar mudanças e identificar o que precisa de atenção. Você começa a enxergar a preparação com dados e consistência, não apenas com a sensação de que treinou bastante.'
  },
  {
    number: '05',
    title: 'Mais Clareza Para Chegar ao Dia da Prova',
    lead: 'A barra não é apenas uma questão de força. Você precisa conhecer o movimento aceito, a meta exigida e os critérios utilizados pela banca.',
    body: 'O protocolo orienta sua organização e reforça a importância de conferir o edital do concurso. A meta é chegar ao teste sabendo qual é a exigência, como você está em relação a ela e o que precisa continuar desenvolvendo.'
  }
];

export const PARA_QUEM = [
  {
    num: '1',
    title: 'Para o candidato que ainda não consegue fazer a barra exigida',
    desc: 'Você sabe qual é a meta, mas ainda está longe dela. Precisa de uma progressão para começar do seu nível atual, sem se comparar o tempo todo com candidatos mais avançados.'
  },
  {
    num: '2',
    title: 'Para quem está cansado de treinar no improviso',
    desc: 'Você já assistiu a vídeos, testou exercícios e ouviu opiniões diferentes. O que falta é uma estrutura para organizar as sessões e acompanhar a evolução.'
  },
  {
    num: '3',
    title: 'Para quem tem medo de perder a vaga no TAF',
    desc: 'A preparação física se tornou uma preocupação constante. Você quer dedicar esforço ao que realmente precisa desenvolver, respeitando as regras do concurso e sua capacidade atual.'
  },
  {
    num: '4',
    title: 'Para mulheres que precisam de preparação específica',
    desc: 'Você quer entender como organizar seu treinamento de acordo com o tipo de avaliação feminina prevista no edital, sem simplesmente copiar uma rotina criada para outra prova.'
  },
  {
    num: '5',
    title: 'Para quem quer consultar o treino pelo celular',
    desc: 'Você prefere ter as orientações organizadas em um aplicativo, para consultar o material durante a preparação, em vez de depender de arquivos e vídeos espalhados.'
  },
  {
    num: '6',
    title: 'Para quem está disposto a executar o plano',
    desc: 'O aplicativo não treina por você. O protocolo serve para orientar a preparação; a evolução exige consistência, recuperação adequada e execução responsável.'
  }
];

export const HERO_COPY = {
  kicker: 'PROTOCOLO TAJ — TAF BARRA FIXA',
  kickerSecondary: 'PREPARAÇÃO PELO APP',
  headline: 'Preparação de teste masculino e feminino para chegar no TAF com um plano, não com improvisos.',
  headlineHighlight: 'plano',
  subtitles: [
    'Você não precisa continuar tentando fazer barra sem saber se está treinando da maneira certa.',
    'O Protocolo TAJ — TAF Barra Fixa foi desenvolvido para organizar a preparação de candidatos que precisam evoluir na barra fixa, desde o nível iniciante até a meta exigida no edital.',
    'Com trilhas de preparação masculina e feminina, você começa compreendendo as exigências da sua prova, identifica seu nível atual e segue uma estrutura de treino compatível com seu ponto de partida.'
  ],
  coreThesis: 'Uma preparação. Duas trilhas específicas. Um objetivo: chegar ao teste sabendo o que precisa executar.',
  trustPoints: [
    'Trilhas 100% no APP',
    'Critérios de Edital (PF, PRF, PM, PC, CBM)',
    'Garantia Incondicional de 7 Dias'
  ]
};

export const TRACKS_COPY = {
  kicker: 'DIRECIONAMENTO ESPECÍFICO',
  kickerSecondary: 'DUAS METODOLOGIAS',
  title: 'ESCOLHA SUA TRILHA',
  subtitle: 'Uma preparação. Duas trilhas específicas. Um objetivo: chegar ao teste sabendo o que precisa executar. Conheça a rota estruturada para cada padrão de avaliação.',
  male: {
    title: 'TAF BARRA FIXA MASCULINA',
    tag: 'REPETIÇÕES & EXECUÇÃO',
    audience: 'Para o candidato que ainda não consegue fazer o número de repetições exigido ou precisa melhorar sua execução.',
    bullets: [
      {
        bold: 'Progressão adequada ao nível inicial:',
        text: 'métodos graduais para quem faz 0 repetições até o número previsto no edital.'
      },
      {
        bold: 'Orientação para organizar exercícios, séries e descanso:',
        text: 'sem sobrecarregar tendões e sem treinar às cegas.'
      },
      {
        bold: 'Acompanhamento da evolução:',
        text: 'métricas claras registradas no aplicativo para monitorar os ganhos reais de força.'
      },
      {
        bold: 'Preparação direcionada ao padrão de execução previsto no edital:',
        text: 'queixo acima da barra, extensão completa dos cotovelos e eliminação de pedaladas.'
      }
    ]
  },
  female: {
    title: 'BARRA FEMININA PARA TAF',
    tag: 'ISOMETRIA & SUSTENTAÇÃO',
    sub: 'Do primeiro exercício à meta do edital.',
    audience: 'Para a candidata que precisa desenvolver sua capacidade na barra e entender como se preparar para os critérios específicos da prova feminina.',
    bullets: [
      {
        bold: 'Progressão de acordo com a capacidade inicial:',
        text: 'estruturada para quem nunca conseguiu se sustentar até bater o tempo do teste.'
      },
      {
        bold: 'Organização dos exercícios e da recuperação:',
        text: 'foco nos grupos musculares essenciais: dorsais, bíceps, antebraço e core.'
      },
      {
        bold: 'Acompanhamento do desempenho:',
        text: 'cronometragem exata dos segundos de sustentação e evolução semanal.'
      },
      {
        bold: 'Atenção aos critérios do edital aplicável:',
        text: 'tipo de teste, tempo de sustentação (ex.: 15s a 30s) ou repetições exigidas, conforme a sua banca examinadora.'
      }
    ]
  }
};

export const APP_SHOWCASE_COPY = {
  kicker: 'TECNOLOGIA & PRATICIDADE',
  kickerSecondary: 'NA PALMA DA MÃO',
  title: 'PROTOCOLO TAJ — TAF BARRA FIXA',
  subtitle: 'Saia do improviso e tenha um plano de preparação na palma da mão.',
  description: 'Organize seus treinos de barra fixa por 30 dias com um protocolo pelo APP, com trilhas masculina e feminina para você evoluir de acordo com seu nível e as exigências do seu TAF.',
  callout: 'Seu treino. Sua evolução. Sua preparação organizada dentro do aplicativo.',
  pillars: [
    {
      num: '01',
      title: 'Sem ficar perdido entre dezenas de vídeos',
      desc: 'Você não precisa perder tempo filtrando tutoriais amadores. Tenha acesso direto aos movimentos exatos da sua trilha com orientações claras.'
    },
    {
      num: '02',
      title: 'Sem copiar treino de quem já está avançado',
      desc: 'O treino se molda à sua capacidade real hoje, prevenindo lesões nos punhos, cotovelos e ombros antes da prova.'
    },
    {
      num: '03',
      title: 'Sem acordar com dúvidas sobre o que fazer',
      desc: 'Abra o aplicativo, confira as séries, as repetições e o tempo de descanso estipulados para a sua sessão do dia.'
    }
  ]
};

export const PRICING_COPY = {
  kicker: 'INVESTIMENTO CONSCIENTE',
  kickerSecondary: 'TRANSPARÊNCIA',
  title: 'FAÇA AS CONTAS…',
  paragraphs: [
    'Pense no custo de procurar exercícios, testar rotinas diferentes, comprar materiais separados e continuar sem saber se está organizando o treino de maneira adequada.',
    'Você também pode optar por acompanhamento individual com um profissional qualificado, conforme sua necessidade e seu orçamento.',
    'O Protocolo TAJ apresenta outra proposta: reunir o programa de preparação em um aplicativo, com trilhas masculina e feminina e materiais de apoio para organizar sua rotina.',
  ],
  transparencyNote: 'Não vamos inventar preços de serviços de terceiros para inflar o valor do produto. O investimento precisa ser apresentado com transparência.',
  recapList: [
    {
      title: 'PROTOCOLO TAJ — TAF BARRA FIXA',
      desc: 'Programa de preparação para organizar seu treinamento de barra fixa ao longo de 30 dias.'
    },
    {
      title: 'Acesso pelo APP',
      desc: 'Consulte as orientações e acompanhe o plano pelo aplicativo, conforme as condições de acesso contratadas.'
    },
    {
      title: 'Trilha Masculina',
      desc: 'Preparação direcionada ao padrão masculino aplicável à prova do seu concurso.'
    },
    {
      title: 'Trilha Feminina',
      desc: 'Preparação voltada às exigências da avaliação feminina correspondente ao edital.'
    },
    {
      title: 'Estrutura de progressão e acompanhamento',
      desc: 'Organize os treinos, registre seu desempenho e acompanhe sua evolução.'
    },
    {
      title: '🎁 BÔNUS #1 — Checklist Estratégico do Edital',
      desc: 'Confira os requisitos essenciais antes de direcionar seu treinamento.',
      isBonus: true
    },
    {
      title: '🎁 BÔNUS #2 — Diário de Evolução TAJ',
      desc: 'Registre seu desenvolvimento e observe as mudanças ao longo da preparação.',
      isBonus: true
    },
    {
      title: '🎁 BÔNUS #3 — Checklist Pré-TAF',
      desc: 'Organize a revisão dos requisitos e dos preparativos para a avaliação.',
      isBonus: true
    },
    {
      title: '🎁 BÔNUS #4 — Treinamento de Abdominal & Fortalecimento de Core',
      desc: 'Módulo Bônus Estratégico integrado ao app sem custo a mais, baseado na atividade sinergista da musculatura para estabilizar o corpo e facilitar a aprovação.',
      isBonus: true
    }
  ]
};

export const FINAL_CTA_COPY = {
  kicker: 'O PRÓXIMO PASSO',
  kickerSecondary: 'DECISÃO ESTRATÉGICA',
  title: 'SUA PREPARAÇÃO NÃO PRECISA CONTINUAR NO IMPROVISO.',
  highlight: 'NO IMPROVISO.',
  lead: 'Você já tem um objetivo.',
  paragraphs: [
    'Talvez tenha passado meses estudando para o concurso. Talvez esteja conciliando trabalho, família e preparação física. Talvez a data do TAF esteja se aproximando e você não queira descobrir tarde demais que deixou a barra de lado.',
    'Você não precisa resolver tudo hoje. Mas precisa decidir qual será seu próximo passo.',
    'Continuar pulando de vídeo em vídeo, testando exercícios sem uma estrutura clara, ou começar a organizar seu treinamento com um protocolo que você possa consultar pelo APP?',
    'O Protocolo TAJ — TAF Barra Fixa reúne as trilhas masculina e feminina, a estrutura de preparação e os materiais de acompanhamento em uma proposta feita para ajudar você a treinar com mais direção.',
  ],
  verdict: 'Não é uma promessa de aprovação automática. É um convite para parar de deixar a preparação ao acaso e começar a tratar seu objetivo com método, atenção e consistência.',
  closingPush: 'O edital não vai esperar você se sentir pronto. Comece a organizar sua preparação agora.'
};

