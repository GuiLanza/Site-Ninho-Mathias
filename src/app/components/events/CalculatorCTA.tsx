import { Link } from 'react-router';

export function CalculatorCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="rounded-2xl border border-amber-400/40 bg-zinc-900 p-8 md:p-14 text-center">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-4">
          Não sabe qual escolher?
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Descubra a formação ideal para o seu evento
        </h2>
        <p className="text-white/70 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
          Conte alguns detalhes sobre o evento e nossa calculadora recomenda entre Solo, Trio e
          Banda considerando público, espaço, acústica e a experiência musical desejada.
        </p>
        <Link
          to="/calculadora"
          className="inline-flex items-center justify-center px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          Calcular minha formação
        </Link>
        <p className="mt-4 text-white/50 text-sm">Leva apenas alguns instantes.</p>
      </div>
    </section>
  );
}
