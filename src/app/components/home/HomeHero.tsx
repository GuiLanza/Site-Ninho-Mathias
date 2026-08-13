import { Phone } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../calculator/config';

export function HomeHero() {
  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative isolate h-[calc(100svh-4rem)] min-h-[34rem] overflow-hidden bg-black">
      <div className="absolute inset-0 lg:left-[38%] xl:left-[40%]">
        <img
          src="/em-cena/hero.jpg"
          alt="Ninho Mathias com violão, em retrato de estúdio"
          className="h-full w-full object-cover object-[center_8%] sm:object-[center_12%] lg:object-[center_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/45 lg:bg-gradient-to-r lg:from-black lg:from-10% lg:via-black/55 lg:via-38% lg:to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end lg:items-center px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-0">
        <div className="max-w-xl xl:max-w-2xl">
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
    </section>
  );
}
