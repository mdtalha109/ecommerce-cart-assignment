import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const buttonVariants = {
  primary: 'bg-black text-white hover:bg-black',
  secondary: 'bg-gray-500 text-white hover:bg-gray-600',
  danger: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-gray-500 text-gray-500 hover:bg-gray-100',
};

const buttonSizes = {
  small: 'py-1 px-3 text-sm',
  medium: 'py-2 px-4 text-base',
  large: 'py-3 px-6 text-lg',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  ...props
}) => {
  const variantClass = buttonVariants[variant];
  const sizeClass = buttonSizes[size];

  return (
    <button
      className={`rounded-md transition-all inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border bg-background  h-9  px-3 ${variantClass} ${sizeClass} ${className}`}
      {...props}
    />
  );
};

export default Button;
