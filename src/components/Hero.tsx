import React, { useState, useEffect } from 'react';
import { Star, TrendingUp, Zap, Shield, Clock, Award, ArrowRight, Play, Users, IndianRupee } from 'lucide-react';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "🎯 Smart Shopping Starts Here",
    "💰 Maximum Savings, Minimum Effort", 
    "🔥 India's Most Trusted Deal Platform",
    "⚡ Lightning Fast Deal Discovery",
    "🏆 Where Smart Shoppers Save Big"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-white overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Dynamic Tagline */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 shadow-sm">
              <Award className="h-4 w-4 mr-2" />
              <span className="transition-all duration-500">
                {taglines[currentTagline]}
              </span>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Discover
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
                  Epic Deals
                </span>
                <span className="text-4xl lg:text-5xl text-gray-700">
                  Across India's Top Platforms
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                Your one-stop destination for the <strong>best deals</strong> from Amazon, Flipkart, Myntra, and Ajio. 
                <span className="text-green-600 font-semibold"> Save up to 80%</span> with our expert-curated selections.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-8 py-6">
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 group-hover:scale-110 transition-transform">50K+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
                <div className="flex justify-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-green-600 group-hover:scale-110 transition-transform flex items-center justify-center">
                  <IndianRupee className="h-8 w-8" />2Cr+
                </div>
                <div className="text-sm text-gray-600 font-medium">Money Saved</div>
                <div className="text-xs text-green-600 font-semibold mt-1">This Month</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl lg:text-4xl font-bold text-purple-600 group-hover:scale-110 transition-transform">10K+</div>
                <div className="text-sm text-gray-600 font-medium">Live Deals</div>
                <div className="flex justify-center mt-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 ml-1">Live</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  document.getElementById('amazon')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Zap className="h-5 w-5 group-hover:animate-pulse" />
                <span>Explore Mega Deals</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">100% Verified</div>
                  <div className="text-sm text-gray-600">Authentic Deals Only</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Real-time Updates</div>
                  <div className="text-sm text-gray-600">Live Price Tracking</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Expert Curation</div>
                  <div className="text-sm text-gray-600">Hand-picked Products</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Featured Deal */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Main Featured Deal Card */}
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-105 transition-all duration-500">
              {/* Deal Header */}
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-white p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-2xl mb-1">🔥 Today's Mega Deal</h3>
                    <p className="text-sm opacity-90">Limited Time Offer - Hurry Up!</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">80% OFF</div>
                    <div className="text-sm bg-white/20 px-2 py-1 rounded-full">Ends in 2h 45m</div>
                  </div>
                </div>
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-white/10 rounded-full"></div>
              </div>
              
              {/* Product Details */}
              <div className="p-8">
                <div className="flex items-center space-x-6 mb-6">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=200"
                      alt="iPhone 15 Pro Max"
                      className="w-24 h-24 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      HOT
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-gray-900 mb-1">iPhone 15 Pro Max</h4>
                    <p className="text-gray-600 mb-2">256GB Natural Titanium</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">(12,847 reviews)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-green-600">₹89,999</span>
                      <span className="text-lg text-gray-500 line-through">₹1,34,999</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-bold">
                        Save ₹45,000
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Deal Features */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>1 Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Easy Returns</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Bank Offers</span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                  onClick={() => window.open('#', '_blank')}
                  <span>Grab This Deal Now</span>
                  <TrendingUp className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Platform Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-center text-gray-700 font-semibold mb-4 flex items-center justify-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Trusted by millions across platforms</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors border border-orange-200">
                  <span className="font-bold text-orange-600 text-lg">Amazon</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors border border-blue-200">
                  <span className="font-bold text-blue-600 text-lg">Flipkart</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors border border-pink-200">
                  <span className="font-bold text-pink-600 text-lg">Myntra</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors border border-purple-200">
                  <span className="font-bold text-purple-600 text-lg">Ajio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sale Events Banner */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center space-x-3">
              <Zap className="h-8 w-8 animate-pulse" />
              <span>🎉 Current Mega Sale Events</span>
              <Zap className="h-8 w-8 animate-pulse" />
            </h2>
            <p className="text-xl opacity-90">Don't miss these limited-time opportunities to save big!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-2xl">Big Billion Days</h3>
                <span className="bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  LIVE NOW
                </span>
              </div>
              <p className="text-white/90 mb-4 text-lg">Up to 80% off on Electronics, Fashion & More</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Flipkart</span>
                <div className="text-right">
                  <div className="text-sm opacity-75">Ends in</div>
                  <div className="text-lg font-bold">3 days 14 hours</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30 hover:bg-white/25 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-2xl">Great Indian Festival</h3>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                  HOT DEALS
                </span>
              </div>
              <p className="text-white/90 mb-4 text-lg">Amazon's biggest sale with exclusive bank offers</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Amazon</span>
                <div className="text-right">
                  <div className="text-sm opacity-75">Ends in</div>
                  <div className="text-lg font-bold">5 days 8 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;