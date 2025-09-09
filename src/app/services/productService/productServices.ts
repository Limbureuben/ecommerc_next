import { CheckoutPayload, Product } from "../../model/UserModel";
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
  if (Array.isArray(data)) return data;
  if (Array.isArray(data.products)) return data.products;
  throw new Error("Invalid product data format");
}



export async function deleteProduct(id: string) {
    const res = await fetch(api.deleteProduct + `/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Product deletion failed");
    }
}


export async function updateProduct(id: string, formData: FormData) {
    const res = await fetch(api.updateProduct + `/${id}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: formData,
    });
    if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Product update failed");
    }
    return res.json();
}



export async function startCheckout(payload: CheckoutPayload) {
  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let msg = "Failed to create checkout session";
    try {
      const err = await res.json();
      msg = err?.message || msg;
    } catch {}
    throw new Error(msg);
  }

  return res.json(); // { url: string }
}