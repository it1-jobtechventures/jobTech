import React from 'react'
import { FaRegClock } from "react-icons/fa";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const JobRingerCard = () => {
  return (
    <>
        <main>
            <div className=' border border-black h-60 w-52 space-y-6 rounded-xl flex flex-col justify-evenly items-center'>
                <section className='bg-yellow-300 p-0.5 rounded-bl-xl text-right self-end rounded-tr-xl'>
                    In Office
                </section>
                <section>
                    <h3>Horizontal Talent</h3>
                </section>
                <section>
                    <section className='flex items-center gap-1'>
                        <FaRegClock/>
                        <p>Full Time - Permanent</p>
                    </section>
                    <section className='flex items-center gap-1'>
                        <PiSuitcaseSimpleThin/>
                        <p>Full Time - Permanent</p>
                    </section>
                    <section className='flex items-center gap-1'>
                        <CiLocationOn/>
                        <p>Full Time - Permanent</p>
                    </section>
                </section>
                <button className='bg-blue-500 hover:bg-blue-800 text-white p-1 font-bold w-28 rounded-full'>APPLY</button>
            </div>
        </main>
    </>
  )
}

export default JobRingerCard