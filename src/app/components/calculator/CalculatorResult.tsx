import { CalendarClock, Music2, Sparkles, Users, Wrench } from 'lucide-react';
import type { Recommendation } from '../../calculator/types';
import { openWhatsAppQuote } from '../../calculator/whatsapp';

interface CalculatorResultProps {
  result: Recommendation;
}

export function CalculatorResult({ result }: CalculatorResultProps) {
  const details = [
    { icon: Music2, label: 'Formação', value: result.formation },
    { icon: CalendarClock, label: result.durationLabel, value: result.durationText },
    { icon: Sparkles, label: result.momentsLabel, value: result.momentsText },
    { icon: Wrench, label: 'Estrutura recomendada', value: result.structureText },
    { icon: Users, label: 'Público estimado', value: result.audienceLabel },
  ];

  return (
    <section
      id="calculadora-resultado"
      aria-live="polite"
      className="scroll-mt-24 bg-zinc-900 border border-amber-400/30 rounded-2xl p-6 sm:p-8 md:p-12"
    >
      <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">
        Recomendação para o seu evento
      </p>
      <p className="text-white/60 text-sm mb-2">{result.eventLabel}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{result.formatLabel}</h2>
      <p className="text-amber-400 font-semibold mb-6">Ideal para a proposta informada</p>
      <p className="text-white/80 leading-relaxed text-lg max-w-3xl">{result.text}</p>

      <div className="grid gap-4 sm:grid-cols-2 mt-10">
        {details.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-5"
          >
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <h3 className="text-sm font-bold uppercase tracking-wide text-amber-400">
                {item.label}
              </h3>
            </div>
            <p className="text-white/80 leading-relaxed">{item.value}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <button
          type="button"
          onClick={() => openWhatsAppQuote(result)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900"
        >
          Solicitar orçamento
        </button>
      </div>
    </section>
  );
}
