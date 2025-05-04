
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ProductSortProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
}

const ProductSort: React.FC<ProductSortProps> = ({ options, value, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Ordenar por:</span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProductSort;
