'use client'
import React, { useState } from 'react'
import Header from './Header'
import Dashboard from './Dashboard'
import PriceBreakDown from './PriceBreakDown'
import Form from '../Information/Form'
import Payment from '../Payment/Payment'
import BookingModal from '../confirmation/success'

export default function page() {

    const [airline, setAirline] = useState('airline')
    const [range, setRange] = useState(1000000)
    const [taxes, setTaxes] = useState(100000)
    const [fee, setFee] = useState(100000)
    const [page, setPage] = useState('serch')
  return (
    
    <>
      {
        page === 'serch' && (
              <div>
            <Header />
            <div className='md:flex gap-10 py-10'>
                <Dashboard 
                setAirline={setAirline} 
                setRange={setRange} 
                range={range}
                setTaxes={setTaxes}
                />

                <PriceBreakDown 
                airline={airline} 
                range={range}
                setRange={setRange}
                setTaxes={setTaxes}
                setFee={setFee}
                setPage={setPage}
                />
            </div>

        </div>
        )
      }


         {
            page === 'form' && (
                <Form 
                setPage={setPage}
                />
            )

        }

        {
            page === 'pay' && (
                <Payment 
                taxes={taxes}
                range={range}
                airline={airline}
                fee={fee}
                setPage={setPage}
                />
            )

        }

        {
          page === 'success' &&  <BookingModal 
            
            />
        }
    </>
  )
}
