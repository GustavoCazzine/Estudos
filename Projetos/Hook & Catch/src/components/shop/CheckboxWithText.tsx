
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

export interface CheckboxWithTextProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  label: string;
  className?: string;
}

const CheckboxWithText: React.FC<CheckboxWithTextProps> = ({
  id,
  checked,
  onChange,
  label,
  className
}) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithText;
