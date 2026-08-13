import { Calendar, MapPin, Music, Info, Phone, Guitar, Music2 } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  // Mock data para eventos da agenda - 3 próximos eventos
  const upcomingShows = [
    {
      id: 1,
      date: '08 MAR 26',
      fullDate: '08 de Março de 2026',
      title: 'Djavozaar 10 anos: Só Sucessos',
      location: 'São Paulo - SP',
      venue: 'Allianz Parque',
    },
    {
      id: 2,
      date: '09 MAR 26',
      fullDate: '09 de Março de 2026',
      title: 'Djavozaar 10 anos: Só Sucessos',
      location: 'São Paulo - SP',
      venue: 'Allianz Parque',
    },
    {
      id: 3,
      date: '23 MAR 26',
      fullDate: '23 de Março de 2026',
      title: 'Djavozaar 10 anos: Só Sucessos',
      location: 'Salvador - BA',
      venue: 'Casa de Apostas Arena Fonte Nova',
    },
  ];

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

  const handleEventInquiry = (eventTitle: string, eventDate: string) => {
    const message = `Olá! Quero saber mais sobre o evento: "${eventTitle}" em ${eventDate}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/553184578989?text=${encodedMessage}`, '_blank');
  };

  const handleScheduleShow = () => {
    const message = 'Olá! Quero agendar um show.';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/553184578989?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1763889784402-5e8744af31b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1pbmclMjBndWl0YXIlMjBzdGFnZSUyMGRhcmt8ZW58MXx8fHwxNzcyMTE2MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ninho Mathias Performance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            NINHO MATHIAS
          </h1>
          
          {/* CTA Agende Seu Show */}
          <div className="max-w-2xl mx-auto">
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transforme seu evento em uma experiência musical inesquecível
            </p>
            <button
              onClick={handleScheduleShow}
              className="inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              Agende seu Show
            </button>
          </div>
        </div>
      </section>

      {/* Agenda Completa Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AGENDA</h2>
          <p className="text-white/70 text-lg">
            Confira os próximos shows e eventos
          </p>
        </div>

        {/* Google Calendar Integration - Dark Theme & Month View */}
        <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl overflow-hidden shadow-2xl">
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400/10 to-amber-600/10 py-4 border-b border-amber-400/30">
            <Calendar className="w-6 h-6 text-amber-400" />
            <p className="text-white font-bold text-lg">Agenda Completa</p>
          </div>
          <div className="w-full h-[600px] bg-zinc-950 relative">
            <style dangerouslySetInnerHTML={{
              __html: `
                iframe[src*="google.com/calendar"] {
                  filter: invert(0.9) hue-rotate(180deg) brightness(1.1) contrast(0.9);
                  background: #000000 !important;
                }
              `
            }} />
            <iframe
              src="https://calendar.google.com/calendar/embed?src=ninhomathias.nm%40gmail.com&ctz=America%2FSao_Paulo&mode=MONTH&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23000000&color=%23F59E0B"
              style={{ border: 0, background: '#000000' }}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3 Próximos Eventos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PRÓXIMOS SHOWS</h2>
          <p className="text-white/70 text-lg">
            Os 3 eventos mais próximos da agenda
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {upcomingShows.map((show) => (
            <div
              key={show.id}
              className="group bg-zinc-900 border border-amber-400/30 rounded-2xl p-8 hover:bg-zinc-800 hover:border-amber-400 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-amber-400 font-bold text-2xl">
                  {show.date}
                </div>
                <Music className="w-6 h-6 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-4">
                {show.title}
              </h3>
              
              <div className="flex items-start gap-2 text-white/70 text-sm mb-6">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <div>
                  <p className="font-semibold text-white">{show.location}</p>
                  <p className="text-white/60">{show.venue}</p>
                </div>
              </div>

              <button 
                onClick={() => handleEventInquiry(show.title, show.fullDate)}
                className="w-full py-3 px-4 bg-amber-400/10 hover:bg-amber-400 text-amber-400 hover:text-black border-2 border-amber-400 rounded-full transition-all duration-300 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Info className="w-4 h-4" />
                INFORMAÇÕES
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Projetos Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">PROJETOS</h2>
          <p className="text-white/70 text-lg">
            Diferentes formações musicais para cada tipo de evento
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-zinc-900 border border-amber-400/30 rounded-2xl overflow-hidden hover:border-amber-400 transition-all duration-500 hover:scale-[1.02] shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-amber-400 backdrop-blur-sm rounded-full">
                  <span className="text-black font-bold text-sm uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 bg-amber-400/20 backdrop-blur-sm border border-amber-400 rounded-full flex items-center justify-center group-hover:bg-amber-400/40 transition-colors">
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
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-400/30 rounded-2xl p-12 md:p-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">SOBRE</h2>
          </div>
          
          <div className="max-w-4xl mx-auto text-white/80 leading-relaxed space-y-4 text-lg">
            <p>
              Com anos de experiência no mercado musical, <strong className="text-amber-400">Ninho Mathias</strong> se destaca pela versatilidade e qualidade em apresentações ao vivo. Seja em shows autorais ou covers de grandes sucessos, cada performance é cuidadosamente preparada para criar uma conexão única com o público.
            </p>
            <p>
              De bares intimistas a grandes festivais, de festas corporativas a celebrações particulares, oferecemos diferentes formações musicais para atender às necessidades específicas de cada evento. Nossa paixão pela música se reflete em cada acorde, em cada nota, em cada momento no palco.
            </p>
            <p>
              Trabalhamos com repertório diversificado que vai do rock nacional dos anos 80 ao carnaval brasileiro mais animado, sempre buscando criar experiências memoráveis que ficam marcadas na memória de quem participa.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border-2 border-amber-400/50 rounded-2xl p-12 md:p-16 shadow-2xl">
          <Music className="w-20 h-20 text-amber-400 mx-auto mb-8" />
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Serviços Diversificados na Indústria Musical para Sua Audiência
          </h3>
          <p className="text-white/70 mb-10 max-w-3xl mx-auto text-lg">
            Shows personalizados, assessoria musical, produção de eventos e muito mais. 
            Entre em contato e descubra como podemos tornar seu evento inesquecível.
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScheduleShow}
              className="inline-flex items-center gap-3 px-10 py-5 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-xl"
            >
              <Phone className="w-6 h-6" />
              Entre em Contato
            </button>
            <Link
              to="/calculadora"
              className="inline-flex items-center gap-3 px-10 py-5 bg-transparent hover:bg-amber-400 text-amber-400 hover:text-black font-bold rounded-full border-2 border-amber-400 transition-all duration-300 hover:scale-105 text-lg"
            >
              Simular formação
            </Link>
            </div>
            <Link
              to="/eventos"
              className="text-white/70 hover:text-amber-400 transition-colors text-sm font-semibold underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
            >
              Conheça todos os tipos de eventos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}