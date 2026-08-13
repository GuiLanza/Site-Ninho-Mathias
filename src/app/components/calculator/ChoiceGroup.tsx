interface ChoiceOption<T extends string> {
  value: T;
  label: string;
  hint?: string;
}

interface ChoiceGroupProps<T extends string> {
  legend: string;
  name: string;
  value: T | '';
  options: ChoiceOption<T>[];
  onChange: (value: T) => void;
  columns?: string;
}

export function ChoiceGroup<T extends string>({
  legend,
  name,
  value,
  options,
  onChange,
  columns = 'grid-cols-1 sm:grid-cols-3',
}: ChoiceGroupProps<T>) {
  return (
    <fieldset>
      <legend className="text-white font-semibold mb-3">{legend}</legend>
      <div className={`grid gap-3 ${columns}`}>
        {options.map((option) => {
          const selected = value === option.value;
          const id = `${name}-${option.value}`;

          return (
            <label
              key={option.value}
              htmlFor={id}
              className={`cursor-pointer rounded-2xl border p-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-amber-400 ${
                selected
                  ? 'border-amber-400 bg-amber-400/10'
                  : 'border-white/10 bg-white/5 hover:border-amber-400/40 hover:bg-white/10'
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
              <span className="block text-white font-semibold">{option.label}</span>
              {option.hint ? (
                <span className="mt-1 block text-sm text-white/60">{option.hint}</span>
              ) : null}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
