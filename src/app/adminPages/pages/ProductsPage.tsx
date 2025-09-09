// "use client";

// import { useEffect, useState } from "react";
// import toast from "react-hot-toast";
// import { fetchProducts, registerProduct } from "../../services/productService/productServices";
// import { Product } from "../../model/UserModel";

// const ProductsPage = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [product, setProduct] = useState<Product[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
//   const [selectedCategory, setSelectedCategory] = useState("All Categories");

//   const [name, setName] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState<number | "">("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         setLoadingProducts(true);
//         const data = await fetchProducts();
//         setProduct(data);
//       } catch (err) {
//         toast.error(err.message);
//       } finally {
//         setLoadingProducts(false);
//       }
//     };
//     loadProducts();
//   }, []);

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//     if (category === "All Categories") {
//       setFilteredProducts(product);
//     } else {
//       setFilteredProducts(product.filter((p) => p.category === category));
//     }
//   };

//   const resetForm = () => {
//     setName("");
//     setCategory("");
//     setPrice("");
//     setDescription("");
//     setImage(null);
//   };

//   const handleSubmit = async (e: React.FormEvent) =>{
//     e.preventDefault();

//     if (!category) {
//       toast.error("Please select a category");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("category", category);
//     formData.append("price", String(price));
//     formData.append("description", description);
//     if (image) formData.append("image", image);

//     try {
//       setLoading(true);
//       const res = await registerProduct(formData);
//       toast.success(res.message, {
//         duration: 3000,
//         position: "top-right",
//         style: {
//         background: "#4ade80",
//         color: "#fff",
//         padding: "12px 20px",
//         borderRadius: "4px",
//         fontWeight: "bold",
//       },
//       });
//       resetForm();
//       setShowForm(false);
//     } catch(err) {
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h1 className="text-3xl font-bold text-gray-900">Products</h1>
//         <button
//           onClick={() => setShowForm(true)}
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 transition-colors cursor-pointer"
//         >
//           Add Product
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-xl shadow-sm border border-gray-200">
//         <div className="p-6">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">Product Inventory</h3>
//             <div className="flex space-x-2">
//               <select 
//               value={selectedCategory}
//               onChange={(e) => handleCategoryChange(e.target.value)}
//               className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
//                 <option>All Categories</option>
//                 <option>Electronics</option>
//                 <option>Clothing</option>
//                 <option>Books</option>
//               </select>
//             </div>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="border-b border-gray-200">
//                   <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-600">Stock</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
//                   <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {[
//                   { name: "Wireless Headphones", category: "Electronics", stock: 45, price: "$99.99", status: "Active" },
//                   { name: "Cotton T-Shirt", category: "Clothing", stock: 120, price: "$24.99", status: "Active" },
//                   { name: "Programming Book", category: "Books", stock: 8, price: "$39.99", status: "Low Stock" },
//                   { name: "Smart Watch", category: "Electronics", stock: 0, price: "$199.99", status: "Out of Stock" },
//                 ].map((product, index) => (
//                   <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
//                     <td className="py-3 px-4 font-medium text-gray-900">{product.name}</td>
//                     <td className="py-3 px-4 text-gray-600">{product.category}</td>
//                     <td className="py-3 px-4 text-gray-600">{product.stock}</td>
//                     <td className="py-3 px-4 text-gray-600">{product.price}</td>
//                     <td className="py-3 px-4">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs ${
//                           product.status === "Active"
//                             ? "bg-green-100 text-green-800"
//                             : product.status === "Low Stock"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-red-100 text-red-800"
//                         }`}
//                       >
//                         {product.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
          
          

          


//       {/* Modal Form */}
//       {showForm && (
//   <div className="fixed inset-0 z-50 flex items-center justify-center">
//     {/* Overlay */}
//     <div
//       className="absolute inset-0 bg-black opacity-30"
//       onClick={() => setShowForm(false)}
//     ></div>

//     {/* Modal box */}
//     <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative z-10">
//       {/* Close button */}
//       <button
//         onClick={() => setShowForm(false)}
//         className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold cursor-pointer"
//       >
//         ✕
//       </button>
//       <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
//         Register Product
//       </h2>

//       <form className="space-y-5" onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
//             placeholder="Enter product name"
//             required
//           />
//         </div>

//         <div>
//           <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//             className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
//             required
//           >
//             <option value="">Select category</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Clothing">Clothing</option>
//             <option value="Books">Books</option>
//           </select>
//         </div>

//         <div>
//           <input
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
//             className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
//             placeholder="Enter price"
//             required
//           />
//         </div>

//         <div>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="mt-1 block w-full rounded-1xl border border-gray-300 p-3"
//             placeholder="Enter description"
//             rows={3}
//             required
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
//           <input
//             type="file"
//             className="mt-1 block w-full text-sm text-gray-600"
//             accept="image/*"
//             onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 py-3 text-white font-semibold transition hover:opacity-90 cursor-pointer"
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save Product"}
//           Save Product
//         </button>
//       </form>
//     </div>
//   </div>
// )}


//     </div>
//   );
// };

// export default ProductsPage;








