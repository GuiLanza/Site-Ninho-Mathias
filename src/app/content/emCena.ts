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
}

/**
 * Galeria Em Cena — única fonte para `/em-cena` e o preview da Home.
 *
 * Como adicionar fotos reais:
 * 1. Coloque o arquivo em `public/em-cena/` (ex.: `public/em-cena/show-01.jpg`)
 * 2. Cadastre o registro abaixo com `src: '/em-cena/show-01.jpg'`
 * 3. Marque `featured: true` para aparecer no preview da Home;
 *    se nenhum for destaque, a Home usa os primeiros registros.
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
  },
  {
    id: 'ensaio-estudio',
    src: '/em-cena/ensaio-estudio.jpg',
    alt: 'Ninho Mathias sentado, tocando violão e cantando ao microfone em ambiente de estúdio',
    title: 'Voz e violão',
    category: 'Ensaios',
    featured: true,
  },
  {
    id: 'show-blacktie-02',
    src: '/em-cena/show-blacktie-02.jpg',
    alt: 'Ninho Mathias tocando violão e cantando à frente da banda em palco com tapetes e velas',
    title: 'Show com banda',
    category: 'Shows',
    featured: true,
  },
  {
    id: 'banda-palco',
    src: '/em-cena/banda-palco.jpg',
    alt: 'Ninho Mathias e músicos abraçados no palco após a apresentação',
    title: 'Depois do show',
    category: 'Shows',
    featured: true,
  },
  {
    id: 'show-blacktie-01',
    src: '/em-cena/show-blacktie-01.jpg',
    alt: 'Ninho Mathias ao microfone no palco, com guitarra, bateria e tela ao fundo',
    title: 'Presença de palco',
    category: 'Shows',
  },
  {
    id: 'solo-externo',
    src: '/em-cena/solo-externo.jpg',
    alt: 'Ninho Mathias em apresentação solo ao ar livre, tocando violão sob luzes quentes',
    title: 'Apresentação intimista',
    category: 'Eventos',
  },
  {
    id: 'entrevista-band',
    src: '/em-cena/entrevista-band.jpg',
    alt: 'Ninho Mathias em entrevista ao Jornal Band Minas',
    title: 'Band Minas',
    caption: 'Entrevista ao Jornal Band Minas.',
    category: 'Eventos',
  },
];

export function getEmCenaPreview(limit = 4): EmCenaImage[] {
  const featured = EM_CENA_IMAGES.filter((image) => image.featured);
  if (featured.length > 0) return featured.slice(0, limit);
  return EM_CENA_IMAGES.slice(0, limit);
}
