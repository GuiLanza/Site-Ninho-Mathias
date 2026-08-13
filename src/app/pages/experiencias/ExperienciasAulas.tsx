import { Link } from 'react-router';
import {
  LESSON_AUDIENCE,
  LESSON_PROFILE_FACTORS,
  LESSON_STRUCTURE,
  LESSON_TOPICS,
} from '../../content/experiencias';

export function ExperienciasAulas() {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Aulas de Canto
        </p>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 max-w-4xl">
          Desenvolva sua voz e encontre sua identidade musical
        </h1>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-4">
          As aulas são voltadas ao desenvolvimento vocal, interpretação, técnica e prática
          musical, respeitando o momento, os objetivos e as características de cada aluno.
        </p>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl">
          Cada aula tem duração de aproximadamente 50 minutos a 1 hora. A proposta não é apenas
          aprender a cantar músicas, mas desenvolver consciência vocal, segurança, musicalidade e
          autonomia.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          O que pode ser trabalhado nas aulas
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LESSON_TOPICS.map((topic) => (
            <article
              key={topic.title}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6 hover:border-amber-400 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{topic.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Cada voz tem seu próprio caminho
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
          Não existe uma única maneira de ensinar canto. O conteúdo e a evolução das aulas são
          definidos considerando o aluno — de quem está começando a quem já canta e deseja
          desenvolver aspectos específicos da técnica e da interpretação.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {LESSON_PROFILE_FACTORS.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white font-semibold capitalize"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como uma aula pode funcionar</h2>
        <p className="text-white/60 mb-8 max-w-3xl">
          Essa estrutura pode variar conforme as necessidades de cada aluno. Duração: aproximadamente
          50 minutos a 1 hora.
        </p>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {LESSON_STRUCTURE.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <p className="text-amber-400 font-bold text-sm tracking-widest mb-3">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Para quem são as aulas?</h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-8">
          Não é necessário ser cantor profissional. Se você nunca fez aula de canto, este também é
          um lugar para começar.
        </p>
        <ul className="flex flex-wrap gap-3">
          {LESSON_AUDIENCE.map((item) => (
            <li
              key={item}
              className="rounded-full border border-amber-400/30 bg-zinc-900 px-4 py-2 text-white/80 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-2xl border-2 border-amber-400/50 bg-zinc-900 p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Vamos desenvolver a sua voz?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Conte um pouco sobre sua experiência com canto, seus objetivos e o que você gostaria de
            desenvolver.
          </p>
          <Link
            to="/agende-show?tipo=Aula%20de%20Canto"
            className="inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            Quero fazer uma aula
          </Link>
        </div>
      </section>
    </div>
  );
}
