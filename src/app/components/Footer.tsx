import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <h3 className="text-white text-xl font-semibold">Siga nas Redes</h3>
          
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/ninho.mathias/?locale=pt_BR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-amber-400 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
            
            <a
              href="https://www.instagram.com/ninhomathiasoficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-amber-400 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://www.youtube.com/channel/UCk3AvxgCSXWEDnCDyM-h5cg/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-amber-400 transition-all duration-300"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <p className="text-white/50 text-sm mt-6">
            © {new Date().getFullYear()} Ninho Mathias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}