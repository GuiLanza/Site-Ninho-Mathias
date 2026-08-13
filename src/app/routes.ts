import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ScheduleShow } from './pages/ScheduleShow';
import { EventCalculator } from './pages/EventCalculator';
import { EmCena } from './pages/EmCena';
import { ExperienciasLayout } from './pages/experiencias/ExperienciasLayout';
import { ExperienciasHub } from './pages/experiencias/ExperienciasHub';
import { ExperienciasEventos } from './pages/experiencias/ExperienciasEventos';
import { ExperienciasFormacoes } from './pages/experiencias/ExperienciasFormacoes';
import { ExperienciasAulas } from './pages/experiencias/ExperienciasAulas';
import { RedirectEventos } from './pages/RedirectEventos';
import { RedirectProjetos } from './pages/RedirectProjetos';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: 'experiencias-musicais',
        Component: ExperienciasLayout,
        children: [
          { index: true, Component: ExperienciasHub },
          { path: 'eventos', Component: ExperienciasEventos },
          { path: 'formacoes', Component: ExperienciasFormacoes },
          { path: 'aulas-de-canto', Component: ExperienciasAulas },
          { path: 'projetos', Component: Projects },
        ],
      },
      { path: 'eventos', Component: RedirectEventos },
      { path: 'projetos', Component: RedirectProjetos },
      { path: 'em-cena', Component: EmCena },
      { path: 'calculadora', Component: EventCalculator },
      { path: 'agende-show', Component: ScheduleShow },
    ],
  },
]);
