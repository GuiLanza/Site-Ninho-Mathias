import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronDown, Menu, X } from 'lucide-react';

const EXPERIENCIAS_LINKS = [
  { path: '/experiencias-musicais/eventos', label: 'Eventos' },
  { path: '/experiencias-musicais/formacoes', label: 'Formações' },
  { path: '/experiencias-musicais/aulas-de-canto', label: 'Aulas de Canto' },
  { path: '/experiencias-musicais/projetos', label: 'Projetos' },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [experienciasOpen, setExperienciasOpen] = useState(false);
  const location = useLocation();
  const experienciasActive = location.pathname.startsWith('/experiencias-musicais');

  useEffect(() => {
    setIsMenuOpen(false);
    setExperienciasOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold tracking-wider hover:text-amber-400 transition-colors">
            NINHO MATHIAS
          </Link>

          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            <Link
              to="/#agenda"
              className={`text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap ${
                location.pathname === '/' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-white/80 hover:text-white'
              }`}
            >
              Agenda
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setExperienciasOpen(true)}
              onMouseLeave={() => setExperienciasOpen(false)}
            >
              <button
                type="button"
                className={`inline-flex items-center gap-1 text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap ${
                  experienciasActive ? 'text-amber-400' : 'text-white/80 hover:text-white'
                }`}
                aria-expanded={experienciasOpen}
                aria-haspopup="true"
                onClick={() => setExperienciasOpen((open) => !open)}
              >
                Experiências Musicais
                <ChevronDown className="w-4 h-4" aria-hidden="true" />
              </button>
              {experienciasOpen ? (
                <div className="absolute top-full left-0 pt-3">
                  <div className="min-w-[220px] rounded-2xl border border-white/10 bg-zinc-950 p-2">
                    {EXPERIENCIAS_LINKS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`block rounded-xl px-4 py-2 text-sm ${
                          location.pathname === item.path
                            ? 'text-amber-400'
                            : 'text-white/80 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <Link
              to="/em-cena"
              className={`text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap ${
                location.pathname === '/em-cena'
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Em Cena
            </Link>
            <Link
              to="/calculadora"
              className={`text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap ${
                location.pathname === '/calculadora'
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Planeje sua Experiência
            </Link>
            <Link
              to="/agende-show"
              className={`text-xs xl:text-sm uppercase tracking-wide whitespace-nowrap ${
                location.pathname.startsWith('/agende-show')
                  ? 'text-amber-400 border-b-2 border-amber-400 pb-1'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Agende seu Show
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-amber-400 transition-colors"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="menu-principal"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen ? (
          <div id="menu-principal" className="lg:hidden pb-4">
            <Link to="/#agenda" className="block py-2 text-sm uppercase tracking-wide text-white/80">
              Agenda
            </Link>
            <p className="pt-3 pb-1 text-xs uppercase tracking-widest text-amber-400">
              Experiências Musicais
            </p>
            {EXPERIENCIAS_LINKS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-2 pl-3 text-sm ${
                  location.pathname === item.path ? 'text-amber-400' : 'text-white/80'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/em-cena"
              className={`block py-2 text-sm uppercase tracking-wide ${
                location.pathname === '/em-cena' ? 'text-amber-400' : 'text-white/80'
              }`}
            >
              Em Cena
            </Link>
            <Link to="/calculadora" className="block py-2 text-sm uppercase tracking-wide text-white/80">
              Planeje sua Experiência
            </Link>
            <Link to="/agende-show" className="block py-2 text-sm uppercase tracking-wide text-white/80">
              Agende seu Show
            </Link>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
