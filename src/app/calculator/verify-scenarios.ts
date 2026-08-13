import { BOOKABLE_EVENTS } from '../content/eventsCatalog';
import { CEREMONY_CONFIG, EVENT_RULES, toAudienceRange } from './config';
import { addScores, recommend, toCompleteAnswers } from './engine';
import { AUDIENCE_RANGE_OPTIONS, AUDIENCE_RANGE_TO_COUNT } from './plannerMapping';
import { buildWhatsAppMessage } from './whatsapp';
import type { AudienceRange, CompleteAnswers, Format, Scores } from './types';

interface Scenario {
  name: string;
  answers: CompleteAnswers;
  expected: Format;
}

const intimista = {
  space: 'pequeno' as const,
  acoustic: 'delicada' as const,
  presence: 'acompanhamento' as const,
  structure: 'minima' as const,
};

const grandePorte = {
  space: 'grande' as const,
  acoustic: 'reforco' as const,
  presence: 'impacto' as const,
  structure: 'palco' as const,
};

const scenarios: Scenario[] = [
  {
    name: 'A — Cerimônia, 20 pessoas',
    answers: { eventType: 'CERIMONIA', audienceCount: 20, audienceRange: 'ATE_30', ...intimista },
    expected: 'solo',
  },
  {
    name: 'B — Cerimônia, 60 pessoas',
    answers: { eventType: 'CERIMONIA', audienceCount: 60, audienceRange: 'DE_31_A_80', ...intimista },
    expected: 'solo',
  },
  {
    name: 'C — Cerimônia, 120 pessoas (presença moderada)',
    answers: {
      eventType: 'CERIMONIA',
      audienceCount: 120,
      audienceRange: 'DE_81_A_150',
      space: 'medio',
      acoustic: 'padrao',
      presence: 'presenca',
      structure: 'padrao',
    },
    expected: 'trio',
  },
  {
    name: 'D — Cerimônia, 220 pessoas',
    answers: {
      eventType: 'CERIMONIA',
      audienceCount: 220,
      audienceRange: 'DE_151_A_300',
      space: 'grande',
      acoustic: 'padrao',
      presence: 'presenca',
      structure: 'padrao',
    },
    expected: 'trio',
  },
  {
    name: 'E — Cerimônia, 500 pessoas com palco',
    answers: { eventType: 'CERIMONIA', audienceCount: 500, audienceRange: 'ACIMA_300', ...grandePorte },
    expected: 'banda',
  },
];

function assert(condition: boolean, message: string): void {
  if (!condition) {
    throw new Error(message);
  }
}

function ceremonyAudienceScores(count: number): Scores {
  return addScores(
    { ...CEREMONY_CONFIG.scores.base },
    CEREMONY_CONFIG.scores.audience[toAudienceRange(count)],
  );
}

