"use client";

const destinations = [
  {
    name: "San Carlos de Bariloche",
    accommodations: "2,415 accommodations",
    image:
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pilar",
    accommodations: "102 accommodations",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Province of Buenos Aires",
    accommodations: "11,916 accommodations",
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tigre",
    accommodations: "399 accommodations",
    image:
      "https://images.unsplash.com/photo-1531761535209-180857e963b9?auto=format&fit=crop&w=800&q=80",
  },
];

export default function DiscoverArgentina() {
  return (
    <section className="w-full bg-[#070d1a] px-6 py-12 sm:px-10 lg:px-16">

      {/* Inner container */}
      <div className="mx-auto max-w-[1400px] rounded-[35px] bg-[#091020] px-6 py-10 sm:px-10 lg:px-12">

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
            Discover Argentina
          </h2>

          <p className="mt-1 text-sm text-gray-400 sm:text-base">
            These incredible destinations have so much to offer.
          </p>
        </div>


        {/* Horizontal carousel */}
        <div className="-mx-6 overflow-x-auto px-6 scrollbar-hide sm:-mx-10 sm:px-10 lg:-mx-12 lg:px-12">

          <div className="flex w-max gap-4">

            {destinations.map((destination) => (

              <article
                key={destination.name}
                className="
                  w-[235px]
                  shrink-0
                  overflow-hidden
                  rounded-[20px]
                  bg-[#0c1428]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#101b32]
                  sm:w-[235px]
                  lg:w-[235px]
                "
              >

                {/* Image */}
                <div className="h-[125px] w-full overflow-hidden rounded-b-[20px]">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />

                </div>


                {/* Destination information */}
                <div className="px-4 py-4">

                  <h3 className="truncate text-base font-medium text-white">
                    {destination.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    {destination.accommodations}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}