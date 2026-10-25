export type TrackType = 'masculina' | 'feminina';

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  features: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'geral' | 'app' | 'treino';
}

export interface TafAssessmentResult {
  gender: 'masculino' | 'feminino';
  currentLevel: string;
  weeksUntilTaf: number;
  recommendedPhase: string;
  focusArea: string;
  suggestedRoutine: string;
}
