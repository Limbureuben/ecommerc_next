// "use client";
// import React, { useState } from 'react';
// import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, Minus, Plus, Check } from 'lucide-react';
// import Link from "next/link";

// export default function ProductPage() {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedSize, setSelectedSize] = useState('M');
//   const [selectedColor, setSelectedColor] = useState('Blue');
//   const [quantity, setQuantity] = useState(1);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [showCartSuccess, setShowCartSuccess] = useState(false);

//   const product = {
//     name: "Premium Wireless Headphones",
//     brand: "TechVeda",
//     price: 299.99,
//     originalPrice: 399.99,
//     discount: 25,
//     rating: 4.8,
//     reviews: 2847,
//     inStock: true,
//     images: [
//       "🎧", "🎵", "🔊", "📱"
//     ],
//     colors: ['Blue', 'Black', 'White', 'Red'],
//     sizes: ['S', 'M', 'L', 'XL'],
//     features: [
//       "Active Noise Cancellation",
//       "30-hour battery life",
//       "Wireless & Bluetooth 5.0",
//       "Premium sound quality",
//       "Comfortable over-ear design",
//       "Quick charge technology"
//     ]
//   };

//   const reviews = [
//     { name: "Alex M.", rating: 5, text: "Incredible sound quality! Best headphones I've ever owned.", date: "2 days ago", verified: true },
//     { name: "Sarah K.", rating: 5, text: "The noise cancellation is amazing. Perfect for work and travel.", date: "1 week ago", verified: true },
//     { name: "David L.", rating: 4, text: "Great value for money. Very comfortable for long listening sessions.", date: "2 weeks ago", verified: true }
//   ];

//   const addToCart = () => {
//     const newItem = {
//       id: Date.now(),
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       color: selectedColor,
//       quantity: quantity,
//       image: product.images[0]
//     };

//     setShowCartSuccess(true);
//     setTimeout(() => setShowCartSuccess(false), 3000);
//   };

//   const updateQuantity = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
//       {/* Success Message */}
//       {showCartSuccess && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-bounce">
//           <Check className="w-5 h-5" />
//           <span>Added to cart!</span>
//         </div>
//       )}

//       {/* Header */}
//       <header className="bg-white shadow-sm border-b">
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//           <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//             ShopVeda
//           </Link>
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <ShoppingCart className="w-6 h-6 text-gray-600" />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
//                   {cartItems.length}
//                 </span>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-6 py-8">
//         {/* Breadcrumb */}
//         <nav className="mb-8 text-sm text-gray-600">
//           <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link> <span className="mx-2">/</span>
//           <a href="/electronics" className="hover:text-purple-600 transition-colors">Electronics</a> <span className="mx-2">/</span>
//           <a href="/headphones" className="hover:text-purple-600 transition-colors">Headphones</a> <span className="mx-2">/</span>
//           <span className="text-gray-900 font-medium">{product.name}</span>
//         </nav>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Product Images */}
//           <div className="space-y-6">
//             {/* Main Image */}
//             <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-12 text-center">
//               <div className="text-9xl mb-4 animate-pulse">{product.images[selectedImage]}</div>
//               <div className="text-sm text-gray-600">360° View Available</div>
//             </div>
            
//             {/* Thumbnail Images */}
//             <div className="flex space-x-4 justify-center">
//               {product.images.map((img, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedImage(index)}
//                   className={`w-20 h-20 rounded-xl border-2 flex items-center justify-center text-2xl transition-all duration-300 ${
//                     selectedImage === index 
//                       ? 'border-purple-500 bg-purple-50 scale-110' 
//                       : 'border-gray-200 bg-white hover:border-purple-300'
//                   }`}
//                 >
//                   {img}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-8">
//             {/* Product Info */}
//             <div>
//               <div className="flex items-center space-x-2 mb-2">
//                 <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
//                   {product.brand}
//                 </span>
//                 <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
//                   {product.discount}% OFF
//                 </span>
//               </div>
              
//               <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                 {product.name}
//               </h1>
              
//               {/* Rating */}
//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex items-center space-x-1">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//                     />
//                   ))}
//                   <span className="text-lg font-semibold text-gray-800 ml-2">{product.rating}</span>
//                 </div>
//                 <span className="text-gray-600">({product.reviews.toLocaleString()} reviews)</span>
//               </div>
              
//               {/* Price */}
//               <div className="flex items-center space-x-4 mb-8">
//                 <span className="text-4xl font-bold text-gray-900">${product.price}</span>
//                 <span className="text-2xl text-gray-500 line-through">${product.originalPrice}</span>
//                 <span className="text-lg font-semibold text-green-600">Save ${(product.originalPrice - product.price).toFixed(2)}</span>
//               </div>
//             </div>

