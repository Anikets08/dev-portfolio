import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { GalleryItem } from '../types';
import { X, MapPin } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
            <div className="relative w-full bg-gray-900 overflow-hidden">
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-10" />
              
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full h-auto block object-cover"
                  muted
                  loop
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => e.currentTarget.pause()}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.location}
                  loading="lazy"
                  className="w-full h-auto block object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}

              {/* Hover Metadata Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-gradient-to-t from-black/60 to-transparent">
                 <span className="text-xs font-mono uppercase tracking-widest text-white/90 drop-shadow-md">
                   {item.location}
                 </span>
              </div>
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
          >
            <X size={24} />
          </button>

          {/* Content Container */}
          <div className="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl">
            <div className="relative flex-1 overflow-hidden bg-gray-100 dark:bg-gray-900">
              {selectedItem.type === 'video' ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-full object-contain max-h-[80vh]"
                />
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.location}
                  className="w-full h-full object-contain max-h-[80vh]"
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