import { Music2 } from 'lucide-react';
import { Link } from 'react-router';
import { MUSICAL_PROJECTS } from '../content/projects';

export function Projects() {
  return (
    <div>
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            PROJETOS MUSICAIS
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Conheça os diferentes projetos e formações musicais
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {MUSICAL_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-500 p-8 sm:p-10"
            >
              <div className="mb-6">
                <span className="inline-flex px-4 py-2 bg-amber-400/90 rounded-full text-black font-semibold text-sm uppercase tracking-wide">
                  {project.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-white/70 leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center border border-amber-400/20 rounded-2xl p-12">
          <Music2 className="w-16 h-16 text-amber-400 mx-auto mb-6" aria-hidden="true" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quer levar um desses projetos para o seu evento?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir a melhor formação para sua ocasião
          </p>
          <Link
            to="/agende-show"
            className="inline-block px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105"
          >
            Agendar Show
          </Link>
        </div>
      </section>
    </div>
  );
}
