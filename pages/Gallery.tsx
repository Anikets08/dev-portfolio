import React, { useState, useRef, useEffect } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { X, MapPin } from 'lucide-react';

// Component for optimized image loading
const GalleryImage: React.FC<{
  item: GalleryItem;
  index: number;
}> = ({ item, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(index < 3); // Preload first 3 images
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If already preloaded, skip observer
    if (isInView) return;

    const currentRef = imgRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [isInView]);

  // Preload first few images
  useEffect(() => {
    if (index < 3 && item.type === 'image') {
      const img = new Image();
      img.src = item.src;
    }
  }, [item.src, item.type, index]);

  if (item.type === 'video') {
    return (
      <div className="relative w-full bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
        <video
          src={item.src}
          className="w-full h-auto block object-cover"
          muted
          loop
          playsInline
          onMouseOver={(e) => e.currentTarget.play()}
          onMouseOut={(e) => e.currentTarget.pause()}
        />
      </div>
    );
  }

  return (
    <div ref={imgRef} className="relative w-full bg-gray-900 overflow-hidden">
      {/* Loading skeleton with blur effect */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 animate-pulse">
          <div className="absolute inset-0 backdrop-blur-xl bg-gray-200/50 dark:bg-gray-800/50" />
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800">
          <div className="text-center p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">Failed to load image</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={item.src}
          alt={item.location}
          loading={index < 3 ? 'eager' : 'lazy'}
          fetchPriority={index < 3 ? 'high' : 'auto'}
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            setHasError(true);
            setIsLoaded(false);
          }}
          className={`w-full h-auto block object-cover transition-all duration-700 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [lightboxLoaded, setLightboxLoaded] = useState(false);

  // Reset lightbox loaded state when selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      setLightboxLoaded(false);
    }
  }, [selectedItem]);

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-24 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl text-gray-900 dark:text-white mb-8 tracking-tight">Gallery</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
          Visual fragments from my travels. A collection of moments, light, and geometry.
        </p>
      </div>

      {/* Masonry Grid - Seamless */}
      <div className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-0 space-y-0">
        {GALLERY_ITEMS.map((item, idx) => (
          <div
            key={item.id}
            className="break-inside-avoid animate-fade-in group cursor-pointer relative"
            style={{ animationDelay: `${idx * 100}ms` }}
            onClick={() => setSelectedItem(item)}
          >
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10 pointer-events-none" />
            
            <GalleryImage item={item} index={idx} />

            {/* Hover Metadata Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
               <span className="text-xs font-mono uppercase tracking-widest text-white/90 drop-shadow-md">
                 {item.location}
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* Glassmorphic Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-2xl transition-all"
            onClick={() => setSelectedItem(null)}
          />

          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 z-50 p-3 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white bg-white/50 dark:bg-black/50 rounded-full backdrop-blur-md transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            <div className="relative flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900">
              {!lightboxLoaded && selectedItem.type === 'image' && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                  <div className="animate-pulse text-gray-400">Loading...</div>
                </div>
              )}
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain max-h-[80vh]"
                  onLoadedData={() => setLightboxLoaded(true)}
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.location}
                  className={`w-full h-full object-contain max-h-[80vh] transition-opacity duration-300 ${
                    lightboxLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLightboxLoaded(true)}
                  loading="eager"
                />
              )}
            </div>

            {/* Details Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white backdrop-blur-[2px]">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2 text-teal-300">
                  <MapPin size={16} />
                  <span className="text-sm font-mono uppercase tracking-widest">{selectedItem.location}</span>
                </div>
                <p className="text-lg md:text-xl font-serif italic opacity-90">
                  {selectedItem.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};