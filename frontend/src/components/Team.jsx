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
    <section className="bg-[#f5f5f5] py-10 px-4 pt-24" id='section4' >
      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center w-full sm:w-[22rem]">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
            <div>
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
          </div>
        ))}
      </div>
      {/* Stats Section */}
      <div className="flex justify-center items-center">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white w-full md:w-44 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center space-y-2">
              <p className="text-3xl font-bold text-[#3678f4]">{inView && <CountUp end={stat.value} duration={5} />}+</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;