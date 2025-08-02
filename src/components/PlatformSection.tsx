import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Shirt, 
  Home, 
  Monitor, 
  Sparkles, 
  Dumbbell, 
  BookOpen,
  Headphones,
  Watch,
  Camera,
  Car,
  Baby
} from 'lucide-react';
import CategorySection from './CategorySection';

interface PlatformSectionProps {
  platform: string;
  platformColor: string;
  bgGradient: string;
  searchQuery?: string;
  selectedCategory?: string;
}

const PlatformSection: React.FC<PlatformSectionProps> = ({ 
  platform, 
  platformColor, 
  bgGradient, 
  searchQuery, 
  selectedCategory 
}) => {
  const [activeCategory, setActiveCategory] = useState('phones');
  
  // Update active category when selectedCategory prop changes
  useEffect(() => {
    if (selectedCategory) {
      setActiveCategory(selectedCategory);
    }
  }, [selectedCategory]);

  const categories = [
    { id: 'phones', name: 'Mobiles & Tablets', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'fashion', name: 'Fashion', icon: <Shirt className="h-5 w-5" /> },
    { id: 'electronics', name: 'Electronics', icon: <Monitor className="h-5 w-5" /> },
    { id: 'home', name: 'Home & Kitchen', icon: <Home className="h-5 w-5" /> },
    { id: 'beauty', name: 'Beauty & Personal Care', icon: <Sparkles className="h-5 w-5" /> },
    { id: 'sports', name: 'Sports & Fitness', icon: <Dumbbell className="h-5 w-5" /> },
    { id: 'books', name: 'Books & Media', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'audio', name: 'Audio & Accessories', icon: <Headphones className="h-5 w-5" /> },
    { id: 'watches', name: 'Watches & Jewelry', icon: <Watch className="h-5 w-5" /> },
    { id: 'cameras', name: 'Cameras & Photography', icon: <Camera className="h-5 w-5" /> },
    { id: 'automotive', name: 'Automotive', icon: <Car className="h-5 w-5" /> },
    { id: 'baby', name: 'Baby & Kids', icon: <Baby className="h-5 w-5" /> }
  ];

  // Enhanced sample products with more realistic data
  const sampleProducts = {
    phones: [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
        reason: 'Best camera system with 5x telephoto zoom and Action Button',
        price: '₹1,34,900',
        originalPrice: '₹1,59,900',
        rating: 4.6,
        reviews: 12847,
        badge: 'BESTSELLER',
        discount: '16%',
        affiliateLink: '#',
        isSponsored: true
      },
      {
        id: '2',
        image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Samsung Galaxy S24 Ultra 512GB Titanium Black',
        reason: 'AI-powered photography with S Pen and 200MP camera',
        price: '₹1,09,999',
        originalPrice: '₹1,39,999',
        rating: 4.5,
        reviews: 8934,
        badge: 'LIMITED OFFER',
        discount: '21%',
        affiliateLink: '#'
      },
      {
        id: '3',
        image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'OnePlus 12 16GB RAM 512GB Silky Black',
        reason: 'Flagship killer with Snapdragon 8 Gen 3 and 100W charging',
        price: '₹69,999',
        originalPrice: '₹79,999',
        rating: 4.4,
        reviews: 5672,
        badge: 'HOT DEAL',
        discount: '13%',
        affiliateLink: '#'
      },
      {
        id: '4',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Google Pixel 8 Pro 256GB Obsidian',
        reason: 'Pure Android experience with Magic Eraser and Night Sight',
        price: '₹84,999',
        originalPrice: '₹1,06,999',
        rating: 4.3,
        reviews: 3421,
        badge: 'EDITOR\'S CHOICE',
        discount: '21%',
        affiliateLink: '#'
      },
      {
        id: '5',
        image: 'https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Xiaomi 14 Ultra 16GB RAM 512GB Black',
        reason: 'Leica camera system with professional photography features',
        price: '₹89,999',
        originalPrice: '₹99,999',
        rating: 4.2,
        reviews: 2156,
        badge: 'NEW LAUNCH',
        discount: '10%',
        affiliateLink: '#'
      },
      {
        id: '6',
        image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Nothing Phone (2a) 12GB RAM 256GB Black',
        reason: 'Unique transparent design with Glyph interface',
        price: '₹25,999',
        originalPrice: '₹27,999',
        rating: 4.1,
        reviews: 4567,
        badge: 'TRENDING',
        discount: '7%',
        affiliateLink: '#'
      }
    ],
    fashion: [
      {
        id: '7',
        image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Levi\'s Men\'s 511 Slim Fit Jeans Dark Blue',
        reason: 'Classic slim fit with premium denim quality',
        price: '₹2,399',
        originalPrice: '₹3,999',
        rating: 4.3,
        reviews: 15678,
        badge: 'BESTSELLER',
        discount: '40%',
        affiliateLink: '#'
      },
      {
        id: '8',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Nike Air Force 1 \'07 White Sneakers',
        reason: 'Iconic basketball shoe with timeless style',
        price: '₹7,495',
        originalPrice: '₹8,995',
        rating: 4.6,
        reviews: 23456,
        badge: 'CLASSIC',
        discount: '17%',
        affiliateLink: '#'
      },
      {
        id: '9',
        image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Adidas Originals Trefoil Hoodie Black',
        reason: 'Comfortable cotton blend with iconic logo',
        price: '₹3,499',
        originalPrice: '₹4,999',
        rating: 4.4,
        reviews: 8901,
        badge: 'COMFORT FIT',
        discount: '30%',
        affiliateLink: '#'
      }
    ],
    electronics: [
      {
        id: '10',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'MacBook Air M3 13-inch 16GB RAM 512GB SSD',
        reason: 'Ultra-portable with all-day battery and M3 chip performance',
        price: '₹1,44,900',
        originalPrice: '₹1,64,900',
        rating: 4.7,
        reviews: 5432,
        badge: 'PREMIUM',
        discount: '12%',
        affiliateLink: '#'
      },
      {
        id: '11',
        image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
        name: 'Dell XPS 13 Plus Intel i7 32GB RAM 1TB SSD',
        reason: 'Professional laptop with stunning InfinityEdge display',
        price: '₹1,89,999',
        originalPrice: '₹2,19,999',
        rating: 4.5,
        reviews: 3210,
        badge: 'PROFESSIONAL',
        discount: '14%',
        affiliateLink: '#'
      }
    ]
  };

  const getCurrentProducts = () => {
    return sampleProducts[activeCategory as keyof typeof sampleProducts] || sampleProducts.phones;
  };

  const platformStats = {
    Amazon: { products: '10M+', categories: '50+', savings: '₹500Cr+' },
    Flipkart: { products: '8M+', categories: '45+', savings: '₹300Cr+' },
    Myntra: { products: '5M+', categories: '30+', savings: '₹200Cr+' },
    Ajio: { products: '3M+', categories: '25+', savings: '₹150Cr+' }
  };

  const currentStats = platformStats[platform as keyof typeof platformStats];

  return (
    <section id={platform.toLowerCase()} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Header */}
        <div className="text-center mb-12">
          <div className={`inline-flex items-center justify-center w-20 h-20 ${bgGradient} rounded-2xl mb-6 shadow-lg`}>
            <span className="text-2xl font-bold text-white">{platform[0]}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{platform} Products</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing deals and exclusive offers from {platform}'s vast collection
          </p>
          
          {/* Platform Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{currentStats.products}</div>
              <div className="text-sm text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{currentStats.categories}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{currentStats.savings}</div>
              <div className="text-sm text-gray-600">Total Savings</div>
            </div>
          </div>
        </div>

        {/* Category Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Browse Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 ${
                  activeCategory === category.id
                    ? `${bgGradient} text-white shadow-lg transform scale-105`
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 ${
                  activeCategory === category.id ? 'bg-white/20' : 'bg-white'
                }`}>
                  {React.cloneElement(category.icon, {
                    className: `h-5 w-5 ${activeCategory === category.id ? 'text-white' : 'text-gray-600'}`
                  })}
                </div>
                <span className="text-sm font-medium text-center leading-tight">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <CategorySection
            title={categories.find(c => c.id === activeCategory)?.name || 'Products'}
            platform={platform}
            products={getCurrentProducts()}
            icon={categories.find(c => c.id === activeCategory)?.icon}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;