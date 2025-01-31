import React from 'react'
import jobRinger from '../assets/jobringer.png'
import Performance from './Performance'

const JobRingerPage = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold p-6 ' id='section5'>OUR PRODUCTS</h1>
        <main className='p-5 mt-4 m-5 bg-custom-gradient rounded-md'>
            <h2 className='text-center text-2xl font-bold text-[#0030f9]'>JOBRINGER</h2>
            <div className='pt-5 flex justify-between items-center md:p-5 flex-col lg:flex-row'>
                <section className='lg:w-[50%] flex justify-center items-center'>
                    <img src={jobRinger} alt='jobringer logo' />
                </section>
                <section className='lg:w-[50%] text-lg pt-2 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum vitae, molestiae voluptas molestias commodi provident voluptatum eligendi. Molestiae delectus inventore rem facere debitis nostrum placeat, facilis unde veritatis quod.</p>
                    <a href='https://jobringer.com' target='_blank'><button className='bg-[#0030f9] text-white p-1 mt-5 rounded-md font-bold w-20'>VISIT</button></a>
                </section>
            </div>
            <Performance/>
        </main>
    </div>
  )
}

export default JobRingerPage