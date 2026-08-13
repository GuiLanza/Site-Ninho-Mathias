import { WHATSAPP_NUMBER } from './config';
import type { Recommendation } from './types';

export function buildWhatsAppMessage(result: Recommendation): string {
  return [
    'Olá! Fiz a simulação no site do Ninho Mathias.',
    '',
    `Tipo de evento: ${result.eventLabel}`,
    `Público estimado: ${result.audienceLabel}`,
    `Formato recomendado: ${result.formatLabel}`,
    `Formação: ${result.formation}`,
    '',
    'Gostaria de solicitar mais informações e um orçamento.',
  ].join('\n');
}

export function openWhatsAppQuote(result: Recommendation): void {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(result))}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
