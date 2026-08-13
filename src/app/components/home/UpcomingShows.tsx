import { Info, MapPin, Music } from 'lucide-react';
import { Link } from 'react-router';
import { WHATSAPP_NUMBER } from '../../calculator/config';
import {
  formatShowDate,
  formatShowFullDate,
  formatShowTime,
  splitLocation,
} from '../../calendar/parseIcs';
import { useUpcomingShows } from '../../calendar/useUpcomingShows';

export function UpcomingShows() {
  const { shows, status } = useUpcomingShows(3);

  const inquire = (title: string, dateLabel: string) => {
    const message = `Olá! Quero saber mais sobre o evento: "${title}" em ${dateLabel}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PRÓXIMOS SHOWS</h2>
        <p className="text-white/70 text-lg">Os 3 eventos mais próximos da agenda</p>
      </div>

      {status === 'loading' ? (
        <p className="text-center text-white/60">Carregando a agenda...</p>
      ) : null}

      {status === 'error' || status === 'empty' ? (
        <p className="text-center text-white/60 max-w-xl mx-auto">
          Os próximos shows aparecerão aqui conforme forem publicados na agenda.
        </p>
      ) : null}

      {status === 'ready' ? (
        <div className="grid gap-8 md:grid-cols-3">
          {shows.map((show) => {
            const { city, venue } = splitLocation(show.location);
            const time = formatShowTime(show.start);
            const fullDate = formatShowFullDate(show.start);

            return (
              <article
                key={show.id}
                className="group bg-zinc-900 border border-amber-400/30 rounded-2xl p-8 hover:bg-zinc-800 hover:border-amber-400 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <p className="text-amber-400 font-bold text-2xl">{formatShowDate(show.start)}</p>
                  <Music className="w-6 h-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{show.title}</h3>
                <div className="flex items-start gap-2 text-white/70 text-sm mb-6">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" aria-hidden="true" />
                  <div>
                    {city ? <p className="font-semibold text-white">{city}</p> : null}
                    {venue && venue !== city ? <p className="text-white/60">{venue}</p> : null}
                    {time ? <p className="text-white/60 mt-1">{time}</p> : null}
                    {!city && !venue && !time ? <p>Local a confirmar</p> : null}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => inquire(show.title, fullDate)}
                  className="w-full py-3 px-4 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black border-2 border-amber-400 rounded-full transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2"
                >
                  <Info className="w-4 h-4" />
                  INFORMAÇÕES
                </button>
              </article>
            );
          })}
        </div>
      ) : null}

      <div className="text-center mt-10">
        <Link
          to="/#agenda"
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Ver Agenda Completa
        </Link>
      </div>
    </section>
  );
}
