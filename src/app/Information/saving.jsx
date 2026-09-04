'use client'

import Link from 'next/link'
import React from 'react'
import { FaArrowRight, FaCheck } from 'react-icons/fa'

export default function Form({ setPage }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= BOOKING PROGRESS ================= */}
      <div className="border-b border-gray-200 bg-white px-4 py-6">

        <ol className="mx-auto flex max-w-2xl items-center justify-center">

          {/* Flight Details */}
          <li className="flex items-center">

            <Link
              href="/SearchFlight"
              className="flex items-center gap-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                <FaCheck className="text-[10px]" />
              </span>

              <span className="hidden text-sm font-semibold text-blue-700 sm:block">
                Flight Details
              </span>
            </Link>

            <div className="mx-3 h-px w-8 bg-blue-300 sm:mx-5 sm:w-16" />

          </li>


          {/* Passenger Details */}
          <li className="flex items-center">

            <div className="flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-700 text-xs font-bold text-white">
                2
              </span>

              <span className="hidden text-sm font-semibold text-slate-900 sm:block">
                Passenger Details
              </span>

            </div>

            <div className="mx-3 h-px w-8 bg-gray-300 sm:mx-5 sm:w-16" />

          </li>


          {/* Payment */}
          <li className="flex items-center gap-2">

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-xs font-semibold text-gray-400">
              3
            </span>

            <span className="hidden text-sm font-medium text-gray-400 sm:block">
              Payment
            </span>

          </li>

        </ol>

      </div>


      {/* ================= PAGE HEADER ================= */}
      <div className="mx-auto max-w-4xl px-5 pb-2 pt-10 text-center">

        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-700">
          Passenger information
        </p>

        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Passenger details
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
          Enter your details exactly as they appear on your travel documents.
          This information will be used for your booking.
        </p>

      </div>


      {/* ================= FORM ================= */}
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-8">

        <form
          action=""
          className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
        >

          {/* ================= CONTACT INFORMATION ================= */}
          <section className="p-5 sm:p-8">

            <div className="mb-6">

              <div className="flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                  1
                </span>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Contact information
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    How we can reach you about your booking
                  </p>
                </div>

              </div>

            </div>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* First Name */}
              <div>
                <label
                  htmlFor="firstname"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  First name
                </label>

                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="firstname"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  As shown on your passport
                </p>
              </div>


              {/* Last Name */}
              <div>
                <label
                  htmlFor="lastname"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Last name
                </label>

                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="lastname"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  As shown on your passport
                </p>
              </div>


              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="email"
                />
              </div>


              {/* Phone */}
              <div>
                <label
                  htmlFor="no"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="no"
                />
              </div>

            </div>

          </section>


          {/* Divider */}
          <div className="border-t border-gray-200" />


          {/* ================= PASSENGER INFORMATION ================= */}
          <section className="p-5 sm:p-8">

            <div className="mb-6">

              <div className="flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-sm font-bold text-blue-700">
                  2
                </span>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Passenger 1
                  </h2>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Travel document information
                  </p>
                </div>

              </div>

            </div>


            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              {/* Date of Birth */}
              <div>
                <label
                  htmlFor="birth"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Date of birth
                </label>

                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="birth"
                />
              </div>


              {/* Nationality */}
              <div>
                <label
                  htmlFor="nation"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nationality
                </label>

                <input
                  type="text"
                  placeholder="e.g. Nigerian"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-slate-900 outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="nation"
                />
              </div>


              {/* Passport */}
              <div className="sm:col-span-2">

                <label
                  htmlFor="pass"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Passport number
                </label>

                <input
                  type="text"
                  placeholder="Enter passport number"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm uppercase text-slate-900 outline-none transition placeholder:normal-case placeholder:text-gray-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  id="pass"
                />

                <p className="mt-1.5 text-xs text-gray-400">
                  Make sure this matches your passport exactly.
                </p>

              </div>

            </div>

          </section>


          {/* ================= FOOTER / CTA ================= */}
          <div className="border-t border-gray-200 bg-gray-50 p-5 sm:p-8">

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-800">
                  Ready to continue?
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Review your information before payment.
                </p>
              </div>


              <input
                type="submit"
                value="Continue to payment"
                className="w-full cursor-pointer rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-blue-800 hover:shadow-md sm:w-auto"
                onClick={() => setPage('pay')}
              />

            </div>

          </div>

        </form>

      </div>

    </div>
  )
}