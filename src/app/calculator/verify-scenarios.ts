import { CEREMONY_CONFIG, toAudienceRange } from './config';
import { addScores, recommend } from './engine';
import { buildWhatsAppMessage } from './whatsapp';
import type { CompleteAnswers, Format, Scores } from './types';

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
  assert(whatsapp.includes('Tipo de evento: Cerimônia'), 'WhatsApp deve citar Cerimônia');
  assert(whatsapp.includes('Formato recomendado: Solo'), 'WhatsApp deve citar Solo');
  assert(whatsapp.includes('Formação: Voz + Violão'), 'WhatsApp deve citar Voz + Violão');
  assert(whatsapp.includes('70 pessoas'), 'WhatsApp deve usar o público preenchido');
  logs.push('Mensagem de WhatsApp da Cerimônia montada com dados reais');

  return logs;
}

const logs = verifyCeremonyScenarios();
for (const line of logs) {
  console.log(line);
}
console.log('Todos os cenários da Cerimônia passaram.');
