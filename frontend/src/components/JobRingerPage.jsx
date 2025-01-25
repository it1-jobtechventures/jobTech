import React from 'react'
import jobRinger from '../assets/jobringer.png'
import Performance from './Performance'

const JobRingerPage = () => {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold '>OUR PRODUCTS</h1>
        <main className='p-5  shadow-2xl mt-4 m-5'>
            <h2 className='text-center text-2xl font-bold text-[#3678f4]'>JOBRINGER</h2>
            <div className='pt-5 flex justify-between items-center md:p-5 flex-col lg:flex-row'>
                <section className='lg:w-[50%] flex justify-center items-center'>
                    <img src={jobRinger} alt='jobringer logo' />
                </section>
                <section className='lg:w-[50%] text-lg pt-2 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum vitae, molestiae voluptas molestias commodi provident voluptatum eligendi. Molestiae delectus inventore rem facere debitis nostrum placeat, facilis unde veritatis quod.</p>
                    <button className='bg-[#3678f4] text-white p-1 mt-5 rounded-md font-bold w-20'>VISIT</button>
                </section>
            </div>
            <Performance/>
        </main>
    </div>
  )
}

export default JobRingerPage

// import React from 'react';
// import jobRinger from '../assets/jobringer.png';
// import Performance from './Performance';

// const JobRingerPage = () => {
//   return (
//     <div>
//       <h1 className='text-center text-4xl font-bold mb-6'>OUR PRODUCTS</h1>
//       <main className='p-5 shadow-2xl mt-4 m-5'>
//         <h2 className='text-center text-2xl font-bold'>JOBRINGER</h2>
//         <div className='pt-5 flex flex-col lg:flex-row justify-between items-center lg:p-5'>
//           <section className='lg:w-[50%] flex justify-center items-center'>
//             <img src={jobRinger} alt='jobringer logo' className="w-full max-w-[400px]"/>
//           </section>
//           <section className='lg:w-[50%] text-lg pt-2 text-justify'>
//             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci harum vitae, molestiae voluptas molestias commodi provident voluptatum eligendi. Molestiae delectus inventore rem facere debitis nostrum placeat, facilis unde veritatis quod.</p>
//             <button className='bg-blue-700 text-white p-2 mt-5 rounded-md font-bold w-full sm:w-40'>
//               VISIT
//             </button>
//           </section>
//         </div>
//         <Performance />
//       </main>
//     </div>
//   );
// }

// export default JobRingerPage;
