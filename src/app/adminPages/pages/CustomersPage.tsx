"use client";
import { User } from "lucide-react";


const CustomersPage = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Customer
        </button>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer List</h3>
          <div className="space-y-4">
            {[
              { name: 'John Doe', email: 'john@example.com', orders: 12, spent: '$1,249.99', joined: '2024-01-15' },
              { name: 'Jane Smith', email: 'jane@example.com', orders: 8, spent: '$892.50', joined: '2024-02-20' },
              { name: 'Mike Johnson', email: 'mike@example.com', orders: 15, spent: '$2,149.99', joined: '2023-12-10' },
              { name: 'Sarah Wilson', email: 'sarah@example.com', orders: 5, spent: '$567.25', joined: '2024-03-05' },
            ].map((customer, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{customer.name}</p>
                    <p className="text-sm text-gray-600">{customer.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{customer.orders} orders</p>
                  <p className="text-sm text-gray-600">{customer.spent} spent</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

export default CustomersPage;