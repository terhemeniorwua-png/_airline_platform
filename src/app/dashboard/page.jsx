"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  Plane,
  CalendarDays,
  Heart,
  User,
  Settings,
  MapPin,
  ArrowRight,
  Clock3
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "My Trips",
    icon: Plane,
  },
  {
    name: "Bookings",
    icon: CalendarDays,
  },
  {
    name: "Saved",
    icon: Heart,
  },
  {
    name: "Profile",
    icon: User,
  },
  {
    name: "Settings",
    icon: Settings,
  },
];

const pastTrips = [
  {
    city: "Paris",
    country: "France",
    image: "/paris.jpg",
  },
  {
    city: "Dubai",
    country: "UAE",
    image: "/dubai.jpg",
  },
  {
    city: "Nairobi",
    country: "Kenya",
    image: "/nairobi.jpg",
  },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  return (
    <main className="min-h-screen bg-[#f6f8fc] text-[#111827]">

      {/* Page heading */}
      <div className="border-b border-gray-200 bg-white px-5 py-5 sm:px-8 lg:px-12">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          My Trips
        </h1>
      </div>


      {/* Dashboard */}
      <div className="mx-auto flex max-w-[1400px] flex-col lg:flex-row">

        {/* ================= SIDEBAR ================= */}
        <aside className="border-b border-gray-200 bg-white p-4 lg:min-h-[calc(100vh-89px)] lg:w-[230px] lg:border-b-0 lg:border-r lg:p-6">

          <nav className="flex gap-2 overflow-x-auto lg:block">

            {menuItems.map((item) => {
              const Icon = item.icon;
              const active = activeMenu === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name)}
                  className={`
                    flex
                    shrink-0
                    items-center
                    gap-3
                    rounded-lg
                    px-4
                    py-3
                    text-sm
                    transition
                    lg:mb-2
                    lg:w-full
                    ${
                      active
                        ? "bg-[#e9f1fb] font-medium text-[#24669c]"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon size={18} />

                  <span>{item.name}</span>
                </button>
              );
            })}

          </nav>

        </aside>


        {/* ================= MAIN CONTENT ================= */}
        <section className="flex-1 px-5 py-7 sm:px-8 lg:px-10">

          {/* Welcome */}
          <div className="mb-8">

            <p className="text-sm text-gray-500">
              Welcome back,
            </p>

            <h2 className="mt-1 text-3xl font-semibold text-[#111827]">
              Philip 👋
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Here's what's happening with your travels.
            </p>

          </div>


          {/* ================= UPCOMING TRIP ================= */}
          <div className="mb-10">

            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold">
                Upcoming trip
              </h3>

              <button className="text-sm font-medium text-[#24669c] hover:underline">
                View all
              </button>
            </div>


            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

              {/* Top image */}
              <div className="relative h-[180px] overflow-hidden sm:h-[220px]">

                <img
                  src="/london.jpg"
                  alt="London"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">

                  <p className="text-sm opacity-80">
                    Your next adventure
                  </p>

                  <h4 className="mt-1 text-2xl font-semibold">
                    London, United Kingdom
                  </h4>

                </div>

              </div>


              {/* Trip information */}
              <div className="p-5 sm:p-6">

                <div className="grid gap-5 sm:grid-cols-3">

                  {/* Route */}
                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2fa] text-[#24669c]">
                      <Plane size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Route
                      </p>

                      <p className="mt-1 font-medium">
                        Lagos → London
                      </p>
                    </div>

                  </div>


                  {/* Date */}
                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2fa] text-[#24669c]">
                      <CalendarDays size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Departure
                      </p>

                      <p className="mt-1 font-medium">
                        Sep 12
                      </p>
                    </div>

                  </div>


                  {/* Airline */}
                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf2fa] text-[#24669c]">
                      <Clock3 size={18} />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Airline
                      </p>

                      <p className="mt-1 font-medium">
                        British Airways
                      </p>
                    </div>

                  </div>

                </div>


                {/* Button */}
                <div className="mt-6 border-t border-gray-100 pt-5">

                  <button
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      bg-[#286da5]
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white
                      transition
                      hover:bg-[#205b8b]
                    "
                  >
                    View trip

                    <ArrowRight size={16} />

                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* ================= PAST TRIPS ================= */}
          <div>

            <div className="mb-4 flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Past trips
              </h3>

              <button className="text-sm font-medium text-[#24669c] hover:underline">
                View all
              </button>

            </div>


            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

              {pastTrips.map((trip) => (

                <div
                  key={trip.city}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    shadow-sm
                    transition
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                  "
                >

                  <div className="h-[150px] overflow-hidden">

                    <img
                      src={trip.image}
                      alt={trip.city}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />

                  </div>


                  <div className="p-4">

                    <div className="flex items-center gap-2">

                      <MapPin
                        size={15}
                        className="text-[#286da5]"
                      />

                      <h4 className="font-medium">
                        {trip.city}
                      </h4>

                    </div>

                    <p className="mt-1 text-sm text-gray-500">
                      {trip.country}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}