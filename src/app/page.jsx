// import Image from 'next/image'

import { FaArrowRight } from "react-icons/fa";
import Destination from "./Home/Destination";
import Link from "next/link";

export default function Page() {
  return (
    <div>

      {/* Hero Section */}

        <div className="h-170 md:h-130 bg text-center text-white">
            <h1 className=" max-md:text-center font-black leading-16 text-4xl md:text-6xl pt-44 md:pt-44 md:pl-20">
              Discover the world  
            </h1>
            <p className='text-xl'>Your journey starts here.</p>

            <button className="px-5 py-2 border-2 mt-12 font-light rounded">
              <Link href='/Explore'>
                Explore Destinations
              </Link>
            </button>
        </div>


  {/* search flight  */}
  

        <div className="pt-5 pb-2 md:py-2 w-[90%] md:w-[50%] px-5 shadow-2xl m-auto bg-white relative bottom-24 md:bottom-10 rounded text-[10px] md:text-[13px]">

          <div className="flex items-center max-md:justify-between md:gap-10">

            <div className="flex gap-1">
              <input 
                type="radio"
                id='round' 
                name="rad"
              />
              <label htmlFor="round">ROUND TRIP</label>

            </div>


       <div className="flex gap-1">
         <input 
        type="radio"
        id='one' 
        name="rad"
        />
        <label htmlFor="one">ONE WAY</label>

       </div>

         <div className="flex gap-1">
          <input 
        type="radio"
        id='mult' 
        name="rad"
        />
        <label htmlFor="mult">MULTICITY</label>

       </div>
       </div>

    <div className="flex max-md:justify-between md:gap-10 items-center text-sm pt-5">

      <div>
          <h6>From</h6>
          <p className="text-xl md:text-3xl font-light">Lagos (LOS)</p>
      </div>
      <FaArrowRight />
      <div>
          <h6>To</h6>
          <p className="text-xl md:text-3xl font-light">London (LHR)</p>
      </div>



    </div>
       

      {/* schedule */}

      <div className="md:flex justify-between items-center">

          <div>
          
            <label htmlFor="date">Departure</label> <br />
            <input type="date" id="date"/>
          </div>

          <div className="border-x p-2">
          
            <label htmlFor="dat">Return</label> <br />
            <input type="date" id="dat"/>
          </div>


          <div className="max-md:my-3">
          
            <label htmlFor="num">Travelers:</label> 
            <input type="number" id="num" className="w-8 outline-0 ml-4"/> <span>Person / People</span>
          </div>

          <Link href='/SearchFlight' className="flex justify-center items-center gap-1 bg-blue-700 px-5 py-3 md:py-2 rounded-3xl text-white font-semibold hover:bg-blue-600 duration-200 max-md:text-sm">Search Flights <FaArrowRight /></Link>

      </div>
      </div>

    <Destination />

    </div>
  );
}