
import { useState, useEffect } from "react";
import { useImages, ImageMap } from "@/context/ImageContext";
import ImageManager from "@/components/ui/image-manager";
import ImageGallery from "@/components/ui/image-gallery";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Save, RefreshCw, Plus } from "lucide-react";

const ImageManagement = () => {
  const { images, setImageUrl } = useImages();
  const [activeTab, setActiveTab] = useState("gallery");
  const [imageKeys, setImageKeys] = useState<string[]>([]);
  const [newImageKey, setNewImageKey] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Extrair e ordenar chaves de imagem
    const keys = Object.keys(images).sort();
    setImageKeys(keys);
  }, [images]);

  // Agrupar imagens por categoria (baseado no prefixo da chave)
  const groupedImages = imageKeys.reduce((acc, key) => {
    const category = key.split('-')[0] || 'other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(key);
    return acc;
  }, {} as Record<string, string[]>);

  const resetImages = () => {
    if (window.confirm("Tem certeza que deseja resetar todas as imagens para os valores padrão?")) {
      localStorage.removeItem('salon_images');
      window.location.reload();
    }
  };

  const handleAddNewImage = () => {
    if (!newImageKey || !newImageUrl) {
      toast({
        title: "Erro",
        description: "Por favor, preencha a chave e URL da imagem",
        variant: "destructive",
      });
      return;
    }

    // Verificar se a chave já existe
    if (images[newImageKey]) {
      toast({
        title: "Erro",
        description: "Esta chave de imagem já existe",
        variant: "destructive",
      });
      return;
    }

    // Verificar se a URL é válida
    const img = new Image();
    img.onload = () => {
      setImageUrl(newImageKey, newImageUrl);
      setNewImageKey("");
      setNewImageUrl("");
      toast({
        title: "Sucesso",
        description: "Nova imagem adicionada com sucesso",
      });
    };
    img.onerror = () => {
      toast({
        title: "Erro",
        description: "A URL fornecida não é uma imagem válida",
        variant: "destructive",
      });
    };
    img.src = newImageUrl;
  };

  const exportImages = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(images, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "natural_beauty_images.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <div className="pt-28 pb-16">
      <div className="container-salon max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Gerenciamento de Imagens</h1>
        <p className="text-salon-light-text mb-8">
          Esta página permite visualizar e gerenciar todas as imagens utilizadas no site. 
          Clique em uma imagem para substituí-la por outra URL.
        </p>
        
        <div className="flex justify-between items-center mb-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList>
              <TabsTrigger value="gallery">Galeria</TabsTrigger>
              <TabsTrigger value="list">Lista</TabsTrigger>
              <TabsTrigger value="add">Adicionar</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={exportImages}>
              <Save className="h-4 w-4 mr-2" />
              Exportar
            </Button>
            <Button variant="outline" size="sm" onClick={resetImages}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Resetar
            </Button>
          </div>
        </div>
        
        <TabsContent value="gallery" className="space-y-8">
          {Object.entries(groupedImages).map(([category, keys]) => (
            <div key={category} className="mb-12">
              <h2 className="text-xl font-medium mb-4 capitalize">{category}</h2>
              <ImageGallery 
                imageKeys={keys} 
                editable={true} 
              />
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="list">
          <div className="grid grid-cols-1 gap-4">
            {imageKeys.map((key) => (
              <Card key={key}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <ImageManager 
                        imageKey={key}
                        alt={key}
                        editable={true}
                        className="rounded-md overflow-hidden"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{key}</p>
                      <p className="text-sm text-salon-light-text break-all mt-1">{images[key]}</p>
                    </div>
                    <div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Adicionar Nova Imagem</CardTitle>
              <CardDescription>
                Adicione uma nova imagem ao catálogo do site. Use um nome de chave descritivo 
                seguindo o padrão categoria-nome (exemplo: service-cilios).
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label htmlFor="imageKey" className="text-sm font-medium block mb-1">
                    Chave da Imagem
                  </label>
                  <input
                    id="imageKey"
                    type="text"
                    value={newImageKey}
                    onChange={(e) => setNewImageKey(e.target.value)}
                    placeholder="Exemplo: service-cilios"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div>
                  <label htmlFor="imageUrl" className="text-sm font-medium block mb-1">
                    URL da Imagem
                  </label>
                  <input
                    id="imageUrl"
                    type="text"
                    value={newImageUrl}
                    onChange={(e) => setNewImageUrl(e.target.value)}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  />
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={handleAddNewImage}
                    className="bg-salon-terracota hover:bg-salon-terracota/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Imagem
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Instruções para adicionar imagens</h3>
            <div className="prose prose-slate">
              <ul>
                <li>Use nomes de chave descritivos seguindo o padrão <code>categoria-nome</code></li>
                <li>Categorias recomendadas: service, team, portfolio, blog, ui</li>
                <li>A URL da imagem deve ser direta (terminar com .jpg, .png, .webp, etc.)</li>
                <li>Para melhor desempenho, use imagens já otimizadas</li>
                <li>Certifique-se de que tem direito de uso da imagem</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </div>
    </div>
  );
};

export default ImageManagement;
