'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowRight, FaCalendar, FaLock } from 'react-icons/fa'

export default function Payment(props) {


    
    const [paymentMethod, setPaymentMehtod] = useState('none')



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

                <li className=''>Passenger Details</li>
                <FaArrowRight />

                <li>Payment</li>
            </ol>
        </div>

        {/* <div>
            <h1 className='text-3xl font-semibold'>Payment</h1>

            <div className='border '>
                <input 
                type="radio" 
                value='cart'
                id='card'
                onChange={()=>setPaymentMehtod('card')}
                />
                <label htmlFor="card">Card</label>

                {
                paymentMethod === 'card' &&(
                    <div>
                       <label htmlFor="crd">Card Number</label><br />
                       <input 
                       type="text" 
                       placeholder='Enter card number'
                       className='text-sm py-1.5 w-[80%] border rounded pl-2'
                       name='crd'
                       />

                       <div className='flex items-center justify-between'>
                       <div>
                         <label htmlFor="ex">Expiry (MM/YY):</label><br />
                        <input 
                        type="text" 
                        placeholder='(MM/YY)'
                        name='ex'
                        className='text-sm py-1.5 w-[80%] border rounded pl-2'
                        />
                       </div>


                       <div>
                         <label htmlFor="cvv">CVV:</label><br />
                       <div className='flex justify-between items-center border rounded pl-2'>
                         <input 
                        type="text" 
                        name='cvv'
                        placeholder='CVV'
                        className='text-sm py-1.5 w-[90%] outline-0'
                        />
                        <FaCalendar />
                       </div>
                       </div>
                       </div>
                    </div>
                )
            }
            </div>


            
        </div> */}
        
        <section className="mx-auto max-w-4xl rounded-xl border border-gray-300 bg-white p-6 shadow-lg sm:p-8">

        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr]">

          {/*PAYMENT */}
          <div>

            <h1 className="mb-5 text-2xl font-medium text-gray-900">
              Payment
            </h1>


            {/* CARD */}
            <div
              className={`rounded-lg border p-4 transition ${
                paymentMethod === "card"
                  ? "border-[#23679d] bg-[#eef5fb]"
                  : "border-gray-300 bg-white"
              }`}
            >

              <label className="flex cursor-pointer items-center gap-2 text-xl">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={(e) => setPaymentMehtod(e.target.value)}
                  className="h-5 w-5 accent-[#23679d]"
                />

                Card
              </label>


              {paymentMethod === "card" && (
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium">
                    Card number:
                  </label>

                  <input
                    type="text"
                    placeholder="(Enter card number)"
                    className="mb-4 h-10 w-full rounded-md border border-gray-500 px-3 outline-none focus:border-[#23679d]"
                  />


                  <div className="grid grid-cols-2 gap-3">

                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        Expiry (MM/YY):
                      </label>

                      <input
                        type="text"
                        placeholder="(MM/YY)"
                        className="h-10 w-full rounded-md border border-gray-500 px-3 outline-none focus:border-[#23679d]"
                      /> 
                    </div>


                    <div>
                      <label className="mb-1 block text-sm font-medium">
                        CVV:
                      </label>

                      <input
                        type="password"
                        placeholder="(CVV)"
                        className="h-10 w-full rounded-md border border-gray-500 px-3 outline-none focus:border-[#23679d]"
                      />
                    </div>
                  </div>
                </div>
              )}

            </div>


            {/* BANK TRANSFER */}
            <div className="border-b border-gray-300 py-4">

              <label className="flex cursor-pointer items-center gap-2 text-xl">

                <input
                  type="radio"
                  name="payment"
                  value="bank"
                  checked={paymentMethod === "bank"}
                  onChange={(e) => setPaymentMehtod(e.target.value)}
                  className="h-5 w-5 accent-[#23679d]"
                />
                Bank Transfer
              </label>
            </div>

            <div className="border-b border-gray-300 py-4">

              <label className="flex cursor-pointer items-start gap-2 text-xl">

                <input
                  type="radio"
                  name="payment"
                  value="wallet"
                  checked={paymentMethod === "wallet"}
                  onChange={(e) => setPaymentMehtod(e.target.value)}
                  className="mt-1 h-5 w-5 accent-[#23679d]"
                />

                <div>

                  <p>Wallet</p>

                  <p className="text-sm text-gray-600">
                    (e-Wallets, Paystack, Flutterwave, or OPay)
                  </p>
                  
                  <div className="mt-3 flex gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f4f0e6] font-bold text-[#111]">
                      W
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#f4f0e6] font-bold text-[#1675c7]">
                      P
                    </div>
                  </div>
                </div>
              </label>

            </div>
            <button
              className="mt-8 h-11 w-full rounded-md bg-blue-700 text-lg text-white transition hover:bg-blue-600" onClick={()=>{
                props.setPage('success')
              }}
            >
              Pay securely
            </button>
            {/* Security */}
            <div className="mt-3 flex justify-center gap-2 text-sm text-gray-600">

              <span><FaLock /></span>
              <span>Secure payment</span>
            </div>
          </div>


          {/*  Trip summary */}
          <div>

            <h2 className="mb-5 text-2xl font-bold text-gray-900">
              Trip summary
            </h2>


            <div className="rounded-lg border border-gray-300 p-4">

              <div className="border-b border-gray-300 pb-4">
                <p className="text-lg">
                  Lagos (LOS) → London (LHR)
                </p>

                <p className="mt-1">
                  Sep 12
                </p>


                

                <p className="mt-1">
                  {props.airline}
                </p>

              </div>
              <div className="space-y-2 py-4 text-base">

                <div className="flex justify-between">
                  <span>Flight:</span>
                  <span>{props.range - props.fee + props.taxes}</span>
                </div>

                <div className="flex justify-between">
                  <span>Taxes:</span>
                  <span>{props.taxes}</span>
                </div>

                <div className="flex justify-between">
                  <span>Service fee:</span>
                  <span>{props.fee}</span>
                </div>

              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4 text-xl font-bold">

                <span>TOTAL:</span>

                <span>{props.range}</span>

              </div>
            </div>
          </div>
        </div>
      </section>
        </>
  )
}
