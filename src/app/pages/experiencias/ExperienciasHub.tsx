import { Link } from 'react-router';
import { EXPERIENCIAS_HUB } from '../../content/experiencias';

export function ExperienciasHub() {
  return (
    <div>
      <header className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(251,191,36,0.14),_transparent_55%),linear-gradient(to_bottom,_#09090b,_#18181b,_#000)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16 sm:py-20">
          <p className="text-amber-400 text-sm font-bold tracking-[0.25em] uppercase mb-6">
            Experiências Musicais
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Música para cada momento
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Eventos, formações, aulas de canto e projetos — quatro caminhos para viver a música
            com o Ninho Mathias.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {EXPERIENCIAS_HUB.map((card) => (
            <Link
              key={card.id}
              to={card.to}
              className={`group flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                card.id === 'formacoes'
                  ? 'border-amber-400 bg-zinc-900'
                  : 'border-white/10 bg-zinc-900/80 hover:border-amber-400'
              }`}
            >
              <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                {card.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-white mb-4">{card.title}</h2>
              <p className="text-white/70 leading-relaxed flex-1">{card.description}</p>
              <span className="mt-8 inline-flex text-amber-400 font-bold group-hover:text-amber-300">
                {card.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
