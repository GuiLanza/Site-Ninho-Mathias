import {
  audienceRangeLabel,
  EVENT_RULES,
  FORMAT_LABELS,
  getShowDurationText,
  getShowMomentsText,
  PRESENCE_SCORES,
  SPACE_SCORES,
  STRUCTURE_BY_FORMAT,
  STRUCTURE_SCORES,
  ACOUSTIC_SCORES,
  toAudienceRange,
} from './config';
import type {
  CalculatorAnswers,
  CompleteAnswers,
  Format,
  Recommendation,
  ScoreDelta,
  Scores,
} from './types';

export function emptyAnswers(): CalculatorAnswers {
  return {
    eventType: '',
    audienceCount: '',
    space: '',
    acoustic: '',
    presence: '',
    structure: '',
  };
}

export function isComplete(answers: CalculatorAnswers): answers is CalculatorAnswers & {
  eventType: CompleteAnswers['eventType'];
  space: CompleteAnswers['space'];
  acoustic: CompleteAnswers['acoustic'];
  presence: CompleteAnswers['presence'];
  structure: CompleteAnswers['structure'];
} {
  return (
    answers.eventType !== '' &&
    typeof answers.audienceCount === 'number' &&
    Number.isFinite(answers.audienceCount) &&
    answers.audienceCount >= 1 &&
    answers.space !== '' &&
    answers.acoustic !== '' &&
    answers.presence !== '' &&
    answers.structure !== ''
  );
}

export function toCompleteAnswers(answers: CalculatorAnswers): CompleteAnswers | null {
  if (!isComplete(answers) || typeof answers.audienceCount !== 'number') {
    return null;
  }

  return {
    eventType: answers.eventType,
    audienceCount: Math.floor(answers.audienceCount),
    audienceRange: toAudienceRange(answers.audienceCount),
    space: answers.space,
    acoustic: answers.acoustic,
    presence: answers.presence,
    structure: answers.structure,
  };
}

export function addScores(target: Scores, delta: ScoreDelta | undefined): Scores {
  if (!delta) return target;

  return {
    solo: target.solo + (delta.solo ?? 0),
    trio: target.trio + (delta.trio ?? 0),
    banda: target.banda + (delta.banda ?? 0),
  };
}

export function pickWinner(scores: Scores, tieBreak: Format[]): Format {
  const formats: Format[] = ['solo', 'trio', 'banda'];
  const priority = new Map(tieBreak.map((format, index) => [format, index]));

  return [...formats].sort((a, b) => {
    const scoreDiff = scores[b] - scores[a];
    if (scoreDiff !== 0) return scoreDiff;
    return (priority.get(a) ?? 99) - (priority.get(b) ?? 99);
  })[0];
}

export function scoreAnswers(answers: CompleteAnswers): Scores {
  const rule = EVENT_RULES[answers.eventType];

  let scores: Scores = { ...rule.baseScores };
  scores = addScores(scores, rule.audienceScores[answers.audienceRange]);
  scores = addScores(scores, SPACE_SCORES[answers.space]);
  scores = addScores(scores, ACOUSTIC_SCORES[answers.acoustic]);
  scores = addScores(scores, PRESENCE_SCORES[answers.presence]);
  scores = addScores(scores, STRUCTURE_SCORES[answers.structure]);

  return scores;
}

export function recommend(answers: CompleteAnswers): Recommendation {
  const rule = EVENT_RULES[answers.eventType];
  const scores = scoreAnswers(answers);
  const format = pickWinner(scores, rule.tieBreak);
  const copy = rule.resultCopy[format];
  const isCeremony = answers.eventType === 'CERIMONIA';

  return {
    format,
    formatLabel: FORMAT_LABELS[format],
    scores,
    formation: copy.formation,
    title: copy.title,
    text: copy.text,
    durationLabel: rule.labels.duration,
    durationText: rule.durationText || getShowDurationText(format),
    momentsLabel: rule.labels.moments,
    momentsText: rule.momentsText || getShowMomentsText(format),
    structureText: STRUCTURE_BY_FORMAT[format],
    audienceLabel: `${answers.audienceCount} pessoas (${audienceRangeLabel(answers.audienceRange)})`,
    eventLabel: rule.label,
    isCeremony,
  };
}
