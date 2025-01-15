// import React from 'react';
// import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
// import profile from '../assets/profile.jpg';

// const Team = () => {
//   const teamMembers = [
//     {
//       name: 'Jeffery Riley',
//       title: 'Art Director',
//       image: profile,
//       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
//     },
//     {
//       name: 'Riley Beata',
//       title: 'Web Developer',
//       image: profile,
//       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
//     },
//     {
//       name: 'Mark Alone',
//       title: 'UX Designer',
//       image: profile,
//       socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
//     },
//   ];

//   return (
//     <section className="bg-gray-100 py-10 text-black">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold mb-6">Our Creative Team</h2>
//         <p className="text-gray-600 mb-10">
//           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map((member, index) => (
//             <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
//               {/* Image */}
//               <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
//               {/* Hover Effect */}
//               <div className="absolute h-1/2  w-full bg-blue-600 bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <div className="flex space-x-4 bg-white p-1 rounded-full -mt-36">
//                   {member.socials.map((icon, idx) => (
//                     <a key={idx} href="#" className="text-gray-500  text-xl hover:scale-110 transform transition-transform duration-200">
//                       {icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//               {/* Content */}
//               <div className="p-6 text-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
//                 <h3 className="text-xl font-semibold">{member.name}</h3>
//                 <p className="text-blue-600 group-hover:text-white">{member.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Team;
import React from 'react';
import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Jeffery Riley',
      title: 'Art Director',
      image: profile,
      socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
    },
    {
      name: 'Riley Beata',
      title: 'Web Developer',
      image: profile,
      socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
    },
    {
      name: 'Mark Alone',
      title: 'UX Designer',
      image: profile,
      socials: [<FaFacebookF />, <FaLinkedinIn />, <FaTwitter />, <FaPinterestP />],
    },
  ];

  return (
    <section className=" py-10 text-black pt-24" id='section3'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Our Creative Team</h2>
        <p className="text-gray-600 mb-10">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              {/* Hover Effect */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3 bg-white p-2 rounded-full shadow-md">
                  {member.socials.map((icon, idx) => (
                    <a key={idx} href="#" className="text-gray-500 text-xl hover:text-blue-600 transform hover:scale-110 transition duration-200">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
              {/* Content */}
              <div className="p-6 text-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-blue-600 group-hover:text-white">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
