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
        className="pointer-events-none absolute left-1/2 top-[44%] h-[148%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 sm:h-[158%] md:h-[170%] lg:h-[200%] xl:h-[210%] 2xl:h-[200%]"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-white/25 lg:bg-white/20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.32)_38%,rgba(0,0,0,0.12)_68%,transparent_88%)] lg:bg-[radial-gradient(ellipse_80%_70%_at_50%_48%,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.16)_48%,transparent_76%)]"
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
