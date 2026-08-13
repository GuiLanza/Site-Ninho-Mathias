import { FORMAT_LABELS } from './config';
import type {
  Acoustic,
  AudienceRange,
  CompleteAnswers,
  EventTypeId,
  Format,
  MusicalPresence,
  SpaceSize,
  TechnicalStructure,
} from './types';

export const PLANNER_DRAFT_KEY = 'ninho-planner-draft';

export interface PlannerDraft {
  eventType: EventTypeId;
  eventTitle: string;
  audienceRange: AudienceRange;
  audienceLabel: string;
  space: SpaceSize;
  spaceLabel: string;
  acoustic: Acoustic;
  acousticLabel: string;
  structure: TechnicalStructure;
  structureLabel: string;
  presence: MusicalPresence;
  presenceLabel: string;
  format: Format;
  formatLabel: string;
  formation: string;
}

export function toPlannerDraft(
  answers: CompleteAnswers,
  result: {
    format: Format;
    formation: string;
    eventLabel: string;
    audienceRangeLabel: string;
    spaceLabel: string;
    acousticLabel: string;
    structureLabel: string;
    presenceLabel: string;
  },
): PlannerDraft {
  return {
    eventType: answers.eventType,
    eventTitle: result.eventLabel,
    audienceRange: answers.audienceRange,
    audienceLabel: result.audienceRangeLabel,
    space: answers.space,
    spaceLabel: result.spaceLabel,
    acoustic: answers.acoustic,
    acousticLabel: result.acousticLabel,
    structure: answers.structure,
    structureLabel: result.structureLabel,
    presence: answers.presence,
    presenceLabel: result.presenceLabel,
    format: result.format,
    formatLabel: FORMAT_LABELS[result.format],
    formation: result.formation,
  };
}

export function savePlannerDraft(draft: PlannerDraft): void {
  try {
    sessionStorage.setItem(PLANNER_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    /* storage indisponível */
  }
}

export function readPlannerDraft(): PlannerDraft | null {
  try {
    const raw = sessionStorage.getItem(PLANNER_DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PlannerDraft;
  } catch {
    return null;
  }
}

export function clearPlannerDraft(): void {
  try {
    sessionStorage.removeItem(PLANNER_DRAFT_KEY);
  } catch {
    /* storage indisponível */
  }
}
