export type EmCenaCategory = 'Shows' | 'Eventos' | 'Bastidores' | 'Projetos' | 'Ensaios';

export interface EmCenaImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  date?: string;
  location?: string;
  category: EmCenaCategory;
  featured?: boolean;
  focal?: string;
}

/**
 * Galeria Em Cena — única fonte para `/em-cena` e o preview da Home.
 *
 * Como adicionar fotos reais:
 * 1. Coloque o arquivo em `public/em-cena/` (ex.: `public/em-cena/show-01.jpg`)
 * 2. Cadastre o registro abaixo com `src: '/em-cena/show-01.jpg'`
 * 3. Marque `featured: true` para aparecer no preview da Home
 *
 * Não use bancos de imagem. Só registros reais do Ninho Mathias.
 */
export const EM_CENA_IMAGES: EmCenaImage[] = [
  {
    id: 'vocal-palco',
    src: '/em-cena/vocal-palco.jpg',
    alt: 'Ninho Mathias cantando no palco, com camisa branca e microfone na mão',
    title: 'No palco',
    category: 'Shows',
    featured: true,
    focal: 'object-[center_18%]',
  },
  {
    id: 'bloco-eu-te-devoro-2',
    src: '/em-cena/bloco-eu-te-devoro-2.jpg',
    alt: 'Bloco Eu Te Devoro na rua, com público dançando e camisas lilás do bloco',
    title: 'Bloco Eu Te Devoro',
    category: 'Projetos',
    featured: true,
    focal: 'object-center',
  },
  {
    id: 'retrato-terno-vermelho',
    src: '/em-cena/retrato-terno-vermelho.jpg',
    alt: 'Ninho Mathias de terno vermelho, com óculos e violão, em retrato de estúdio',
    title: 'Retrato',
    category: 'Ensaios',
    featured: true,
    focal: 'object-[center_12%]',
  },
  {
    id: 'show-blacktie-02',
    src: '/em-cena/show-blacktie-02.jpg',
    alt: 'Ninho Mathias tocando violão e cantando à frente da banda em palco com tapetes e velas',
    title: 'Show com banda',
    category: 'Shows',
    featured: true,
    focal: 'object-[center_30%]',
  },
  {
    id: 'ensaio-estudio',
    src: '/em-cena/ensaio-estudio.jpg',
    alt: 'Ninho Mathias sentado, tocando violão e cantando ao microfone em ambiente de estúdio',
    title: 'Voz e violão',
    category: 'Ensaios',
    featured: true,
    focal: 'object-[center_20%]',
  },
  {
    id: 'banda-palco',
    src: '/em-cena/banda-palco.jpg',
    alt: 'Ninho Mathias e músicos abraçados no palco após a apresentação',
    title: 'Depois do show',
    category: 'Shows',
    featured: true,
    focal: 'object-center',
  },
  {
    id: 'hero',
    src: '/em-cena/hero.jpg',
    alt: 'Ninho Mathias ajoelhado com violão, de terno preto, em retrato de estúdio',
    title: 'Retrato com violão',
    category: 'Ensaios',
    focal: 'object-[center_15%]',
  },
  {
    id: 'retrato-jeans',
    src: '/em-cena/retrato-jeans.jpg',
    alt: 'Ninho Mathias em pé, de blazer jeans, segurando o violão em estúdio',
    title: 'Estúdio',
    category: 'Ensaios',
    focal: 'object-[center_12%]',
  },
  {
    id: 'show-blacktie-01',
    src: '/em-cena/show-blacktie-01.jpg',
    alt: 'Ninho Mathias ao microfone no palco, com guitarra, bateria e tela ao fundo',
    title: 'Presença de palco',
    category: 'Shows',
    focal: 'object-[center_40%]',
  },
  {
    id: 'solo-externo',
    src: '/em-cena/solo-externo.jpg',
    alt: 'Ninho Mathias em apresentação solo ao ar livre, tocando violão sob luzes quentes',
    title: 'Apresentação intimista',
    category: 'Eventos',
    focal: 'object-[center_20%]',
  },
  {
    id: 'bloco-eu-te-devoro-1',
    src: '/em-cena/bloco-eu-te-devoro-1.jpg',
    alt: 'Integrantes do Bloco Eu Te Devoro posando ao ar livre com instrumentos e microfones',
    title: 'Bloco Eu Te Devoro',
    category: 'Projetos',
    focal: 'object-center',
  },
  {
    id: 'bloco-eu-te-devoro-3',
    src: '/em-cena/bloco-eu-te-devoro-3.jpg',
    alt: 'Banda do Bloco Eu Te Devoro com o público em festa, todos de camisa lilás do bloco',
    title: 'Bloco Eu Te Devoro',
    category: 'Projetos',
    focal: 'object-[center_40%]',
  },
  {
    id: 'entrevista-band',
    src: '/em-cena/entrevista-band.jpg',
    alt: 'Ninho Mathias em entrevista ao Jornal Band Minas',
    title: 'Band Minas',
    caption: 'Entrevista ao Jornal Band Minas.',
    category: 'Eventos',
    focal: 'object-center',
  },
];

export function getEmCenaPreview(limit = 6): EmCenaImage[] {
  const featured = EM_CENA_IMAGES.filter((image) => image.featured);
  if (featured.length > 0) return featured.slice(0, limit);
  return EM_CENA_IMAGES.slice(0, limit);
}

export function getProjectImages(projectId: string): EmCenaImage[] {
  if (projectId !== 'bloco-eu-te-devoro') return [];

  const order = ['bloco-eu-te-devoro-2', 'bloco-eu-te-devoro-1', 'bloco-eu-te-devoro-3'];
  return order
    .map((id) => EM_CENA_IMAGES.find((image) => image.id === id))
    .filter((image): image is EmCenaImage => Boolean(image));
}
