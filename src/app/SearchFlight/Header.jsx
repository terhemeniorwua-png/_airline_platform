import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function Header() {
  return (
    <>
        <div className='flex items-center gap-2 bg-blue-950 pt-20 text-white pl-5 md:pl-20'>
            <Link href='/' className='flex items-center gap-2 '>
                <FaArrowLeft />
            <p>Search flights</p>
            </Link>
        </div>
    
    </>
  )
}
