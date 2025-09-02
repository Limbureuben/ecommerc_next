"use client";
import Link from "next/link";
import { useState } from "react";
import AuthModal from "./loginModel";

export default function Landing() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-300 rounded-full animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-green-300 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-20 md:py-32 relative z-10">
          {/* Text */}
          <div className="md:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                New Collection Available
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                ShopVeda
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-yellow-100">
                Discover. Shop. Love.
              </h2>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
                Experience the future of online shopping with curated collections, 
                lightning-fast delivery, and unbeatable prices on everything you love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">

            <button
            onClick={() => setIsLoginOpen(true)}
            className="px-10 py-4 bg-white/20 border-2 border-white/50 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 cursor-pointer"
        >
            Start Shopping
        </button>

            

              <Link
                href="#categories"
                className="px-8 py-4 border-2 border-white/50 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Browse Categories
              </Link>
            </div>

            {/* Stats */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">50K+</div>
                <div className="text-sm text-gray-200">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">10K+</div>
                <div className="text-sm text-gray-200">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300">4.9★</div>
                <div className="text-sm text-gray-200">Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Graphics */}
          <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 flex items-center justify-center shadow-2xl">
                <div className="text-8xl animate-bounce">🛒</div>
              </div>

              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl animate-spin shadow-lg">
                👕
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-2xl flex items-center justify-center text-2xl animate-pulse shadow-lg">
                👟
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-blue-400 rounded-xl flex items-center justify-center text-xl animate-bounce shadow-lg">
                📱
              </div>
              <div className="absolute bottom-1/4 -left-8 w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center text-xl animate-pulse shadow-lg">
                🎮
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 container mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing products across all categories with exclusive deals and fast shipping
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Fashion", desc: "Trendy clothes", color: "from-pink-500 to-rose-500" },
            { title: "Electronics", desc: "Latest gadgets & tech", color: "from-blue-500 to-cyan-500" },
            { title: "Home & Living", desc: "Beautiful home essentials", color: "from-green-500 to-emerald-500" },
            { title: "Gaming", desc: "Games & entertainment", color: "from-purple-500 to-violet-500" }
          ].map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className={`bg-gradient-to-br ${category.color} p-8 rounded-1xl text-white transform group-hover:scale-105 transition-all duration-300 shadow-lg group-hover:shadow-2xl`}>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-100 group-hover:text-white transition-colors">{category.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-32 h-32 border-4 border-white rounded-full animate-spin"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 border-4 border-yellow-300 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-6 md:px-20 text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Transform Your Shopping?
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
            Join millions of satisfied customers and discover why ShopVeda is the future of e-commerce
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">

            <Link
              href="/auth/register"
              className="px-10 py-4 bg-white text-emerald-600 font-bold text-xl rounded-xl hover:bg-yellow-100 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Create Account
            </Link>


            <button
          onClick={() => setIsLoginOpen(true)}
          className="px-10 py-4 border-2 border-white/50 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
        >
          Shop as Guest
        </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid gap-8 md:grid-cols-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                ShopVeda
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Your premier destination for quality products, unbeatable prices, and exceptional service.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/shop" className="hover:text-white transition">Shop All</Link></li>
                <li><Link href="/deals" className="hover:text-white transition">Best Deals</Link></li>
                <li><Link href="/new-arrivals" className="hover:text-white transition">New Arrivals</Link></li>
                <li><Link href="/gift-cards" className="hover:text-white transition">Gift Cards</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="/returns" className="hover:text-white transition">Returns</Link></li>
                <li><Link href="/shipping" className="hover:text-white transition">Shipping Info</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <div className="flex space-x-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">f</div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">📷</div>
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">🐦</div>
              </div>
              <p className="text-gray-400 text-sm">
                Follow us for exclusive deals and updates!
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>© 2025 ShopVeda. All rights reserved. Made with ❤️ for amazing shoppers</p>
          </div>
        </div>
      </footer>
      <AuthModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </main>
  );
}
