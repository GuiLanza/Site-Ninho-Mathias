import { Music, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { WHATSAPP_NUMBER } from '../calculator/config';
import { AboutSection } from '../components/home/AboutSection';
import { AgendaCalendar } from '../components/home/AgendaCalendar';
import { EmCenaPreview } from '../components/home/EmCenaPreview';
import { UpcomingShows } from '../components/home/UpcomingShows';

export function Home() {
  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/55 z-10" />
        <img
          src="/em-cena/vocal-palco.jpg"
          alt="Ninho Mathias cantando no palco"
          className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            NINHO MATHIAS
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforme seu evento em uma experiência musical inesquecível
            </p>
            <button
              type="button"
              onClick={handleScheduleShow}
              className="inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-lg"
            >
              <Phone className="w-6 h-6" />
              Agende seu Show
            </button>
          </div>
        </div>
      </section>

      <AboutSection />
      <UpcomingShows />
      <AgendaCalendar />
      <EmCenaPreview />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center border-2 border-amber-400/50 rounded-2xl p-12 md:p-16 bg-zinc-900">
          <Music className="w-16 h-16 text-amber-400 mx-auto mb-8" aria-hidden="true" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Viva uma experiência musical
          </h2>
          <p className="text-white/70 mb-10 max-w-3xl mx-auto text-lg">
            Eventos, formações, aulas de canto e projetos — encontre o caminho certo e solicite um
            orçamento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/experiencias-musicais"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300"
            >
              Experiências Musicais
            </Link>
            <Link
              to="/calculadora"
              className="inline-flex items-center justify-center px-10 py-5 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300"
            >
              Planeje sua Experiência
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
