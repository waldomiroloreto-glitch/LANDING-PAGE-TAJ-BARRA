/**
 * Central design tokens & business variables for Protocolo TAJ.
 * Adjust prices, colors, guarantee duration, and core copy here in one place.
 */

export const TOKENS = {
  // Brand identity
  brand: {
    name: 'PROTOCOLO TAJ',
    shortName: 'TAJ',
    tagline: 'TAF BARRA FIXA',
    platform: 'PREPARAÇÃO PELO APP',
    durationDays: 30,
    supportEmail: 'contato@protocolotaj.com.br',
  },

  // Color values
  colors: {
    bg: '#0b0d0e',
    surface: '#121618',
    surfaceElevated: '#161c1e',
    surfaceDark: '#070809',
    teal: '#0f5557',
    tealHover: '#167073',
    tealLight: '#1c888c',
    gold: '#b38d4c',
    goldHover: '#c99f58',
    goldLight: '#e2be7a',
    offwhite: '#f6f6f4',
    textMuted: '#9ca3af',
  },

  // Commercial offer tokens (adjust price & warranty here)
  pricing: {
    cashPrice: 'R$ 97,00',
    installments: '12x de R$ 9,74',
    installmentValue: 'R$ 9,74',
    installmentsCount: 12,
    guaranteeDays: 7,
    guaranteeTitle: '7 Dias de Garantia',
    guaranteeSubtitle: 'Garantia Incondicional',
    guaranteeText:
      'Queremos que você inicie sua preparação com total segurança e clareza. Você tem 7 dias para explorar o aplicativo, testar o protocolo e avaliar se ele atende à sua rotina.',
  },

  // Common CTAs
  cta: {
    heroChooseTrack: 'ESCOLHA SUA TRILHA',
    heroDiagnostic: 'Diagnóstico Rápido de Nível',
    accessApp: 'QUERO ACESSAR O PROTOCOLO TAJ PELO APP',
    startApp: 'QUERO COMEÇAR MINHA PREPARAÇÃO COM O PROTOCOLO TAJ',
    stickyMobile: 'ACESSAR NO APP',
    bonusPreview: 'Ver Detalhes do Conteúdo',
    bonusClaim: 'QUERO RECEBER O PROTOCOLO COM TODOS OS BÔNUS INCLUSOS',
  },

  // Layout spacing & containers
  layout: {
    maxWidth: 'max-w-7xl',
    contentWidth: 'max-w-4xl',
    sectionPadding: 'py-16 lg:py-24',
    compactPadding: 'py-12 lg:py-16',
  },
} as const;

export type Tokens = typeof TOKENS;
