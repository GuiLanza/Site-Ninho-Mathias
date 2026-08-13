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
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-auto w-auto max-h-[98%] max-w-[94vw] -translate-x-1/2 -translate-y-1/2 object-contain sm:max-h-[98%] sm:max-w-none md:left-[52%] lg:max-h-[99%] xl:left-[53%] xl:max-h-[99%] 2xl:left-[52%] 2xl:max-h-[99%]"
      />

      <div className="relative z-10 flex h-full items-end md:items-center px-5 pb-12 sm:px-8 sm:pb-14 md:px-0 md:pb-0">
        <div className="w-full max-w-md text-left md:ml-[10vw] md:max-w-lg lg:ml-[14vw] lg:max-w-[min(32rem,34vw)] xl:ml-[16vw]">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-amber-500 sm:text-sm">
            Música ao vivo
          </p>
          <h1 className="text-[clamp(2.75rem,7vw,7.5rem)] font-bold leading-[0.92] tracking-tight text-zinc-950 md:text-[clamp(4rem,7vw,7.5rem)]">
            NINHO
            <span className="block">MATHIAS</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-zinc-600 sm:mt-8 sm:text-lg lg:text-xl">
            Transforme seu evento em uma experiência musical inesquecível
          </p>
          <button
            type="button"
            onClick={handleScheduleShow}
            className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:min-h-14 sm:px-10 sm:py-5 sm:text-lg"
          >
            <Phone className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
            Agende seu Show
          </button>
        </div>
      </div>
    </section>
  );
}
