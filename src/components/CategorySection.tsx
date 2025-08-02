import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  image: string;
  name: string;
  reason: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  badge?: string;
  affiliateLink: string;
}

interface CategorySectionProps {
  title: string;
  platform: string;
  products: Product[];
  icon: React.ReactNode;
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, platform, products, icon }: CategorySectionProps) => {
  return (
    <div className="mb-12">
      <div className="flex items-center space-x-3 mb-6">
        {icon}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            reason={product.reason}
            platform={platform}
            price={product.price}
            originalPrice={product.originalPrice}
            rating={product.rating}
            badge={product.badge}
            affiliateLink={product.affiliateLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;