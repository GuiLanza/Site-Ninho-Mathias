import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

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
        className="pointer-events-none absolute top-[3.5%] left-1/2 h-auto w-auto max-h-[90%] max-w-[94vw] -translate-x-1/2 object-contain object-top sm:top-[3%] sm:max-h-[91%] md:left-[52%] lg:top-[2.5%] lg:left-[54%] lg:max-h-[90%] lg:max-w-none xl:left-[55%] xl:max-h-[88%] 2xl:max-h-[86%]"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_80%_at_50%_48%,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.16)_46%,transparent_74%)] lg:bg-[radial-gradient(ellipse_80%_70%_at_42%_48%,rgba(0,0,0,0.36)_0%,rgba(0,0,0,0.14)_48%,transparent_76%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-center justify-center px-5 sm:px-8">
        <div className="w-full max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-amber-400 sm:text-sm">
            Música ao vivo
          </p>
          <h1 className="text-[clamp(2.75rem,8vw,7.25rem)] font-bold leading-[0.92] tracking-tight text-white">
            NINHO
            <span className="block">MATHIAS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg lg:text-xl">
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
