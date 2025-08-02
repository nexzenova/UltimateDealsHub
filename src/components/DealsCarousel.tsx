import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Percent, Star, ExternalLink } from 'lucide-react';

const DealsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const deals = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max',
      subtitle: 'Latest Apple Flagship',
      description: 'Get the newest iPhone with titanium design and Action Button',
      image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Amazon',
      platformColor: 'bg-orange-500',
      discount: '₹25,000 OFF',
      price: '₹1,34,900',
      originalPrice: '₹1,59,900',
      rating: 4.6,
      timeLeft: '2 days 14 hours',
      badge: 'MEGA DEAL',
      link: '#'
    },
    {
      id: 2,
      title: 'Samsung 65" QLED TV',
      subtitle: '4K Smart Television',
      description: 'Immersive viewing experience with Quantum Dot technology',
      image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Flipkart',
      platformColor: 'bg-blue-500',
      discount: '60% OFF',
      price: '₹89,999',
      originalPrice: '₹2,24,999',
      rating: 4.4,
      timeLeft: '1 day 8 hours',
      badge: 'FLASH SALE',
      link: '#'
    },
    {
      id: 3,
      title: 'Nike Air Jordan 1',
      subtitle: 'Iconic Basketball Sneakers',
      description: 'Classic design meets modern comfort and style',
      image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Myntra',
      platformColor: 'bg-pink-500',
      discount: '40% OFF',
      price: '₹8,999',
      originalPrice: '₹14,999',
      rating: 4.7,
      timeLeft: '3 days 5 hours',
      badge: 'TRENDING',
      link: '#'
    },
    {
      id: 4,
      title: 'MacBook Air M3',
      subtitle: '13-inch Laptop',
      description: 'Ultra-portable with incredible performance and all-day battery',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      platform: 'Amazon',
      platformColor: 'bg-orange-500',
      discount: '₹20,000 OFF',
      price: '₹1,14,900',
      originalPrice: '₹1,34,900',
      rating: 4.8,
      timeLeft: '5 days 12 hours',
      badge: 'BESTSELLER',
      link: '#'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % deals.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [deals.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deals.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deals.length) % deals.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-r from-gray-900 to-gray-800">
      {deals.map((deal, index) => (
        <div
          key={deal.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 translate-x-0' : 
            index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'
          }`}
        >
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
            
            {/* Content */}
            <div className="relative h-full flex items-center px-8 md:px-16">
              <div className="text-white max-w-2xl space-y-6">
                {/* Badges */}
                <div className="flex items-center space-x-3">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Percent className="h-3 w-3 mr-1" />
                    {deal.discount}
                  </span>
                  <span className={`${deal.platformColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {deal.platform}
                  </span>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    {deal.badge}
                  </span>
                </div>
                
                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 leading-tight">{deal.title}</h3>
                  <p className="text-xl md:text-2xl text-gray-200 font-medium">{deal.subtitle}</p>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">{deal.description}</p>
                
                {/* Price & Rating */}
                <div className="flex items-center space-x-6">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl font-bold text-green-400">{deal.price}</span>
                      <span className="text-lg text-gray-400 line-through">{deal.originalPrice}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-300">({deal.rating})</span>
                    </div>
                  </div>
                </div>
                
                {/* CTA & Timer */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button
                    onClick={() => window.open(deal.link, '_blank')}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
                  >
                    <span>Grab Deal Now</span>
                    <ExternalLink className="h-5 w-5" />
                  </button>
                  
                  <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-400" />
                    <div>
                      <div className="text-sm text-gray-300">Ends in</div>
                      <div className="text-lg font-bold text-yellow-400">{deal.timeLeft}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {deals.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/30">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / deals.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default DealsCarousel;