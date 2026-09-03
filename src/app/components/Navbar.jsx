'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import {  FaWhatsapp } from 'react-icons/fa'
import { HiMenu } from "react-icons/hi";

export default function Navbar() {

  const [displayNav, setDisplayNav] = useState(false)
  return (
    <>

    {/* Mobile Nav */}
    <nav className='flex items-center justify-between gap-52 pt-5 px-10 absolute md:hidden'>
        <Image
          src='/logo.png'
          height={150}
          width={50}
          alt='logo'
          className='max-md:w-[20%] h-8'
        />

        <div>
          {!displayNav?
          (<HiMenu 
          className='text-4xl text-white'
          onClick={()=>{
            setDisplayNav(true)
          }}
          />):
          (
            <span className='text-white font-light text-3xl'
            onClick={()=>{
              setDisplayNav(false)
            }}
            >X</span>
          )
        }
        </div>
    </nav>

    {/* Mobile Nav */}
  
      {
        displayNav && (
          <nav className='bg-[#000000f0] text-white font-bold absolute w-full top-16' id='nav'>
        <ul className='flex flex-col items-center justify-between gap-2 py-5'>
             <Link href='/' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Home</Link>
             <Link href='/About' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Flight</Link>
             <Link href='/Contact' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Tour</Link>
             <Link href='/News' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>About</Link>
             <Link href='/News' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Support</Link>
        </ul>
      </nav>
        )
      }
  


    {/* Desktop Nav */}

        <nav className='flex gap-64 items-center mx-2 rounded-3xl py-2 px-10 max-md:hidden absolute top-2 bg-white'>
         
          <Link href='/'>
            <Image
          src='/logo.png'
          height={150}
          width={150}
          alt='logo'
        />
          </Link>

        <ul className='flex justify-between gap-10 pt-5'>
             <Link href='/' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Eplore</Link>
             <Link href='/About' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Flights</Link>
             <Link href='/Contact' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Hotels</Link>
             <Link href='/News' className='hover:text-blue-700 hover:border-b hover:border-b-blue-700'>Deals</Link>
        </ul>

        <div className='flex items-center gap-5'>
          <Link 
          className='flex items-center border border-blue-700 rounded-xl px-5 py-2 gap-0.5 hover:bg-gray-50 duration-200'
          href='https://wa.me/09166354571'
          >
            <FaWhatsapp  className='text-xl'/>
            What's up
          </Link>

            <Link 
          className='flex items-center bg-blue-700 text-white rounded-lg px-8 py-2 hover:bg-blue-600 duration-200'
          href='/'
          >
            Book Now
          </Link>
        </div>
    </nav>
    </>
  )
}
