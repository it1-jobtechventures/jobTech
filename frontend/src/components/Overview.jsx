import React from 'react'
import overview from '../assets/overview.png'

const Overview = () => {
    const openPDF = () => {
        window.open('/startup_india.pdf', '_blank');
    };

  return (
    <>
        <main id='section3' className='bg-[#3678f4] text-white flex md:p-5 p-3 justify-around items-center flex-col md:flex-row'>
            <section className='md:w-[50%] space-y-5'>
                <h1 className='md:text-3xl text-2xl font-bold text-center md:text-left lg:text-5xl'>COMPANY OVERVIEW</h1>
                <section>
                    <p className='text-justify'>
                    Accenture is a leading global professional services company that helps the world’s leading businesses, governments and other organizations build their digital core, optimize their operations, accelerate revenue growth and enhance citizen services—creating tangible value at speed and scale. We are a talent- and innovation-led company with approximately 799,000 people serving clients in more than 120 countries. Technology is at the core of change today, and we are one of the world’s leaders in helping drive that change, with strong ecosystem relationships. We combine our strength in technology and leadership in cloud, data and AI with unmatched industry experience, functional expertise and global delivery capability. Our broad range of services, solutions and assets across Strategy & Consulting, Technology, Operations, Industry X and Song, together with our culture of shared success and commitment to creating 360° value, enable us to help our clients reinvent and build trusted, lasting relationships. We measure our success by the 360° value we create for our clients, each other, our shareholders, partners and communities. <span className='font-bold'>Learn more about how we are measuring value in all directions with Accenture’s 360° Value Integrated Reporting.</span>
                    </p>
                </section>
                <button onClick={openPDF} className='bg-white text-[#3678f4] rounded-md p-2 hover:bg-[#3678f4] hover:text-white'>Certificate</button>
            </section>
            <section className='pt-5 md:pt-0'>
                <img src={overview} alt='overview image' />
            </section>
        </main>
    </>
  )
}

export default Overview
// import React, { useState } from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

// const Overview = () => {
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleOpenModal = () => {
//     setModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <main className="bg-[#3678f4] text-white flex md:p-5 p-3 justify-around items-center flex-col md:flex-row">
//         <section className="md:w-[50%] space-y-5">
//           <h1 className="md:text-3xl text-2xl font-bold text-center md:text-left lg:text-5xl">
//             COMPANY OVERVIEW
//           </h1>
//           <section>
//             <p className="text-justify">
//               Accenture is a leading global professional services company...
//             </p>
//           </section>
//           <button
//             className="bg-white bg-[#3678f4] rounded-md p-2 hover:bg-[#3678f4] hover:text-white"
//             onClick={handleOpenModal}
//           >
//             Certificate
//           </button>
//         </section>
//         <section className="pt-5 md:pt-0">
//           <img src="/path/to/overview.png" alt="overview" />
//         </section>
//       </main>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 relative max-w-3xl w-full">
//             <button
//               className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
//               onClick={handleCloseModal}
//             >
//               X
//             </button>
//             <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.min.js">
//               <Viewer fileUrl="/startup_india.pdf" />
//             </Worker>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Overview;

