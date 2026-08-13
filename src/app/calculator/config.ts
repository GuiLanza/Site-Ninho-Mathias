import type {
  Acoustic,
  AudienceRange,
  EventRule,
  EventTypeId,
  Format,
  FormatCopy,
  MusicalPresence,
  ScoreDelta,
  Scores,
  SpaceSize,
  TechnicalStructure,
} from './types';

export const WHATSAPP_NUMBER = '553184578989';

export const FORMAT_LABELS: Record<Format, string> = {
  solo: 'Solo',
  trio: 'Trio',
  banda: 'Banda',
};

const SHOW_LABELS = {
  duration: 'Tempo de show',
  moments: 'Intervalos',
} as const;

const DEFAULT_FORMATIONS: Record<Format, string> = {
  solo: 'Voz + Violão',
  trio: 'Definida de acordo com a proposta do evento e a acústica do local.',
  banda: 'Vocal + Violão + Guitarra + Baixo + Teclado + Bateria',
};

const SHOW_RESULT_COPY: Record<Format, FormatCopy> = {
  solo: {
    title: 'Solo',
    text: 'Uma apresentação intimista e versátil, ideal para ambientes menores ou quando a música entra como acompanhamento elegante do evento.',
    formation: DEFAULT_FORMATIONS.solo,
  },
  trio: {
    title: 'Trio',
    text: 'Uma formação com mais presença sonora, indicada quando o evento pede dinâmica e cobertura musical sem a estrutura de um show completo.',
    formation: DEFAULT_FORMATIONS.trio,
  },
  banda: {
    title: 'Banda',
    text: 'Uma formação completa para eventos que pedem impacto de palco, repertório amplo e uma experiência próxima de show.',
    formation: DEFAULT_FORMATIONS.banda,
  },
};

const PARTY_AUDIENCE: Record<AudienceRange, ScoreDelta> = {
  ATE_30: { solo: 3 },
  DE_31_A_80: { solo: 2, trio: 2 },
  DE_81_A_150: { trio: 3, banda: 1 },
  DE_151_A_300: { trio: 2, banda: 3 },
  ACIMA_300: { trio: 1, banda: 5 },
};

export const CEREMONY_CONFIG = {
  id: 'CERIMONIA' as const,
  labels: {
    duration: 'Duração da apresentação musical',
    moments: 'Momentos musicais',
  },
  scores: {
    base: { solo: 5, trio: 3, banda: 1 } satisfies Scores,
    audience: {
      ATE_30: { solo: 3 },
      DE_31_A_80: { solo: 2, trio: 1 },
      DE_81_A_150: { trio: 2 },
      DE_151_A_300: { trio: 3, banda: 2 },
      ACIMA_300: { trio: 2, banda: 4 },
    } satisfies Record<AudienceRange, ScoreDelta>,
  },
  tieBreak: ['solo', 'trio', 'banda'] as Format[],
  durationText:
    'Definida de acordo com a programação da cerimônia, acompanhando entradas e momentos especiais.',
  momentsText: 'Momentos musicais definidos de acordo com a programação da cerimônia.',
  formations: {
    solo: 'Voz + Violão',
    trio: 'Definida de acordo com a proposta do evento e a acústica do local.',
    banda: 'Vocal + Violão + Guitarra + Baixo + Teclado + Bateria',
  } satisfies Record<Format, string>,
  resultCopy: {
    solo: {
      title: 'Solo',
      text: 'Uma apresentação intimista e elegante, ideal para acompanhar os momentos especiais da cerimônia com voz e violão, criando uma atmosfera musical delicada e envolvente.',
      formation: 'Voz + Violão',
    },
    trio: {
      title: 'Trio',
      text: 'Uma formação que proporciona maior presença musical, mantendo a elegância e a sensibilidade necessárias para uma cerimônia.',
      formation: 'Definida de acordo com a proposta do evento e a acústica do local.',
    },
    banda: {
      title: 'Banda',
      text: 'Uma formação completa indicada para cerimônias de maior porte ou eventos que buscam uma experiência musical mais marcante e com maior presença de palco.',
      formation: 'Vocal + Violão + Guitarra + Baixo + Teclado + Bateria',
    },
  } satisfies Record<Format, FormatCopy>,
  helperText:
    'A recomendação considerará o tamanho do público, a acústica do local e o nível de presença musical desejado.',
} as const;

