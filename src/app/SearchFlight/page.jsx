'use client'
import React, { useState } from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import PriceBreakDown from './PriceBreakDown'

export default function page() {

    const [airline, setAirline] = useState(null)
  return (
    
    <>
        <div>
            <Header />
            <div className='flex gap-10'>
                <Dashboard setAirline={setAirline}/>
                <PriceBreakDown airline={airline}/>
            </div>
        </div>
    </>
  )
}
