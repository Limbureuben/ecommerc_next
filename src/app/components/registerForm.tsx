import { useState } from "react";
import { registerUser } from "../services/userServices/UserService";
import toast from "react-hot-toast";

interface RegisterFormProps {
  onSwitchToLogin: () => void;
  onClose: () => void;
}

export default function RegisterForm({ onSwitchToLogin, onClose }: RegisterFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Password do not match");
      return
    }
    try {
      const result = await registerUser({ email, password, confirmPassword });
      console.log('The user data', result);
      toast.success("Registration successful!", {
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
      setTimeout(() => {
        onSwitchToLogin();
      }, 3000)
    } catch(err) {
      toast.error(err.message)
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
        Create account
      </h2>

      <form className="space-y-5" onSubmit={handleRegister}>
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
            className="mt-1 w-full rounded-1xl border border-gray-300 p-3 "
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password confirmation"
            className="mt-1 w-full rounded-1xl border border-gray-300 p-3 "
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-1xl bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold transition cursor-pointer"
        >
          Register
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-1 border-gray-300" />
        <span className="px-3 text-gray-500 text-sm">OR</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <button
          onClick={onSwitchToLogin}
          className="text-purple-600 font-semibold hover:underline cursor-pointer"
        >
          Login
        </button>
      </p>
    </div>
  );
}
