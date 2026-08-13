/**
 * Mapeamento central entre a jornada "Planeje sua Experiência" e o motor de recomendação.
 *
 * A reformulação de UX não altera os scores em `config.ts`.
 * Os novos campos da interface reutilizam as chaves já usadas pelo engine:
 *
 * | Etapa da jornada        | Campo de UI              | Campo do motor              |
 * | ----------------------- | ------------------------ | --------------------------- |
 * | Seu evento              | plannerId do catálogo    | eventType                   |
 * | Público (faixas)        | AudienceRange            | audienceRange + count interno |
 * | Tamanho do espaço       | pequeno / medio / grande | space                       |
 * | Estrutura técnica       | minima / padrao / palco  | structure                   |
 * | Presença musical        | acompanhamento / presenca / impacto | presence          |
 * | Preferências adicionais | delicada / padrao / reforco | acoustic                 |
 *
 * Espaço e estrutura são variáveis independentes (um espaço grande pode ter estrutura mínima).
 * O valor numérico de público existe só internamente para CompleteAnswers / WhatsApp.
 */

import type { AudienceRange } from './types';

export const AUDIENCE_RANGE_TO_COUNT: Record<AudienceRange, number> = {
  ATE_30: 20,
  DE_31_A_80: 55,
  DE_81_A_150: 115,
  DE_151_A_300: 220,
  ACIMA_300: 400,
};

export const AUDIENCE_RANGE_OPTIONS: {
  value: AudienceRange;
  label: string;
  hint: string;
  representativeCount: number;
}[] = [
  {
    value: 'ATE_30',
    label: 'Até 30 pessoas',
    hint: 'Evento pequeno e mais intimista.',
    representativeCount: AUDIENCE_RANGE_TO_COUNT.ATE_30,
  },
  {
    value: 'DE_31_A_80',
    label: '31 a 80 pessoas',
    hint: 'Pequeno/médio porte.',
    representativeCount: AUDIENCE_RANGE_TO_COUNT.DE_31_A_80,
  },
  {
    value: 'DE_81_A_150',
    label: '81 a 150 pessoas',
    hint: 'Evento de médio porte.',
    representativeCount: AUDIENCE_RANGE_TO_COUNT.DE_81_A_150,
  },
  {
    value: 'DE_151_A_300',
    label: '151 a 300 pessoas',
    hint: 'Evento de médio/grande porte.',
    representativeCount: AUDIENCE_RANGE_TO_COUNT.DE_151_A_300,
  },
  {
    value: 'ACIMA_300',
    label: 'Mais de 300 pessoas',
    hint: 'Evento de grande porte.',
    representativeCount: AUDIENCE_RANGE_TO_COUNT.ACIMA_300,
  },
];