"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { deleteProduct, fetchProducts, registerProduct, updateProduct } from "../../services/productService/productServices";
import { Product } from "../../model/UserModel";
import Image from "next/image";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ProductsPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const MySwal = withReactContent(Swal);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);


  // Fetch products from backend
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoadingProducts(true);
        const data: Product[] = await fetchProducts(); // already typed to Product[]
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        toast.error(err.message || "Failed to fetch products");
      } finally {
        setLoadingProducts(false);
      }
    };

    loadProducts();
  }, []);

  // Filter by category
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All Categories") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  // Reset form
  const resetForm = () => {
    setName("");
    setCategory("");
    setPrice("");
    setDescription("");
    setImage(null);
  };

  // Handle form submission
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!category) {
  //     toast.error("Please select a category");
  //     return;
  //   }

  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("category", category);
  //   formData.append("price", String(price));
  //   formData.append("description", description);
  //   if (image) formData.append("image", image);

  //   try {
  //     setLoading(true);
  //     const res = await registerProduct(formData);
  //     toast.success(res.message || "Product saved successfully");

  //     // Refresh product list
  //     const updated: Product[] = await fetchProducts();
  //     setProducts(updated);
  //     setFilteredProducts(updated);

  //     resetForm();
  //     setShowForm(false);
  //   } catch (err) {
  //     toast.error(err.message || "Failed to save product");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!category) {
        toast.error("Please select a category");
        return;
      }

      const formData = new FormData();
      formData.append("name", name);
      formData.append("category", category);
      formData.append("price", String(price));
      formData.append("description", description);
      if (image) formData.append("image", image);

      try {
        setLoading(true);

        if (editingId) {
          // UPDATE existing product
          const res = await updateProduct(editingId, formData); // PUT /update-product/:id
          toast.success(res.message || "Product updated successfully", {
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
        } else {
          // CREATE new product
          const res = await registerProduct(formData); // POST /register-product
          toast.success(res.message || "Product saved successfully");
        }

        // Refresh product list
        const updatedProducts: Product[] = await fetchProducts();
        setProducts(updatedProducts);
        setFilteredProducts(updatedProducts);

        resetForm();
        setShowForm(false);
        setEditingId(null); // reset edit state
      } catch (err) {
        toast.error(err.message || "Failed to save product");
      } finally {
        setLoading(false);
      }
  };


  const handleDeleteProduct = async (id: string) => {
  const result = await MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
    buttonsStyling: false, // disable default styling
    customClass: {
      confirmButton: "bg-gradient-to-r from-purple-600 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer",
      cancelButton: "bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:opacity-80 transition ml-3 cursor-pointer" // added ml-3 for spacing
    }
  });

  if (result.isConfirmed) {
    try {
      await deleteProduct(id); // your service call
      toast.success("Product deleted successfully", {
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

      const updated = await fetchProducts();
      setProducts(updated);
      setFilteredProducts(updated);

    } catch (err) {
      toast.error(err.message || "Failed to delete product");
    }
  }
};


  const handleUpdateProduct = (product: Product) => {
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price);
    setDescription(product.description);
    setImage(null); // keep current image, optional to allow new upload
    setEditingId(product._id || null);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Products</h1>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-orange-500 transition-colors cursor-pointer"
        >
          Add Product
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Product Inventory</h3>
            <div className="flex space-x-2">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            {loadingProducts ? (
              <p className="text-center text-gray-500 py-4">Loading products...</p>
            ) : filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No products found</p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Product</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Category</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Price</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                  </tr>
                </thead>

                <tbody>
                {filteredProducts.map((p) => (
                  <tr key={p._id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900 flex items-center gap-3">


                {p.image ? (
                  <Image
                    src={p.image} // full backend URL
                    alt={p.name}
                    width={48} // 12 * 4 (Tailwind w-12)
                    height={48} // 12 * 4 (Tailwind h-12)
                    className="object-cover rounded-md border"
                    unoptimized={true} // optional: skip Next.js optimization for localhost images
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null; // prevent infinite loop
                      target.src = "/fallback.png"; // fallback in public folder
                    }}
                  />
                ) : (
                  <Image
                    src="/fallback.png"
                    alt="fallback"
                    width={48}
                    height={48}
                    className="object-cover rounded-md border"
                  />
                )}

                    </td>
                    <td className="py-3 px-4 text-gray-600 capitalize">{p.name}</td>
                    <td className="py-3 px-4 text-gray-600 capitalize">{p.category}</td>
                    <td className="py-3 px-4 text-gray-600">${p.price}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          p.status === "available"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {p.status || "available"}
                      </span>
                    </td>
                    <td className="py-3 px-4 flex gap-2">
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 cursor-pointer"
                        onClick={() => handleUpdateProduct(p)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                        onClick={() => handleDeleteProduct(p._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-30" onClick={() => setShowForm(false)}></div>
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-8 relative z-10">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Register Product</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
                placeholder="Enter product name"
                required
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
                required
              >
                <option value="">Select category</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
              </select>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
                placeholder="Enter price"
                required
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full rounded-2xl border border-gray-300 p-3"
                placeholder="Enter description"
                rows={3}
                required
              ></textarea>
              <input
                type="file"
                className="mt-1 block w-full text-sm text-gray-600"
                accept="image/*"
                onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-orange-500 py-3 text-white font-semibold transition hover:opacity-90 cursor-pointer"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