//             {/* Color Selection */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Color</h3>
//               <div className="flex space-x-3">
//                 {product.colors.map((color) => (
//                   <button
//                     key={color}
//                     onClick={() => setSelectedColor(color)}
//                     className={`px-6 py-3 rounded-xl border-2 font-medium transition-all duration-300 ${
//                       selectedColor === color
//                         ? 'border-purple-500 bg-purple-50 text-purple-700 scale-105'
//                         : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Selection */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Size</h3>
//               <div className="flex space-x-3">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`w-12 h-12 rounded-xl border-2 font-semibold transition-all duration-300 ${
//                       selectedSize === size
//                         ? 'border-purple-500 bg-purple-500 text-white scale-110'
//                         : 'border-gray-200 bg-white text-gray-700 hover:border-purple-300'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantity</h3>
//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center border-2 border-gray-200 rounded-xl">
//                   <button
//                     onClick={() => updateQuantity(-1)}
//                     className="p-3 hover:bg-gray-100 transition-colors rounded-l-xl"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="px-6 py-3 font-semibold text-lg">{quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(1)}
//                     className="p-3 hover:bg-gray-100 transition-colors rounded-r-xl"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>
//                 <span className="text-green-600 font-medium">
//                   {product.inStock ? '✅ In Stock' : '❌ Out of Stock'}
//                 </span>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="space-y-4">
//               <div className="flex space-x-4">
//                 <button
//                   onClick={addToCart}
//                   disabled={!product.inStock}
//                   className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <ShoppingCart className="w-5 h-5 inline mr-2" />
//                   Add to Cart
//                 </button>
                
//                 <button
//                   onClick={() => setIsWishlisted(!isWishlisted)}
//                   className={`p-4 rounded-xl border-2 transition-all duration-300 ${
//                     isWishlisted 
//                       ? 'border-red-500 bg-red-50 text-red-500' 
//                       : 'border-gray-300 bg-white text-gray-600 hover:border-red-300'
//                   }`}
//                 >
//                   <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
//                 </button>
//               </div>
              
//               <a
//                 href="/checkout"
//                 className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-300 shadow-lg text-center block"
//               >
//                 Buy Now - Fast Checkout
//               </a>
//             </div>

//             {/* Shipping Info */}
//             <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
//                 <div className="flex items-center space-x-2 text-green-700">
//                   <Truck className="w-5 h-5" />
//                   <span className="font-medium">Free Shipping</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-green-700">
//                   <RotateCcw className="w-5 h-5" />
//                   <span className="font-medium">30-Day Returns</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-green-700">
//                   <Shield className="w-5 h-5" />
//                   <span className="font-medium">2-Year Warranty</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Product Details Tabs */}
//         <div className="mt-16">
//           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//             <div className="border-b border-gray-200">
//               <nav className="flex space-x-8 px-8">
//                 <button className="py-4 border-b-2 border-purple-500 text-purple-600 font-semibold">
//                   Description
//                 </button>
//                 <button className="py-4 text-gray-600 hover:text-purple-600 transition-colors">
//                   Specifications
//                 </button>
//                 <button className="py-4 text-gray-600 hover:text-purple-600 transition-colors">
//                   Reviews ({product.reviews})
//                 </button>
//               </nav>
//             </div>
            
//             <div className="p-8">
//               {/* Description Tab */}
//               <div className="space-y-6">
//                 <h3 className="text-2xl font-bold text-gray-900">Product Description</h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   Experience audio like never before with our Premium Wireless Headphones. Engineered with cutting-edge technology, 
//                   these headphones deliver crystal-clear sound quality with deep bass and crisp highs that bring your music to life.
//                 </p>
                
//                 <div className="grid md:grid-cols-2 gap-8">
//                   <div>
//                     <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
//                     <ul className="space-y-3">
//                       {product.features.map((feature, index) => (
//                         <li key={index} className="flex items-center space-x-3">
//                           <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
//                           <span className="text-gray-700">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
//                     <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose TechVeda?</h4>
//                     <div className="space-y-3 text-gray-700">
//                       <p>✨ Award-winning audio technology</p>
//                       <p>🏆 #1 Customer satisfaction rating</p>
//                       <p>🔧 Expert customer support</p>
//                       <p>🌍 Sustainable manufacturing</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Reviews Section */}
//         <div className="mt-12">
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <div className="flex justify-between items-center mb-8">
//               <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
//               <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
//                 Write Review
//               </button>
//             </div>
            
