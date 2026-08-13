import { useEffect, useState } from 'react';
import { parseIcsEvents, upcomingEvents, type AgendaEvent } from './parseIcs';
import { CALENDAR_ICS_PROXY } from './source';

export function useUpcomingShows(limit = 3) {
  const [shows, setShows] = useState<AgendaEvent[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'empty' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch(CALENDAR_ICS_PROXY);
        if (!response.ok) throw new Error('Agenda indisponível');
        const ics = await response.text();
        if (cancelled) return;
        const next = upcomingEvents(parseIcsEvents(ics), limit);
        setShows(next);
        setStatus(next.length === 0 ? 'empty' : 'ready');
      } catch {
        if (!cancelled) {
          setShows([]);
          setStatus('error');
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, [limit]);

  return { shows, status };
}
