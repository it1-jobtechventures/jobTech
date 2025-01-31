// // import React from 'react';
// // import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// // import profile from '../assets/profile.jpg';
// // import CountUp from 'react-countup';
// // import { useInView } from 'react-intersection-observer';

// // const Team = () => {
//   // const { ref, inView } = useInView({
//   //   triggerOnce: true,
//   //   threshold: 0.5,
//   // });

// //   const teamMembers = [
// //     {
// //       name: 'Jeffery Riley',
// //       title: 'Art Director',
// //       image: profile,
// //       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
// //     },
// //     {
// //       name: 'Riley Beata',
// //       title: 'Web Developer',
// //       image: profile,
// //       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
// //     },
// //     {
// //       name: 'Mark Alone',
// //       title: 'UX Designer',
// //       image: profile,
// //       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
// //     },
// //   ];

// //   return (
// //     <section className=" py-10 text-black pt-24" id='section4'>
// //       <div className="container mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-6">Our Creative Team</h2>
// //         <p className="text-gray-600 mb-10">
// //           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
// //         </p>
// //         <div className='flex justify-around flex-col lg:flex-row'>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-5 sm:m-0">
// //           {teamMembers.map((member, index) => (
// //             <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
// //               <img src={member.image} alt={member.name} className="w-full h-44 object-contain" />
// //               {/* Hover Effect */}
// //               <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //                 <div className="flex space-x-3 bg-white p-2 rounded-full shadow-md">
// //                   {member.socials.map((icon, idx) => (
// //                     <a key={idx} href="#" className="text-gray-500 text-xl hover:text-blue-700 transform hover:scale-110 transition duration-200">
// //                       {icon}
// //                     </a>
// //                   ))}
// //                 </div>
// //               </div>
// //               {/* Content */}
// //               <div className="p-6 text-center group-hover:bg-[#3678f4] group-hover:text-white transition-colors duration-300">
// //                 <h3 className="text-xl font-semibold">{member.name}</h3>
// //                 <p className="text-blue-700 group-hover:text-white">{member.title}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
//         // <div ref={ref} className='grid md:grid-cols-2 grid-cols-1 gap-6'>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
//         //     <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Creative Minds</p>
//         //   </div>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
//         //     <p className="text-3xl font-bold text-[#3678f4]" >{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Scientific Experts</p>
//         //   </div>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5">
//         //     <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Project Managers</p>
//         //   </div>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
//         //     <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Interns</p>
//         //   </div>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
//         //     <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Projects Completed</p>
//         //   </div>
//         //   <div className="bg-white p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
//         //     <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
//         //     <p className="text-sm">Projects Completed</p>
//         //   </div>
//         // </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Team;




// // import React from 'react';
// // import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// // import profile from '../assets/team1.png';
// // import { useInView } from 'react-intersection-observer';
// // import CountUp from 'react-countup';
// // const Team = () => {
// //   const { ref, inView } = useInView({
// //     triggerOnce: true,
// //     threshold: 0.5,
// //   });
// //   const teamMembers = [
// //     {
// //       name: 'Jeffery Riley',
// //       title: 'Art Director',
// //       ab: "Passionate about creative direction and visual storytelling.Passionate about creative direction and visual storytelling.Passionate about creative direction and visual storytelling.",
// //       image: profile,
// //       socialLinks: [
// //         { icon: <FaFacebookF />, link: "https://facebook.com", bgColor: "bg-blue-600" },
// //         { icon: <FaLinkedinIn />, link: "https://linkedin.com", bgColor: "bg-blue-800" },
// //         { icon: <FaTwitter />, link: "https://twitter.com", bgColor: "bg-blue-400" },
// //         { icon: <FaPinterestP />, link: "https://pinterest.com", bgColor: "bg-red-500" }
// //       ],
// //     },
// //     {
// //       name: 'Riley Beata',
// //       title: 'Web Developer',
// //       ab: "Building web experiences with performance and accessibility in mind.Passionate about creative direction and visual storytelling.Passionate about creative direction and visual storytelling.",
// //       image: profile,
// //       socialLinks: [
// //         { icon: <FaFacebookF />, link: "https://facebook.com", bgColor: "bg-blue-600" },
// //         { icon: <FaLinkedinIn />, link: "https://linkedin.com", bgColor: "bg-blue-800" },
// //         { icon: <FaTwitter />, link: "https://twitter.com", bgColor: "bg-blue-400" },
// //         { icon: <FaPinterestP />, link: "https://pinterest.com", bgColor: "bg-red-500" }
// //       ],
// //     },
// //     {
// //       name: 'Mark Alone',
// //       title: 'UX Designer',
// //       ab: "Designing seamless user experiences for modern applications.Passionate about creative direction and visual storytelling.Passionate about creative direction and visual storytelling.",
// //       image: profile,
// //       socialLinks: [
// //         { icon: <FaFacebookF />, link: "https://facebook.com", bgColor: "bg-blue-600" },
// //         { icon: <FaLinkedinIn />, link: "https://linkedin.com", bgColor: "bg-blue-800" },
// //         { icon: <FaTwitter />, link: "https://twitter.com", bgColor: "bg-blue-400" },
// //         { icon: <FaPinterestP />, link: "https://pinterest.com", bgColor: "bg-red-500" }
// //       ],
// //     },
// //   ];

