
import React, { useState } from 'react';
import { Fish, Upload, X, MapPin, Scale, Ruler, Camera } from 'lucide-react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useAuth } from '../../hooks/useAuth';
import { toast } from 'sonner';
import { calculateFishScore } from './scoring';

const CreateFishingPostButton = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fishName: '',
    weight: '',
    length: '',
    location: '',
    description: '',
    photos: [] as File[],
  });
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [estimatedScore, setEstimatedScore] = useState<number | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Calcular a pontuação quando peso ou comprimento forem alterados
    if (name === 'weight' || name === 'length') {
      const weight = name === 'weight' ? parseFloat(value) : parseFloat(formData.weight);
      const length = name === 'length' ? parseFloat(value) : parseFloat(formData.length);
      
      if (!isNaN(weight) && !isNaN(length) && weight > 0 && length > 0) {
        const score = calculateFishScore(formData.fishName, weight, length);
        setEstimatedScore(score);
      } else {
        setEstimatedScore(null);
      }
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      
      // Limitando a 3 fotos
      const allowedFiles = newFiles.slice(0, 3 - formData.photos.length);
      
      if (allowedFiles.length === 0) {
        toast.error('Máximo de 3 fotos permitido');
        return;
      }
      
      // Gerar URLs de pré-visualização
      const newPreviewUrls = allowedFiles.map(file => URL.createObjectURL(file));
      
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...allowedFiles]
      }));
      
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
    }
  };
  
  const removePhoto = (index: number) => {
    // Remover foto e URL de pré-visualização
    setFormData(prev => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
    
    // Liberar URL de objeto para evitar vazamento de memória
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.fishName || !formData.weight || !formData.length || !formData.location) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    
    if (formData.photos.length === 0) {
      toast.error('Adicione pelo menos uma foto da sua captura');
      return;
    }
    
    try {
      setLoading(true);
      // Simulação de envio para API
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success('Sua captura foi compartilhada com sucesso!');
      setOpen(false);
      
      // Limpar formulário
      setFormData({
        fishName: '',
        weight: '',
        length: '',
        location: '',
        description: '',
        photos: []
      });
      
      // Limpar URLs de pré-visualização
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
      setEstimatedScore(null);
      
    } catch (error) {
      toast.error('Erro ao compartilhar captura. Tente novamente.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="coral" className="flex items-center gap-2">
          <Fish className="h-5 w-5" />
          <span>Compartilhar Captura</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Compartilhar Nova Captura</DialogTitle>
            <DialogDescription>
              Compartilhe sua experiência de pesca com a comunidade. Cada captura gera pontos para o ranking.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fishName" className="required">Espécie de Peixe</Label>
                <Input 
                  id="fishName" 
                  name="fishName" 
                  value={formData.fishName}
                  onChange={handleChange}
                  placeholder="Ex: Tucunaré"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="required">Local de Pesca</Label>
                <div className="relative">
                  <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="location" 
                    name="location" 
                    value={formData.location}
                    onChange={handleChange}
                    className="pl-9"
                    placeholder="Ex: Rio Negro, AM"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weight" className="required">Peso (kg)</Label>
                <div className="relative">
                  <Scale className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="weight" 
                    name="weight" 
                    type="number"
                    step="0.1"
                    min="0.1"
                    value={formData.weight}
                    onChange={handleChange}
                    className="pl-9"
                    placeholder="Ex: 5.2"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="length" className="required">Comprimento (cm)</Label>
                <div className="relative">
                  <Ruler className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    id="length" 
                    name="length" 
                    type="number"
                    step="1"
                    min="1"
                    value={formData.length}
                    onChange={handleChange}
                    className="pl-9"
                    placeholder="Ex: 45"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea 
                id="description" 
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Conte sobre sua experiência de pesca..."
                className="resize-none"
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Fotos (máx. 3)</Label>
              
              <div className="flex flex-wrap gap-2">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative w-24 h-24 border rounded-md overflow-hidden">
                    <img 
                      src={url} 
                      alt={`Preview ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 bg-black/60 rounded-full p-1 text-white hover:bg-black/80"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                
                {formData.photos.length < 3 && (
                  <label className="w-24 h-24 flex flex-col items-center justify-center border border-dashed rounded-md cursor-pointer hover:bg-muted/50">
                    <Camera className="h-6 w-6 text-muted-foreground mb-1" />
                    <span className="text-xs text-muted-foreground">Adicionar</span>
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
            
            {estimatedScore !== null && (
              <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                <p className="text-sm font-medium text-gray-700">Pontuação estimada:</p>
                <p className="text-xl font-bold text-coral-600">{estimatedScore} pontos</p>
                <p className="text-xs text-gray-500 mt-1">
                  A pontuação pode variar de acordo com a raridade da espécie e a época do ano.
                </p>
              </div>
            )}
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" variant="coral" disabled={loading}>
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Compartilhando...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Compartilhar Captura
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateFishingPostButton;
