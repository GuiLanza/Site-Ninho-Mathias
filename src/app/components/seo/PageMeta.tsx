import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { PAGE_META } from '../../content/eventsCatalog';

function upsertMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', name);
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', content);
}

export function PageMeta() {
  const { pathname } = useLocation();
  const meta = PAGE_META[pathname] ?? PAGE_META['/'];

  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = meta.title;
    upsertMeta('description', meta.description);
  }, [meta.description, meta.title]);

  return null;
}
