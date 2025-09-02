"use client";
import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Minus, Plus, Check } from 'lucide-react';
import Link from "next/link";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Blue');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartSuccess, setShowCartSuccess] = useState(false);

  const product = {
    name: "Premium Wireless Headphones",
    brand: "TechVeda",
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.8,
    reviews: 2847,
    inStock: true,
    images: [
      "🎧", "🎵", "🔊", "📱"
    ],
    colors: ['Blue', 'Black', 'White', 'Red'],
    sizes: ['S', 'M', 'L', 'XL'],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Wireless & Bluetooth 5.0",
      "Premium sound quality",
      "Comfortable over-ear design",
      "Quick charge technology"
    ]
  };

  const reviews = [
    { name: "Alex M.", rating: 5, text: "Incredible sound quality! Best headphones I've ever owned.", date: "2 days ago", verified: true },
    { name: "Sarah K.", rating: 5, text: "The noise cancellation is amazing. Perfect for work and travel.", date: "1 week ago", verified: true },
    { name: "David L.", rating: 4, text: "Great value for money. Very comfortable for long listening sessions.", date: "2 weeks ago", verified: true }
  ];

  const addToCart = () => {
    const newItem = {
      id: Date.now(),
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
      image: product.images[0]
    };

    setShowCartSuccess(true);
    setTimeout(() => setShowCartSuccess(false), 3000);
  };

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Success Message */}
      {showCartSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
          <Check className="w-5 h-5" />
          <span>Added to cart!</span>
        </div>
      )}

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            ShopVeda
          </Link>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link> <span className="mx-2">/</span>
          <a href="/electronics" className="hover:text-purple-600 transition-colors">Electronics</a> <span className="mx-2">/</span>
          <a href="/headphones" className="hover:text-purple-600 transition-colors">Headphones</a> <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-12 text-center">
              <div className="text-9xl mb-4 animate-pulse">{product.images[selectedImage]}</div>
              <div className="text-sm text-gray-600">360° View Available</div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center text-2xl transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-purple-500 bg-purple-50 scale-110' 
                      : 'border-gray-200 bg-white hover:border-purple-300'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Info */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {product.brand}
                </span>
                <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  {product.discount}% OFF
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="text-lg font-semibold text-gray-800 ml-2">{product.rating}</span>
                </div>
                <span className="text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">${product.price}</span>
                <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
                <span className="text-lg font-semibold text-green-600">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Color</h3>
              <div className="flex space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
                      selectedColor === color
                        ? 'border-purple-500 bg-purple-50 text-purple-700 scale-105'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
              <div className="flex space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-xl border-2 font-semibold transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-purple-500 bg-purple-500 text-white scale-110'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border-2 border-gray-200 rounded-xl">
                  <button
                    onClick={() => updateQuantity(-1)}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-semibold text-lg">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-green-600 font-medium">
                  {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={addToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5 inline mr-2" />
                  Add to Cart
                </button>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isWishlisted 
                      ? 'border-red-500 bg-red-50 text-red-500' 
                      : 'border-gray-300 bg-white text-gray-600 hover:border-red-300'
                  }`}
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <a
                href="/checkout"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-300 shadow-lg text-center block"
              >
                Buy Now - Fast Checkout
              </a>
            </div>

            {/* Shipping Info */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center space-x-2 text-green-700">
                  <Truck className="w-5 h-5" />
                  <span className="font-medium">Free Shipping</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <RotateCcw className="w-5 h-5" />
                  <span className="font-medium">30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-2 text-green-700">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">2-Year Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-8">
                <button className="py-4 border-b-2 border-purple-500 text-purple-600 font-semibold">
                  Description
                </button>
                <button className="py-4 text-gray-600 hover:text-purple-600 transition-colors">
                  Specifications
                </button>
                <button className="py-4 text-gray-600 hover:text-purple-600 transition-colors">
                  Reviews ({product.reviews})
                </button>
              </nav>
            </div>
            
            <div className="p-8">
              {/* Description Tab */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Experience audio like never before with our Premium Wireless Headphones. Engineered with cutting-edge technology, 
                  these headphones deliver crystal-clear sound quality with deep bass and crisp highs that bring your music to life.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose TechVeda?</h4>
                    <div className="space-y-3 text-gray-700">
                      <p>✨ Award-winning audio technology</p>
                      <p>🏆 #1 Customer satisfaction rating</p>
                      <p>🔧 Expert customer support</p>
                      <p>🌍 Sustainable manufacturing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Write Review
              </button>
            </div>
            
            {/* Review Summary */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">{product.reviews} reviews</div>
                </div>
                
                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center space-x-2 mb-1">
                      <span className="text-sm w-3">{stars}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 rounded-full h-2" 
                          style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-10">{stars === 5 ? '70%' : stars === 4 ? '20%' : '10%'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Individual Reviews */}
            <div className="space-y-6">
              {reviews.map((review, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-gray-900">{review.name}</span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                            ✓ Verified Purchase
                          </span>
                        )}
                        <span className="text-gray-500 text-sm">{review.date}</span>
                      </div>
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Smart Watch Pro", price: 249.99, emoji: "⌚", rating: 4.7 },
              { name: "Wireless Speaker", price: 149.99, emoji: "🔊", rating: 4.9 },
              { name: "Gaming Mouse", price: 79.99, emoji: "🖱️", rating: 4.6 },
              { name: "Phone Case", price: 29.99, emoji: "📱", rating: 4.8 }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer hover:scale-105">
                <div className="text-5xl mb-4 text-center group-hover:animate-bounce">{item.emoji}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-purple-600">${item.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{item.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900">${product.price}</div>
            <div className="text-sm text-gray-600">{selectedColor}, Size {selectedSize}</div>
          </div>
          <button
            onClick={addToCart}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}