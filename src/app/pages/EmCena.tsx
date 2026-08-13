import { useState } from 'react';
import { EM_CENA_IMAGES } from '../content/emCena';
import { GalleryLightbox } from '../components/em-cena/GalleryLightbox';
import type { EmCenaImage } from '../content/emCena';

export function EmCena() {
  const [selected, setSelected] = useState<EmCenaImage | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 text-center">
        <p className="text-amber-400 text-sm font-bold tracking-[0.25em] uppercase mb-4">Em Cena</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Em Cena</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Palco, música, encontros e momentos que fazem parte dessa história.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {EM_CENA_IMAGES.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setSelected(image)}
              className="mb-4 w-full break-inside-avoid group text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-2xl overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading={index < 3 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </button>
          ))}
        </div>
      </section>

      {selected ? <GalleryLightbox image={selected} onClose={() => setSelected(null)} /> : null}
    </div>
  );
}
