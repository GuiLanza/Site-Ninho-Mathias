export type Format = 'solo' | 'trio' | 'banda';

export type EventTypeId =
  | 'CASAMENTO'
  | 'CERIMONIA'
  | 'ANIVERSARIO'
  | 'FORMATURA'
  | 'CORPORATIVO'
  | 'LANCAMENTO'
  | 'COQUETEL'
  | 'FEIRA'
  | 'CULTURAL'
  | 'FESTIVAL'
  | 'BAR_RESTAURANTE'
  | 'HOTEL'
  | 'CLUBE'
  | 'CONDOMINIO'
  | 'OUTRO';

export type AudienceRange =
  | 'ATE_30'
  | 'DE_31_A_80'
  | 'DE_81_A_150'
  | 'DE_151_A_300'
  | 'ACIMA_300';

export type SpaceSize = 'pequeno' | 'medio' | 'grande';
export type Acoustic = 'delicada' | 'padrao' | 'reforco';
export type MusicalPresence = 'acompanhamento' | 'presenca' | 'impacto';
export type TechnicalStructure = 'minima' | 'padrao' | 'palco';

export interface Scores {
  solo: number;
  trio: number;
  banda: number;
}

export type ScoreDelta = Partial<Scores>;

export interface FormatCopy {
  title: string;
  text: string;
  formation: string;
}

export interface EventRule {
  id: EventTypeId;
  label: string;
  helperText?: string;
  baseScores: Scores;
  audienceScores: Record<AudienceRange, ScoreDelta>;
  tieBreak: Format[];
  labels: {
    duration: string;
    moments: string;
  };
  durationText: string;
  momentsText: string;
  resultCopy: Record<Format, FormatCopy>;
}

export interface CalculatorAnswers {
  eventType: EventTypeId | '';
  audienceCount: number | '';
  space: SpaceSize | '';
  acoustic: Acoustic | '';
  presence: MusicalPresence | '';
  structure: TechnicalStructure | '';
}

export interface CompleteAnswers {
  eventType: EventTypeId;
  audienceCount: number;
  audienceRange: AudienceRange;
  space: SpaceSize;
  acoustic: Acoustic;
  presence: MusicalPresence;
  structure: TechnicalStructure;
}

export interface Recommendation {
  format: Format;
  formatLabel: string;
  scores: Scores;
  formation: string;
  title: string;
  text: string;
  durationLabel: string;
  durationText: string;
  momentsLabel: string;
  momentsText: string;
  structureText: string;
  audienceLabel: string;
  eventLabel: string;
  isCeremony: boolean;
}
