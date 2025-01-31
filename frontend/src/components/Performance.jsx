import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Performance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      <main className="justify-center items-center py-5 flex flex-col mt-6">
        <h1 className="text-2xl font-bold text-center underline">Performance Metrics</h1>
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 align-middle p-1 mt-5">
          <section className="text-2xl text-center bg-[#ffffff69] text-[#6c6c6c] font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64">
            <p>Jobs Posted</p>
            {inView && <CountUp end={34644} duration={2} />}
          </section>
          <section className="text-2xl text-center bg-[#ffffff69] text-[#6c6c6c] font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64">
            <p>Jobs Posted</p>
            {inView && <CountUp end={34644} duration={2} />}
          </section>
          <section className="text-2xl text-center bg-[#ffffff69] text-[#6c6c6c] font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64">
            <p>Jobs Posted</p>
            {inView && <CountUp end={34644} duration={2} />}
          </section>
          <section className="text-2xl text-center bg-[#ffffff69] text-[#6c6c6c] font-bold h-28 rounded-md flex justify-center items-center flex-col space-y-1 md:space-y-3 w-64 md:w-48 lg:w-56 xl:w-64">
            <p>Jobs Posted</p>
            {inView && <CountUp end={34644} duration={2} />}
          </section>
        </div>
      </main>
    </>
  );
};

export default Performance;
