import { FORMAT_LABELS } from './config';
import type { CompleteAnswers, Format, RecommendationAlternative, Scores } from './types';

const SPACE_NARRATIVE: Record<CompleteAnswers['space'], string> = {
  pequeno: 'espaço intimista',
  medio: 'espaço de médio porte',
  grande: 'espaço amplo',
};

const PRESENCE_NARRATIVE: Record<CompleteAnswers['presence'], string> = {
  acompanhamento: 'uma presença musical discreta e elegante',
  presenca: 'uma presença musical mais marcada',
  impacto: 'uma experiência com impacto de palco',
};

const FORMAT_EXPLANATION: Record<Format, string> = {
  solo: 'o Solo acompanha o evento com proximidade e elegância, sem exigir uma estrutura de palco.',
  trio: 'o Trio oferece corpo sonoro suficiente sem exigir toda a estrutura de uma banda completa.',
  banda: 'a Banda assume protagonismo e transforma a música em uma das principais atrações do evento.',
};

const ALTERNATIVE_TEXT: Record<Format, string> = {
  solo: 'Caso prefira uma presença mais intimista, o Solo acompanha o evento com elegância e proximidade.',
  trio: 'Caso você queira um pouco mais de corpo sonoro, o Trio amplia a presença musical sem exigir uma estrutura de show completo.',
  banda: 'Caso você queira aumentar a presença de palco e transformar a apresentação em uma das principais atrações do evento.',
};

export function rankFormats(scores: Scores, tieBreak: Format[]): Format[] {
  const formats: Format[] = ['solo', 'trio', 'banda'];
  const priority = new Map(tieBreak.map((format, index) => [format, index]));

  return [...formats].sort((a, b) => {
    const scoreDiff = scores[b] - scores[a];
    if (scoreDiff !== 0) return scoreDiff;
    return (priority.get(a) ?? 99) - (priority.get(b) ?? 99);
  });
}

export function buildExplanation(answers: CompleteAnswers, format: Format): string {
  return `Considerando o público estimado, o ${SPACE_NARRATIVE[answers.space]} e ${PRESENCE_NARRATIVE[answers.presence]}, ${FORMAT_EXPLANATION[format]}`;
}

export function buildAlternative(
  scores: Scores,
  winner: Format,
  tieBreak: Format[],
): RecommendationAlternative | null {
  const second = rankFormats(scores, tieBreak)[1];
  if (!second || second === winner) return null;

  return {
    format: second,
    formatLabel: FORMAT_LABELS[second],
    text: ALTERNATIVE_TEXT[second],
  };
}
