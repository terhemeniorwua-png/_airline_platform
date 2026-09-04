"use client";

import {
  ArrowRight,Mail,Phone} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#080e1c] text-white">

     
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full flex-col gap-6 px-6 py-12 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-14">

          <div className="max-w-xl">
            <p className="mb-2 text-sm font-medium text-[#5d91c4]">
              Stay in the loop
            </p>

            <h2 className="text-2xl font-semibold sm:text-3xl">
              Get travel inspiration in your inbox
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Discover new destinations, exclusive deals and travel tips
              delivered straight to your inbox.
            </p>
          </div>

          <div className="w-full max-w-md">
            <div className="flex rounded-xl bg-white p-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm text-gray-900 outline-none placeholder:text-gray-400"
              />

              <button className="flex shrink-0 items-center gap-2 rounded-lg bg-[#286da5] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#205b8b] "
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="mt-2 text-xs text-gray-500">
              By subscribing, you agree to our Privacy Policy.
            </p>
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-10 lg:px-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

         
          <div>

            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-bold text-[#080e1c]">
                W
              </div>

              <span className="text-xl font-semibold tracking-wide">
                WANDERLUST
              </span>
            </div>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              Your journey starts here. Discover incredible destinations,
              book unforgettable trips and experience the world differently.
            </p>


            <div className="mt-6 space-y-3">

              {/* <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPim size={16} className="text-[#5d91c4]" />
                Lagos, Nigeria
              </div> */}

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[#5d91c4]" />
                sky@wanderlust.com
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-[#5d91c4]" />
                +234 9166354571
              </div>

            </div>

          </div>


          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a href="#" className="transition hover:text-white">
                  Destinations
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Flights
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Hotels
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Travel Packages
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Deals
                </a>
              </li>

            </ul>
          </div>


          {/* Travel */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Travel
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a href="#" className="transition hover:text-white">
                  My Trips
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Manage Booking
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Travel Guide
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Travel Insurance
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Gift Cards
                </a>
              </li>

            </ul>
          </div>


          {/* Support */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">

              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms & Conditions
                </a>
              </li>

            </ul>
          </div>

        </div>


        {/* Bottom footer */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-500">
            © 2026 Wanderlust. All rights reserved.
          </p>


          {/* Social icons */}
          <div className="flex items-center gap-3">

  <a
    href="https://web.facebook.com/philip.iorwua.9"
    aria-label="Facebook"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white hover:text-[#080e1c]"
  >
    <span className="text-sm font-semibold">f</span>
  </a>

  <a
    href="https://www.instagram.com/?hl=en"
    aria-label="Instagram"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white hover:text-[#080e1c]"
  >
    <FaInstagram />
  </a>

  <a
    href="https://x.com/PIorwua12080"
    aria-label="X"
    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white hover:text-[#080e1c]"
  >
    <span className="text-sm font-semibold">𝕏</span>
  </a>


</div>

        </div>

      </div>

    </footer>
  );
}