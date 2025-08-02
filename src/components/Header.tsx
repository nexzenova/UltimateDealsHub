import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ShoppingCart, User, Bell, ChevronDown, Zap, TrendingUp, Filter } from 'lucide-react';

interface HeaderProps {
  onSearch?: (query: string) => void;
  onCategorySelect?: (category: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch, onCategorySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mock search suggestions - in real app, this would come from API
  const mockSuggestions = [
    'iPhone 15 Pro Max',
    'Samsung Galaxy S24',
    'MacBook Air M3',
    'Nike Air Jordan',
    'Sony WH-1000XM5',
    'iPad Pro',
    'Apple Watch Series 9',
    'Dell XPS 13'
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 2) {
      const filtered = mockSuggestions.filter(item => 
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSearchSuggestions(true);
    } else {
      setShowSearchSuggestions(false);
    }
  };

  const handleSearch = (query?: string) => {
    const searchTerm = query || searchQuery;
    if (searchTerm.trim()) {
      onSearch?.(searchTerm);
      setShowSearchSuggestions(false);
      // Scroll to results section
      document.getElementById('search-results')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    handleSearch(suggestion);
  };

  const platforms = [
    { name: 'Amazon', color: 'text-orange-600', href: '#amazon' },
    { name: 'Flipkart', color: 'text-blue-600', href: '#flipkart' },
    { name: 'Myntra', color: 'text-pink-600', href: '#myntra' },
    { name: 'Ajio', color: 'text-purple-600', href: '#ajio' }
  ];

  return (
    <>
      {/* Top Promotional Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white text-center py-2 text-sm font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative z-10 flex items-center justify-center space-x-2">
          <Zap className="h-4 w-4 animate-pulse" />
          <span className="font-bold">🔥 MEGA SALE ALERT!</span>
          <span className="hidden sm:inline">Big Billion Days + Great Indian Festival LIVE!</span>
          <span className="font-bold">Up to 80% OFF + Extra Bank Offers</span>
          <TrendingUp className="h-4 w-4 animate-bounce" />
        </div>
      </div>

      <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl border-b border-gray-200 backdrop-blur-sm bg-white/95' : 'shadow-lg'
      }`}>
        {/* Main Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Professional Logo */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-3 rounded-xl shadow-lg">
                  <div className="relative">
                    <ShoppingCart className="h-7 w-7 text-white" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Ultimate Deals
                </h1>
                <p className="text-xs text-gray-500 font-medium -mt-1">
                  India's #1 Deal Platform
                </p>
              </div>
            </div>

            {/* Enhanced Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative">
              <div className="relative w-full group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  onFocus={() => searchQuery.length > 2 && setShowSearchSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSearchSuggestions(false), 200)}
                  placeholder="Search for products, brands, deals..."
                  className="w-full px-5 py-3 pl-12 pr-32 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50 hover:bg-white transition-all duration-200 text-gray-700 placeholder-gray-400 group-hover:shadow-md"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                <button 
                  onClick={() => handleSearch()}
                  className="absolute right-2 top-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-sm font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Search Deals
                </button>
                
                {/* Search Suggestions Dropdown */}
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 max-h-80 overflow-y-auto">
                    <div className="p-2">
                      <div className="text-xs text-gray-500 px-3 py-2 font-medium">Popular Searches</div>
                      {searchSuggestions.map((suggestion, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg transition-colors flex items-center space-x-3"
                        >
                          <Search className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-700">{suggestion}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              {/* Deal Alerts */}
              <button className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="text-sm font-medium">Deal Alerts</span>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              </button>

              {/* Account Dropdown */}
              <div className="relative group hidden md:block">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Account</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">My Wishlist</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Deal History</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Price Alerts</a>
                    <hr className="my-2 border-gray-200" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Settings</a>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search products, deals..."
                className="w-full px-4 py-3 pl-11 pr-20 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <button 
                onClick={() => handleSearch()}
                className="absolute right-2 top-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Bar */}
        <div className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="hidden md:flex items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                <button 
                  onClick={() => {
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-700 hover:text-blue-600 font-semibold transition-colors relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                {platforms.map((platform) => (
                  <button
                    key={platform.name}
                    onClick={() => {
                      document.getElementById(platform.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`hover:${platform.color} font-semibold transition-colors text-gray-700 relative group`}
                  >
                    {platform.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
                
                {/* Categories Mega Menu */}
                <div className="relative group">
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-semibold transition-colors">
                    <span>Categories</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="p-6 grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => onCategorySelect?.('phones')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">📱</span>
                        <span>Mobiles & Tablets</span>
                      </button>
                      <button 
                        onClick={() => onCategorySelect?.('fashion')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">👕</span>
                        <span>Fashion</span>
                      </button>
                      <button 
                        onClick={() => onCategorySelect?.('electronics')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">💻</span>
                        <span>Electronics</span>
                      </button>
                      <button 
                        onClick={() => onCategorySelect?.('home')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">🏠</span>
                        <span>Home & Kitchen</span>
                      </button>
                      <button 
                        onClick={() => onCategorySelect?.('beauty')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">💄</span>
                        <span>Beauty & Care</span>
                      </button>
                      <button 
                        onClick={() => onCategorySelect?.('sports')}
                        className="flex items-center space-x-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                      >
                        <span className="text-lg">⚽</span>
                        <span>Sports & Fitness</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side Navigation */}
              <div className="flex items-center space-x-6 text-sm font-medium">
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span>🔥 Live Deals</span>
                </div>
                <span className="text-gray-600">⚡ Flash Sales</span>
                <span className="text-green-600 font-semibold">💰 Today's Steals</span>
              </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
                <div className="px-4 py-4 space-y-3">
                  <button 
                    onClick={() => {
                      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Home
                  </button>
                  {platforms.map((platform) => (
                    <button
                      key={platform.name}
                      onClick={() => {
                        document.getElementById(platform.name.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                    >
                      {platform.name}
                    </button>
                  ))}
                  <button 
                    onClick={() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
                  >
                    Contact
                  </button>
                  
                  {/* Mobile Categories */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">Categories</h4>
                    <div className="space-y-1">
                      <button 
                        onClick={() => {
                          onCategorySelect?.('phones');
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        📱 Mobiles & Tablets
                      </button>
                      <button 
                        onClick={() => {
                          onCategorySelect?.('fashion');
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        👕 Fashion
                      </button>
                      <button 
                        onClick={() => {
                          onCategorySelect?.('electronics');
                          setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        💻 Electronics
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;