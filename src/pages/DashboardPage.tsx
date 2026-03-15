import React from 'react';
import { Link } from 'react-router-dom';
import { Train, Hotel, Package } from 'lucide-react';
export function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8">My Bookings</h1>

      <div className="space-y-12">
        {/* Trains Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Train className="text-secondary" size={20} />
              Train Bookings
            </h2>
            <Link
              to="/trains"
              className="text-sm font-medium text-primary hover:text-secondary">

              Book New Train &rarr;
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Train Number</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Seats</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">EXP-1001</td>
                  <td className="px-6 py-4">2025-03-15</td>
                  <td className="px-6 py-4">2</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/cancel-train"
                      className="text-red-500 hover:text-red-700 font-medium text-xs border border-red-200 px-3 py-1 rounded hover:bg-red-50">

                      CANCEL
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">EXP-2045</td>
                  <td className="px-6 py-4">2025-04-01</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/cancel-train"
                      className="text-red-500 hover:text-red-700 font-medium text-xs border border-red-200 px-3 py-1 rounded hover:bg-red-50">

                      CANCEL
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Hotel className="text-secondary" size={20} />
              Hotel Bookings
            </h2>
            <Link
              to="/hotels"
              className="text-sm font-medium text-primary hover:text-secondary">

              Book New Hotel &rarr;
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Hotel Name</th>
                  <th className="px-6 py-3">Check-in Date</th>
                  <th className="px-6 py-3">Rooms</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">Shangri-La Colombo</td>
                  <td className="px-6 py-4">2025-03-16</td>
                  <td className="px-6 py-4">1</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/cancel-hotel"
                      className="text-red-500 hover:text-red-700 font-medium text-xs border border-red-200 px-3 py-1 rounded hover:bg-red-50">

                      CANCEL
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Packages Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
              <Package className="text-secondary" size={20} />
              Package Bookings
            </h2>
            <Link
              to="/packages"
              className="text-sm font-medium text-primary hover:text-secondary">

              Book New Package &rarr;
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white uppercase text-xs">
                <tr>
                  <th className="px-6 py-3">Flight</th>
                  <th className="px-6 py-3">Hotel</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">UL-504</td>
                  <td className="px-6 py-4">Heritance Kandalama</td>
                  <td className="px-6 py-4">2025-05-10</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/cancel-package"
                      className="text-red-500 hover:text-red-700 font-medium text-xs border border-red-200 px-3 py-1 rounded hover:bg-red-50">

                      CANCEL
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>);

}