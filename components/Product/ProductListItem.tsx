import React from 'react';
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import { useCartContext } from '@/context/CartContext';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <ProductCard>
      <ProductCard.Image src={product.thumbnail} alt={product.title} />
      <div className="p-4">
        <ProductCard.Title>{product.title}</ProductCard.Title>
        <ProductCard.Description>{product.description}</ProductCard.Description>
        <div className="flex items-center justify-between">
          <ProductCard.Price>${product.price}</ProductCard.Price>
          <ProductCard.AddToCartButton onClick={() => addToCart(product)}>
            Add to Cart
          </ProductCard.AddToCartButton>
        </div>
      </div>
    </ProductCard>
  );
};

export default ProductListItem;
