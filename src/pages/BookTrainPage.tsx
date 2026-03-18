import React, { useState } from 'react';
import { TrainCard } from '../components/cards/TrainCard';
export function BookTrainPage() {
  const [seatsRequested, setSeatsRequested] = useState(1);
  const [availabilityChecked, setAvailabilityChecked] = useState(false);
  const [isAvailable, setIsAvailable] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(0);
  const handleCheckAvailability = () => {
    // Simulate API check
    setAvailabilityChecked(true);
    // Mock logic: if requesting 5 or fewer seats, it's available
    // Total available is arbitrarily set to 6 for this demo
    const totalAvailable = 6;
    if (seatsRequested <= totalAvailable) {
      setIsAvailable(true);
      setAvailableSeats(totalAvailable - seatsRequested);
    } else {
      setIsAvailable(false);
      setAvailableSeats(0);
    }
  };
  const ticketPrice = 8;
  const taxes = 2;
  const total = ticketPrice * seatsRequested + taxes;
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-8 border-b pb-4">
        Book Train
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* Train Summary */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Train Details
            </h2>
            <TrainCard
              company="Sri Lanka Railways"
              trainNumber="EXP-1001"
              from="Colombo Fort"
              to="Kandy"
              deptTime="06:15 AM"
              destTime="09:30 AM"
              price="$8"
              available={true} />

          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Passenger Details
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Seats
                </label>
                <input
                  type="number"
                  name="seats"
                  min="1"
                  max="10"
                  value={seatsRequested}
                  onChange={(e) => {
                    setSeatsRequested(parseInt(e.target.value) || 1);
                    setAvailabilityChecked(false);
                  }}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary" />

              </div>
              <button
                type="button"
                onClick={handleCheckAvailability}
                className="w-full py-2 bg-gray-100 text-gray-600 rounded hover:bg-gray-200 transition font-medium">

                Check Availability
              </button>

              {availabilityChecked &&
              <div
                className={`mt-4 p-3 rounded text-center font-bold ${isAvailable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>

                  {isAvailable ?
                `Available! ${availableSeats} seats remaining` :
                'BOOKED - Not enough seats available'}
                </div>
              }
            </form>
          </div>
        </div>

        {/* Payment Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Price Summary
            </h3>
            <div className="flex justify-between mb-2 text-gray-600">
              <span>Ticket Price</span>
              <span>
                ${ticketPrice} x {seatsRequested}
              </span>
            </div>
            <div className="flex justify-between mb-4 text-gray-600">
              <span>Taxes & Fees</span>
              <span>${taxes}</span>
            </div>
            <div className="border-t pt-4 mb-6 flex justify-between font-bold text-lg text-primary">
              <span>Total</span>
              <span>${total}</span>
            </div>

            {availabilityChecked && isAvailable ?
            <button className="w-full py-3 bg-accent text-charcoal font-bold rounded-lg hover:bg-accent/90 transition shadow-md">
                Pay with PayPal
              </button> :

            <button
              disabled
              className="w-full py-3 bg-gray-200 text-gray-400 font-bold rounded-lg cursor-not-allowed">

                {availabilityChecked && !isAvailable ?
              'Not Available' :
              'Check availability first'}
              </button>
            }

            <p className="text-xs text-center text-gray-400 mt-4">
              Secure payment processing
            </p>
          </div>
        </div>
      </div>
    </div>);

}