import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about deals or want to suggest products? We're here to help you save more!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">support@ultimatedeals.com</p>
                    <p className="text-sm text-gray-500">We reply within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <MessageCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Chat</h4>
                    <p className="text-gray-600">Available 24/7</p>
                    <p className="text-sm text-gray-500">Instant support</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office</h4>
                    <p className="text-gray-600">Mumbai, Maharashtra</p>
                    <p className="text-sm text-gray-500">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="font-bold text-gray-900 mb-4">Frequently Asked</h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">How do affiliate links work?</h5>
                  <p className="text-gray-600 text-sm">When you purchase through our links, we earn a small commission at no extra cost to you.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">Are deals updated daily?</h5>
                  <p className="text-gray-600 text-sm">Yes, we update deals multiple times daily to ensure you get the best prices.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-800 text-sm mb-1">Can I request specific products?</h5>
                  <p className="text-gray-600 text-sm">Absolutely! Use the form to suggest products you'd like us to find deals for.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                    <p className="text-gray-600">Fill out the form below and we'll respond as soon as possible.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 hover:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 hover:bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="product-recommendation">Product Recommendation</option>
                        <option value="deal-alert">Deal Alert Request</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none bg-gray-50 hover:bg-white"
                        placeholder="Tell us how we can help you find the best deals..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">Response Time: Within 24 hours</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;