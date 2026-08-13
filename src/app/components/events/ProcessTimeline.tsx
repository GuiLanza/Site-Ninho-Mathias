import { PROCESS_STEPS } from '../../content/eventsCatalog';

export function ProcessTimeline() {
  return (
    <ol className="grid gap-4 md:grid-cols-5">
      {PROCESS_STEPS.map((step) => (
        <li
          key={step.number}
          className="rounded-2xl border border-white/10 bg-zinc-900 p-5 md:p-6"
        >
          <p className="text-amber-400 font-bold text-sm tracking-widest mb-3">{step.number}</p>
          <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
          <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
