'use client';

import { useState } from 'react';

const hotels = [
  {
    id: 1,
    name: 'The Savoy',
    location: 'London',
    rating: 5,
    price: '₦250,000',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 2,
    name: 'Mandarin Oriental',
    location: 'Bangkok',
    rating: 5,
    price: '₦180,000',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 3,
    name: 'Burj Al Arab',
    location: 'Dubai',
    rating: 5,
    price: '₦350,000',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
  },
];

export default function HotelsPage() {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('1 Guest');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      
      <section className="relative bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Hotels Page</h1>
          <p className="text-lg text-slate-200 font-medium">Find your perfect stay</p>
        </div>

        <div className="relative z-20 max-w-5xl mx-auto mt-10">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-slate-100 text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Destination</label>
              <input
                type="text"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
\
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Check in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>
\
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Check out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Guests</label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>

            <div>
              <button className="w-full py-2.5 px-6 bg-teal-800 hover:bg-teal-900 text-white font-bold rounded-lg transition-colors shadow-sm text-sm h-[42px]">
                Search
              </button>
            </div>

          </div>
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-2xl font-bold text-slate-900">Recommended hotels</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div 
              key={hotel.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Hotel Image */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">
                    {hotel.name}
                  </span>
                </div>

                {/* Hotel Details */}
                <div className="p-5 space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{hotel.name}</h3>
                  <p className="text-sm text-slate-500">{hotel.location}</p>
                  
                  {/* Star Rating */}
                  <div className="flex text-amber-400 text-sm tracking-wider">
                    {'★'.repeat(hotel.rating)}
                  </div>

                  {/* Price */}
                  <div className="pt-2">
                    <span className="text-lg font-extrabold text-slate-900">{hotel.price}</span>
                    <span className="text-sm text-slate-500 font-normal">/n</span>
                  </div>
                </div>
              </div>

              {/* View Button */}
              <div className="p-5 pt-0">
                <button className="w-full py-2 border border-teal-800 text-teal-800 hover:bg-teal-800 hover:text-white font-semibold rounded-lg transition-colors text-sm">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}