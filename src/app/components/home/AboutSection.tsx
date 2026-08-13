import { useState } from 'react';
import { ABOUT_PARAGRAPHS } from '../../content/about';

export function AboutSection() {
  const [expanded, setExpanded] = useState(false);
  const [lead, ...rest] = ABOUT_PARAGRAPHS;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-amber-400 text-sm font-bold tracking-[0.25em] uppercase mb-4">Sobre</p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ninho Mathias</h2>
        <p className="text-white/80 text-lg leading-relaxed">
          {lead.split('Ninho Mathias').map((part, index, parts) =>
            index < parts.length - 1 ? (
              <span key={part}>
                {part}
                <strong className="text-amber-400">Ninho Mathias</strong>
              </span>
            ) : (
              <span key={part}>{part}</span>
            ),
          )}
        </p>
        {expanded
          ? rest.map((paragraph) => (
              <p key={paragraph} className="text-white/70 text-lg leading-relaxed mt-4">
                {paragraph}
              </p>
            ))
          : null}
        <button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="mt-8 text-amber-400 font-semibold hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
          aria-expanded={expanded}
        >
          {expanded ? 'Ler menos' : 'Continuar lendo'}
        </button>
      </div>
    </section>
  );
}
