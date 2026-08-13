import {
  ACOUSTIC_OPTIONS,
  audienceRangeLabel,
  EVENT_RULES,
  FORMAT_LABELS,
  getShowDurationText,
  getShowMomentsText,
  PRESENCE_OPTIONS,
  PRESENCE_SCORES,
  SPACE_OPTIONS,
  SPACE_SCORES,
  STRUCTURE_BY_FORMAT,
  STRUCTURE_OPTIONS,
  STRUCTURE_SCORES,
  ACOUSTIC_SCORES,
  toAudienceRange,
} from './config';
import { buildAlternative, buildExplanation, rankFormats } from './explanation';
import { AUDIENCE_RANGE_TO_COUNT } from './plannerMapping';
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
    audienceRange: '',
    space: '',
    acoustic: '',
    presence: '',
    structure: '',
  };
}

function hasAudience(answers: CalculatorAnswers): boolean {
  return (
    answers.audienceRange !== '' ||
    (typeof answers.audienceCount === 'number' &&
      Number.isFinite(answers.audienceCount) &&
      answers.audienceCount >= 1)
  );
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
    hasAudience(answers) &&
    answers.space !== '' &&
    answers.acoustic !== '' &&
    answers.presence !== '' &&
    answers.structure !== ''
  );
}

export function toCompleteAnswers(answers: CalculatorAnswers): CompleteAnswers | null {
  if (!isComplete(answers)) {
    return null;
  }

  const audienceRange =
    answers.audienceRange !== ''
      ? answers.audienceRange
      : toAudienceRange(Number(answers.audienceCount));

  const audienceCount =
    typeof answers.audienceCount === 'number' && answers.audienceCount >= 1
      ? Math.floor(answers.audienceCount)
      : AUDIENCE_RANGE_TO_COUNT[audienceRange];

  return {
    eventType: answers.eventType,
    audienceCount,
    audienceRange,
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
  return rankFormats(scores, tieBreak)[0];
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

function optionLabel<T extends string>(
  options: { value: T; label: string }[],
  value: T,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function recommend(answers: CompleteAnswers): Recommendation {
  const rule = EVENT_RULES[answers.eventType];
  const scores = scoreAnswers(answers);
  const format = pickWinner(scores, rule.tieBreak);
  const copy = rule.resultCopy[format];
  const isCeremony = answers.eventType === 'CERIMONIA';
  const rangeLabel = audienceRangeLabel(answers.audienceRange);

  return {
    format,
    formatLabel: FORMAT_LABELS[format],
    scores,
    formation: copy.formation,
    title: copy.title,
    text: copy.text,
    explanation: buildExplanation(answers, format),
    alternative: buildAlternative(scores, format, rule.tieBreak),
    durationLabel: rule.labels.duration,
    durationText: rule.durationText || getShowDurationText(format),
    momentsLabel: rule.labels.moments,
    momentsText: rule.momentsText || getShowMomentsText(format),
    structureText: STRUCTURE_BY_FORMAT[format],
    audienceLabel: `${answers.audienceCount} pessoas (${rangeLabel})`,
    audienceRangeLabel: rangeLabel,
    eventLabel: rule.label,
    spaceLabel: optionLabel(SPACE_OPTIONS, answers.space),
    structureLabel: optionLabel(STRUCTURE_OPTIONS, answers.structure),
    acousticLabel: optionLabel(ACOUSTIC_OPTIONS, answers.acoustic),
    presenceLabel: optionLabel(PRESENCE_OPTIONS, answers.presence),
    isCeremony,
  };
}
