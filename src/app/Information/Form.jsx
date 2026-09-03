import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
export default function Form({setPage}) {
  return (
     <>
        <div className='bg-gray-300 pt-20'>
            <ol className='flex justify-center items-center gap-5'>
               <Link 
               href='/SearchFlight' 
               className='flex gap-2 items-center'
               >
                <li>Flight Details</li>
                <FaArrowRight />
               </Link>

                <li>Passenger Details</li>
                <FaArrowRight />

                <li>Payment</li>
            </ol>
        </div>

        <div className='pb-2'>
                <h2 className='md:text-center text-3xl md:text-5xl font-bold pl-10 py-5'>Passengers Details</h2>

                <form action="" className='p-5 border-2 rounded-xl w-[80%] md:w-[40%] m-auto'>
                    <h5 className='text-2xl'>Contact Information</h5>

                   <div className='md:flex gap-4 justify-between border-b border-gray-300 pb-5'>
                     <div className='space-y-2 md:w-[50%]'>
                        <label htmlFor="firstname">First name</label> <br />

                        <input 
                        type="text" 
                        placeholder='Enter first name as on passport'
                        className='rounded border pl-1 py-1.5 w-full text-sm'
                        id='firstname'
                        /><br />


                         <label htmlFor="email">Email</label> <br /> 

                        <input 
                        type="text" 
                        placeholder='Enter a valid email address'
                        className='rounded border pl-1 text-sm py-1.5 w-full'
                        id='email'
                        />
                    </div>

                        <div  className='space-y-2 md:w-[50%]'>
                        <label htmlFor="lastname">Last name</label> <br />

                        <input 
                        type="text" 
                        placeholder='Enter last name as on passport'
                        className='rounded border pl-1 py-1.5 text-sm w-full'
                        id='lastname'
                        /><br />


                         <label htmlFor="no">Phone</label> <br />

                        <input 
                        type="text" 
                        placeholder='Enter phone number, e.g., +234 9..'
                        className='rounded border pl-1 py-1.5 text-sm w-full'
                        id='no'
                        />
                    </div>
                   </div>


                   <div className='pt-5'>
                    <h2>Passenger 1</h2>
                    
                     <div className='md:flex gap-3 justify-between border-b border-gray-300 pb-5'>
                     <div className='space-y-2 md:w-[50%]'>
                        <label htmlFor="birth">Date of birth</label> <br />

                        <input 
                        type="date" 
                        className='rounded border pl-1 py-1.5 text-sm w-full'
                        id='birth'
                        /><br />


                         <label htmlFor="pass">Passport number</label> <br /> 

                        <input 
                        type="text" 
                        placeholder='Enter Passport Number'
                        className='rounded border pl-1 py-1.5 text-sm w-full'
                        id='pass'
                        />
                    </div>

                        <div  className='space-y-2 md:w-[50%]'>
                        <label htmlFor="nation">Nationality</label> <br />

                        <input 
                        type="text" 
                        placeholder='Enter last name as on passport'
                        className='rounded border pl-1 py-1.5 text-sm w-full'
                        id='nation'
                        /><br />
                    </div>
                   </div>

                   <input 
                   type="submit" 
                   value={`|Continue to payment`}
                   className='bg-blue-700 text-white text-center text-sm py-3 hover:bg-blue-600 duration-200 w-full rounded-lg'
                   onClick={()=>setPage('pay')}
                   />

                   </div>
                </form>

        </div>
    </>
  )
}
