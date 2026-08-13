import { Calendar } from 'lucide-react';
import { GOOGLE_CALENDAR_EMBED_URL } from '../../calendar/source';

export function AgendaCalendar() {
  return (
    <section id="agenda" className="scroll-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">AGENDA</h2>
        <p className="text-white/70 text-lg">Confira os próximos shows e eventos</p>
      </div>

      <div className="bg-zinc-900 border border-amber-400/30 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-center gap-2 bg-amber-400/10 py-4 border-b border-amber-400/30">
          <Calendar className="w-6 h-6 text-amber-400" aria-hidden="true" />
          <p className="text-white font-bold text-lg">Agenda Completa</p>
        </div>
        <div className="w-full h-[600px] bg-zinc-950 relative">
          <style
            dangerouslySetInnerHTML={{
              __html: `
                iframe[src*="google.com/calendar"] {
                  filter: invert(0.9) hue-rotate(180deg) brightness(1.1) contrast(0.9);
                  background: #000000 !important;
                }
              `,
            }}
          />
          <iframe
            title="Agenda completa de Ninho Mathias"
            src={GOOGLE_CALENDAR_EMBED_URL}
            style={{ border: 0, background: '#000000' }}
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
