import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DealsCarousel from './components/DealsCarousel';
import PlatformSection from './components/PlatformSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [showSearchResults, setShowSearchResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearchResults(true);
    // Clear category selection when searching
    setSelectedCategory('');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setShowSearchResults(false);
    setSearchQuery('');
  };

  const platforms = [
    {
      name: 'Amazon',
      color: 'orange-500',
      bgGradient: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600'
    },
    {
      name: 'Flipkart',
      color: 'blue-500',
      bgGradient: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600'
    },
    {
      name: 'Myntra',
      color: 'pink-500',
      bgGradient: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600'
    },
    {
      name: 'Ajio',
      color: 'purple-500',
      bgGradient: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} onCategorySelect={handleCategorySelect} />
      <Hero />
      
      {/* Featured Deals Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🔥 Today's Hottest Deals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Limited-time offers that you can't afford to miss. Updated every hour!
            </p>
          </div>
          <DealsCarousel />
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-gray-600 text-sm">Happy Customers</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">₹2Cr+</div>
              <div className="text-gray-600 text-sm">Money Saved</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600 text-sm">Products Listed</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-gray-600 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      {showSearchResults && searchQuery && (
        <section id="search-results" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Search Results for "{searchQuery}"
              </h2>
              <p className="text-xl text-gray-600">
                Found products across all platforms
              </p>
            </div>
            
            {/* Search results for each platform */}
            {platforms.map((platform, index) => (
              <div key={platform.name} className="mb-16">
                <PlatformSection
                  platform={platform.name}
                  platformColor={platform.color}
                  bgGradient={platform.bgGradient}
                  searchQuery={searchQuery}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Platform Sections */}
      {!showSearchResults && (
        <>
          {platforms.map((platform, index) => (
            <PlatformSection
              key={platform.name}
              platform={platform.name}
              platformColor={platform.color}
              bgGradient={platform.bgGradient}
              selectedCategory={selectedCategory}
            />
          ))}
        </>
      )}

      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;