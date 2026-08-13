import { Music2, Guitar } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Bloco Eu Te Devoro',
      description: 'Bloco de carnaval com energia contagiante e repertório que celebra a cultura brasileira.',
      image: 'https://images.unsplash.com/photo-1735839550903-98b86765a0d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJuaXZhbCUyMHN0cmVldCUyMHBhcnR5JTIwYnJhemlsfGVufDF8fHx8MTc3MjExNjMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Music2,
      category: 'Carnaval',
    },
    {
      id: 2,
      title: 'Tri 80',
      description: 'Rock nacional dos anos 80 em formato de trio',
      image: 'https://images.unsplash.com/photo-1767462372391-0b46012657f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2NrJTIwYmFuZCUyMDgwcyUyMGNvbmNlcnR8ZW58MXx8fHwxNzcyMTE2MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      icon: Guitar,
      category: 'Rock',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Header */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            PROJETOS MUSICAIS
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            Conheça os diferentes projetos e formações musicais
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-amber-400/50 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-amber-400/90 backdrop-blur-sm rounded-full">
                  <span className="text-black font-semibold text-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 bg-amber-400/20 backdrop-blur-sm border border-amber-400/50 rounded-full flex items-center justify-center group-hover:bg-amber-400/40 transition-colors">
                    <project.icon className="w-6 h-6 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* CTA Button */}
                <button className="mt-6 px-6 py-3 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black border border-amber-400 rounded-full transition-all duration-300 font-semibold text-sm uppercase tracking-wide group-hover:scale-105">
                  Saiba Mais
                </button>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-400/20 rounded-lg p-12">
          <Music2 className="w-16 h-16 text-amber-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quer levar um desses projetos para o seu evento?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Entre em contato para discutir a melhor formação para sua ocasião
          </p>
          <a
            href="/agende-show"
            className="inline-block px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105"
          >
            Agendar Show
          </a>
        </div>
      </section>
    </div>
  );
}
