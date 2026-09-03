import Link from 'next/link'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function Header() {
  return (
    <>
        <div className='flex items-center gap-2 bg-linear-to-r from-blue-950 to- to-gray-600 pt-20 text-white pl-5 md:pl-20'>
            <Link href='/' className='flex items-center gap-2 '>
                <FaArrowLeft />
            <p>Search flights</p>
            </Link>
        </div>
        

        <div className='bg-amber-50 border-b border-gray-300 md:flex items-center justify-between max-md:pl-5 md:px-20 py-2'>
           <div>
             <h5 className='flex items-center gap-5 text-xl'>
                Lagos(LOS) 
                <FaArrowRight />
                London(LHR)
    
            </h5>
            <p className='text-sm'>sep 2 - sep 20 . 2 passengers</p>
           </div>

           <button className='bg-blue-700 text-white px-4 py-2 max-md:mt-5 rounded'>Modify Search</button>
        </div>
    
    </>
  )
}
