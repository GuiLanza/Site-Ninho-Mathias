import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';
import { PageMeta } from '../components/seo/PageMeta';
import { HashScroll } from '../components/seo/HashScroll';

export function Layout() {
  return (
    <div className="min-h-screen bg-black">
      <PageMeta />
      <HashScroll />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}