import { NavLink } from 'react-router';
import { EXPERIENCIAS_NAV } from '../../content/experiencias';

export function ExperienciasSubnav() {
  return (
    <nav aria-label="Experiências Musicais" className="border-b border-white/10 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <ul className="flex gap-1 sm:gap-2 py-3 min-w-max">
          {EXPERIENCIAS_NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-2 text-xs sm:text-sm uppercase tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                    isActive
                      ? 'bg-amber-400 text-black font-bold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
