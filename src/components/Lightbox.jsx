import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ images, currentIndex, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNavigate]);

  if (currentIndex === null) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[101] text-white hover:text-[#5f9dff] transition-colors p-2 rounded-full hover:bg-white/10"
        aria-label="Close lightbox"
      >
        <X className="w-8 h-8" strokeWidth={2} />
      </button>

      {/* Previous Button */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate('prev')}
          className="absolute left-4 z-[101] text-white hover:text-[#5f9dff] transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-10 h-10" strokeWidth={2} />
        </button>
      )}

      {/* Image */}
      <div className="relative max-w-7xl max-h-[90vh] mx-auto px-16">
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] object-contain"
        />
        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={() => onNavigate('next')}
          className="absolute right-4 z-[101] text-white hover:text-[#5f9dff] transition-colors p-2 rounded-full hover:bg-white/10"
          aria-label="Next image"
        >
          <ChevronRight className="w-10 h-10" strokeWidth={2} />
        </button>
      )}
    </div>
  );
};

export default Lightbox;
