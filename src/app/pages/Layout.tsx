import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { PageMeta } from '../components/seo/PageMeta';

export function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <PageMeta />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}