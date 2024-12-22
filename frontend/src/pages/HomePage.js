import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Discover Amazing Products
            </h1>
            <p className="text-lg mb-6">
              Shop the latest and greatest products at unbeatable prices. Your satisfaction is our priority!
            </p>
            <button className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100">
              Start Shopping
            </button>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Hero Banner"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Example Product Cards */}
          {[1, 2, 3, 4].map((product) => (
            <div
              key={product}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={`https://via.placeholder.com/400x300?text=Product+${product}`}
                alt={`Product ${product}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">Product {product}</h3>
                <p className="text-gray-600 mt-2">$49.99</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
