import React from 'react';
import { ShoppingCart, Heart, ExternalLink, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Affiliate Disclaimer Banner */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 py-4 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2">
          <Heart className="h-5 w-5 text-red-600" />
          <span className="text-sm md:text-base">
            <strong>Affiliate Disclosure:</strong> As an affiliate, I may earn a commission if you purchase through my links. 
            This helps support the site at no extra cost to you. Thank you for your support!
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Ultimate Deals</h3>
                <p className="text-sm text-gray-400">Hub</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted source for the best deals from India's top e-commerce platforms. 
              We curate every product to ensure maximum value for your money.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">🏠</span>Home</a></li>
              <li><a href="#amazon" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">📦</span>Amazon Deals</a></li>
              <li><a href="#flipkart" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">🛒</span>Flipkart Offers</a></li>
              <li><a href="#myntra" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">👕</span>Myntra Fashion</a></li>
              <li><a href="#ajio" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">✨</span>Ajio Collection</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors flex items-center"><span className="mr-2">📞</span>Contact Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Popular Categories</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#phones" className="hover:text-white transition-colors">📱 Mobiles & Tablets</a></li>
              <li><a href="#fashion" className="hover:text-white transition-colors">👔 Fashion & Clothing</a></li>
              <li><a href="#electronics" className="hover:text-white transition-colors">💻 Electronics</a></li>
              <li><a href="#home" className="hover:text-white transition-colors">🏠 Home & Kitchen</a></li>
              <li><a href="#beauty" className="hover:text-white transition-colors">💄 Beauty & Care</a></li>
              <li><a href="#sports" className="hover:text-white transition-colors">⚽ Sports & Fitness</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">support@ultimatedeals.com</p>
                  <p className="text-sm text-gray-400">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">+91 98765 43210</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mumbai, Maharashtra</p>
                  <p className="text-sm text-gray-400">India</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2">Deal Alerts</h5>
              <p className="text-sm text-gray-400 mb-3">Get notified about the best deals</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Ultimate Deals Hub. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for deal hunters in India</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-400">50K+</div>
                <div className="text-xs text-gray-400">Happy Customers</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-400">₹2Cr+</div>
                <div className="text-xs text-gray-400">Money Saved</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-purple-400">10K+</div>
                <div className="text-xs text-gray-400">Products Listed</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-2xl font-bold text-orange-400">99%</div>
                <div className="text-xs text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;