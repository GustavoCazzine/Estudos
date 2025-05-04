
import React from 'react';

interface VisuallyHiddenProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
}

/**
 * Component that visually hides content while keeping it accessible to screen readers
 */
const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  as: Component = 'span',
  className = '',
  ...props
}) => {
  return (
    <Component
      className={`absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 ${className}`}
      style={{
        clip: 'rect(0, 0, 0, 0)',
        clipPath: 'inset(50%)',
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default VisuallyHidden;
