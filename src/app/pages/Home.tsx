import { Music } from 'lucide-react';
import { Link } from 'react-router';
import { AboutSection } from '../components/home/AboutSection';
import { AgendaCalendar } from '../components/home/AgendaCalendar';
import { EmCenaPreview } from '../components/home/EmCenaPreview';
import { HomeHero } from '../components/home/HomeHero';
import { UpcomingShows } from '../components/home/UpcomingShows';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <HomeHero />
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