const SHOW_DURATION: Record<Format, string> = {
  solo: 'Apresentação de aproximadamente 60 a 90 minutos, ajustável à dinâmica do evento.',
  trio: 'Dois blocos de cerca de 45 a 60 minutos, com intervalo entre eles.',
  banda: 'Show de aproximadamente 2 horas, com intervalo entre os sets.',
};

const SHOW_MOMENTS: Record<Format, string> = {
  solo: 'Um intervalo curto, conforme a dinâmica do evento.',
  trio: 'Um intervalo entre os blocos musicais.',
  banda: 'Intervalo entre os sets, com possibilidade de encore.',
};

function showRule(
  id: EventTypeId,
  label: string,
  baseScores: Scores,
  extras?: Partial<Pick<EventRule, 'tieBreak'>>,
): EventRule {
  return {
    id,
    label,
    baseScores,
    audienceScores: PARTY_AUDIENCE,
    tieBreak: extras?.tieBreak ?? ['trio', 'banda', 'solo'],
    labels: SHOW_LABELS,
    durationText: '',
    momentsText: '',
    resultCopy: SHOW_RESULT_COPY,
  };
}

export const EVENT_RULES: Record<EventTypeId, EventRule> = {
  CASAMENTO: showRule('CASAMENTO', 'Casamentos', { solo: 2, trio: 4, banda: 3 }),
  CERIMONIA: {
    id: 'CERIMONIA',
    label: 'Cerimônias',
    helperText: CEREMONY_CONFIG.helperText,
    baseScores: CEREMONY_CONFIG.scores.base,
    audienceScores: CEREMONY_CONFIG.scores.audience,
    tieBreak: [...CEREMONY_CONFIG.tieBreak],
    labels: { ...CEREMONY_CONFIG.labels },
    durationText: CEREMONY_CONFIG.durationText,
    momentsText: CEREMONY_CONFIG.momentsText,
    resultCopy: CEREMONY_CONFIG.resultCopy,
  },
  ANIVERSARIO: showRule('ANIVERSARIO', 'Aniversários', { solo: 2, trio: 4, banda: 3 }),
  FORMATURA: showRule('FORMATURA', 'Formaturas', { solo: 1, trio: 3, banda: 4 }),
  CORPORATIVO: showRule('CORPORATIVO', 'Eventos Corporativos', { solo: 3, trio: 4, banda: 2 }),
  LANCAMENTO: showRule('LANCAMENTO', 'Lançamentos de Produtos e Inaugurações', {
    solo: 2,
    trio: 4,
    banda: 3,
  }),
  COQUETEL: showRule('COQUETEL', 'Coquetéis e Recepções', { solo: 4, trio: 3, banda: 1 }),
  FEIRA: showRule('FEIRA', 'Feiras e Exposições', { solo: 3, trio: 4, banda: 2 }),
  CULTURAL: showRule('CULTURAL', 'Eventos Culturais', { solo: 2, trio: 3, banda: 4 }),
  FESTIVAL: showRule('FESTIVAL', 'Festivais', { solo: 0, trio: 2, banda: 6 }, {
    tieBreak: ['banda', 'trio', 'solo'],
  }),
  BAR_RESTAURANTE: showRule('BAR_RESTAURANTE', 'Bares e Restaurantes', { solo: 4, trio: 3, banda: 1 }),
  HOTEL: showRule('HOTEL', 'Hotéis e Resorts', { solo: 3, trio: 4, banda: 2 }),
  CLUBE: showRule('CLUBE', 'Eventos em Clubes', { solo: 1, trio: 3, banda: 4 }),
  CONDOMINIO: showRule('CONDOMINIO', 'Eventos em Condomínios', { solo: 3, trio: 4, banda: 2 }),
  OUTRO: showRule('OUTRO', 'Outro', { solo: 2, trio: 3, banda: 2 }),
};

export const EVENT_TYPE_ORDER: EventTypeId[] = [
  'CASAMENTO',
  'CERIMONIA',
  'ANIVERSARIO',
  'FORMATURA',
  'CORPORATIVO',
  'LANCAMENTO',
  'COQUETEL',
  'FEIRA',
  'CULTURAL',
  'FESTIVAL',
  'BAR_RESTAURANTE',
  'HOTEL',
  'CLUBE',
  'CONDOMINIO',
  'OUTRO',
];

