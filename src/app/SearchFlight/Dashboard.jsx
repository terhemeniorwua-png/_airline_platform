'use client'

import React, { useState } from 'react'

export default function Dashboard({ setAirline, range, setRange }) {

  const [stops, setStops] = useState('Direct')

  return (
    <div className="w-full max-w-sm">

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        {/* Header */}
        <div className="mb-6">
          <h2 className="text-lg font-bold text-gray-900">
            Filter flights
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Refine your search to find the right flight
          </p>
        </div>


        {/* Stops */}
        <div className="mb-6">

          <h4 className="mb-3 text-sm font-semibold text-gray-900">
            Stops
          </h4>

          <div className="space-y-2">

            {/* Direct */}
            <label
              htmlFor="direct"
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 transition ${
                stops === 'Direct'
                  ? 'border-teal-700 bg-teal-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="Direct"
                  checked={stops === 'Direct'}
                  onChange={(e) => {
                    setStops(e.target.value)
                  }}
                  name="rad"
                  id="direct"
                  className="h-4 w-4 accent-teal-700"
                />

                <span className="text-sm font-medium text-gray-700">
                  Direct
                </span>
              </div>

              {stops === 'Direct' && (
                <span className="text-xs font-semibold text-teal-700">
                  Selected
                </span>
              )}
            </label>


            {/* 1 Stop */}
            <label
              htmlFor="one"
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 transition ${
                stops === '1 stop'
                  ? 'border-teal-700 bg-teal-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="1 stop"
                  checked={stops === '1 stop'}
                  onChange={(e) => {
                    setStops(e.target.value)
                  }}
                  name="rad"
                  id="one"
                  className="h-4 w-4 accent-teal-700"
                />

                <span className="text-sm font-medium text-gray-700">
                  1 stop
                </span>
              </div>

              {stops === '1 stop' && (
                <span className="text-xs font-semibold text-teal-700">
                  Selected
                </span>
              )}
            </label>


            {/* 2+ Stops */}
            <label
              htmlFor="two"
              className={`flex cursor-pointer items-center justify-between rounded-lg border px-3 py-2.5 transition ${
                stops === '2+ stops'
                  ? 'border-teal-700 bg-teal-50'
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  value="2+ stops"
                  checked={stops === '2+ stops'}
                  onChange={(e) => {
                    setStops(e.target.value)
                  }}
                  name="rad"
                  id="two"
                  className="h-4 w-4 accent-teal-700"
                />

                <span className="text-sm font-medium text-gray-700">
                  2+ stops
                </span>
              </div>

              {stops === '2+ stops' && (
                <span className="text-xs font-semibold text-teal-700">
                  Selected
                </span>
              )}
            </label>

          </div>
        </div>


        {/* Price */}
        <div className="border-y border-gray-200 py-6">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                Price
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                Maximum ticket price
              </p>
            </div>

            <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-700">
              ₦{Number(range).toLocaleString()}
            </span>
          </div>


          {/* Range */}
          <input
            type="range"
            min="1000000"
            max="2000000"
            value={range}
            onChange={(e) => {
              setRange(e.target.value)
            }}
            className="w-full cursor-pointer accent-teal-700"
          />


          {/* Range labels */}
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>₦1,000,000</span>
            <span>₦2,000,000</span>
          </div>


          {/* Current value */}
          <div className="mt-4 rounded-lg bg-gray-50 px-3 py-2 text-center">
            <span className="text-xs text-gray-500">
              Current maximum
            </span>

            <p className="mt-0.5 text-sm font-bold text-gray-900">
              ₦{Number(range).toLocaleString()}
            </p>
          </div>

        </div>


        {/* Airline */}
        <div className="pt-6">

          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-900">
              Airline
            </h4>

            <p className="mt-1 text-xs text-gray-500">
              Select an airline
            </p>
          </div>


          <div className="space-y-2">

            {/* British Airways */}
            <label
              htmlFor="ba"
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 transition hover:border-teal-600 hover:bg-teal-50"
            >
              <input
                type="radio"
                value="British Airways (BA)"
                onChange={(e) => setAirline(e.target.value)}
                id="ba"
                name="check"
                className="h-4 w-4 accent-teal-700"
              />

              <div className="flex flex-1 items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  British Airways
                </span>

                <span className="text-xs font-medium text-gray-400">
                  BA
                </span>
              </div>
            </label>


            {/* Emirates */}
            <label
              htmlFor="Em"
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 transition hover:border-teal-600 hover:bg-teal-50"
            >
              <input
                type="radio"
                value="Emirate"
                onChange={(e) => setAirline(e.target.value)}
                id="Em"
                name="check"
                className="h-4 w-4 accent-teal-700"
              />

              <div className="flex flex-1 items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Emirates
                </span>

                <span className="text-xs font-medium text-gray-400">
                  EK
                </span>
              </div>
            </label>


            {/* Qatar */}
            <label
              htmlFor="qt"
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 px-3 py-2.5 transition hover:border-teal-600 hover:bg-teal-50"
            >
              <input
                type="radio"
                value="Qatar"
                onChange={(e) => setAirline(e.target.value)}
                id="qt"
                name="check"
                className="h-4 w-4 accent-teal-700"
              />

              <div className="flex flex-1 items-center justify-between">
                <span className="text-sm font-medium text-gray-700">
                  Qatar Airways
                </span>

                <span className="text-xs font-medium text-gray-400">
                  QR
                </span>
              </div>
            </label>

          </div>

        </div>

      </div>

    </div>
  )
}