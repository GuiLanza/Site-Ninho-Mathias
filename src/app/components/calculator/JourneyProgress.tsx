interface JourneyProgressProps {
  current: number;
  total: number;
  title: string;
}

export function JourneyProgress({ current, total, title }: JourneyProgressProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="mb-10">
      <div className="flex items-end justify-between gap-4 mb-3">
        <p className="text-amber-400 text-sm font-bold tracking-[0.2em] uppercase">{title}</p>
        <p className="text-white/50 text-sm font-semibold tabular-nums">
          {current} de {total}
        </p>
      </div>
      <div
        className="h-1 w-full rounded-full bg-white/10 overflow-hidden"
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-label={`Etapa ${current} de ${total}: ${title}`}
      >
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-500 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