// //   return (
// //     <section className="py-10 text-black pt-24" id="section4">
// //       <div className="container mx-auto text-center">
// //         <h2 className="text-4xl font-bold mb-6">Our Creative Team</h2>
// //         <p className="text-gray-600 mb-10">
// //           Meet our talented professionals who bring passion and expertise to our projects.
// //         </p>
// //         <div className='flex'>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
// //           {teamMembers.map((member, index) => (
// //             <div key={index} className="relative group rounded-lg shadow-lg overflow-hidden transition-all duration-300">
              
// //               {/* Image */}
// //               <div className="w-full h-64">
// //                 <img src={member.image} alt={member.name} className="w-full h-full object-cover"/>
// //               </div>

// //               {/* Hover Section (Half Height) */}
// //               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-5 py-4">
                
// //                 {/* Social Icons Positioned Half on Image & Half on Hover Part */}
// //                 <div className="flex space-x-3 mb-4">
// //                   {member.socialLinks.map((social, idx) => (
// //                     <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" 
// //                       className={`text-white text-lg p-2 rounded-full ${social.bgColor} hover:scale-110 transition transform`}>
// //                       {social.icon}
// //                     </a>
// //                   ))}
// //                 </div>

// //                 {/* Short Content */}
// //                 <p className="text-white text-center text-sm">{member.ab}</p>
// //               </div>

// //               {/* Name & Title (Always Visible) */}
// //               <div className="p-4 text-center bg-white">
// //                 <h3 className="text-xl font-semibold">{member.name}</h3>
// //                 <p className="text-blue-700">{member.title}</p>
// //               </div>

// //             </div>
// //           ))}
// //         </div>
// //         </div>
// //           <div>
// //           <div ref={ref} className='grid md:grid-cols-3 grid-cols-3 gap-6'>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
// //             <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Creative Minds</p>
// //           </div>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
// //             <p className="text-3xl font-bold text-[#3678f4]" >{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Scientific Experts</p>
// //           </div>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5">
// //             <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Project Managers</p>
// //           </div>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
// //             <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Interns</p>
// //           </div>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
// //             <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Projects Completed</p>
// //           </div>
// //           <div className="bg-white w-32 p-3 rounded-lg shadow-xl flex flex-col justify-center items-center  space-y-5 ">
// //             <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={24} duration={5} /> }+</p>
// //             <p className="text-sm">Projects Completed</p>
// //           </div>
// //         </div>
// //           </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Team;
// import React from 'react';
// import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import profile from '../assets/team1.png';
// import { useInView } from 'react-intersection-observer';
// import CountUp from 'react-countup';

// const Team = () => {
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

