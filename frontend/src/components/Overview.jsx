import React from 'react'
import overview from '../assets/overview.png'

const Overview = () => {
    const openPDF = () => {
        window.open('/startup_india.pdf', '_blank');
    };

  return (
    <>
        <main id='section3' className='bg-custom-gradient text-black flex md:p-5 p-3 justify-around items-center flex-col md:flex-row'>
            <section className='md:w-[50%] space-y-5'>
                <h1 className='md:text-3xl text-2xl font-bold text-center md:text-left lg:text-5xl'>COMPANY OVERVIEW</h1>
                <section>
                    <p className='text-justify'>
                    Accenture is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services—creating tangible value at speed and scale. We are a talent- and innovation-led company with approximately 799,000 people serving clients in more than 120 countries. Technology is at the core of change today, and we are one of the world’s leaders in helping drive that change, with strong ecosystem relationships. We combine our strength in technology and leadership in cloud, data and AI with unmatched industry experience, functional expertise and global delivery capability. Our broad range of services, solutions and assets across Strategy & Consulting, Technology, Operations, Industry X and Song, together with our culture of shared success and commitment to creating 360° value, enable us to help our clients reinvent and build trusted, lasting relationships. We measure our success by the 360° value we create for our clients, each other, our shareholders, partners and communities. <span className='font-bold'>Learn more about how we are measuring value in all directions with Accenture’s 360° Value Integrated Reporting.</span>
                    </p>
                </section>
                <button onClick={openPDF} className=' text-white rounded-md p-2 bg-[#3678f4] hover:text-black'>Certificate</button>
            </section>
            <section className='pt-5 md:pt-0'>
                <img src={overview} alt='overview image' />
            </section>
        </main>
    </>
  )
}

export default Overview