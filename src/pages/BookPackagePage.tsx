import React from 'react';
import { FlightCard } from '../components/cards/FlightCard';
import { HotelCard } from '../components/cards/HotelCard';
export function BookPackagePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">
        Customize & Book Package
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Search Form */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Modify Search</h2>
            <form
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              action="#"
              method="POST">

              <input
                type="text"
                name="source"
                placeholder="Source"
                className="p-2 border rounded" />

              <input
                type="text"
                name="destination"
                placeholder="Destination"
                className="p-2 border rounded" />

              <input type="date" name="date" className="p-2 border rounded" />
              <button className="md:col-span-3 bg-primary text-white py-2 rounded hover:bg-primary/90">
                Update Search
              </button>
            </form>
          </div>

          {/* Options Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h3 className="font-bold text-primary mb-2">
                Your Flight Options
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Flight UL-305 (Selected)</li>
                <li>Flight UL-504</li>
                <li>Flight FA-210</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-primary mb-2">
                Your Hotel Options
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Shangri-La Colombo (Selected)</li>
                <li>Heritance Kandalama</li>
                <li>Jetwing Lighthouse</li>
              </ul>
            </div>
          </div>

          {/* Selected Items */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Selected Flight
            </h3>
            <FlightCard
              company="SriLankan Airlines"
              flightNumber="UL-305"
              from="Colombo"
              to="Chennai"
              deptTime="08:30 AM"
              destTime="10:15 AM"
              price="Included"
              seats={38} />

          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Selected Hotel
            </h3>
            <HotelCard
              name="Shangri-La Colombo"
              address="1 Galle Face, Colombo 02"
              distanceFromAirport="32 km"
              price="Included"
              amenities="Free WiFi, Infinity Pool, Spa, Ocean View"
              stars={5}
              rooms={12} />

          </div>
        </div>

        {/* Payment Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Package Summary
            </h3>
            <div className="space-y-3 mb-6 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Flight (2 Adults)</span>
                <span>$1,700</span>
              </div>
              <div className="flex justify-between">
                <span>Hotel (5 Nights)</span>
                <span>$600</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>$150</span>
              </div>
              <div className="flex justify-between text-green-600 font-medium">
                <span>Package Discount</span>
                <span>-$250</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-6 flex justify-between font-bold text-2xl text-primary">
              <span>Total</span>
              <span>$2,200</span>
            </div>

            <button className="w-full py-4 bg-accent text-charcoal font-bold text-lg rounded-lg hover:bg-accent/90 transition shadow-md transform hover:-translate-y-0.5">
              Confirm & Pay
            </button>
            <p className="text-xs text-center text-gray-400 mt-4">
              Secure payment via PayPal
            </p>
          </div>
        </div>
      </div>
    </div>);

}