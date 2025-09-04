export interface RegisterData {
    email: string,
    password: string,
    confirmPassword: string
}

export interface LoginData {
    email: string,
    password: string
}


export interface Product {
  _id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image?: string;
  status?: "available" | "purchased";
  createdAt?: string;
  updatedAt?: string;
}


// model/UserModel.ts
export interface ProfileData {
  _id: string;
  name: string;
  email: string;
  role?: string;
}
