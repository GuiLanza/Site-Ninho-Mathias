interface ChoiceOption<T extends string> {
  value: T;
  label: string;
  hint?: string;
  concepts?: string[];
}

interface ChoiceGroupProps<T extends string> {
  legend: string;
  description?: string;
  name: string;
  value: T | '';
  options: ChoiceOption<T>[];
  onChange: (value: T) => void;
  columns?: string;
}

export function ChoiceGroup<T extends string>({
  legend,
  description,
  name,
  value,
  options,
  onChange,
  columns = 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
}: ChoiceGroupProps<T>) {
  return (
    <fieldset>
      <legend className="text-2xl sm:text-3xl font-bold text-white mb-3">{legend}</legend>
      {description ? (
        <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
      ) : (
        <div className="mb-8" />
      )}
      <div className={`grid gap-3 sm:gap-4 ${columns}`}>
        {options.map((option) => {
          const selected = value === option.value;
          const id = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`cursor-pointer rounded-2xl border p-5 sm:p-6 text-left transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-400 focus-within:ring-offset-2 focus-within:ring-offset-zinc-950 min-h-[5.5rem] ${
                selected
                  ? 'border-amber-400 bg-amber-400/10 shadow-[0_0_0_1px_rgba(251,191,36,0.35)]'
                  : 'border-white/10 bg-white/[0.04] hover:border-amber-400/40 hover:bg-white/[0.07]'
              }`}
            >
              <input
                id={id}
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                onChange={() => onChange(option.value)}
                className="sr-only"
              />
              <span className="flex items-start justify-between gap-3">
                <span className="block text-white font-bold text-lg">{option.label}</span>
                <span
                  className={`mt-1 inline-flex h-5 w-5 shrink-0 rounded-full border ${
                    selected ? 'border-amber-400 bg-amber-400' : 'border-white/30 bg-transparent'
                  }`}
                  aria-hidden="true"
                />
              </span>
              {option.hint ? (
                <span className="mt-2 block text-sm sm:text-base text-white/65 leading-relaxed">
                  {option.hint}
                </span>
              ) : null}
              {option.concepts?.length ? (
                <span className="mt-4 flex flex-wrap gap-2">
                  {option.concepts.map((concept) => (
                    <span
                      key={concept}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-400/90"
                    >
                      {concept}
                    </span>
                  ))}
                </span>
              ) : null}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
