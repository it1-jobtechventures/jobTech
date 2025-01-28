import React, { useState } from 'react';
import img1 from '../assets/we-are.jpg';
import img2 from '../assets/vision2.jpeg';
import img3 from '../assets/inspiration2.jpg';

const Header = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');

  const data = {
    'who-we-are': {
      image: img1,
      text: 'JOBTECH VENTURES is conceptualized to drive further the futuristic aspirations of businesses and young talent together. We are committed to adopt and develop new technologies to provide a wider range of offerings and a better experience to our customers.',
    },
    vision: {
      image: img2,
      text: 'At JOBTECH VENTURES, We are poised to come with highly advanced product offerings in both B2B and B2C space. It’s a young, new age set-up filled with a blend of AI, IOT, Technology and Human Connect to leap in the next era. With an aspiration to create enduring values, under the steering leadership of Mr. Prakash Bansal and the enterprise strengths derived from deep market insights, cutting-edge research, differentiated product development and brand building capacity, we are aiming to grow exponentially and among the best performing companies globally.',
    },
    Inspiration: {
      image: img3,
      text: 'JOBTECH VENTURES contains the spirit of Entrepreneurship, Innovation, Creativity and Technology all throughout. Backed by professionals engaged in innovation, product development and integration with Mobile and Social Media, we are determined to remain ahead of competition in ever-changing volatile market and evolve at a rapid pace.',
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="pt-24 px-5 lg:px-20 h-screen">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-[#3678f4]">Don’t Look Back... You’re Not Going That Way</h2>
      <div className="flex flex-col lg:flex-row w-full mt-10 gap-8 lg:gap-16">
        <div className="lg:w-1/2">
          <img src={data[activeTab].image} alt={activeTab} className="w-full rounded-lg shadow-lg"/>
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h1 className="text-lg font-semibold text-gray-600 tracking-wide uppercase text-center md:text-start">
            -- Our Story
          </h1>
          <div className="flex md:flex-row flex-col gap-3">
            {['who-we-are', 'vision', 'Inspiration'].map((tab) => (
              <button key={tab} className={`px-4 py-2 rounded-lg text-sm font-medium ${ activeTab === tab ? 'bg-[#3678f4] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`} onClick={() => handleTabChange(tab)}>
                {tab.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-black leading-relaxed text-justify font-medium">{data[activeTab].text}</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
