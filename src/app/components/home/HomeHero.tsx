import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

export function HomeHero() {
  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative isolate bg-black lg:h-[calc(100svh-4rem)] lg:min-h-[38rem]">
      <div className="flex h-full flex-col lg:flex-row">
        <div className="relative order-1 flex w-full items-end justify-center bg-[#f3f3f3] aspect-[3/4] max-h-[70svh] sm:max-h-[74svh] lg:order-2 lg:aspect-auto lg:h-full lg:max-h-none lg:w-[46%] xl:w-[44%]">
          <img
            src="/em-cena/hero.jpg"
            alt="Ninho Mathias com violão, em retrato de estúdio"
            className="h-full w-full object-contain object-center"
          />
        </div>

        <div className="order-2 flex flex-1 flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:order-1 lg:w-[54%] lg:px-8 xl:px-16">
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-lg xl:max-w-xl">
            <p className="text-amber-400 text-xs sm:text-sm font-bold tracking-[0.28em] uppercase mb-5">
              Música ao vivo
            </p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-[0.92]">
              NINHO
              <span className="block">MATHIAS</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-white/85 leading-relaxed max-w-md">
              Transforme seu evento em uma experiência musical inesquecível
            </p>
            <button
              type="button"
              onClick={handleScheduleShow}
              className="mt-8 inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-base sm:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              Agende seu Show
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
