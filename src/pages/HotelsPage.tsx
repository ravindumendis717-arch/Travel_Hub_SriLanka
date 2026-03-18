import React from 'react';
import { Search } from 'lucide-react';
import { HotelCard } from '../components/cards/HotelCard';
import { WeatherTable } from '../components/WeatherTable';
export function HotelsPage() {
  return (
    <div className="pb-16">
      {/* Top Band */}
      <div className="bg-primary text-white py-12 text-center">
        <h1 className="text-3xl font-bold tracking-wider uppercase">
          Search Hotels
        </h1>
        <p className="text-white/70 mt-2">Luxury stays at affordable prices</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <form
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
            action="#"
            method="POST">

            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                City / Location
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Where do you want to stay?"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" />

            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" />

            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2">

              <Search size={18} />
              SEARCH
            </button>
          </form>
        </div>

        {/* Weather Section */}
        <WeatherTable cityName="Colombo" />

        {/* Results */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-accent pl-4">
          Available Hotels
        </h2>

        <div className="space-y-6">
          <HotelCard
            name="Shangri-La Colombo"
            address="1 Galle Face, Colombo 02"
            distanceFromAirport="32 km"
            price="$180"
            amenities="Free WiFi, Infinity Pool, Spa, Ocean View, Breakfast Included"
            stars={5}
            onBook="/book-hotel" />

          <HotelCard
            name="Heritance Kandalama"
            address="Dambulla, Central Province"
            distanceFromAirport="150 km"
            price="$140"
            amenities="Infinity Pool, Ayurveda Spa, Nature Trails, Lake View"
            stars={5}
            onBook="/book-hotel" />

          <HotelCard
            name="Jetwing Lighthouse"
            address="Dadella, Galle"
            distanceFromAirport="130 km"
            price="$95"
            amenities="Beachfront, Pool, Restaurant, Bar, Free WiFi"
            stars={4}
            onBook="/book-hotel" />

        </div>
      </div>
    </div>);

}