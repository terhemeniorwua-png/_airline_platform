import Link from 'next/link';
import React from 'react'
import { FaSearch } from 'react-icons/fa';
import Accommodation from './Accommodation';

export default function page() {


    const destinations = [
  {
    city: 'Paris',
    country: 'France',
    price: '₦850,000',
    rating: '5.0',
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=600',
  },
  {
    city: 'Dubai',
    country: 'United Arab Emirates',
    price: '₦920,000',
    rating: '4.9',
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    price: '₦890,000',
    rating: '4.8',
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=600',
  },
];





  return (
    <>
    
        <div className='ExploreBg h-screen text-center pt-28 md:pt-44 text-white'>

            <span className='text-md text-gray-400'>The world is waiting for You</span>

            <h1 className='font-black text-5xl md:text-6xl w-[80%] md:w-[65%] m-auto pb-5 md:py-5'>Find the say for your next great story.</h1>

            <p className='text-md w-[70%] md:w-[35%] m-auto text-gray-400'>Hotels, homes, apartments and retreats with real deals, anywhere in the world

            </p>


            <div className="pt-4 max-w-xl mx-auto">
            <div className="relative flex items-center shadow-lg rounded-2xl bg-white border border-slate-200 md:p-2 focus-within:ring-2 focus-within:ring-blue-500">
             <FaSearch className='text-gray-300 text-2xl'/>
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none px-2 md:py-2"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-1 md:py-2.5 rounded-xl transition-colors">
                Search
              </button>
            </div>
          </div>
        


        <div className="pt-28">
          <div className="text-center bg-slate-900">
            <h2 className="text-sm pt-5  text-gray-400 italic">Top 3 trending destinations</h2>
            <p className='text-3xl'>The destinations travelers are booking right now</p>
            <p className="text-sm text-gray-400">Those who searched for Greece or booked this destinations</p>
          </div>

          <div className="grid grid-cols-1 bg-slate-900 pt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((item) => (
              <div 
                key={item.city} 
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                 
                  <div className="relative h-52 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.city}, ${item.country}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card */}
                  <div className="p-5 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{item.city}</h3>
                        <p className="text-sm text-slate-500">{item.country}</p>
                      </div>
                      <div className="flex items-center bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                        <span className="text-amber-500 mr-1">★</span>
                        <span className="text-xs font-bold text-amber-900">{item.rating}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <span className="text-xs text-slate-400 block uppercase font-medium">Starting from</span>
                      <span className="text-lg font-black text-slate-900">{item.price}</span>
                    </div>
                  </div>
                </div>

              
                <div className="p-5 pt-0">
                  <button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white font-medium rounded-xl transition-colors text-sm">
                    <Link href='/SearchFlight'>Book Now</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

         <Accommodation />
        </div>
    
   
    </>
  )
}