//   const teamMembers = [
//     {
//       name: 'Jeffery Riley',
//       title: 'Art Director',
//       ab: "Passionate about creative direction and visual storytelling.",
//       image: profile,
//       socialLinks: [
//         { icon: <FaFacebookF />, link: "#", bgColor: "bg-blue-600" },
//         { icon: <FaLinkedinIn />, link: "#", bgColor: "bg-blue-800" },
//         { icon: <FaTwitter />, link: "#", bgColor: "bg-blue-400" },
//         { icon: <FaPinterestP />, link: "#", bgColor: "bg-red-500" }
//       ],
//     },
//     {
//       name: 'Riley Beata',
//       title: 'Web Developer',
//       ab: "Building web experiences with performance and accessibility in mind.",
//       image: profile,
//       socialLinks: [
//         { icon: <FaFacebookF />, link: "#", bgColor: "bg-blue-600" },
//         { icon: <FaLinkedinIn />, link: "#", bgColor: "bg-blue-800" },
//         { icon: <FaTwitter />, link: "#", bgColor: "bg-blue-400" },
//         { icon: <FaPinterestP />, link: "#", bgColor: "bg-red-500" }
//       ],
//     },
//     {
//       name: 'Mark Alone',
//       title: 'UX Designer',
//       ab: "Designing seamless user experiences for modern applications.",
//       image: profile,
//       socialLinks: [
//         { icon: <FaFacebookF />, link: "#", bgColor: "bg-blue-600" },
//         { icon: <FaLinkedinIn />, link: "#", bgColor: "bg-blue-800" },
//         { icon: <FaTwitter />, link: "#", bgColor: "bg-blue-400" },
//         { icon: <FaPinterestP />, link: "#", bgColor: "bg-red-500" }
//       ],
//     },
//   ];

//   return (
//     <section className="py-16 bg-gray-50 text-black">
//       <div className="container mx-auto text-center px-6">
//         <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Creative Team</h2>
//         <p className="text-gray-600 mb-10">Meet our talented professionals who bring passion and expertise to our projects.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="relative group rounded-lg shadow-lg overflow-hidden transition-all duration-300 bg-white">
//               <div className="relative w-full h-72">
//                 <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//               </div>
//               <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="flex space-x-3 mb-4">
//                   {member.socialLinks.map((social, idx) => (
//                     <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
//                       className={`text-white text-lg p-3 rounded-full ${social.bgColor} shadow-lg hover:scale-110 transition-all`}>
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//                 <p className="text-white text-sm text-center px-4">{member.ab}</p>
//               </div>
//               <div className="p-5 text-center">
//                 <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
//                 <p className="text-blue-700">{member.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div ref={ref} className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
//           {[
//             { label: "Creative Minds", count: 24 },
//             { label: "Scientific Experts", count: 18 },
//             { label: "Project Managers", count: 12 },
//             { label: "Interns", count: 10 },
//             { label: "Projects Completed", count: 50 },
//             { label: "Awards Won", count: 8 }
//           ].map((item, idx) => (
//             <div key={idx} className="bg-white w-32 p-4 rounded-lg shadow-lg flex flex-col justify-center items-center">
//               <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={item.count} duration={3} />}+</p>
//               <p className="text-sm text-gray-700">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const teamMembers = [
    {
      name: "Jeffery Riley",
      title: "Art Director",
      image: profile,
      socials: [
        { icon: <FaFacebookF />, url: "#" },
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaPinterestP />, url: "#" },
      ],
    },
    {
      name: "Riley Beata",
      title: "Web Developer",
      image: profile,
      socials: [
        { icon: <FaFacebookF />, url: "#" },
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaPinterestP />, url: "#" },
      ],
    },
    {
      name: "Mark Alone",
      title: "UX Designer",
      image: profile,
      socials: [
        { icon: <FaFacebookF />, url: "#" },
        { icon: <FaLinkedinIn />, url: "#" },
        { icon: <FaTwitter />, url: "#" },
        { icon: <FaPinterestP />, url: "#" },
      ],
    },
  ];

  const stats = [
    { value: 30, label: "Creative Minds" },
    { value: 20, label: "Scientific Experts" },
    { value: 15, label: "Project Managers" },
    { value: 10, label: "Interns" },
    { value: 50, label: "Projects Completed" },
    { value: 100, label: "Satisfied Clients" },
  ];

  return (
    <section className="bg-pink-300 py-10 px-4">
      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center w-full sm:w-[22rem]">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.title}</p>
            <div className="flex space-x-3 mt-3">
              {member.socials.map((social, idx) => (
                <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10 justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white w-full md:w-44 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center space-y-2">
            <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={stat.value} duration={5} />}+</p>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;