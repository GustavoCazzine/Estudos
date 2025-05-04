
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ImageIcon, Maximize } from 'lucide-react';
import { galleryImages } from './galleryData';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="group overflow-hidden rounded-lg shadow-md relative cursor-pointer"
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img 
              src={image.src} 
              alt={image.event} 
              className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <h3 className="text-white text-lg font-bold">{image.event}</h3>
              <p className="text-white/80 text-sm">{image.location} - {image.year}</p>
            </div>
            
            {hoveredImage === image.id && (
              <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
                <Maximize className="w-5 h-5 text-fishing-600" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8 items-center">
        <Button variant="outline" className="flex items-center text-fishing-600 border-fishing-300 hover:bg-fishing-50 hover:text-fishing-700">
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span className="text-sm">Navegue para ver mais fotos</span>
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </>
  );
};

export default PhotoGallery;
