"use client";
import React from "react";
import { Home, Package, ShoppingCart, Users, BarChart3, Settings, User, X, Menu } from "lucide-react";

interface SidebarProps {
  sidebarOpen: boolean;
  activePage: string;
  setActivePage: (page: string) => void;
  toggleSidebar: () => void;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "products", label: "Products", icon: Package },
  { id: "orders", label: "Orders", icon: ShoppingCart },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export default function Sidebar({ sidebarOpen, activePage, setActivePage, toggleSidebar }: SidebarProps) {
  return (
    <div className={`bg-white shadow-xl transition-all duration-300 ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {sidebarOpen && <h2 className="text-xl font-bold text-gray-900">E-Store Admin</h2>}
        <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg ${
                    activePage === item.id
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {sidebarOpen && <span className="font-medium">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {sidebarOpen && (
        <div className="p-4 border-t border-gray-200 flex items-center space-x-3">
          <div className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-gray-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Admin User</p>
            <p className="text-xs text-gray-500">admin@store.com</p>
          </div>
        </div>
      )}
    </div>
  );
}
