import React from 'react';
import { Search } from 'lucide-react';
import { TrainCard } from '../components/cards/TrainCard';
import { WeatherTable } from '../components/WeatherTable';
export function TrainsPage() {
  return (
    <div className="pb-16">
      {/* Top Band */}
      <div className="bg-primary text-white py-12 text-center">
        <h1 className="text-3xl font-bold tracking-wider uppercase">
          Search Trains
        </h1>
        <p className="text-white/70 mt-2">
          Find the best train routes across Sri Lanka
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
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
                placeholder="From where?"
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
                placeholder="To where?"
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

        {/* Weather Section */}
        <WeatherTable cityName="Colombo" />

        {/* Results */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-l-4 border-accent pl-4">
          Available Tickets
        </h2>

        <div className="space-y-4">
          <TrainCard
            company="Sri Lanka Railways"
            trainNumber="EXP-1001"
            from="Colombo Fort"
            to="Kandy"
            deptTime="06:15 AM"
            destTime="09:30 AM"
            price="$8"
            onBook="/book-train" />

          <TrainCard
            company="Sri Lanka Railways"
            trainNumber="EXP-2045"
            from="Colombo Fort"
            to="Galle"
            deptTime="07:00 AM"
            destTime="09:45 AM"
            price="$6"
            onBook="/book-train" />

          <TrainCard
            company="Sri Lanka Railways"
            trainNumber="EXP-3012"
            from="Kandy"
            to="Ella"
            deptTime="08:30 AM"
            destTime="02:15 PM"
            price="$10"
            onBook="/book-train" />

          <TrainCard
            company="Sri Lanka Railways"
            trainNumber="EXP-4008"
            from="Colombo Fort"
            to="Jaffna"
            deptTime="05:45 AM"
            destTime="12:30 PM"
            price="$12"
            onBook="/book-train" />

          <TrainCard
            company="Sri Lanka Railways"
            trainNumber="EXP-5021"
            from="Galle"
            to="Matara"
            deptTime="10:00 AM"
            destTime="11:15 AM"
            price="$4"
            onBook="/book-train" />

        </div>
      </div>
    </div>);

}