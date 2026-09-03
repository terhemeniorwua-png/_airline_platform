import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaPlane } from 'react-icons/fa'

export default function DestinationDetails({Prce, town, destination, duration1, duration2}) {
  return (
    <div>
         
                           

                {/* Destination Details*/}

               <div className='border-y border-gray-300 bg-blue-50  p-5'>
                     <div>
                    <p className='flex justify-center items-center gap-2 text-4xl'>{duration1} LOS------- <FaPlane /> ------- {duration2} LHR</p>
                </div>
                <div className='text-sm flex justify-between items-center px-20 py-2'>
                    <p>Lagos</p>
                    <p>Duration 7h 15mins</p>
                    <p>{destination}</p>
                </div>

                <div className='text-sm flex justify-between items-center px-20'>
                    <p>Economy</p>
                    <p>1 Carry-on</p>
                    <p>1 Checked bag</p>
                    <p>Meal included</p>
                </div>
               </div>

               {/* Price break down */}

               <div className=' px-5 pt-5 space-y-2'>
                <h3>Price breakdown</h3>
               <div className='flex justify-between border-b border-gray-300 pb-2'>
                    <ul className='space-y-2'>
                        <li>Flight:</li>
                        <li>Taxes:</li>
                        <li>Service fee:</li>
                    </ul>

                    <ul className='space-y-2 text-right'>
                        <li>${
                                Prce - 120000 + 70000
                            }</li>
                        <li>$120, 000</li>
                        <li>$70,000</li>
                    </ul>
               </div>

               <ul className='flex justify-between'>
                <li>Total:</li>
                <li className='font-bold'>${Prce}</li>
               </ul>

               <button className='bg-blue-700 text-white text-center w-full py-2 my-5 rounded'>
                <Link href='/Information'>
                            | Continue to passengers details |
                </Link>
               </button>

               </div>
              
     </div>
  )
}
