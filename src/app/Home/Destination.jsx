import React from 'react'
import Image from 'next/image'

export default function Destination() {
  return (
    <>
        <div className='grid md:grid-cols-4 gap-5'>

           <div className='bg-white pt-2 pb-5 px-2 shadow-2xl'>
             <div>
                 <Image
                    src='/dubai.png'
                    height={100}
                    width={100}
                    alt='dubai'
                    className='w-full'
                />
            </div>

            <div className='flex justify-between px-5 py-5'>
                <p>USA</p>
                <p>$7, 00</p>
            </div>
           </div>

             <div className='bg-white pt-2 pb-5 px-2 shadow-2xl'>
             <div>
                <Image
                    src='/london.png'
                    height={100}
                    width={100}
                    alt='london'
                    className='w-full'
                />
            </div>

            <div className='flex justify-between py-5 px-2'>
                <p>London</p>
                <p>$10, 00</p>
            </div>
           </div>


            <div className='bg-white pt-2 pb-5 px-2 shadow-2xl'>
             <div>
                <Image
                    src='/dubai.png'
                    height={100}
                    width={100}
                    alt='dubai'
                    className='w-full'
                />
            </div>

            <div className='flex justify-between py-5 px-2'>
                <p>Paris</p>
                <p>$7, 00</p>
            </div>
           </div>



            <div className='bg-white pt-2 py-5 px-2 shadow-2xl'>
             <div>
                <Image
                    src='/mumbai.png'
                    height={100}
                    width={100}
                    alt='mumbai'
                    className='w-full'
                />
            </div>

            <div className='flex justify-between px-2 py-5'>
                <p>Paris</p>
                <p>$7, 00</p>
            </div>
           </div>






        </div>
    </>
  )
}
