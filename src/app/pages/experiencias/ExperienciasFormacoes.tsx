import { Link } from 'react-router';
import { MUSICAL_FORMATS } from '../../content/eventsCatalog';
import { FORMATION_CHOICE_CRITERIA } from '../../content/experiencias';
import { MusicalFormatCard } from '../../components/events/MusicalFormatCard';

export function ExperienciasFormacoes() {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Formações
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          Cada evento pede uma experiência diferente
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-6">
          As formações podem variar de uma apresentação intimista em voz e violão até uma banda
          completa.
        </p>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
          A experiência contratada pode ter duração de até 4 horas, incluindo montagem, preparação,
          passagem de som, apresentação musical em blocos, intervalos e desmontagem. O tempo
          efetivo de música ao vivo pode chegar aproximadamente a 2h30 a 3h, distribuído ao longo
          do evento — não são quatro horas ininterruptas de palco.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {MUSICAL_FORMATS.map((format) => (
            <MusicalFormatCard key={format.id} format={format} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Não existe uma única formação ideal
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
          Uma ocasião menor pode funcionar perfeitamente com Solo ou Trio, enquanto eventos
          maiores ou com maior protagonismo musical podem pedir uma Banda completa. A proposta é
          encontrar o equilíbrio entre experiência musical, ambiente e público.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FORMATION_CHOICE_CRITERIA.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white font-semibold capitalize"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-amber-400 font-bold text-lg">
          Experiência musical + Ambiente + Público
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border-2 border-amber-400/50 bg-zinc-900 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planeje sua Experiência
          </h2>
          <p className="text-white/80 text-lg font-semibold mb-4">
            Ainda não sabe qual formação combina melhor com o seu evento?
          </p>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
            Conte sobre a ocasião, o espaço, a quantidade de convidados e o estilo de música que
            você procura. A partir dessas informações, o site ajuda a indicar uma experiência mais
            adequada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/calculadora"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Planeje sua Experiência
            </Link>
            <Link
              to="/agende-show"
              className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Agende seu Show
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
