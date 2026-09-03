'use client'
import React, { useState } from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import PriceBreakDown from './PriceBreakDown'

export default function page() {

    const [airline, setAirline] = useState('airline')
    const [range, setRange] = useState(1000000)
  return (
    
    <>
        <div>
            <Header />
            <div className='md:flex gap-10 py-10'>
                <Dashboard 
                setAirline={setAirline} 
                setRange={setRange} 
                range={range}/>

                <PriceBreakDown 
                airline={airline} 
                range={range}
                setRange={setRange}
                />
            </div>
        </div>
    </>
  )
}
