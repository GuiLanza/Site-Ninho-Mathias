import { Link } from 'react-router';
import { EVENT_GROUPS, MUSICAL_FORMATS } from '../content/eventsCatalog';
import { CalculatorCTA } from '../components/events/CalculatorCTA';
import { EventTypeCard } from '../components/events/EventTypeCard';
import { FormationCriteria } from '../components/events/FormationCriteria';
import { MusicalFormatCard } from '../components/events/MusicalFormatCard';
import { ProcessTimeline } from '../components/events/ProcessTimeline';

export function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <header className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1763889784402-5e8744af31b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1pbmclMjBndWl0YXIlMjBzdGFnZSUyMGRhcmt8ZW58MXx8fHwxNzcyMTE2MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
          <p className="text-amber-400 text-sm font-bold tracking-[0.25em] uppercase mb-6">
            Eventos & Experiências
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Música para cada momento
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Eventos únicos merecem uma experiência musical à altura.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
            Oferecemos apresentações musicais para diferentes tipos de eventos, com formações que
            podem ser adaptadas ao espaço, à acústica, ao perfil dos convidados e à proposta de
            cada ocasião.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/agende-show"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/calculadora"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Descobrir formação ideal
            </Link>
          </div>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Eventos que atendemos</h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Da celebração intimista ao grande evento, a experiência musical é adaptada ao ambiente,
            ao público e à proposta de cada ocasião.
          </p>
        </div>

        <div className="space-y-14">
          {EVENT_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="text-amber-400 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                {group.title}
              </h3>
              <div
                className={
                  group.items.length === 1
                    ? 'max-w-xl'
                    : 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3'
                }
              >
                {group.items.map((event) => (
                  <EventTypeCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Escolha a presença musical ideal
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Da apresentação intimista à experiência completa de banda, cada formação pode ser
            adaptada à proposta do evento.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {MUSICAL_FORMATS.map((format) => (
            <MusicalFormatCard key={format.id} format={format} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Do planejamento à apresentação
          </h2>
        </div>
        <ProcessTimeline />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Cada evento pede uma formação diferente
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            A formação ideal não depende apenas do tamanho do evento. Espaço, acústica, quantidade
            de convidados e proposta musical também fazem parte da escolha.
          </p>
        </div>
        <FormationCriteria />
        <p className="text-white/60 mt-8 max-w-3xl leading-relaxed">
          Por isso, as formações podem ser adaptadas para proporcionar a melhor experiência
          possível em cada ocasião.
        </p>
      </section>

      <CalculatorCTA />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center border-2 border-amber-400/50 rounded-2xl p-8 sm:p-12 md:p-16 bg-zinc-900">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Vamos criar a trilha sonora do seu evento?
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
            Conte-nos sobre o evento, o local, a quantidade de convidados e a experiência musical
            que você procura.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/agende-show"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Solicitar orçamento
            </Link>
            <Link
              to="/calculadora"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Descobrir formação ideal
            </Link>
          </div>
          <p className="mt-8 text-white/50">
            Solo, Trio ou Banda — encontramos juntos a formação certa para cada ocasião.
          </p>
        </div>
      </section>
    </div>
  );
}
