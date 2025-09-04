import { Product } from "../../model/UserModel";
import { api } from "../api/api";


export async function registerProduct(formData: FormData) {
    const res = await fetch(api.registerProduct, {
        method: "POST",
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: formData,
    });
    if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Product registration failed");
    }
    return res.json();
}


export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(api.getProduct, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || "Product fetch failed");
  }

  const data = await res.json();

  // Handle if backend returns products directly or wrapped in an object
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.products)) return data.products;

  throw new Error("Invalid product data format");
}