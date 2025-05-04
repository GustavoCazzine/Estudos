
import { useState } from "react";
import { 
  Grid2X2, 
  Grid3X3, 
  GridIcon, 
  InstagramIcon, 
  ZoomIn, 
  ZoomOut, 
  X
} from "lucide-react";
import { useImages } from "@/context/ImageContext";
import ImageManager from "./image-manager";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  imageKeys: string[];
  editable?: boolean;
  title?: string;
  subtitle?: string;
}

export function ImageGallery({
  imageKeys,
  editable = false,
  title,
  subtitle,
}: ImageGalleryProps) {
  const [columns, setColumns] = useState(3);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { getImageUrl } = useImages();

  // Função para abrir imagem em tamanho completo
  const openImage = (imageKey: string) => {
    setSelectedImage(imageKey);
  };

  // Mudança de layout de colunas
  const changeColumns = (num: number) => {
    setColumns(num);
  };

  return (
    <div className="w-full space-y-6">
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-2xl font-playfair font-bold">{title}</h2>}
          {subtitle && <p className="text-salon-light-text mt-2">{subtitle}</p>}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Galeria de Imagens</h3>
        
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => changeColumns(2)}
            className={columns === 2 ? "bg-muted" : ""}
          >
            <Grid2X2 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => changeColumns(3)}
            className={columns === 3 ? "bg-muted" : ""}
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => changeColumns(4)}
            className={columns === 4 ? "bg-muted" : ""}
          >
            <GridIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div 
        className="grid gap-4" 
        style={{ 
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
        }}
      >
        {imageKeys.map((key) => (
          <div 
            key={key} 
            className="relative overflow-hidden rounded-lg shadow-sm group"
          >
            <ImageManager
              imageKey={key}
              alt={`Imagem da galeria - ${key}`}
              className="aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              editable={editable}
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
              <div className="flex justify-between items-center">
                <span className="text-white text-sm font-medium">{key}</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => openImage(key)}
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-1.5"
                  >
                    <ZoomIn className="h-4 w-4 text-white" />
                  </button>
                  <a 
                    href={getImageUrl(key)} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors rounded-full p-1.5"
                  >
                    <InstagramIcon className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visualização de imagem em tamanho completo */}
      <Dialog 
        open={!!selectedImage} 
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 overflow-hidden bg-transparent border-none shadow-none">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-1.5 hover:bg-black/80 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            
            {selectedImage && (
              <div className="bg-black/90 rounded-lg overflow-hidden max-h-[80vh] flex items-center justify-center">
                <img
                  src={getImageUrl(selectedImage)}
                  alt={`Visualização ampliada - ${selectedImage}`}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ImageGallery;
