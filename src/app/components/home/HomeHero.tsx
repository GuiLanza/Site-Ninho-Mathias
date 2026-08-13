import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

export function HomeHero() {
  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[32rem] overflow-hidden bg-[#f3f3f3]">
      <img
        src="/em-cena/hero.jpg"
        alt="Ninho Mathias com violão, em retrato de estúdio"
        width={768}
        height={1376}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[center_28%] sm:object-[center_27%] lg:object-[center_26%] xl:object-[center_24%]"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-white/15 lg:bg-white/10"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.38)_28%,rgba(0,0,0,0.1)_55%,transparent_78%)] lg:bg-[radial-gradient(ellipse_70%_85%_at_18%_50%,rgba(0,0,0,0.52)_0%,rgba(0,0,0,0.22)_42%,transparent_74%),linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.08)_32%,transparent_52%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-end lg:items-center">
        <div className="w-full px-5 pb-14 sm:px-8 sm:pb-16 lg:px-0 lg:pb-0 lg:pl-[10vw] lg:pr-[48vw] xl:pl-[12vw] xl:pr-[50vw]">
          <div className="mx-auto max-w-lg sm:max-w-xl lg:mx-0">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-amber-400 sm:text-sm">
              Música ao vivo
            </p>
            <h1 className="text-[clamp(2.75rem,8.4vw,7.25rem)] font-bold leading-[0.92] tracking-tight text-white">
              NINHO
              <span className="block">MATHIAS</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 sm:mt-8 sm:text-lg lg:text-xl">
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
      </div>
    </section>
  );
}
