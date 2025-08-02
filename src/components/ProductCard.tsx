import React, { useState } from 'react';
import { ExternalLink, Star, Tag, Heart, Share2, TrendingUp } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  reason: string;
  platform: string;
  price?: string;
  originalPrice?: string;
  rating?: number;
  reviews?: number;
  badge?: string;
  discount?: string;
  affiliateLink: string;
  isSponsored?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  reason,
  platform,
  price,
  originalPrice,
  rating,
  reviews,
  badge,
  discount,
  affiliateLink,
  isSponsored = false
}) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const platformStyles = {
    Amazon: {
      gradient: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      border: 'border-orange-200'
    },
    Flipkart: {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200'
    },
    Myntra: {
      gradient: 'from-pink-500 to-pink-600',
      bg: 'bg-pink-50',
      text: 'text-pink-600',
      border: 'border-pink-200'
    },
    Ajio: {
      gradient: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200'
    }
  };

  const platformStyle = platformStyles[platform as keyof typeof platformStyles];

  const handleAffiliateClick = async () => {
    setIsLoading(true);
    
    // Track the click for analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'affiliate_click', {
        'platform': platform,
        'product_name': name,
        'value': price ? parseFloat(price.replace(/[₹,]/g, '')) : 0,
        'currency': 'INR'
      });
    }
    
    // Small delay to show loading state
    setTimeout(() => {
      window.open(affiliateLink, '_blank');
      setIsLoading(false);
    }, 500);
  };

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
    
    // Track wishlist action
    if (typeof gtag !== 'undefined') {
      gtag('event', isWishlisted ? 'remove_from_wishlist' : 'add_to_wishlist', {
        'item_name': name,
        'platform': platform
      });
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: name,
          text: `Check out this amazing deal: ${name} - ${price}`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${name} - ${price} - ${window.location.href}`);
      alert('Link copied to clipboard!');
    }
  };
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50">
        {!imageLoaded && (
          <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          </div>
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'block' : 'hidden'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {badge && (
            <div className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold flex items-center shadow-sm">
              <Tag className="h-3 w-3 mr-1" />
              {badge}
            </div>
          )}
          {isSponsored && (
            <div className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              Sponsored
            </div>
          )}
        </div>

        {/* Top Right Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {discount && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold">
              {discount} OFF
            </div>
          )}
          <button
            onClick={handleWishlistToggle}
            className={`p-2 rounded-full transition-colors ${
              isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Platform Badge */}
        <div className={`absolute bottom-3 left-3 ${platformStyle.bg} ${platformStyle.text} px-3 py-1 rounded-full text-xs font-semibold border ${platformStyle.border}`}>
          {platform}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 line-clamp-2 text-sm leading-5 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        
        {/* Rating & Reviews */}
        {rating && (
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-700">{rating}</span>
            </div>
            {reviews && (
              <span className="text-xs text-gray-500">({reviews.toLocaleString()} reviews)</span>
            )}
          </div>
        )}

        {/* Reason */}
        <p className="text-xs text-gray-600 italic bg-gray-50 px-3 py-2 rounded-lg">
          💡 {reason}
        </p>
        
        {/* Price */}
        {price && (
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">{price}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
              )}
            </div>
            {originalPrice && price && (
              <div className="text-xs text-green-600 font-medium">
                You save ₹{(parseInt(originalPrice.replace(/[₹,]/g, '')) - parseInt(price.replace(/[₹,]/g, ''))).toLocaleString()}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={handleAffiliateClick}
            disabled={isLoading}
            className={`flex-1 bg-gradient-to-r ${platformStyle.gradient} text-white py-2.5 px-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center space-x-2 text-sm disabled:opacity-50`}
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Opening...</span>
              </>
            ) : (
              <>
                <span>Buy on {platform}</span>
                <ExternalLink className="h-4 w-4" />
              </>
            )}
          </button>
          
          <button 
            onClick={handleShare}
            className="p-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Share2 className="h-4 w-4 text-gray-600" />
          </button>
        </div>

        {/* Trending Indicator */}
        {Math.random() > 0.7 && (
          <div className="flex items-center space-x-1 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full w-fit">
            <TrendingUp className="h-3 w-3" />
            <span>Trending</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;