export function verifyCeremonyScenarios(): string[] {
  const logs: string[] = [];

  const isolated: Array<[string, number, Scores]> = [
    ['A base+público 20', 20, { solo: 8, trio: 3, banda: 1 }],
    ['B base+público 60', 60, { solo: 7, trio: 4, banda: 1 }],
    ['C base+público 120', 120, { solo: 5, trio: 5, banda: 1 }],
    ['D base+público 220', 220, { solo: 5, trio: 6, banda: 3 }],
    ['E base+público 500', 500, { solo: 5, trio: 5, banda: 5 }],
  ];

  for (const [name, count, expected] of isolated) {
    const scores = ceremonyAudienceScores(count);
    assert(
      scores.solo === expected.solo && scores.trio === expected.trio && scores.banda === expected.banda,
      `${name}: esperado ${JSON.stringify(expected)}, obtido ${JSON.stringify(scores)}`,
    );
    logs.push(`${name}: S${scores.solo} T${scores.trio} B${scores.banda}`);
  }

  for (const scenario of scenarios) {
    const result = recommend(scenario.answers);
    assert(
      result.format === scenario.expected,
      `${scenario.name}: esperado ${scenario.expected}, obtido ${result.format} (${JSON.stringify(result.scores)})`,
    );
    logs.push(
      `${scenario.name}: ${result.formatLabel} (${result.scores.solo}/${result.scores.trio}/${result.scores.banda})`,
    );
  }

  const ceremonySolo = recommend({
    eventType: 'CERIMONIA',
    audienceCount: 120,
    audienceRange: 'DE_81_A_150',
    ...intimista,
  });
  assert(ceremonySolo.format === 'solo', 'Desempate Cerimônia Solo > Trio falhou no cenário 120 intimista');
  logs.push(`Desempate 120 intimista: ${ceremonySolo.formatLabel}`);

  const otherEvent = recommend({
    eventType: 'CASAMENTO',
    audienceCount: 20,
    audienceRange: 'ATE_30',
    ...intimista,
  });
  assert(otherEvent.momentsLabel === 'Intervalos', 'Casamento não deve herdar labels de Cerimônia');
  assert(otherEvent.durationLabel === 'Tempo de show', 'Casamento não deve herdar duração de Cerimônia');
  logs.push(`Casamento preserva labels padrão: ${otherEvent.durationLabel} / ${otherEvent.momentsLabel}`);

  const whatsapp = buildWhatsAppMessage(
    recommend({
      eventType: 'CERIMONIA',
      audienceCount: 70,
      audienceRange: 'DE_31_A_80',
      ...intimista,
    }),
  );
  assert(whatsapp.includes('Tipo de evento: Cerimônias'), 'WhatsApp deve citar Cerimônias');
  assert(whatsapp.includes('Formato recomendado: Solo'), 'WhatsApp deve citar Solo');
  assert(whatsapp.includes('Formação: Voz + Violão'), 'WhatsApp deve citar Voz + Violão');
  assert(whatsapp.includes('70 pessoas'), 'WhatsApp deve usar o público preenchido');
  logs.push('Mensagem de WhatsApp da Cerimônia montada com dados reais');

  for (const option of AUDIENCE_RANGE_OPTIONS) {
    const derived = toAudienceRange(option.representativeCount);
    assert(
      derived === option.value,
      `Faixa ${option.value}: count ${option.representativeCount} mapeou para ${derived}`,
    );
    assert(
      AUDIENCE_RANGE_TO_COUNT[option.value] === option.representativeCount,
      `AUDIENCE_RANGE_TO_COUNT desalinhado em ${option.value}`,
    );
  }
  logs.push('Mapeamento de faixas de público alinhado ao motor');

  const fromRange = toCompleteAnswers({
    eventType: 'CERIMONIA',
    audienceCount: '',
    audienceRange: 'ATE_30',
    ...intimista,
  });
  assert(fromRange?.audienceCount === 20, 'Faixa Até 30 deve usar count interno 20');
  assert(fromRange?.audienceRange === 'ATE_30', 'Faixa escolhida deve ser preservada');
  logs.push('Jornada por faixa preenche CompleteAnswers sem input numérico');

  const presenceBase = {
    eventType: 'CASAMENTO' as const,
    audienceCount: 100,
    audienceRange: 'DE_81_A_150' as AudienceRange,
    space: 'medio' as const,
    acoustic: 'padrao' as const,
    structure: 'padrao' as const,
  };
  const accompaniment = recommend({ ...presenceBase, presence: 'acompanhamento' });
  const impact = recommend({ ...presenceBase, presence: 'impacto' });
  assert(
    impact.scores.banda > accompaniment.scores.banda,
    'Impacto de palco deve aumentar o score de Banda em relação ao acompanhamento',
  );
  assert(
    accompaniment.format === 'solo' || accompaniment.format === 'trio',
    'Casamento médio com acompanhamento deve permanecer em Solo ou Trio',
  );
  assert(!accompaniment.explanation.includes('pontos'), 'Explicação não deve expor score');
  logs.push(
    `Presença musical diferencia scores (Acompanhamento ${accompaniment.format} / Impacto ${impact.format})`,
  );

  for (const event of BOOKABLE_EVENTS) {
    assert(
      EVENT_RULES[event.plannerId].label === event.title,
      `Taxonomia divergente: ${event.plannerId} (${EVENT_RULES[event.plannerId].label} ≠ ${event.title})`,
    );
  }
  logs.push(`Catálogo e motor compartilham ${BOOKABLE_EVENTS.length} tipos de evento`);

  return logs;
}

const logs = verifyCeremonyScenarios();
for (const line of logs) {
  console.log(line);
}
console.log('Todos os cenários da Cerimônia passaram.');
