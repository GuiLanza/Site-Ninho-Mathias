import type { CatalogEvent } from '../../content/eventsCatalog';

interface EventTypeCardProps {
  event: CatalogEvent;
}

export function EventTypeCard({ event }: EventTypeCardProps) {
  return (
    <article
      className={`h-full rounded-2xl border p-6 transition-all duration-300 hover:border-amber-400 hover:bg-zinc-800 ${
        event.featured
          ? 'border-amber-400/50 bg-zinc-900 sm:col-span-2'
          : 'border-white/10 bg-zinc-900/80'
      }`}
    >
      {event.featured ? (
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
          Destaque
        </p>
      ) : null}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{event.title}</h3>
      <p className="text-white/70 leading-relaxed">{event.description}</p>
      {event.ceremonyNote ? (
        <p className="mt-4 text-sm text-white/80 leading-relaxed border-t border-white/10 pt-4">
          {event.ceremonyNote}
        </p>
      ) : null}
    </article>
  );
}
