import React from 'react'
import CountUp from 'react-countup';

const Performance = () => {
  return (
    <>
      <main className=' justify-center items-center py-5 flex flex-col'>
        <h1 className='text-2xl font-bold text-center underline'></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2  align-middle  p-1 mt-5'>
          <section className='text-2xl text-center bg-yellow-100 hover:bg-yellow-300 hover:text-white font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64'>
            <p>Jobs Posted</p>
            <CountUp end={34644} duration={2} />
          </section>
          <section className='text-2xl text-center bg-pink-300 hover:bg-pink-500 hover:text-white font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64'>
            <p>Jobs Posted</p>
            <CountUp end={34644} duration={2} />
          </section>
          <section className='text-2xl text-center bg-green-300 hover:bg-green-500 hover:text-white font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64'>
            <p>Jobs Posted</p>
            <CountUp end={34644} duration={2} />
          </section>
          <section className='text-2xl text-center bg-orange-300 hover:bg-orange-500 hover:text-white font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64'>
            <p>Jobs Posted</p>
            <CountUp end={34644} duration={2} />
          </section>
        </div>
      </main>
    </>
  )
}

export default Performance

