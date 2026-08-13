import { createBrowserRouter } from 'react-router';
import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ScheduleShow } from './pages/ScheduleShow';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'projetos', Component: Projects },
      { path: 'agende-show', Component: ScheduleShow },
    ],
  },
]);
