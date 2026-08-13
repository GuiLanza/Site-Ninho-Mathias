import { useEffect, useMemo, useRef, useState } from 'react';
import { Music } from 'lucide-react';
import {
  ACOUSTIC_OPTIONS,
  EVENT_RULES,
  PRESENCE_OPTIONS,
  SPACE_OPTIONS,
  STRUCTURE_OPTIONS,
} from '../calculator/config';
import { emptyAnswers, recommend, toCompleteAnswers } from '../calculator/engine';
import { AUDIENCE_RANGE_TO_COUNT, AUDIENCE_RANGE_OPTIONS } from '../calculator/plannerMapping';
import type {
  Acoustic,
  AudienceRange,
  EventTypeId,
  MusicalPresence,
  SpaceSize,
  TechnicalStructure,
} from '../calculator/types';
import { CalculatorResult } from '../components/calculator/CalculatorResult';
import { ChoiceGroup } from '../components/calculator/ChoiceGroup';
import { JourneyProgress } from '../components/calculator/JourneyProgress';
import { BOOKABLE_EVENTS } from '../content/eventsCatalog';

type QuestionId = 'evento' | 'publico' | 'espaco' | 'estrutura' | 'presenca' | 'preferencias';

interface Question {
  id: QuestionId;
  stage: number;
  stageTitle: string;
}

const QUESTIONS: Question[] = [
  { id: 'evento', stage: 1, stageTitle: 'Seu evento' },
  { id: 'publico', stage: 2, stageTitle: 'Público' },
  { id: 'espaco', stage: 3, stageTitle: 'Espaço e estrutura' },
  { id: 'estrutura', stage: 3, stageTitle: 'Espaço e estrutura' },
  { id: 'presenca', stage: 4, stageTitle: 'Presença musical' },
  { id: 'preferencias', stage: 5, stageTitle: 'Preferências adicionais' },
];