export const SPACE_OPTIONS: { value: SpaceSize; label: string; hint: string }[] = [
  { value: 'pequeno', label: 'Pequeno', hint: 'Ambiente intimista ou sala reduzida.' },
  { value: 'medio', label: 'Médio', hint: 'Salão, lounge ou área coberta.' },
  { value: 'grande', label: 'Grande', hint: 'Pista, área externa ampla ou salão amplo.' },
];

export const ACOUSTIC_OPTIONS: { value: Acoustic; label: string; hint: string }[] = [
  {
    value: 'delicada',
    label: 'Ambiente silencioso',
    hint: 'Mais intimista, com a voz em evidência.',
  },
  {
    value: 'padrao',
    label: 'Ambiente comum',
    hint: 'Som controlado, sem exigência especial.',
  },
  {
    value: 'reforco',
    label: 'Ambiente aberto ou com mais movimento',
    hint: 'Espaço externo, conversas ou um volume maior de pessoas.',
  },
];

export const PRESENCE_OPTIONS: {
  value: MusicalPresence;
  label: string;
  hint: string;
  concepts: string[];
}[] = [
  {
    value: 'acompanhamento',
    label: 'Acompanhamento',
    hint: 'Música elegante, presente no ambiente, mas sem roubar a cena.',
    concepts: ['Atmosfera', 'Elegância', 'Proximidade'],
  },
  {
    value: 'presenca',
    label: 'Presença Musical',
    hint: 'Momentos marcantes, com maior presença e mais corpo sonoro.',
    concepts: ['Equilíbrio', 'Energia', 'Envolvimento'],
  },
  {
    value: 'impacto',
    label: 'Impacto de Palco',
    hint: 'Uma experiência de espetáculo, em que a música assume protagonismo.',
    concepts: ['Palco', 'Energia', 'Espetáculo'],
  },
];

export const STRUCTURE_OPTIONS: { value: TechnicalStructure; label: string; hint: string }[] = [
  {
    value: 'minima',
    label: 'Estrutura Mínima',
    hint: 'Sem palco, com estrutura simples ou música integrada ao ambiente.',
  },
  {
    value: 'padrao',
    label: 'Estrutura Padrão',
    hint: 'Existe um lugar adequado para os músicos e conseguimos montar o som normalmente.',
  },
  {
    value: 'palco',
    label: 'Palco Completo',
    hint: 'Estrutura preparada para show, com palco, sistema de som e espaço para uma formação maior.',
  },
];

export const SPACE_SCORES: Record<SpaceSize, ScoreDelta> = {
  pequeno: { solo: 2 },
  medio: { trio: 1 },
  grande: { trio: 1, banda: 2 },
};

export const ACOUSTIC_SCORES: Record<Acoustic, ScoreDelta> = {
  delicada: { solo: 2 },
  padrao: { trio: 1 },
  reforco: { banda: 2 },
};

export const PRESENCE_SCORES: Record<MusicalPresence, ScoreDelta> = {
  acompanhamento: { solo: 3 },
  presenca: { trio: 2 },
  impacto: { banda: 3 },
};

export const STRUCTURE_SCORES: Record<TechnicalStructure, ScoreDelta> = {
  minima: { solo: 2 },
  padrao: { trio: 1 },
  palco: { banda: 3 },
};

export const STRUCTURE_BY_FORMAT: Record<Format, string> = {
  solo: 'Estrutura enxuta: som ambiente ou PA discreto, sem necessidade de palco.',
  trio: 'Estrutura moderada: PA adequado ao espaço e ponto de palco, se houver.',
  banda: 'Estrutura completa: palco, PA de show, backline e tempo de passagem de som.',
};

export function getShowDurationText(format: Format): string {
  return SHOW_DURATION[format];
}

export function getShowMomentsText(format: Format): string {
  return SHOW_MOMENTS[format];
}

export function toAudienceRange(count: number): AudienceRange {
  if (count <= 30) return 'ATE_30';
  if (count <= 80) return 'DE_31_A_80';
  if (count <= 150) return 'DE_81_A_150';
  if (count <= 300) return 'DE_151_A_300';
  return 'ACIMA_300';
}

export function audienceRangeLabel(range: AudienceRange): string {
  switch (range) {
    case 'ATE_30':
      return 'Até 30 pessoas';
    case 'DE_31_A_80':
      return '31 a 80 pessoas';
    case 'DE_81_A_150':
      return '81 a 150 pessoas';
    case 'DE_151_A_300':
      return '151 a 300 pessoas';
    case 'ACIMA_300':
      return 'Mais de 300 pessoas';
  }
}
