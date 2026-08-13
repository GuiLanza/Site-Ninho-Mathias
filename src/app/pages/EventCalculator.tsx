import { FormEvent, useMemo, useState } from 'react';
import { Calculator } from 'lucide-react';
import {
  ACOUSTIC_OPTIONS,
  EVENT_RULES,
  EVENT_TYPE_ORDER,
  PRESENCE_OPTIONS,
  SPACE_OPTIONS,
  STRUCTURE_OPTIONS,
  toAudienceRange,
  audienceRangeLabel,
} from '../calculator/config';
import { emptyAnswers, recommend, toCompleteAnswers } from '../calculator/engine';
import type { Acoustic, MusicalPresence, SpaceSize, TechnicalStructure } from '../calculator/types';
import { CalculatorResult } from '../components/calculator/CalculatorResult';
import { ChoiceGroup } from '../components/calculator/ChoiceGroup';

export function EventCalculator() {
  const [answers, setAnswers] = useState(emptyAnswers);
  const [submitted, setSubmitted] = useState(false);

  const complete = useMemo(() => toCompleteAnswers(answers), [answers]);
  const result = complete ? recommend(complete) : null;
  const selectedRule = answers.eventType ? EVENT_RULES[answers.eventType] : null;
  const audienceHint =
    typeof answers.audienceCount === 'number' && answers.audienceCount >= 1
      ? audienceRangeLabel(toAudienceRange(answers.audienceCount))
      : null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!complete) return;
    setSubmitted(true);
    requestAnimationFrame(() => {
      document.getElementById('calculadora-resultado')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Calculator className="w-12 h-12 text-amber-400 mx-auto mb-6" aria-hidden="true" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            CALCULADORA DE EVENTOS
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Descubra a formação ideal — Solo, Trio ou Banda — de acordo com o tipo de evento,
            o público e a estrutura do local.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12 space-y-10"
        >
          <fieldset>
            <legend className="text-white font-semibold mb-3">Tipo de evento</legend>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {EVENT_TYPE_ORDER.map((id) => {
                const option = EVENT_RULES[id];
                const selected = answers.eventType === id;
                const inputId = `event-type-${id}`;

                return (
                  <label
                    key={id}
                    htmlFor={inputId}
                    className={`cursor-pointer rounded-2xl border px-3 sm:px-4 py-3 text-sm font-semibold text-center leading-snug min-h-[3.25rem] flex items-center justify-center transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-400 ${
                      selected
                        ? 'border-amber-400 bg-amber-400 text-black'
                        : 'border-white/10 bg-white/5 text-white hover:border-amber-400/40'
                    }`}
                  >
                    <input
                      id={inputId}
                      type="radio"
                      name="eventType"
                      value={id}
                      checked={selected}
                      onChange={() =>
                        setAnswers((current) => ({ ...current, eventType: id }))
                      }
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          {selectedRule?.helperText ? (
            <aside className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 sm:p-5">
              <p className="text-amber-400 font-bold text-sm uppercase tracking-wide mb-1">
                {selectedRule.label} selecionada
              </p>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                {selectedRule.helperText}
              </p>
            </aside>
          ) : null}

          <div>
            <label htmlFor="audienceCount" className="block text-white font-semibold mb-3">
              Público estimado
            </label>
            <input
              id="audienceCount"
              name="audienceCount"
              type="number"
              min={1}
              inputMode="numeric"
              required
              value={answers.audienceCount}
              onChange={(event) => {
                const raw = event.target.value;
                setAnswers((current) => ({
                  ...current,
                  audienceCount: raw === '' ? '' : Number(raw),
                }));
              }}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-amber-400 focus:bg-white/10 transition-all"
              placeholder="Ex: 70"
            />
            {audienceHint ? (
              <p className="mt-2 text-sm text-amber-400">{audienceHint}</p>
            ) : (
              <p className="mt-2 text-sm text-white/50">Informe o número aproximado de convidados.</p>
            )}
          </div>

          <ChoiceGroup
            legend="Tamanho do espaço"
            name="space"
            value={answers.space}
            options={SPACE_OPTIONS}
            onChange={(space: SpaceSize) => setAnswers((current) => ({ ...current, space }))}
          />

          <ChoiceGroup
            legend="Acústica do local"
            name="acoustic"
            value={answers.acoustic}
            options={ACOUSTIC_OPTIONS}
            onChange={(acoustic: Acoustic) => setAnswers((current) => ({ ...current, acoustic }))}
          />

          <ChoiceGroup
            legend="Presença musical desejada"
            name="presence"
            value={answers.presence}
            options={PRESENCE_OPTIONS}
            onChange={(presence: MusicalPresence) =>
              setAnswers((current) => ({ ...current, presence }))
            }
          />

          <ChoiceGroup
            legend="Estrutura técnica"
            name="structure"
            value={answers.structure}
            options={STRUCTURE_OPTIONS}
            onChange={(structure: TechnicalStructure) =>
              setAnswers((current) => ({ ...current, structure }))
            }
          />

          <div className="space-y-3">
            <button
              type="submit"
              disabled={!complete}
              className="w-full py-4 bg-amber-400 hover:bg-amber-500 disabled:bg-zinc-700 disabled:text-white/40 disabled:hover:scale-100 text-black font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Ver recomendação
            </button>
            {!complete ? (
              <p className="text-center text-sm text-white/50">
                Preencha todos os campos para ver a formação recomendada.
              </p>
            ) : null}
          </div>
        </form>

        {submitted && result ? (
          <div className="mt-10">
            <CalculatorResult result={result} />
          </div>
        ) : null}
      </section>
    </div>
  );
}
