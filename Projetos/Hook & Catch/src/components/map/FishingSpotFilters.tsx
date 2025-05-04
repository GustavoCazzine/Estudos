
import React, { useState, useEffect } from 'react';
import { Filter, Search, MapPin, Droplet } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { mockCountries, mockRegions, spotTypes } from './mockData';
import { useIsMobile } from '../../hooks/use-mobile';

interface FishingSpotFiltersProps {
  onCountryChange: (country: string) => void;
  onRegionChange: (region: string) => void;
  onTypeChange: (type: string) => void;
  onSearchChange: (term: string) => void;
  selectedCountry: string;
  selectedType: string;
}

const FishingSpotFilters: React.FC<FishingSpotFiltersProps> = ({
  onCountryChange,
  onRegionChange,
  onTypeChange,
  onSearchChange,
  selectedCountry,
  selectedType
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const isMobile = useIsMobile();
  
  // Atualiza as regiões disponíveis com base no país selecionado
  useEffect(() => {
    if (selectedCountry && selectedCountry !== 'all') {
      setAvailableRegions(mockRegions[selectedCountry] || []);
    } else {
      setAvailableRegions([]);
    }
    onRegionChange('all');
  }, [selectedCountry, onRegionChange]);

  // Atualiza a busca quando o termo mudar
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      onSearchChange(searchTerm);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [searchTerm, onSearchChange]);
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Filter className="w-4 h-4 mr-2" />
          Filtros
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar local de pesca..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="spot-type">Tipo de Local</Label>
          <Select 
            value={selectedType} 
            onValueChange={onTypeChange}
          >
            <SelectTrigger id="spot-type">
              <SelectValue placeholder="Selecione um tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              {spotTypes.map(type => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="country">País</Label>
          <Select 
            value={selectedCountry} 
            onValueChange={onCountryChange}
          >
            <SelectTrigger id="country">
              <SelectValue placeholder="Selecione um país" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os países</SelectItem>
              {mockCountries.map(country => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="region">Região</Label>
          <Select 
            onValueChange={onRegionChange}
            disabled={!selectedCountry || selectedCountry === 'all' || availableRegions.length === 0}
          >
            <SelectTrigger id="region">
              <SelectValue placeholder="Selecione uma região" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as regiões</SelectItem>
              {availableRegions.map(region => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="pt-2">
          <Button variant="outline" className="w-full" onClick={() => {
            onCountryChange('all');
            onRegionChange('all');
            onTypeChange('all');
            setSearchTerm('');
          }}>
            Limpar Filtros
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FishingSpotFilters;