//             {/* Review Summary */}
//             <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8">
//               <div className="flex items-center space-x-6">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
//                   <div className="flex justify-center space-x-1 mb-2">
//                     {[...Array(5)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//                       />
//                     ))}
//                   </div>
//                   <div className="text-sm text-gray-600">{product.reviews} reviews</div>
//                 </div>
                
//                 <div className="flex-1">
//                   {[5, 4, 3, 2, 1].map((stars) => (
//                     <div key={stars} className="flex items-center space-x-2 mb-1">
//                       <span className="text-sm w-3">{stars}</span>
//                       <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                       <div className="flex-1 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-yellow-400 rounded-full h-2" 
//                           style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 10}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-sm text-gray-600 w-10">{stars === 5 ? '70%' : stars === 4 ? '20%' : '10%'}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             {/* Individual Reviews */}
//             <div className="space-y-6">
//               {reviews.map((review, index) => (
//                 <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
//                   <div className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
//                       {review.name.charAt(0)}
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center space-x-2 mb-2">
//                         <span className="font-semibold text-gray-900">{review.name}</span>
//                         {review.verified && (
//                           <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
//                             ✓ Verified Purchase
//                           </span>
//                         )}
//                         <span className="text-gray-500 text-sm">{review.date}</span>
//                       </div>
//                       <div className="flex space-x-1 mb-2">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
//                           />
//                         ))}
//                       </div>
//                       <p className="text-gray-700">{review.text}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-16">
//           <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h3>
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[
//               { name: "Smart Watch Pro", price: 249.99, emoji: "⌚", rating: 4.7 },
//               { name: "Wireless Speaker", price: 149.99, emoji: "🔊", rating: 4.9 },
//               { name: "Gaming Mouse", price: 79.99, emoji: "🖱️", rating: 4.6 },
//               { name: "Phone Case", price: 29.99, emoji: "📱", rating: 4.8 }
//             ].map((item, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group cursor-pointer hover:scale-105">
//                 <div className="text-5xl mb-4 text-center group-hover:animate-bounce">{item.emoji}</div>
//                 <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold text-purple-600">${item.price}</span>
//                   <div className="flex items-center space-x-1">
//                     <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                     <span className="text-sm text-gray-600">{item.rating}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Sticky Add to Cart Bar (Mobile) */}
//       <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-40">
//         <div className="flex items-center justify-between">
//           <div>
//             <div className="text-2xl font-bold text-gray-900">${product.price}</div>
//             <div className="text-sm text-gray-600">{selectedColor}, Size {selectedSize}</div>
//           </div>
//           <button
//             onClick={addToCart}
//             className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Product } from "../model/UserModel";
// import { fetchProducts, startCheckout } from "../services/productService/productServices";
// import toast from "react-hot-toast";


// export default function ShopPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [payingId, setPayingId] = useState<string | null>(null);

//   useEffect(() => {
//     const load = async () => {
//       try {
//         const data = await fetchProducts();
//         setProducts(Array.isArray(data) ? data : ((data as { products?: Product[] })?.products ?? []));
//       } catch (err) {
//         toast.error(err?.message || "Failed to load products");
//       } finally {
//         setLoading(false);
//       }
//     };
//     load();
//   }, []);

//   const handleBuy = async (p: Product) => {
//     try {
//       setPayingId(p._id);
//       // send minimal info; backend/route will build a real Stripe session
//       const session = await startCheckout({
//         productId: p._id,
//         name: p.name,
//         // Stripe expects amount in cents:
//         amountCents: Math.round(Number(p.price) * 100),
//         image: p.image || null,
//       });

//       if (!session?.url) throw new Error("Failed to start checkout");
//       window.location.href = session.url; // redirect to Stripe Checkout
//     } catch (err) {
//       toast.error(err?.message || "Payment init failed");
//     } finally {
//       setPayingId(null);
//     }
//   };

//   if (loading) {
//     return <div className="p-6 text-gray-500">Loading products…</div>;
//   }

//   if (!products.length) {
//     return <div className="p-6 text-gray-500">No products available</div>;
//   }

//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">Shop</h1>

//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <li
//             key={p._id}
//             className="bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col"
//           >
//             <div className="relative w-full h-48">
//               <Image
//                 src={p.image || "/fallback.png"}
//                 alt={p.name}
//                 fill
//                 className="object-cover"
//                 unoptimized // fine for localhost; remove when you add a remotePatterns domain
//                 onError={(e) => {
//                   // fallback if remote 404s
//                   const el = e.currentTarget as HTMLImageElement;
//                   el.src = "/fallback.png";
//                 }}
//               />
//             </div>

//             <div className="p-4 flex-1 flex flex-col">
//               <div className="flex items-start justify-between gap-3">
//                 <h2 className="text-lg font-semibold line-clamp-2">{p.name}</h2>
//                 <span className="text-xl font-bold">${p.price}</span>
//               </div>

//               <p className="text-sm text-gray-600 mt-2 line-clamp-3">
//                 {p.description}
//               </p>

//               <div className="mt-auto pt-4">
//                 <button
//                   onClick={() => handleBuy(p)}
//                   disabled={!!payingId}
//                   className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-orange-500 text-white py-2.5 font-semibold hover:opacity-90 disabled:opacity-60"
//                 >
//                   {payingId === p._id ? "Redirecting…" : "Buy Now"}
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }








