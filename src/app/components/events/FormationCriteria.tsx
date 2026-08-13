import { FORMATION_CRITERIA } from '../../content/eventsCatalog';

export function FormationCriteria() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {FORMATION_CRITERIA.map((item) => (
        <li
          key={item}
          className="rounded-2xl border border-white/10 bg-zinc-900 px-5 py-4 text-white font-semibold transition-colors duration-300 hover:border-amber-400"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
