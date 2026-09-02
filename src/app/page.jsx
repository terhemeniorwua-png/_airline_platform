import Image from 'next/image'

export default function Page() {
  return (
    <div>

        <div className="h-170 md:h-130 bg text-center text-white">
            <h1 className=" max-md:text-center font-black leading-16 text-4xl md:text-6xl pt-44 md:pt-44 md:pl-20">
              Discover the world  
            </h1>
            <p className='text-xl'>Your journey starts here.</p>

            <button className="px-5 py-2 border-2 mt-12 font-light rounded">Explore Destinations</button>
        </div>


      <div className='shadow-2xl mb-20'>
        <div className="flex gap-10 py-5 bg-white items-center w-[20%] left-[40%] bottom-5 justify-center absolute">
          <h2 className='flex items-center gap-1'>
            <Image
              src='/plainLift.png'
              height={20}
              width={20}
              alt='plain'
            />
            Fight</h2>
          <h2 className='flex items-center gap-1'>
            <Image
            src='/tree.png'
            height={20}
            width={20}
            alt='tree'
            />
            Tour</h2>
        </div>


        <div className="flex items-center gap-10 py-8 w-[70%] m-auto bg-white relative bottom-10 justify-center">

       <div className="flex gap-1">
         <input 
        type="radio"
        id='one' 
        />
        <label htmlFor="one">One way</label>

       </div>

       <div className="flex gap-1">
          <input 
        type="radio"
        id='round' 
        />
        <label htmlFor="round">Round Trip</label>

       </div>

         <div className="flex gap-1">
          <input 
        type="radio"
        id='mult' 
        />
        <label htmlFor="mult">Multicity</label>

       </div>
    </div>


{/* select */}


        <div className='flex justify-between items-center w-[40%] m-auto border border-gray-300 p-5 mb-20'>
        <div>
          <label htmlFor="country">From</label>

        <select id="country" name="country">
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="kenya">Kenya</option>
            <option value="south-africa">South Africa</option>
        </select>
        </div>

        
           <div>
          <label htmlFor="country">To</label>

        <select id="country" name="country">
            <option value="nigeria">Nigeria</option>
            <option value="ghana">Ghana</option>
            <option value="kenya">Kenya</option>
            <option value="south-africa">South Africa</option>
        </select>
        </div>


      </div>


        <div className='flex justify-center'>
          <button className='bg-blue-700 rounded px-5 py-2 '>
          Search Flight
        </button>
        </div>

  

       
      </div>
    </div>
  );
}