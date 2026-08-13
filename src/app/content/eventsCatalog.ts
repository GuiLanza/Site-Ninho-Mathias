import type { EventTypeId, Format } from '../calculator/types';

export interface CatalogEvent {
  id: string;
  plannerId: Exclude<EventTypeId, 'OUTRO'>;
  title: string;
  description: string;
  featured?: boolean;
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
  suitedFor?: string[];
  criteria?: string[];
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
        plannerId: 'CASAMENTO',
        title: 'Casamentos',
        description:
          'Uma experiência musical pensada para acompanhar um dos momentos mais importantes da celebração, da recepção à festa, com repertório e formação alinhados ao estilo dos noivos.',
      },
      {
        id: 'cerimonias',
        plannerId: 'CERIMONIA',
        title: 'Cerimônias',
        description:
          'Música pensada para acompanhar momentos simbólicos e especiais, como entradas, homenagens, celebrações e outros momentos importantes.',
        featured: true,
        ceremonyNote:
          'Momentos musicais definidos de acordo com a programação da cerimônia — não se trata de um show tradicional.',
      },
      {
        id: 'aniversarios',
        plannerId: 'ANIVERSARIO',
        title: 'Aniversários',
        description:
          'Música ao vivo para transformar a comemoração em uma experiência ainda mais especial, com repertório adaptado ao perfil do aniversariante e dos convidados.',
      },
      {
        id: 'formaturas',
        plannerId: 'FORMATURA',
        title: 'Formaturas',
        description:
          'Uma trilha musical para celebrar conquistas e marcar o encerramento de um ciclo, criando uma atmosfera envolvente para formandos, familiares e convidados.',
      },
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo & Experiências',
    items: [
      {
        id: 'corporativos',
        plannerId: 'CORPORATIVO',
        title: 'Eventos Corporativos',
        description:
          'Apresentações pensadas para confraternizações, encontros empresariais, premiações e eventos institucionais, respeitando o perfil da empresa e da ocasião.',
      },
      {
        id: 'lancamentos',
        plannerId: 'LANCAMENTO',
        title: 'Lançamentos de Produtos e Inaugurações',
        description:
          'Música ao vivo para complementar a experiência de marca e criar atmosfera em lançamentos, inaugurações e ativações.',
      },
      {
        id: 'coqueteis',
        plannerId: 'COQUETEL',
        title: 'Coquetéis e Recepções',
        description:
          'Uma proposta musical elegante e versátil para momentos de integração, recepção de convidados e eventos sociais ou profissionais.',
      },
      {
        id: 'feiras',
        plannerId: 'FEIRA',
        title: 'Feiras e Exposições',
        description:
          'Apresentações que ajudam a criar uma atmosfera agradável e diferenciada em estandes, feiras, exposições e eventos de relacionamento.',
      },
      {
        id: 'culturais',
        plannerId: 'CULTURAL',
        title: 'Eventos Culturais',
        description:
          'Projetos musicais adaptáveis a programações culturais, eventos públicos e iniciativas artísticas, respeitando a proposta de cada ocasião.',
      },
    ],
  },
  {
    id: 'hospitalidade',
    title: 'Entretenimento & Hospitalidade',
    items: [
      {
        id: 'festivais',
        plannerId: 'FESTIVAL',
        title: 'Festivais',
        description:
          'Shows preparados para diferentes tipos de palco e público, com repertório, formação e dinâmica definidos de acordo com a proposta do festival.',
      },
      {
        id: 'bares',
        plannerId: 'BAR_RESTAURANTE',
        title: 'Bares e Restaurantes',
        description:
          'Música ao vivo pensada para complementar a experiência do ambiente, respeitando a identidade do estabelecimento e o perfil do público.',
      },
      {
        id: 'hoteis',
        plannerId: 'HOTEL',
        title: 'Hotéis e Resorts',
        description:
          'Apresentações para áreas de convivência, restaurantes, eventos internos, celebrações e experiências especiais para hóspedes.',
      },
      {
        id: 'clubes',
        plannerId: 'CLUBE',
        title: 'Eventos em Clubes',
        description:
          'Música ao vivo para festas, confraternizações, eventos sociais e programações especiais.',
      },
      {
        id: 'condominios',
        plannerId: 'CONDOMINIO',
        title: 'Eventos em Condomínios',
        description:
          'Apresentações para confraternizações, datas comemorativas e eventos de integração entre moradores, com formato adequado ao espaço.',
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
      'Uma formação intimista, elegante e versátil, ideal para eventos em que a música deve estar presente de forma próxima e envolvente.',
    durationLabel: 'Duração da experiência',
    duration: 'até 4 horas',
    includes: [
      'preparação e montagem',
      'passagem de som',
      'música ao vivo distribuída ao longo do evento',
      'intervalos planejados',
      'desmontagem',
    ],
    formationLabel: 'Formação',
    formation: 'Voz + Violão',
    suitedFor: [
      'cerimônias',
      'recepções',
      'coquetéis',
      'restaurantes',
      'aniversários',
      'eventos de pequeno e médio porte',
    ],
    presenceLabel: 'Essencial',
    presenceTags: ['Intimista', 'Elegante'],
    musicians: 1,
  },
  {
    id: 'trio',
    title: 'Trio',
    subtitle: 'Mais possibilidades sonoras em uma formação compacta',
    description:
      'O trio amplia a presença musical sem exigir toda a estrutura de uma banda completa. A combinação dos instrumentos pode ser personalizada de acordo com o evento.',
    durationLabel: 'Duração da experiência',
    duration: 'até 4 horas',
    includes: [
      'montagem dos equipamentos',
      'passagem de som',
      'música ao vivo distribuída em blocos',
      'intervalos planejados',
      'desmontagem',
    ],
    formationLabel: 'Possibilidades de formação',
    formation: 'Definida de acordo com a proposta do evento e a acústica do local.',
    possibilities: [
      'Voz + Teclado + Bateria',
      'Voz + Violão + Bateria',
      'Voz + Violão + Teclado',
      'Outras combinações conforme a proposta',
    ],
    criteria: ['estilo desejado', 'repertório', 'espaço', 'público', 'acústica', 'estrutura disponível'],
    presenceLabel: 'Equilibrado',
    presenceTags: ['Versátil', 'Mais presença'],
    musicians: 3,
  },
  {
    id: 'banda',
    title: 'Banda',
    subtitle: 'Uma experiência musical completa',
    description:
      'Para eventos que pedem mais energia, presença de palco e uma sonoridade mais encorpada.',
    durationLabel: 'Duração da experiência',
    duration: 'até 4 horas',
    includes: [
      'montagem dos equipamentos',
      'passagem de som',
      'show distribuído em blocos',
      'intervalos',
      'desmontagem',
    ],
    formationLabel: 'Formação base',
    formation: 'Vocal + Violão + Guitarra + Baixo + Teclado + Bateria',
    suitedFor: [
      'festas',
      'casamentos',
      'eventos corporativos',
      'formaturas',
      'festivais',
      'eventos em que a música tenha maior protagonismo',
    ],
    criteria: [
      'tamanho do evento',
      'espaço',
      'estrutura disponível',
      'público',
      'proposta musical',
    ],
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
  '/experiencias-musicais': {
    title: 'Experiências Musicais | Ninho Mathias',
    description:
      'Eventos, formações musicais, aulas de canto e projetos com Ninho Mathias. Encontre a experiência certa para cada ocasião.',
  },
  '/experiencias-musicais/eventos': {
    title: 'Eventos | Experiências Musicais | Ninho Mathias',
    description:
      'Música ao vivo para casamentos, cerimônias, eventos corporativos, festas e celebrações, com formação pensada para cada ocasião.',
  },
  '/experiencias-musicais/formacoes': {
    title: 'Formações | Experiências Musicais | Ninho Mathias',
    description:
      'Solo, Trio ou Banda: conheça as formações musicais de Ninho Mathias e encontre a presença ideal para o seu evento.',
  },
  '/experiencias-musicais/aulas-de-canto': {
    title: 'Aulas de Canto | Ninho Mathias',
    description:
      'Aulas de canto personalizadas com Ninho Mathias: técnica, interpretação, repertório e identidade vocal, em sessões de 50 minutos a 1 hora.',
  },
  '/experiencias-musicais/projetos': {
    title: 'Projetos Musicais | Ninho Mathias',
    description:
      'Conheça os projetos musicais de Ninho Mathias, incluindo Bloco Eu Te Devoro e Tri 80.',
  },
  '/em-cena': {
    title: 'Em Cena | Ninho Mathias',
    description:
      'Palco, música, encontros e momentos da trajetória artística de Ninho Mathias.',
  },
  '/projetos': {
    title: 'Projetos Musicais | Ninho Mathias',
    description:
      'Conheça os projetos musicais de Ninho Mathias, incluindo Bloco Eu Te Devoro e Tri 80.',
  },
  '/calculadora': {
    title: 'Planeje sua Experiência | Ninho Mathias',
    description:
      'Vamos montar juntos a experiência musical ideal para o seu evento, entre Solo, Trio e Banda.',
  },
  '/agende-show': {
    title: 'Agende seu Show | Ninho Mathias',
    description:
      'Solicite um orçamento para apresentação ao vivo ou aula de canto com Ninho Mathias.',
  },
};

export const BOOKABLE_EVENTS = EVENT_GROUPS.flatMap((group) => group.items);

export const LESSON_SCHEDULE_TYPE = 'Aula de Canto';

export const SCHEDULE_EVENT_TYPES: string[] = [
  LESSON_SCHEDULE_TYPE,
  ...BOOKABLE_EVENTS.map((event) => event.title),
];

export function findEventByPlannerId(id: EventTypeId) {
  return BOOKABLE_EVENTS.find((event) => event.plannerId === id);
}

export function findEventByTitle(title: string) {
  return BOOKABLE_EVENTS.find((event) => event.title === title);
}
