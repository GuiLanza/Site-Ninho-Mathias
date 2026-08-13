import { Link } from 'react-router';
import type { MusicalFormat } from '../../content/eventsCatalog';

interface MusicalFormatCardProps {
  format: MusicalFormat;
}

export function MusicalFormatCard({ format }: MusicalFormatCardProps) {
  const isBanda = format.id === 'banda';
  const isTrio = format.id === 'trio';

  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 sm:p-8 transition-all duration-300 hover:scale-[1.01] ${
        isBanda
          ? 'border-amber-400 bg-zinc-900'
          : isTrio
            ? 'border-amber-400/50 bg-zinc-900/90'
            : 'border-white/15 bg-zinc-900/70'
      }`}
    >
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em]">
          {format.presenceLabel}
        </p>
        <span className="text-xs text-white/50" aria-hidden="true">
          {Array.from({ length: 3 }, (_, index) => (
            <span
              key={index}
              className={`inline-block w-2 h-2 rounded-full ml-1 ${
                index < (format.id === 'solo' ? 1 : format.id === 'trio' ? 2 : 3)
                  ? 'bg-amber-400'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </span>
      </div>

      <h3 className="text-3xl md:text-4xl font-bold text-white">{format.title}</h3>
      <p className="text-amber-400 font-semibold mt-2">{format.subtitle}</p>
      <p className="text-white/70 leading-relaxed mt-4">{format.description}</p>

      <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
        <p className="text-xs uppercase tracking-wide text-white/50 mb-1">{format.durationLabel}</p>
        <p className="text-white font-bold">{format.duration}</p>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-bold uppercase tracking-wide text-amber-400 mb-3">Inclui</h4>
        <ul className="space-y-2 text-white/80 text-sm">
          {format.includes.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-amber-400 mt-0.5" aria-hidden="true">
                —
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-bold uppercase tracking-wide text-amber-400 mb-3">
          {format.formationLabel}
        </h4>
        {format.possibilities ? (
          <ul className="space-y-2 text-white/80 text-sm">
            {format.possibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-white font-semibold">{format.formation}</p>
        )}
        {format.complement ? (
          <p className="text-white/60 text-sm leading-relaxed mt-3">{format.complement}</p>
        ) : null}
      </div>

      <p className="mt-6 text-sm text-white/50">
        {format.musicians === 1 ? '1 músico' : `${format.musicians} músicos`}
        {format.presenceTags.map((tag) => ` · ${tag}`).join('')}
      </p>

      <div className="mt-auto pt-8">
        <Link
          to="/calculadora"
          className="inline-flex w-full items-center justify-center px-6 py-3 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Ver se é ideal para meu evento
        </Link>
      </div>
    </article>
  );
}
