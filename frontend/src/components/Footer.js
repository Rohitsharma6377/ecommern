import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between text-sm md:text-base">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold text-lg text-teal-400 mb-3">About Us</h4>
            <p className="text-gray-400">
              Your one-stop shop for all your needs. We provide high-quality products with fast and reliable service.
            </p>
          </div>

          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold text-lg text-teal-400 mb-3">Quick Links</h4>
            <ul>
              <li className="mb-2">
                <a href="/home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </a>
              </li>
              <li className="mb-2">
                <a href="/cart" className="text-gray-400 hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="font-bold text-lg text-teal-400 mb-3">Customer Service</h4>
            <ul>
              <li className="mb-2">
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-gray-400 hover:text-white">
                  Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="/shipping" className="text-gray-400 hover:text-white">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full md:w-1/4">
            <h4 className="font-bold text-lg text-teal-400 mb-3">Subscribe</h4>
            <p className="text-gray-400 mb-3">
              Subscribe to get updates on new products and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 w-full rounded-l-md text-gray-700 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2023 E-commerce Store. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
