import { Link } from 'react-router';
import { EVENT_GROUPS } from '../../content/eventsCatalog';
import { EVENT_FORMATION_FACTORS } from '../../content/experiencias';
import { EventTypeCard } from '../../components/events/EventTypeCard';

export function ExperienciasEventos() {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">Eventos</p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-4xl">
          Música ao vivo para diferentes momentos, ambientes e públicos
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
          Repertório e formação pensados de acordo com cada ocasião. As apresentações podem ter
          duração de até 4 horas, e a formação musical é definida de acordo com o estilo e a
          preferência do cliente.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-xl font-bold text-white mb-4">O que consideramos na formação</h2>
        <p className="text-white/60 mb-6 max-w-3xl">
          Esses fatores são avaliados juntos para proporcionar a melhor experiência musical
          possível — não apenas o gosto musical, mas o ambiente em que a música vai existir.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {EVENT_FORMATION_FACTORS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white font-semibold capitalize"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Tipos de eventos</h2>
        <div className="space-y-14">
          {EVENT_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                {group.title}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((event) => (
                  <EventTypeCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border border-amber-400/40 bg-zinc-900 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Encontre a formação ideal para o seu evento
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Solo, Trio ou Banda — cada ocasião pede uma presença musical diferente.
          </p>
          <Link
            to="/experiencias-musicais/formacoes"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Ver Formações
          </Link>
        </div>
      </section>
    </div>
  );
}
