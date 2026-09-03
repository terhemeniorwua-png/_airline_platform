'use client'
import React, { useState } from 'react'

export default function Dashboard({setAirline}) {

    const [stops, setStops] = useState('Direct')
    const [range, setRange] = useState(1000000)





  return (
    <>
    
        <div className='pl-20 w-120'>
            <h2>Filter</h2>



{/* Stops */}
            <h4>Stops</h4>

          <div className='space-y-2'>
            <div className='space-x-2'>
             <input 
            type="radio" 
            value='Direct'
            checked = {stops === 'Direct'}
            onChange={(e)=>{setStops(e.target.value)}}
            name='rad'
            id='direct'
            />
            <label htmlFor="direct">Direct</label>
           </div>

           <div className='space-x-2'>
             <input 
            type="radio" 
            value='1 stop'
            checked = {stops === '1 stop'}
            onChange={(e)=>{setStops(e.target.value)}}
            name='rad'
            id='one'
            />
            <label htmlFor="one">1 stop</label>
           </div>

           <div className='space-x-2'>
             <input 
            type="radio" 
            value='2+ stops'
            checked = {stops === '2+ stops'}
            onChange={(e)=>{setStops(e.target.value)}}
            name='rad'
            id='two'
            />
            <label htmlFor="two">2+ stop</label>
           </div>
          </div>


            {/* Price */}

            <div className='border-y border-gray-300 py-5'>

                <h2>Price</h2>

                <input 
                type="range" 
                min='1000000'
                max='2000000'
                value={range}
                onChange={(e)=>{setRange(e.target.value)}}
                className='w-full'
                />
                <div className='flex justify-between text-sm'>
                    <p>$1,000,000</p>
                    <p>$2,000,000</p>
                </div>

                <p className='text-sm text-center'>Current: ${range}</p>
            </div>

            {/* Airline */}

            <div>
                <h4>Airline</h4>

                <div>
                   <div className='space-x-2'>
                     <input 
                    type="radio" 
                    value='British Airways (BA)'
                    onChange={(e)=>setAirline(e.target.value)}
                    id='ba'
                    name='check'
                    />
                    <label htmlFor="ba">BA</label>
                   </div>

                   <div className='space-x-2'>
                     <input 
                    type="radio" 
                    value='Emirate'
                    onChange={(e)=>setAirline(e.target.value)}
                    id='Em'
                    name='check'
                    />
                    <label htmlFor="Em">Emirate</label>

                   </div>

                    <div  className='space-x-2'>
                    <input 
                    type="radio" 
                    value='Qatar'
                    onChange={(e)=>setAirline(e.target.value)}
                    id='qt'
                    name='check'
                    />
                    <label htmlFor="qt">Qatar</label>
                    </div>
                </div>


            </div>
        </div>
   
    </>
  )
}
