import { Music2 } from 'lucide-react';
import { Link } from 'react-router';
import { getProjectImages } from '../content/emCena';
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-10">
        {MUSICAL_PROJECTS.map((project) => {
          const images = getProjectImages(project.id);
          const cover = images[0];
          const extras = images.slice(1);

          return (
            <article
              key={project.id}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-500"
            >
              {images.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-1.5 sm:gap-2 p-1.5 sm:p-2 md:h-[28rem] lg:h-[32rem]">
                  {cover ? (
                    <div className="relative col-span-2 md:row-span-2 min-h-[14rem] sm:min-h-[18rem] md:min-h-0 overflow-hidden rounded-xl">
                      <img
                        src={cover.src}
                        alt={cover.alt}
                        className={`absolute inset-0 w-full h-full object-cover ${cover.focal ?? 'object-center'}`}
                      />
                    </div>
                  ) : null}
                  {extras.map((image) => (
                    <div
                      key={image.id}
                      className="relative min-h-[7.5rem] sm:min-h-[9rem] md:min-h-0 overflow-hidden rounded-xl"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={`absolute inset-0 w-full h-full object-cover ${image.focal ?? 'object-center'}`}
                      />
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="p-8 sm:p-10">
                <span className="inline-flex px-4 py-2 bg-amber-400/90 rounded-full text-black font-semibold text-sm uppercase tracking-wide mb-6">
                  {project.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-white/70 leading-relaxed max-w-3xl">{project.description}</p>
              </div>
            </article>
          );
        })}

        <div className="mt-6 text-center border border-amber-400/20 rounded-2xl p-12">
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
