import { useEffect } from 'react';
import { X } from 'lucide-react';
import type { EmCenaImage } from '../../content/emCena';

interface GalleryLightboxProps {
  image: EmCenaImage;
  onClose: () => void;
}

export function GalleryLightbox({ image, onClose }: GalleryLightboxProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.title ?? image.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full p-2"
        aria-label="Fechar"
      >
        <X className="w-7 h-7" />
      </button>
      <figure
        className="max-w-5xl w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        {image.title || image.caption ? (
          <figcaption className="mt-4 text-center text-white/80">
            {image.title ? <p className="font-semibold text-white">{image.title}</p> : null}
            {image.caption ? <p className="text-sm mt-1">{image.caption}</p> : null}
          </figcaption>
        ) : null}
      </figure>
    </div>
  );
}
