import React from "react";
import { FaFacebookF, FaPinterestP, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import profile from "../assets/profile.jpg";
import profile2 from "../assets/team1.png"; 
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Team = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stats = [
    { value: 30, label: "Creative Minds" },
    { value: 20, label: "Scientific Experts" },
    { value: 15, label: "Project Managers" },
    { value: 10, label: "Interns" },
    { value: 50, label: "Projects Completed" },
    { value: 100, label: "Satisfied Clients" },
  ];

  return (
    <section className="bg-white py-10 px-4 pt-24" id="section4">
      {/* Team Member Cards */}
      <div className="flex flex-wrap justify-center gap-6 m-6">
        <div className="bg-director-gradient shadow-lg rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center md:w-[40%] w-full hover:shadow-2xl transition-shadow duration-300">
          <img src={profile} alt="John Doe" className="w-36 h-36 rounded-full object-cover mb-4" />
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
            <div className="flex space-x-3 mt-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaTwitter />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-director-gradient shadow-lg rounded-xl p-6 flex flex-col lg:flex-row gap-6 items-center  md:w-[40%] w-full  hover:shadow-2xl transition-shadow duration-300">
          <img src={profile2} alt="Jane Doe" className="w-36 h-36 rounded-full object-cover mb-4" />
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-semibold text-gray-800">Jane Doe</h3>
            <p className="text-sm text-gray-500">Lead Developer</p>
            <div className="flex space-x-3 mt-3">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaPinterestP />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex justify-center items-center">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10 justify-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white w-full md:w-44 p-4 rounded-lg shadow-xl flex flex-col justify-center items-center space-y-2 hover:shadow-2xl transition-shadow duration-300">
              <p className="text-3xl font-bold text-[#6B727F]">
                {inView && <CountUp end={stat.value} duration={5} />}+
              </p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
