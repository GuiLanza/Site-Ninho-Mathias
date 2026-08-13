import { Outlet } from 'react-router';
import { ExperienciasSubnav } from '../../components/experiencias/ExperienciasSubnav';

export function ExperienciasLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <ExperienciasSubnav />
      <Outlet />
    </div>
  );
}
