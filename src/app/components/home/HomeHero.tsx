import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

const PHOTO_MASK = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, black 16%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 94%, transparent 100%)',
  maskImage:
    'linear-gradient(to right, transparent 0%, black 16%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 8%, black 94%, transparent 100%)',
  WebkitMaskComposite: 'source-in',
  maskComposite: 'intersect' as const,
};

const HERO_OVERLAY = {
  background: [
    'radial-gradient(ellipse 56% 68% at 40% 52%, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.30) 22%, rgba(0,0,0,0.14) 44%, rgba(0,0,0,0.05) 64%, rgba(0,0,0,0) 82%)',
    'radial-gradient(ellipse 50% 42% at 34% 78%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 42%, rgba(0,0,0,0) 72%)',
    'linear-gradient(to top, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 22%, rgba(0,0,0,0) 48%)',
  ].join(', '),
};

export function HomeHero() {
  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[32rem] overflow-hidden bg-white">
      <img
        src="/em-cena/hero.jpg"
        alt="Ninho Mathias com violão, em retrato de estúdio"
        width={768}
        height={1376}
        fetchPriority="high"
        decoding="async"
        style={PHOTO_MASK}
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-auto max-h-[108%] max-w-[98vw] -translate-x-1/2 -translate-y-1/2 object-contain sm:max-h-[108%] sm:max-w-none md:left-[52%] lg:max-h-[109%] xl:left-[53%] xl:max-h-[110%] 2xl:left-[52%] 2xl:max-h-[110%]"
      />

      <div
        aria-hidden="true"
        style={HERO_OVERLAY}
        className="pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[75rem] items-end md:items-center px-6 pb-12 sm:px-8 sm:pb-14 md:px-8 md:pb-0">
        <div className="mx-auto w-full max-w-md text-left md:mx-0 md:ml-[18%] md:max-w-lg lg:ml-[20%] lg:max-w-[30rem] xl:ml-[26%] 2xl:ml-[18%]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-amber-500 sm:text-sm">
            Música ao vivo
          </p>
          <h1 className="text-[clamp(2.75rem,7vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-white md:text-[clamp(4rem,7vw,7.5rem)]">
            NINHO
            <span className="block">MATHIAS</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:mt-8 sm:text-lg lg:text-xl">
            Transforme seu evento em uma experiência musical inesquecível
          </p>
          <button
            type="button"
            onClick={handleScheduleShow}
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:min-h-14 sm:px-10 sm:py-5 sm:text-lg"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            Agende seu Show
          </button>
        </div>
      </div>
    </section>
  );
}
