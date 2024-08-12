import React, { ReactNode } from 'react';
import { Product } from '../../types/product';
import Image from 'next/image';
import Button from '../ui/Button';


interface ProductCardProps {
  children: ReactNode;
}

const ProductCard: React.FC<ProductCardProps> & {
  Image: React.FC<{ src: string; alt: string }>;
  Title: React.FC<{ children: ReactNode }>;
  Description: React.FC<{ children: ReactNode }>;
  Price: React.FC<{ children: ReactNode }>;
  AddToCartButton: React.FC<{ onClick: () => void; children: ReactNode }>;
} = ({ children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {children}
    </div>
  );
};

// Define each compound component
ProductCard.Image = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={300}
    height={300}
    className="w-full h-48 object-cover"
    style={{ aspectRatio: '300/300', objectFit: 'cover' }}
    priority
  />
);

ProductCard.Title = ({ children }) => (
  <h3 className="text-lg font-semibold mb-2">{children}</h3>
);

ProductCard.Description = ({ children }) => (
  <p className="text-gray-500 mb-4">{children}</p>
);

ProductCard.Price = ({ children }) => (
  <span className="text-xl font-bold">{children}</span>
);

ProductCard.AddToCartButton = ({ onClick, children }) => (
  <Button variant="primary" onClick={onClick}>
    {children}
  </Button>
);

export default ProductCard;
