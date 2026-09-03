'use client'
import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown, FaChevronUp, FaGripLinesVertical, FaLine, FaPlane, FaRulerHorizontal } from 'react-icons/fa'

export default function PriceBreakDown({airline, range}) {

    const [showBreakDown, setShowBreakDown] = useState(false)

  return (
    <>
    
       <div className='w-[56%]'>
         <h4>24 flights found</h4>
        <div className='border-2 rounded'>

                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center gap-2'>
                    <FaPlane />
                    <p className='flex items-center gap-1 text-sm'>{airline}.Lagos <FaArrowRight /> London</p>
                </div>
                {
                    showBreakDown? (<FaChevronDown
                        className='cursor-pointer'
                        onClick={()=>setShowBreakDown(true)}/>):
                    (
                        <FaChevronUp className='cursor-pointer' 
                        onClick={()=>setShowBreakDown(false)} />
                    )
                }
                
                </div>


                {/* Destination */}

               <div className='border-y border-gray-300 bg-blue-50  p-5'>
                     <div>
                    <p className='flex justify-center items-center gap-2 text-4xl'>10:30 LOS ------- <FaPlane /> ------- 17:45 LHR</p>
                </div>
                <div className='text-sm flex justify-between items-center px-20 py-2'>
                    <p>Lagos</p>
                    <p>Duration 7h 15mins</p>
                    <p>London</p>
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
                                range - 120000 + 70000
                            }</li>
                        <li>$120, 000</li>
                        <li>$70,000</li>
                    </ul>
               </div>

               <ul className='flex justify-between'>
                <li>Total:</li>
                <li className='font-bold'>${range}</li>
               </ul>

               <button className='bg-blue-700 text-white text-center w-full py-2 my-5 rounded'>
                | Continue to passengers details |
               </button>

               </div>

        </div>
       </div>
    </>
  )
}