const STAGE_TOTAL = 5;
const ADVANCE_MS = 320;

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function EventCalculator() {
  const [answers, setAnswers] = useState(emptyAnswers);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [visible, setVisible] = useState(true);
  const advanceTimer = useRef<number | null>(null);

  const complete = useMemo(() => toCompleteAnswers(answers), [answers]);
  const result = complete ? recommend(complete) : null;
  const question = QUESTIONS[questionIndex];
  const selectedRule = answers.eventType ? EVENT_RULES[answers.eventType] : null;

  useEffect(() => {
    return () => {
      if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    };
  }, []);

  const goTo = (nextIndex: number, finished = false) => {
    const delay = prefersReducedMotion() ? 0 : ADVANCE_MS;
    setVisible(false);
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => {
      if (finished) {
        setShowResult(true);
        requestAnimationFrame(() => {
          document.getElementById('calculadora-resultado')?.scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            block: 'start',
          });
        });
      } else {
        setQuestionIndex(nextIndex);
      }
      setVisible(true);
    }, delay);
  };

  const selectAndAdvance = (patch: Partial<typeof answers>) => {
    setAnswers((current) => ({ ...current, ...patch }));
    const isLast = questionIndex >= QUESTIONS.length - 1;
    goTo(questionIndex + 1, isLast);
  };

  const currentHasValue = (): boolean => {
    switch (question.id) {
      case 'evento':
        return answers.eventType !== '';
      case 'publico':
        return answers.audienceRange !== '';
      case 'espaco':
        return answers.space !== '';
      case 'estrutura':
        return answers.structure !== '';
      case 'presenca':
        return answers.presence !== '';
      case 'preferencias':
        return answers.acoustic !== '';
    }
  };

  const handleContinue = () => {
    if (!currentHasValue()) return;
    const isLast = questionIndex >= QUESTIONS.length - 1;
    goTo(questionIndex + 1, isLast);
  };

  const handleBack = () => {
    if (showResult) {
      setShowResult(false);
      setQuestionIndex(QUESTIONS.length - 1);
      setVisible(true);
      return;
    }
    if (questionIndex === 0) return;
    setVisible(false);
    window.setTimeout(
      () => {
        setQuestionIndex((current) => Math.max(0, current - 1));
        setVisible(true);
      },
      prefersReducedMotion() ? 0 : 180,
    );
  };

  const handleEdit = () => {
    setShowResult(false);
    setQuestionIndex(0);
    setVisible(true);
    window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="relative max-w-3xl mx-auto text-center">
          <Music className="w-10 h-10 text-amber-400 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Planeje sua Experiência
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Vamos montar juntos a experiência musical ideal para o seu evento.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {showResult && result && complete ? (
          <CalculatorResult result={result} answers={complete} onEdit={handleEdit} />
        ) : (
          <div className="rounded-[1.75rem] border border-white/10 bg-zinc-950/70 backdrop-blur-sm p-6 sm:p-10 md:p-12">
            <JourneyProgress
              current={question.stage}
              total={STAGE_TOTAL}
              title={question.stageTitle}
            />

            <div
              className={`transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}
            >
              {question.id === 'evento' ? (
                <ChoiceGroup
                  legend="Qual é o seu evento?"
                  description="Escolha a ocasião. A formação será pensada a partir desse contexto."
                  name="eventType"
                  value={answers.eventType}
                  columns="grid-cols-1 sm:grid-cols-2"
                  options={BOOKABLE_EVENTS.map((event) => ({
                    value: event.plannerId,
                    label: event.title,
                  }))}
                  onChange={(eventType: EventTypeId) => selectAndAdvance({ eventType })}
                />
              ) : null}

              {question.id === 'publico' ? (
                <>
                  {selectedRule?.helperText ? (
                    <aside className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 sm:p-5 mb-8">
                      <p className="text-amber-400 font-bold text-sm uppercase tracking-wide mb-1">
                        {selectedRule.label}
                      </p>
                      <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                        {selectedRule.helperText}
                      </p>
                    </aside>
                  ) : null}
                  <ChoiceGroup
                    legend="Qual o público estimado?"
                    description="Não precisa ser um número exato. Escolha a faixa que mais se aproxima."
                    name="audienceRange"
                    value={answers.audienceRange}
                    columns="grid-cols-1"
                    options={AUDIENCE_RANGE_OPTIONS}
                    onChange={(audienceRange: AudienceRange) =>
                      selectAndAdvance({
                        audienceRange,
                        audienceCount: AUDIENCE_RANGE_TO_COUNT[audienceRange],
                      })
                    }
                  />
                </>
              ) : null}

              {question.id === 'espaco' ? (
                <ChoiceGroup
                  legend="Como é o espaço do evento?"
                  description="Pense no ambiente, não na metragem. Escolha a descrição que mais se parece com o local."
                  name="space"
                  value={answers.space}
                  columns="grid-cols-1"
                  options={SPACE_OPTIONS}
                  onChange={(space: SpaceSize) => selectAndAdvance({ space })}
                />
              ) : null}

              {question.id === 'estrutura' ? (
                <ChoiceGroup
                  legend="Qual estrutura o local oferece?"
                  description="Espaço e estrutura são coisas diferentes: um salão amplo pode ter uma montagem simples."
                  name="structure"
                  value={answers.structure}
                  columns="grid-cols-1"
                  options={STRUCTURE_OPTIONS}
                  onChange={(structure: TechnicalStructure) => selectAndAdvance({ structure })}
                />
              ) : null}

              {question.id === 'presenca' ? (
                <ChoiceGroup
                  legend="Como você quer que a música seja percebida?"
                  description="Isso pesa tanto quanto o tamanho do público na recomendação da formação."
                  name="presence"
                  value={answers.presence}
                  columns="grid-cols-1"
                  options={PRESENCE_OPTIONS}
                  onChange={(presence: MusicalPresence) => selectAndAdvance({ presence })}
                />
              ) : null}

              {question.id === 'preferencias' ? (
                <ChoiceGroup
                  legend="Como é o ambiente sonoro?"
                  description="Uma última informação para ajustar a formação ao clima do local."
                  name="acoustic"
                  value={answers.acoustic}
                  columns="grid-cols-1"
                  options={ACOUSTIC_OPTIONS}
                  onChange={(acoustic: Acoustic) => selectAndAdvance({ acoustic })}
                />
              ) : null}
            </div>

            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={questionIndex === 0}
                className="text-white/70 hover:text-white font-semibold disabled:opacity-30 disabled:hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm px-1 py-1"
              >
                Voltar
              </button>
              {currentHasValue() ? (
                <button
                  type="button"
                  onClick={handleContinue}
                  className="text-amber-400 hover:text-amber-300 font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm px-1 py-1"
                >
                  {questionIndex >= QUESTIONS.length - 1 ? 'Ver recomendação' : 'Continuar'}
                </button>
              ) : (
                <span />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