"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../model/UserModel";
import { fetchProducts, startCheckout } from "../services/productService/productServices";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Product Detail Modal Component
function ProductModal({ product, isOpen, onClose, onBuy, payingId }: {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onBuy: (product: Product) => void;
  payingId: string | null;
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div className="relative">
            <div className="relative w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
            <Image
              src={product.image || "/fallback.png"}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-500"
              unoptimized
            />
          </div>
            
            {/* Image Decorations */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse" />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                  Tsh {product.price}
                </span>
                <div className="flex items-center text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-500 text-sm">(4.8)</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || "No description available for this product."}
                </p>
              </div>

              {/* Product Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium Quality Material
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fast & Free Shipping
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => onBuy(product)}
                disabled={!!payingId}
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 text-white py-3 px-8 rounded-1xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 transition-all duration-200 cursor-pointer"
              >
                {payingId === product._id ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Redirecting to Checkout...
                  </div>
                ) : (
                  <>Buy Now - Tsh {product.price}</>
                )}
              </button>
              
              <button className="w-full border-2 border-gray-200 text-gray-700 py-3 px-8 rounded-1xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [payingId, setPayingId] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProducts();
        setProducts(Array.isArray(data) ? data : ((data as { products?: Product[] })?.products ?? []));
      } catch (err) {
        toast.error(err?.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleBuy = async (p: Product) => {
    try {
      setPayingId(p._id);
      const session = await startCheckout({
        productId: p._id,
        name: p.name,
        amountCents: Math.round(Number(p.price) * 100),
        image: p.image || null,
      });
      if (!session?.url) throw new Error("Failed to start checkout");
      window.location.href = session.url;
    } catch (err) {
      toast.error(err?.message || "Payment init failed");
    } finally {
      setPayingId(null);
    }
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  function handleLogout() {
  localStorage.removeItem("token");
  toast.success('Logout success', {
        duration: 3000,
        position: "top-right",
        style: {
        background: "#4ade80",
        color: "#fff",
        padding: "12px 20px",
        borderRadius: "4px",
        fontWeight: "bold",
      },
  });
 router.push("/authPage/landing");
}

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-4" />
          <p className="text-xl font-semibold text-gray-600">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No Products Available</h2>
          <p className="text-gray-600">Check back later for amazing deals!</p>
        </div>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50">
    {/* 🌟 Global Header */}
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo / Title */}
        <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
          Premium Shop
        </h2>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Logout */}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-md transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </header>

    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-400 rounded-full opacity-10 animate-pulse" />
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-10 animate-pulse" />
      </div>
      
      <div className="relative px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Premium Shop
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our curated collection of premium products, crafted with excellence and designed to elevate your lifestyle.
        </p>
        
        {/* Stats Bar */}
        <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{products.length}+</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">4.8★</div>
            <div className="text-sm text-gray-600">Rating</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">10K+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">Free</div>
            <div className="text-sm text-gray-600">Shipping</div>
          </div>
        </div>
      </div>
    </div>

    <div className="px-6 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer"
              onClick={() => openProductDetail(product)}
            >
              {/* Product Image */}
              <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                <Image
                  src={product.image || "/fallback.png"}
                  alt={product.name}
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                  onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement;
                    el.src = "/fallback.png";
                  }}
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {product.description || "Premium quality product."}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
                    Tsh {product.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuy(product);
                    }}
                    disabled={!!payingId}
                    className="bg-gradient-to-r from-purple-600 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-md disabled:opacity-60 transition-all"
                  >
                    {payingId === product._id ? "..." : "Buy"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Product Detail Modal */}
    <ProductModal
      product={selectedProduct}
      isOpen={isModalOpen}
      onClose={closeModal}
      onBuy={handleBuy}
      payingId={payingId}
    />
  </div>
);

}