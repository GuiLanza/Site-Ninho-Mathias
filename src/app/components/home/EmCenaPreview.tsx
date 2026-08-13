import { Link } from 'react-router';
import { getEmCenaPreview } from '../../content/emCena';

const PREVIEW_SPANS = [
  'col-span-2 row-span-2 md:col-span-6',
  'col-span-1 md:col-span-3',
  'col-span-1 md:col-span-3',
  'col-span-1 md:col-span-4',
  'col-span-1 md:col-span-4',
  'col-span-2 md:col-span-4',
];

export function EmCenaPreview() {
  const preview = getEmCenaPreview(6);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <p className="text-amber-400 text-sm font-bold tracking-[0.25em] uppercase mb-3">
            Registro ao vivo
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">Em Cena</h2>
        </div>
        <Link
          to="/em-cena"
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Ver Em Cena
        </Link>
      </div>

      {preview.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-12 gap-2 sm:gap-3 md:gap-4 auto-rows-[7.5rem] sm:auto-rows-[10rem] md:auto-rows-[12.5rem] lg:auto-rows-[14.5rem]">
          {preview.map((image, index) => (
            <Link
              key={image.id}
              to="/em-cena"
              className={`group relative overflow-hidden rounded-2xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                PREVIEW_SPANS[index] ?? 'col-span-1 md:col-span-3'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  image.focal ?? 'object-center'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              {image.title ? (
                <span className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold drop-shadow-md opacity-0 sm:opacity-100 sm:translate-y-1 sm:group-hover:translate-y-0 transition-all">
                  {image.title}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-zinc-900/80 p-8 sm:p-12 text-center">
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Em Cena reúne registros reais de apresentações, palco e encontros. A galeria cresce
            conforme novos momentos são documentados.
          </p>
        </div>
      )}
    </section>
  );
}
