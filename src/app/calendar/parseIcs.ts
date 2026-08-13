export interface AgendaEvent {
  id: string;
  title: string;
  start: Date;
  location: string;
  description: string;
  url: string;
}

function unfoldIcs(raw: string): string {
  return raw.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '').replace(/\r\n/g, '\n');
}

function unescapeIcs(value: string): string {
  return value
    .replace(/\\n/g, '\n')
    .replace(/\\,/g, ',')
    .replace(/\\;/g, ';')
    .replace(/\\\\/g, '\\');
}

function parseIcsDate(value: string): Date | null {
  const compact = value.trim();
  const match = compact.match(/^(\d{4})(\d{2})(\d{2})(?:T(\d{2})(\d{2})(\d{2})(Z)?)?/);
  if (!match) return null;

  const [, year, month, day, hour = '00', minute = '00', second = '00', utc] = match;
  if (utc === 'Z') {
    return new Date(Date.UTC(+year, +month - 1, +day, +hour, +minute, +second));
  }
  return new Date(+year, +month - 1, +day, +hour, +minute, +second);
}

function field(block: string, name: string): string {
  const line = block.split('\n').find((entry) => entry.startsWith(`${name}:`) || entry.startsWith(`${name};`));
  if (!line) return '';
  const separator = line.indexOf(':');
  return unescapeIcs(line.slice(separator + 1).trim());
}

function startOfToday(): Date {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
}

export function parseIcsEvents(ics: string): AgendaEvent[] {
  const unfolded = unfoldIcs(ics);
  const blocks = unfolded.split('BEGIN:VEVENT').slice(1);
  const events: AgendaEvent[] = [];

  for (const rawBlock of blocks) {
    const block = rawBlock.split('END:VEVENT')[0] ?? '';
    const start = parseIcsDate(field(block, 'DTSTART'));
    if (!start) continue;

    const title = field(block, 'SUMMARY') || 'Apresentação';
    events.push({
      id: field(block, 'UID') || `${title}-${start.toISOString()}`,
      title,
      start,
      location: field(block, 'LOCATION'),
      description: field(block, 'DESCRIPTION'),
      url: field(block, 'URL'),
    });
  }

  return events;
}

export function upcomingEvents(events: AgendaEvent[], limit = 3): AgendaEvent[] {
  const from = startOfToday();
  return [...events]
    .filter((event) => event.start.getTime() >= from.getTime())
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .filter((event, index, list) => list.findIndex((item) => item.id === event.id) === index)
    .slice(0, limit);
}

export function formatShowDate(date: Date): string {
  return date
    .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: '2-digit' })
    .replace('.', '')
    .toUpperCase();
}

export function formatShowFullDate(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export function formatShowTime(date: Date): string | null {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  if (hours === 0 && minutes === 0) return null;
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export function splitLocation(location: string): { city: string; venue: string } {
  if (!location) return { city: '', venue: '' };
  const parts = location.split(',').map((part) => part.trim()).filter(Boolean);
  if (parts.length === 0) return { city: location, venue: '' };
  if (parts.length === 1) return { city: parts[0], venue: '' };
  return { city: parts.slice(-2).join(', '), venue: parts.slice(0, -2).join(', ') || parts[0] };
}
