"use client";
import { DollarSign, Package2, ShoppingCart, UserCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchStats } from "../../services/userServices/UserService";
import toast from "react-hot-toast";

interface Stats {
  totalUsers: number;
  totalProduct: number;
}


  export default function DashboardPage() {
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const getStats = async () => {
      try {
        const data = await fetchStats(); // call your service
        setStats(data);                  // store in state
      } catch (err) {
        toast.error(err.message || "Failed to fetch stats");
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  if (loading) {
    return <p className="text-gray-500">Loading stats...</p>;
  }
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <div className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
        {stats ? (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-bold text-gray-900">$54,239</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
            <p className="text-xs text-green-600 mt-2">+12% from last month</p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Orders</p>
                <p className="text-2xl font-bold text-gray-900">1,429</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-blue-600" />
              </div>
            </div>
            <p className="text-xs text-blue-600 mt-2">+8% from last month</p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Products</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalProduct}</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Package2 className="h-6 w-6 text-purple-600" />
              </div>
            </div>
            <p className="text-xs text-purple-600 mt-2">+10 new this week</p>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Customers</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <UserCheck className="h-6 w-6 text-orange-600" />
              </div>
            </div>
            <p className="text-xs text-orange-600 mt-2">+5% from last month</p>
          </div>
        </div>
  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h3>
            <div className="space-y-4">
              {[
                { id: '#12847', customer: 'John Doe', amount: '$129.99', status: 'Completed' },
                { id: '#12846', customer: 'Jane Smith', amount: '$89.50', status: 'Processing' },
                { id: '#12845', customer: 'Mike Johnson', amount: '$249.99', status: 'Shipped' },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                  <div>
                    <p className="font-medium text-gray-900">{order.id}</p>
                    <p className="text-sm text-gray-600">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
            <div className="space-y-4">
              {[
                { name: 'Wireless Headphones', sales: 234, revenue: '$23,400' },
                { name: 'Smart Watch', sales: 189, revenue: '$18,900' },
                { name: 'Laptop Stand', sales: 156, revenue: '$7,800' },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sales} sold</p>
                  </div>
                  <p className="font-medium text-gray-900">{product.revenue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </>
        ) : (
        <p className="text-red-500">No stats available</p>
        )}
      </div>
    );
  }