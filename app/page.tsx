import { Metadata } from 'next';
import ProductList from '@/components/Product/ProductList';
import { fetchProducts } from '@/utils/api';
import { Product } from '@/types/product';

export const metadata: Metadata = {
  title: 'E-commerce Shopping Cart',
  description: 'Shop the latest products with our e-commerce shopping cart.',
};

const Home = async () => {
  let products: Product[] = [];

  try {
    products = await fetchProducts();
  } catch (error) {
    console.error('Failed to fetch products:', error);
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">E-commerce Shopping Cart</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
