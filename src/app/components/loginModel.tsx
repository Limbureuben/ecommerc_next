// components/AuthModal.tsx
"use client";

import { X } from "lucide-react";
import { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true); // true = login, false = register

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-[700px]">

        {/* Show login or register based on state */}
        {isLogin ? (
          <LoginForm onSwitchToRegister={() => setIsLogin(false)} onClose={onClose} />
        ) : (
          <RegisterForm onSwitchToLogin={() => setIsLogin(true)} onClose={onClose} />
        )}
      </div>
    </div>
  );
}



