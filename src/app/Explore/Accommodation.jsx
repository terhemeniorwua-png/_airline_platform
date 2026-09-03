"use client";

import Image from "next/image";
import DiscoverArgentina from "./Argentina";

const accommodations = [
  {
    type: "Hotel",
    name: "Hotel y Termas Huife",
    location: "Termas De Huife, Chile",
    rating: "4.8",
    price: "$8,457",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Hotel",
    name: "Correntoso Lake",
    location: "Villa La Angostura, Argentina",
    rating: "4.8",
    oldPrice: "$21,457",
    price: "$5,127",
    discount: "72% OFF",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Hotel",
    name: "Milodge Elqui Domos",
    location: "Pisco Elqui, Chile",
    rating: "4.8",
    price: "$5,127",
    image:
      "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Resort",
    name: "Hotel Termas de Puyehue",
    location: "Puyehue, Chile",
    rating: "4.8",
    price: "$11,000",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
  },
];


export default function Accommodation() {
  return (
    <section className="w-full bg-[#f7f9fd] px-6 py-10 sm:px-10 lg:px-16">

      {/* Header */}
      <div className="mb-7">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#315f9c]">
          Top Accommodation
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Stay in an Exclusive Accommodation
        </h2>

        <p className="mt-1 text-sm text-slate-500 sm:text-base">
          Castles, villas, igloos... we have it all.
        </p>
      </div>

      {/* Responsive Grid/Scroll Container */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-5 min-w-max">

          {accommodations.map((hotel) => (
            <article
              key={hotel.name}
              className="w-[260px] shrink-0 overflow-hidden rounded-2xl bg-[#edf2fc] border border-slate-200/60 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-40 w-full overflow-hidden">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  {hotel.discount && (
                    <span className="absolute top-2 right-2 rounded-md bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white shadow">
                      {hotel.discount}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Type + Rating */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-500">{hotel.type}</span>
                    <span className="flex items-center gap-1 font-semibold text-amber-600">
                      <span>★</span>
                      {hotel.rating}
                    </span>
                  </div>

                  {/* Name & Location */}
                  <h3 className="mt-1.5 truncate text-base font-bold text-slate-900" title={hotel.name}>
                    {hotel.name}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-slate-500" title={hotel.location}>
                    {hotel.location}
                  </p>
                </div>
              </div>

              {/* Price Badges */}
              <div className="px-4 pb-4">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {hotel.oldPrice ? (
                    <>
                      <span className="rounded-full bg-slate-200 px-2.5 py-1 text-[10px] font-medium text-slate-500 line-through">
                        {hotel.oldPrice}
                      </span>
                      <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold text-white">
                        {hotel.price}
                      </span>
                    </>
                  ) : (
                    <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-semibold text-white">
                      Starting at {hotel.price}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}

        </div>
      </div>

      <DiscoverArgentina />

    </section>
  );
}