import { Link } from 'react-router';
import type { CompleteAnswers, Recommendation } from '../../calculator/types';
import { savePlannerDraft, toPlannerDraft } from '../../calculator/plannerDraft';

interface CalculatorResultProps {
  result: Recommendation;
  answers: CompleteAnswers;
  onEdit: () => void;
}

export function CalculatorResult({ result, answers, onEdit }: CalculatorResultProps) {
  const summary = [
    { label: 'Evento', value: result.eventLabel },
    { label: 'Público', value: result.audienceRangeLabel },
    { label: 'Espaço', value: result.spaceLabel },
    { label: 'Estrutura', value: result.structureLabel },
    { label: 'Presença musical', value: result.presenceLabel },
  ];

  const handleSchedule = () => {
    savePlannerDraft(toPlannerDraft(answers, result));
  };

  return (
    <section
      id="calculadora-resultado"
      aria-live="polite"
      className="scroll-mt-24 space-y-8"
    >
      <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl p-6 sm:p-8 md:p-12">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Sua experiência recomendada
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{result.formatLabel}</h2>
        <p className="text-amber-400 font-semibold text-lg mb-6 max-w-2xl">{result.text}</p>
        <p className="text-white/80 leading-relaxed text-lg max-w-3xl">{result.explanation}</p>
      </div>

      {result.alternative ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">
            Outra possibilidade
          </p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {result.alternative.formatLabel}
          </h3>
          <p className="text-white/70 leading-relaxed">{result.alternative.text}</p>
        </div>
      ) : null}

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold text-white">Seu evento</h3>
          <button
            type="button"
            onClick={onEdit}
            className="self-start text-amber-400 font-semibold hover:text-amber-300 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          >
            Alterar respostas
          </button>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          {summary.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
              <dt className="text-xs uppercase tracking-wide text-white/45 mb-1">{item.label}</dt>
              <dd className="text-white font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/agende-show"
          onClick={handleSchedule}
          className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Agende seu Show
        </Link>
        <Link
          to={`/experiencias-musicais/formacoes#${result.format}`}
          className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Conheça esta Formação
        </Link>
      </div>
    </section>
  );
}
