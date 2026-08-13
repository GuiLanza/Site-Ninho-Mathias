import type { Format } from '../calculator/types';

export interface CatalogEvent {
  id: string;
  title: string;
  description: string;
  featured?: boolean;
  calculatorHint?: string;
  ceremonyNote?: string;
}

export interface CatalogEventGroup {
  id: string;
  title: string;
  items: CatalogEvent[];
}

export interface MusicalFormat {
  id: Format;
  title: string;
  subtitle: string;
  description: string;
  durationLabel: string;
  duration: string;
  includes: string[];
  formationLabel: string;
  formation: string;
  possibilities?: string[];
  complement?: string;
  presenceLabel: string;
  presenceTags: string[];
  musicians: number;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const EVENT_GROUPS: CatalogEventGroup[] = [
  {
    id: 'celebracoes',
    title: 'Celebrações',
    items: [
      {
        id: 'casamentos',
        title: 'Casamentos',
        description:
          'Música para cerimônias, recepções, coquetéis e momentos especiais do casamento.',
      },
      {
        id: 'cerimonias',
        title: 'Cerimônias',
        description:
          'Uma experiência musical cuidadosamente planejada para acompanhar momentos marcantes e emocionantes.',
        featured: true,
        calculatorHint: 'Recomendação personalizada disponível',
        ceremonyNote:
          'Momentos musicais definidos de acordo com a programação da cerimônia.',
      },
      {
        id: 'aniversarios',
        title: 'Aniversários',
        description:
          'Repertório e formação musical para comemorações intimistas ou grandes celebrações.',
      },
      {
        id: 'formaturas',
        title: 'Formaturas',
        description:
          'Uma apresentação pensada para acompanhar cada momento da celebração e criar uma atmosfera especial.',
      },
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Experiências',
    items: [
      {
        id: 'corporativos',
        title: 'Eventos corporativos',
        description:
          'Música ao vivo para confraternizações, encontros empresariais, celebrações e eventos institucionais.',
      },
      {
        id: 'lancamentos',
        title: 'Lançamentos de produtos e inaugurações',
        description:
          'Uma experiência musical para valorizar a apresentação de novos produtos, marcas, espaços e negócios.',
      },
      {
        id: 'coqueteis',
        title: 'Coquetéis e recepções',
        description:
          'Formato ideal para criar uma atmosfera sofisticada e agradável durante a chegada e interação dos convidados.',
      },
      {
        id: 'feiras',
        title: 'Feiras e exposições',
        description:
          'Apresentações adaptadas ao ambiente, à circulação de pessoas e à dinâmica do evento.',
      },
      {
        id: 'culturais',
        title: 'Eventos culturais',
        description:
          'Música ao vivo para projetos culturais, encontros, apresentações e experiências artísticas.',
      },
    ],
  },
  {
    id: 'hospitalidade',
    title: 'Entretenimento & Hospitalidade',
    items: [
      {
        id: 'festivais',
        title: 'Festivais',
        description: 'Formações e repertórios adaptáveis à estrutura e à proposta do festival.',
      },
      {
        id: 'bares',
        title: 'Bares e restaurantes',
        description:
          'Apresentações pensadas para complementar a experiência dos clientes sem comprometer a dinâmica do estabelecimento.',
      },
      {
        id: 'hoteis',
        title: 'Hotéis e resorts',
        description:
          'Música para recepções, áreas sociais, eventos especiais, confraternizações e experiências para hóspedes.',
      },
      {
        id: 'clubes',
        title: 'Eventos em clubes',
        description:
          'Apresentações para festas, confraternizações, celebrações e eventos sociais.',
      },
      {
        id: 'condominios',
        title: 'Eventos em condomínios',
        description:
          'Música ao vivo para festas, encontros de moradores, confraternizações e eventos especiais.',
      },
    ],
  },
  {
    id: 'desenvolvimento',
    title: 'Desenvolvimento musical',
    items: [
      {
        id: 'aulas-canto',
        title: 'Aulas de canto',
        description:
          'Aulas voltadas ao desenvolvimento vocal, interpretação, técnica e prática musical.',
      },
    ],
  },
];

export const MUSICAL_FORMATS: MusicalFormat[] = [
  {
    id: 'solo',
    title: 'Solo',
    subtitle: 'Voz + Violão',
    description:
      'Uma formação versátil e elegante, ideal para eventos que buscam uma experiência musical mais intimista.',
    durationLabel: 'Duração do evento',
    duration: '3 a 4 horas',
    includes: [
      'Montagem e preparação',
      'Passagem de som',
      'Até 2h30 de música distribuídas ao longo do evento',
      'Intervalos estratégicos',
      'Desmontagem',
    ],
    formationLabel: 'Formação',
    formation: 'Voz + Violão',
    presenceLabel: 'Essencial',
    presenceTags: ['Intimista', 'Elegante'],
    musicians: 1,
  },
  {
    id: 'trio',
    title: 'Trio',
    subtitle: 'Uma formação versátil e personalizada',
    description:
      'O trio oferece mais possibilidades sonoras, mantendo uma estrutura compacta e adequada para diferentes ambientes.',
    durationLabel: 'Duração do evento',
    duration: '3 a 4 horas',
    includes: [
      'Montagem dos equipamentos',
      'Passagem de som',
      'Até 2h30 a 3h de música distribuídas em blocos',
      'Intervalos',
      'Desmontagem',
    ],
    formationLabel: 'Possibilidades',
    formation: 'Definida de acordo com a proposta do evento e a acústica do local.',
    possibilities: [
      'Voz + Teclado + Bateria',
      'Voz + Violão + Bateria',
      'Voz + Violão + Teclado',
    ],
    complement:
      'Outras combinações podem ser definidas de acordo com a necessidade, a acústica e a proposta do evento.',
    presenceLabel: 'Equilibrado',
    presenceTags: ['Versátil', 'Mais presença'],
    musicians: 3,
  },
  {
    id: 'banda',
    title: 'Banda',
    subtitle: 'Uma experiência musical completa',
    description:
      'Para eventos que pedem uma sonoridade mais encorpada, a banda oferece uma formação completa, dinâmica e com maior presença de palco.',
    durationLabel: 'Duração do evento',
    duration: '3 a 4 horas',
    includes: [
      'Montagem dos equipamentos',
      'Passagem de som',
      'Até 2h30 a 3h de show distribuídas em blocos',
      'Intervalos',
      'Desmontagem',
    ],
    formationLabel: 'Formação',
    formation: 'Vocal + Violão + Guitarra + Baixo + Teclado + Bateria',
    complement:
      'A formação também pode ser ajustada de acordo com o tamanho, a estrutura e a proposta do evento.',
    presenceLabel: 'Completo',
    presenceTags: ['Impactante', 'Experiência de palco'],
    musicians: 6,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Montagem',
    description: 'Preparação e organização dos equipamentos necessários para a apresentação.',
  },
  {
    number: '02',
    title: 'Passagem de som',
    description: 'Ajustes técnicos para garantir equilíbrio e qualidade sonora no ambiente.',
  },
  {
    number: '03',
    title: 'Apresentação',
    description: 'Execução musical de acordo com a formação, repertório e proposta definida.',
  },
  {
    number: '04',
    title: 'Intervalos',
    description: 'Pausas organizadas estrategicamente de acordo com a programação do evento.',
  },
  {
    number: '05',
    title: 'Desmontagem',
    description: 'Retirada organizada dos equipamentos após a apresentação.',
  },
];

export const FORMATION_CRITERIA = [
  'Perfil do evento',
  'Espaço disponível',
  'Acústica do local',
  'Quantidade de convidados',
  'Estrutura disponível',
  'Proposta musical',
];

export const PAGE_META: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Ninho Mathias | Música ao vivo',
    description:
      'Site oficial de Ninho Mathias. Música ao vivo para casamentos, cerimônias, eventos corporativos e celebrações.',
  },
  '/eventos': {
    title: 'Música para Eventos | Ninho Mathias',
    description:
      'Música ao vivo para casamentos, cerimônias, eventos corporativos, festas e celebrações. Escolha entre Solo, Trio ou Banda e encontre a formação ideal para seu evento.',
  },
  '/projetos': {
    title: 'Projetos Musicais | Ninho Mathias',
    description:
      'Conheça os projetos musicais de Ninho Mathias, incluindo Bloco Eu Te Devoro e Tri 80.',
  },
  '/calculadora': {
    title: 'Calculadora de Eventos | Ninho Mathias',
    description:
      'Descubra se Solo, Trio ou Banda é a formação ideal para o seu evento, de acordo com público, espaço e acústica.',
  },
  '/agende-show': {
    title: 'Agende seu Show | Ninho Mathias',
    description:
      'Solicite um orçamento para apresentação ao vivo com Ninho Mathias. Informe data, local e tipo de evento.',
  },
};
