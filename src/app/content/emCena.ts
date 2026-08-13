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
 * Cadastro da galeria Em Cena.
 * Para fotos oficiais: coloque os arquivos em `public/em-cena/`
 * e use o caminho `/em-cena/nome-do-arquivo.jpg` no campo `src`.
 */
export const EM_CENA_IMAGES: EmCenaImage[] = [
  {
    id: 'cena-01',
    src: 'https://images.unsplash.com/photo-1763889784402-5e8744af31b2?auto=format&fit=crop&w=1400&q=80',
    alt: 'Músico tocando guitarra no palco em luz baixa',
    title: 'No palco',
    category: 'Shows',
    featured: true,
  },
  {
    id: 'cena-02',
    src: 'https://images.unsplash.com/photo-1735839550903-98b86765a0d2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Celebração de rua com energia de carnaval',
    title: 'Bloco Eu Te Devoro',
    category: 'Projetos',
  },
  {
    id: 'cena-03',
    src: 'https://images.unsplash.com/photo-1767462372391-0b46012657f9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Banda de rock em apresentação ao vivo',
    title: 'Tri 80',
    category: 'Projetos',
  },
  {
    id: 'cena-04',
    src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    alt: 'Público acompanhando show ao vivo',
    category: 'Shows',
  },
  {
    id: 'cena-05',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cantor ao microfone em apresentação',
    category: 'Eventos',
  },
  {
    id: 'cena-06',
    src: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Detalhe de instrumentos em momento de ensaio',
    category: 'Ensaios',
  },
];

export const EM_CENA_PREVIEW_IDS = ['cena-01', 'cena-02', 'cena-03', 'cena-05'] as const;
