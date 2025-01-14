import React from 'react'
import header from '../assets/header.jpg'

const Header = () => {
  return (
    <>
        <header>
            <section>
                <img src={header} alt='header' className='h-screen w-full' />
                <section className="absolute inset-0 flex items-center justify-center">
                    <p className="text-red-600 text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
                        Don't Look Back...You're Not Going That Way
                    </p>
                </section>
            </section>
            <section className='flex gap-5'>
                <section className='p-5 text-justify  h-96 w-96 bg-black text-white'>
                    <span>JOBTECH VENTURES</span> conceptualized to drive further the futuristic aspirations of businesses and young talent together. We are committed to adopt and develop new technologies to provide a wider range of offerings and a better experience to our customers.
                </section>
                <section className='p-5 text-justify h-96 w-96 bg-black text-white'>
                    At <span>JOBTECH VENTURES</span>, We are poised to come with highly advanced product offerings in both B2B and B2C space. It’s a young, new age set-up filled with a blend of AI, IOT, Technology and Human Connect to leap in the next era. With an aspiration to create enduring values, under the steering leadership of Mr. Prakash Bansal and the enterprise strengths derived from deep market insights, cutting-edge research, differentiated product development and brand building capacity, we are aiming to grow exponentially and among the best performing companies globally.
                </section>
                <section className='p-5 text-justify  h-96 w-96 bg-black text-white'>
                    <span>JOBTECH VENTURES</span> contains the spirit of Entrepreneurship, Innovation, Creativity and Technology all throughout. Backed by professionals engaged in innovation, product development and integration with Mobile and Social Media, we are determined to remain ahead of competition in ever-changing volatile market and evolve at a rapid pace.
                </section>
                <section className='p-5 text-justify  h-96 w-96 bg-black text-white'>
                    <span>JOBTECH VENTURES</span> contains the spirit of Entrepreneurship, Innovation, Creativity and Technology all throughout. Backed by professionals engaged in innovation, product development and integration with Mobile and Social Media, we are determined to remain ahead of competition in ever-changing volatile market and evolve at a rapid pace.
                </section>
            </section>
        </header>
    </>
  )
}

export default Header