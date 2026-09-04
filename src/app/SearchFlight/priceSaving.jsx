'use client'

import React, { useState } from 'react'
import {
  FaArrowRight,
  FaChevronDown,
  FaChevronUp,
  FaPlane
} from 'react-icons/fa'

import DestinationDetails from './DestinationDetails'

export default function PriceBreakDown({
  airline,
  range,
  setPage,
  setTaxes,
  setFee,
  setRange
}) {

  const [showBreakDown, setShowBreakDown] = useState('none')

  return (
    <div className="w-full max-w-3xl space-y-5">

      {/* Results Header */}
      <div className="flex items-center justify-between">

        <div>
          <h4 className="text-lg font-bold text-slate-900">
            24 flights found
          </h4>

          <p className="mt-1 text-xs text-gray-500">
            Compare flights and choose the best option
          </p>
        </div>

        <button className="hidden sm:block rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          Sort by price
        </button>

      </div>


      {/* ================= FLIGHT 1 ================= */}

      <div
        className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
          showBreakDown === 'one'
            ? 'border-blue-600 shadow-md'
            : 'border-gray-200 hover:shadow-md'
        }`}
      >

        {/* Flight Header */}
        <div className="p-5 sm:p-6">

          <div className="flex items-center justify-between gap-4">

            {/* Airline */}
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <FaPlane />
              </div>

              <div className="min-w-0">

                <p className="truncate text-sm font-bold text-slate-900">
                  British Airways
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  BA • Lagos → London
                </p>

              </div>

            </div>


            {/* Expand */}
            <button
              type="button"
              aria-label="Show flight details"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-blue-700"
              onClick={() =>
                setShowBreakDown(
                  showBreakDown !== 'one' ? 'one' : 'none'
                )
              }
            >

              {showBreakDown !== 'one' ? (
                <FaChevronDown className="text-xs" />
              ) : (
                <FaChevronUp className="text-xs" />
              )}

            </button>

          </div>


          {/* Flight Summary */}
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">

            {/* Departure */}
            <div>
              <p className="text-xl font-bold text-slate-900">
                10:30
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Lagos · LOS
              </p>
            </div>


            {/* Flight line */}
            <div className="flex min-w-20 flex-col items-center">

              <span className="mb-1 text-[10px] text-gray-400">
                7h 15m
              </span>

              <div className="flex w-full items-center gap-1">

                <div className="h-px flex-1 bg-gray-300"></div>

                <FaPlane className="rotate-90 text-xs text-blue-700" />

                <div className="h-px flex-1 bg-gray-300"></div>

              </div>

              <span className="mt-1 text-[10px] text-gray-400">
                Direct
              </span>

            </div>


            {/* Arrival */}
            <div className="text-right">

              <p className="text-xl font-bold text-slate-900">
                17:45
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                London · LHR
              </p>

            </div>

          </div>


          {/* Quick Info */}
          <div className="mt-5 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              Economy
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              1 Carry-on
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Meal included
            </span>

          </div>

        </div>


        {/* Details */}
        {showBreakDown === 'one' && (
          <DestinationDetails
            duration1="10:30 LOS"
            duration2="17:45"
            destination="London"
            range={range}
            Prce={12400000}
            setPage={setPage}
            fee={140000}
            tax={20000}
            setFee={setFee}
            setTaxes={setTaxes}
            setRange={setRange}
          />
        )}

      </div>



      {/* ================= FLIGHT 2 ================= */}

      <div
        className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-200 ${
          showBreakDown === 'two'
            ? 'border-blue-600 shadow-md'
            : 'border-gray-200 hover:shadow-md'
        }`}
      >

        {/* Flight Header */}
        <div className="p-5 sm:p-6">

          <div className="flex items-center justify-between gap-4">

            {/* Airline */}
            <div className="flex min-w-0 items-center gap-3">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <FaPlane />
              </div>

              <div className="min-w-0">

                <p className="truncate text-sm font-bold text-slate-900">
                  Emirates
                </p>

                <p className="mt-0.5 text-xs text-gray-500">
                  EK • Lagos → London
                </p>

              </div>

            </div>


            {/* Expand */}
            <button
              type="button"
              aria-label="Show flight details"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:bg-gray-50 hover:text-blue-700"
              onClick={() =>
                setShowBreakDown(
                  showBreakDown !== 'two' ? 'two' : 'none'
                )
              }
            >

              {showBreakDown !== 'two' ? (
                <FaChevronDown className="text-xs" />
              ) : (
                <FaChevronUp className="text-xs" />
              )}

            </button>

          </div>


          {/* Flight Summary */}
          <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3">

            {/* Departure */}
            <div>
              <p className="text-xl font-bold text-slate-900">
                03:30
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Lagos · LOS
              </p>
            </div>


            {/* Flight line */}
            <div className="flex min-w-20 flex-col items-center">

              <span className="mb-1 text-[10px] text-gray-400">
                7h 15m
              </span>

              <div className="flex w-full items-center gap-1">

                <div className="h-px flex-1 bg-gray-300"></div>

                <FaPlane className="rotate-90 text-xs text-blue-700" />

                <div className="h-px flex-1 bg-gray-300"></div>

              </div>

              <span className="mt-1 text-[10px] text-gray-400">
                Direct
              </span>

            </div>


            {/* Arrival */}
            <div className="text-right">

              <p className="text-xl font-bold text-slate-900">
                09:45
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Dubai · DXB
              </p>

            </div>

          </div>


          {/* Quick Info */}
          <div className="mt-5 flex flex-wrap items-center gap-2">

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              Economy
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              1 Checked bag
            </span>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
              Meal included
            </span>

          </div>

        </div>


        {/* Details */}
        {showBreakDown === 'two' && (
          <DestinationDetails
            duration1="3:30 LOS"
            duration2="9:45"
            destination="Dubai"
            range={range}
            Prce={13800000}
            setPage={setPage}
            setFee={setFee}
            setTaxes={setTaxes}
            fee={140000}
            tax={20000}
            setRange={setRange}
          />
        )}

      </div>

    </div>
  )
}