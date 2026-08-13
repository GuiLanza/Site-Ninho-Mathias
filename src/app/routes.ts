import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ScheduleShow } from './pages/ScheduleShow';
import { EventCalculator } from './pages/EventCalculator';
import { Events } from './pages/Events';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'eventos', Component: Events },
      { path: 'projetos', Component: Projects },
      { path: 'calculadora', Component: EventCalculator },
      { path: 'agende-show', Component: ScheduleShow },
    ],
  },
]);
