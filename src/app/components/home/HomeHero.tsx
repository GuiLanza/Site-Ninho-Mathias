import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

const PHOTO_MASK = {
  WebkitMaskImage:
    'linear-gradient(to right, transparent 0%, black 18%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 95%, transparent 100%)',
  maskImage:
    'linear-gradient(to right, transparent 0%, black 18%, black 90%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 7%, black 95%, transparent 100%)',
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
        className="pointer-events-none absolute top-[4%] left-[58%] h-auto w-auto max-h-[90%] max-w-[78vw] -translate-x-1/2 object-contain object-top sm:top-[3%] sm:left-[60%] sm:max-h-[91%] sm:max-w-none md:left-[62%] lg:top-[2.5%] lg:left-[65%] lg:max-h-[90%] xl:left-[66%] xl:max-h-[88%] 2xl:left-[65%] 2xl:max-h-[86%]"
      />

      <div className="relative z-10 flex h-full items-end md:items-center px-5 pb-12 sm:px-8 sm:pb-14 md:pb-0">
        <div className="w-full max-w-md text-left md:ml-[6vw] md:max-w-lg lg:ml-[8vw] lg:max-w-xl xl:ml-[10vw] xl:mr-[42vw]">
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
