"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { loginUser } from "../services/userServices/UserService";
import toast from "react-hot-toast";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";


interface LoginFormProps {
  onSwitchToRegister: () => void;
  onClose: () => void;
}

export default function LoginForm({ onSwitchToRegister, onClose }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await loginUser({email, password}) as {
        success: boolean;
        token: string;
        user: { role: string };
        message: string;
      };
      if (!result.success) throw new Error(result.message);

      // dispatch(setAuth({ token: result.token, role: result.user.role }));

      localStorage.setItem("token", result.token);

      setEmail("");
      setPassword("");
      const role = result.user.role;
      console.log('The user role', role);
      if (role === "staff") {
      router.push("/admin/dashboard");
      } else {
        router.push("/authPage/landing");
      }
      
      toast.success(result.message, {
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
    } catch(err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="relative w-full max-w-lg rounded-1xl bg-white p-10 shadow-2xl">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white rounded-full shadow-md p-1 hover:bg-gray-100"
      >
        X
      </button>

      <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Login
      </h2>

      <form className="space-y-5" onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="mt-1 w-full rounded-1xl border border-gray-300 p-3"
            value={email}
            onChange={(e) =>setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-1 w-full rounded-1xl border border-gray-300 p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-1xl bg-gradient-to-r from-purple-600 to-orange-500 py-3 text-white font-semibold transition cursor-pointer"
        >
          Login
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* Continue with Google */}
      <button
        type="button"
        onClick={() => signIn("google", { callbackUrl: "/authPage/login" })}
        className="w-full flex items-center justify-center gap-3 rounded-1xl border border-gray-300 py-3 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
      >
        <FcGoogle size={22} />
        Continue with Google
      </button>

      <p className="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?{" "}
        <button
          onClick={onSwitchToRegister}
          className="text-purple-600 font-semibold hover:underline cursor-pointer"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}
