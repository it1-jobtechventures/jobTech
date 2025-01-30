import React from 'react'
import jobRinger from '../assets/jobringer.png'
import Performance from './Performance'

const JobRingerPage = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold ' id='section5'>OUR PRODUCTS</h1>
        <main className='p-5  shadow-2xl mt-4 m-5'>
            <h2 className='text-center text-2xl font-bold text-[#3678f4]'>JOBRINGER</h2>
            <div className='pt-5 flex justify-between items-center md:p-5 flex-col lg:flex-row'>
                <section className='lg:w-[50%] flex justify-center items-center'>
                    <img src={jobRinger} alt='jobringer logo' />
                </section>
                <section className='lg:w-[50%] text-lg pt-2 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum vitae, molestiae voluptas molestias commodi provident voluptatum eligendi. Molestiae delectus inventore rem facere debitis nostrum placeat, facilis unde veritatis quod.</p>
                    <a href='https://jobringer.com' target='_blank'><button className='bg-[#3678f4] text-white p-1 mt-5 rounded-md font-bold w-20'>VISIT</button></a>
                </section>
            </div>
            <Performance/>
        </main>
    </div>
  )
}

export default JobRingerPage