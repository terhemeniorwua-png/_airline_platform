'use client'
import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown, FaChevronUp, FaGripLinesVertical, FaLine, FaPlane, FaRulerHorizontal } from 'react-icons/fa'

export default function PriceBreakDown({airline}) {

    const [showBreakDown, setShowBreakDown] = useState(false)

  return (
    <>
    
       <div className='w-[56%]'>
         <h4>24 flights found</h4>
        <div className='border-2 rounded p-5'>

                <div>
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

                <div>
                    <p className='flex items-center gap-2 text-4xl'>10:30 LOS ------- <FaPlane /> ------- 17:45 LHR</p>
                </div>
                <div>
                    <p>Lagos</p>
                    <p>Duration 7h 15mins</p>
                    <p>London</p>
                </div>

        </div>
       </div>
    </>
  )
}
