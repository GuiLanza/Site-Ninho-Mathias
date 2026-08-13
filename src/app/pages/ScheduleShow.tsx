import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Calendar, MapPin, User, Phone, Briefcase, Send, Music2 } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../calculator/config';
import { clearPlannerDraft, readPlannerDraft, type PlannerDraft } from '../calculator/plannerDraft';
import { LESSON_SCHEDULE_TYPE, SCHEDULE_EVENT_TYPES } from '../content/eventsCatalog';

function initialEventType(requestedType: string | null, draft: PlannerDraft | null): string {
  if (requestedType === LESSON_SCHEDULE_TYPE) return LESSON_SCHEDULE_TYPE;
  if (draft?.eventTitle && SCHEDULE_EVENT_TYPES.includes(draft.eventTitle)) {
    return draft.eventTitle;
  }
  if (requestedType && SCHEDULE_EVENT_TYPES.includes(requestedType)) return requestedType;
  return '';
}

export function ScheduleShow() {
  const [searchParams] = useSearchParams();
  const requestedType = searchParams.get('tipo');
  const initialDraft = useMemo(() => readPlannerDraft(), []);

  const [formData, setFormData] = useState({
    name: '',
    date: '',
    location: '',
    whatsapp: '',
    eventType: initialEventType(requestedType, initialDraft),
  });
  const [planner, setPlanner] = useState<PlannerDraft | null>(
    requestedType === LESSON_SCHEDULE_TYPE ? null : initialDraft,
  );

  const isLesson = formData.eventType === LESSON_SCHEDULE_TYPE;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const plannerLines = planner
      ? [
          '',
          '*Planeje sua Experiência*',
          `Público: ${planner.audienceLabel}`,
          `Espaço: ${planner.spaceLabel}`,
          `Estrutura: ${planner.structureLabel}`,
          `Presença musical: ${planner.presenceLabel}`,
          `Formação recomendada: ${planner.formatLabel}`,
          `Formação: ${planner.formation}`,
        ]
      : [];

    const message = [
      `Olá! Gostaria de agendar ${isLesson ? 'uma aula de canto' : 'um show'} com as seguintes informações:`,
      '',
      `Nome: ${formData.name}`,
      `Data: ${formData.date}`,
      `Local: ${formData.location}`,
      `WhatsApp: ${formData.whatsapp}`,
      `Tipo: ${formData.eventType}`,
      ...plannerLines,
      '',
      'Aguardo retorno!',
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleClearPlanner = () => {
    clearPlannerDraft();
    setPlanner(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="relative max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {isLesson ? 'Agendar aula de canto' : 'Agende seu Show'}
          </h1>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            {isLesson
              ? 'Preencha o formulário e conversamos sobre sua experiência, objetivos e o que você gostaria de desenvolver.'
              : 'Informe os dados do evento. Entramos em contato pelo WhatsApp para alinhar a experiência musical.'}
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 md:p-12">
          {planner && !isLesson ? (
            <div className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-400/5 p-5 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Music2 className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-amber-400 text-sm font-bold uppercase tracking-wide">
                    Do Planeje sua Experiência
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Esses dados vieram da recomendação e entram na mensagem. Você pode alterá-los
                    antes de enviar.
                  </p>
                </div>
              </div>
              <dl className="grid gap-3 sm:grid-cols-2 text-sm">
                <div>
                  <dt className="text-white/45">Público</dt>
                  <dd className="text-white font-semibold">{planner.audienceLabel}</dd>
                </div>
                <div>
                  <dt className="text-white/45">Espaço</dt>
                  <dd className="text-white font-semibold">{planner.spaceLabel}</dd>
                </div>
                <div>
                  <dt className="text-white/45">Estrutura</dt>
                  <dd className="text-white font-semibold">{planner.structureLabel}</dd>
                </div>
                <div>
                  <dt className="text-white/45">Presença musical</dt>
                  <dd className="text-white font-semibold">{planner.presenceLabel}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-white/45">Formação recomendada</dt>
                  <dd className="text-white font-semibold">
                    {planner.formatLabel} — {planner.formation}
                  </dd>
                </div>
              </dl>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  to="/calculadora"
                  className="text-amber-400 font-semibold hover:text-amber-300 underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                >
                  Alterar no Planeje sua Experiência
                </Link>
                <button
                  type="button"
                  onClick={handleClearPlanner}
                  className="text-white/60 hover:text-white font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                >
                  Não usar esses dados
                </button>
              </div>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <User className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Nome completo
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:bg-white/10 transition-all"
                placeholder="Digite seu nome"
              />
            </div>

            <div>
              <label htmlFor="date" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Calendar className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Data do evento
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:bg-white/10 transition-all"
              />
            </div>

            <div>
              <label htmlFor="location" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <MapPin className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Local do evento
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:bg-white/10 transition-all"
                placeholder="Cidade, espaço ou endereço"
              />
            </div>

            <div>
              <label htmlFor="whatsapp" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Phone className="w-5 h-5 text-amber-400" aria-hidden="true" />
                WhatsApp
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                autoComplete="tel"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:bg-white/10 transition-all"
                placeholder="(00) 00000-0000"
              />
            </div>

            <div>
              <label htmlFor="eventType" className="flex items-center gap-2 text-white mb-2 font-semibold">
                <Briefcase className="w-5 h-5 text-amber-400" aria-hidden="true" />
                Tipo de evento
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus:bg-white/10 transition-all"
              >
                <option value="" disabled className="bg-zinc-900">
                  Selecione o tipo
                </option>
                {SCHEDULE_EVENT_TYPES.map((option) => (
                  <option key={option} value={option} className="bg-zinc-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-black font-bold rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Send className="w-5 h-5" aria-hidden="true" />
              Enviar pelo WhatsApp
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/70 text-center text-sm leading-relaxed">
              Ao enviar, você será redirecionado para o WhatsApp com os dados preenchidos. É possível
              revisar a mensagem antes de disparar.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <Phone className="w-8 h-8 text-amber-400 mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-white font-semibold mb-2">Telefone</h2>
            <p className="text-white/70">(31) 8457-8989</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-amber-400 mx-auto mb-3" aria-hidden="true" />
            <h2 className="text-white font-semibold mb-2">Disponibilidade</h2>
            <p className="text-white/70">Consulte a agenda na Home</p>
          </div>
        </div>
      </section>
    </div>
  );
}
