
import React, { useState } from 'react';
import { CameraIcon, Trophy } from 'lucide-react';
import PhotoGallery from './gallery/PhotoGallery';
import ResultsTable from './gallery/ResultsTable';

const EventsGallery = () => {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-fishing-800">Nossa Comunidade</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os melhores momentos de nossos eventos e os resultados das competições.
          </p>
          
          <div className="flex justify-center mt-8 border-b border-gray-200">
            <button 
              className={`px-6 py-3 font-medium text-lg flex items-center ${
                activeTab === 'gallery' 
                  ? 'text-fishing-600 border-b-2 border-fishing-600' 
                  : 'text-gray-500 hover:text-fishing-500'
              }`}
              onClick={() => setActiveTab('gallery')}
            >
              <CameraIcon className="w-5 h-5 mr-2" />
              Galeria de Fotos
            </button>
            <button 
              className={`px-6 py-3 font-medium text-lg flex items-center ${
                activeTab === 'results' 
                  ? 'text-fishing-600 border-b-2 border-fishing-600' 
                  : 'text-gray-500 hover:text-fishing-500'
              }`}
              onClick={() => setActiveTab('results')}
            >
              <Trophy className="w-5 h-5 mr-2" />
              Resultados
            </button>
          </div>
        </div>
        
        {activeTab === 'gallery' ? (
          <PhotoGallery />
        ) : (
          <ResultsTable />
        )}
      </div>
    </section>
  );
};

export default EventsGallery;
