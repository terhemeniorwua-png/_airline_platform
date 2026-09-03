'use client'
import React, { useState } from 'react'
import { FaArrowRight, FaChevronDown, FaChevronUp, FaGripLinesVertical, FaLine, FaPlane, FaRulerHorizontal } from 'react-icons/fa'
import DestinationDetails from './DestinationDetails'
import Form from '../Information/Form'

export default function PriceBreakDown({airline, range, setPage, setTaxes, setFee, setRange}) {
    const [showBreakDown, setShowBreakDown] = useState('none')

  return (
    <>
  
            <div className='max-md:pl-5 md:w-[56%] space-y-5'>
         <h4>24 flights found</h4>
        <div className='border-2 rounded'>
            <div className='flex items-center justify-between p-5'>
                <div className='flex items-center gap-2'>
                            <FaPlane />
                            <p className='flex items-center gap-1 text-sm'>British Airways (BA).Lagos <FaArrowRight /> London</p>
                        </div>
                {
                    showBreakDown !== 'one'?   (
                        <FaChevronDown className='cursor-pointer' 
                        onClick={()=>setShowBreakDown('one')} />
                    ):
                    (<FaChevronUp
                        className='cursor-pointer'
                        onClick={()=>setShowBreakDown('none')}/>)
                }
                
                </div>

                {showBreakDown === 'one' && (
                <DestinationDetails 
                    duration1='10:30 LOS'
                    duration2='17:45'
                    destination='London'
                    range={range}
                    Prce={12400000}
                    setPage={setPage}
                    fee={140000}
                    tax={20000}
                    setFee={setFee}
                    setTaxes={setTaxes}
                    setRange={setRange}
                />
               )}

        </div>

        <div className='border-2 rounded'>
                
                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center gap-2'>
                    <FaPlane />
                    <p className='flex items-center gap-1 text-sm'>Emirate.Lagos <FaArrowRight /> London</p>
                </div>
                {
                    showBreakDown !== 'two'?   (
                        <FaChevronDown className='cursor-pointer' 
                        onClick={()=>setShowBreakDown('two')} />
                    ):
                    (<FaChevronUp
                        className='cursor-pointer'
                        onClick={()=>setShowBreakDown('none')}/>)
                }
                
                </div>

                {showBreakDown === 'two' && (
                <DestinationDetails 
                    duration1='3:30 LOS'
                    duration2='9:45'
                    destination='Dubai'
                    range={range}
                    Prce={13800000}
                    setPage={setPage}
                    setFee={setFee}
                    setTaxes={setTaxes}
                    fee={140000}
                    tax={20000}
                    setRange={setRange}
                />
               )}

        </div>
        </div>

      

       
    </>
  )
}
