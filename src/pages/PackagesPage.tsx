import React, { Component } from 'react';
import { Search } from 'lucide-react';
import { FlightCard } from '../components/cards/FlightCard';
import { HotelCard } from '../components/cards/HotelCard';
import { PlaceCard } from '../components/cards/PlaceCard';
import { Link } from 'react-router-dom';
export function PackagesPage() {
  return (
    <div className="pb-16">
      <div className="bg-primary text-white py-12 text-center">
        <h1 className="text-3xl font-bold tracking-wider uppercase">
          Holiday Packages
        </h1>
        <p className="text-white/70 mt-2">
          Complete travel solutions for your perfect vacation
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Search Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-100">
          <form
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end"
            action="#"
            method="POST">

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Source
              </label>
              <input
                type="text"
                name="source"
                id="source"
                placeholder="From"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" />

            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                placeholder="To"
                className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary bg-gray-50" />

            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                Date
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

        {/* Package Components */}
        <div className="space-y-12">
          {/* Flights Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Included Flights
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <FlightCard
                company="SriLankan Airlines"
                flightNumber="UL-305"
                from="Colombo"
                to="Kandy (via transfer)"
                deptTime="09:30 AM"
                destTime="01:00 PM"
                price="Included" />

            </div>
          </section>

          {/* Hotels Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Included Hotels
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <HotelCard
                name="Heritance Kandalama"
                address="Dambulla, Central Province"
                distanceFromAirport="150 km"
                price="Included"
                amenities="Infinity Pool, Ayurveda Spa, Nature Trails, Breakfast"
                stars={5} />

            </div>
          </section>

          {/* Places Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-secondary rounded-full"></span>
              Places to Visit
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PlaceCard
                name="Sigiriya Rock Fortress"
                description="An ancient rock fortress and palace ruin rising 200m above the surrounding plains, a UNESCO World Heritage Site." />

              <PlaceCard
                name="Temple of the Tooth"
                description="A sacred Buddhist temple in Kandy housing the relic of the tooth of the Buddha." />

              <PlaceCard
                name="Galle Fort"
                description="A historic fortification on the southwestern coast, blending European architecture with South Asian traditions." />

            </div>
          </section>

          {/* CTA */}
          <div className="flex justify-center pt-8">
            <Link
              to="/book-package"
              className="px-12 py-4 bg-accent text-charcoal font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-accent/90 transition transform hover:-translate-y-1">

              Book This Package
            </Link>
          </div>
        </div>
      </div>
    </div>);

}