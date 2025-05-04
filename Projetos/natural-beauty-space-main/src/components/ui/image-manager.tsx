
import { useState } from "react";
import { useImages } from "@/context/ImageContext";
import { Upload, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ImageManagerProps {
  imageKey: string;
  alt: string;
  className?: string;
  fallback?: string;
  width?: number | string;
  height?: number | string;
  editable?: boolean;
  aspectRatio?: string;
}

export function ImageManager({
  imageKey,
  alt,
  className = "",
  fallback = "https://placehold.co/600x400/f5f5f5/cccccc?text=Imagem+não+encontrada",
  width,
  height,
  editable = false,
  aspectRatio = "auto"
}: ImageManagerProps) {
  const { getImageUrl, setImageUrl } = useImages();
  const [showDialog, setShowDialog] = useState(false);
  const [tempUrl, setTempUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempUrl(e.target.value);
  };

  const handleSave = () => {
    if (!tempUrl) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma URL válida",
        variant: "destructive",
      });
      return;
    }

    // Verificar se a URL é válida carregando a imagem temporariamente
    setIsLoading(true);
    const img = new Image();
    img.onload = () => {
      setImageUrl(imageKey, tempUrl);
      setShowDialog(false);
      setIsLoading(false);
      toast({
        title: "Sucesso",
        description: "Imagem atualizada com sucesso",
      });
    };
    img.onerror = () => {
      setIsLoading(false);
      toast({
        title: "Erro",
        description: "A URL fornecida não é uma imagem válida",
        variant: "destructive",
      });
    };
    img.src = tempUrl;
  };

  const currentUrl = getImageUrl(imageKey) || fallback;

  return (
    <>
      <div 
        className={`relative ${editable ? "group cursor-pointer" : ""} ${className}`}
        style={{ aspectRatio, width, height }}
      >
        <img
          src={currentUrl}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          width={typeof width === 'number' ? width : undefined}
          height={typeof height === 'number' ? height : undefined}
          loading="lazy"
          onClick={() => editable && setShowDialog(true)}
        />
        
        {editable && (
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white"
              onClick={() => setShowDialog(true)}
            >
              <Upload className="h-4 w-4 mr-2" /> Trocar imagem
            </Button>
          </div>
        )}
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Atualizar imagem</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded overflow-hidden">
                <img src={currentUrl} alt={alt} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium">Imagem atual</p>
                <p className="text-xs text-gray-500 truncate">{imageKey}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="imageUrl" className="text-sm font-medium">
                URL da nova imagem
              </label>
              <input
                id="imageUrl"
                type="text"
                value={tempUrl}
                onChange={handleUrlChange}
                placeholder="https://exemplo.com/imagem.jpg"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
              <p className="text-xs text-gray-500">
                Cole a URL de uma imagem existente na web ou serviço de hospedagem.
              </p>
            </div>
          </div>
          
          <DialogFooter className="flex space-x-2 justify-end">
            <Button 
              variant="outline"
              onClick={() => setShowDialog(false)}
              className="flex items-center"
            >
              <X className="h-4 w-4 mr-2" /> Cancelar
            </Button>
            <Button 
              onClick={handleSave}
              variant="default"
              className="flex items-center bg-salon-terracota hover:bg-salon-terracota/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Verificando...</span>
              ) : (
                <>
                  <Check className="h-4 w-4 mr-2" /> Salvar
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ImageManager;
