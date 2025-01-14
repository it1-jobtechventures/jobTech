import React, { useState } from 'react';
import img1 from '../assets/header.jpg';
import img2 from '../assets/heder2.jpg';
import img3 from '../assets/img3.jpg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('who-we-are');

  const data = {
    'who-we-are': {
      image: img1,
      text: 'JOBTECH VENTURES is conceptualized to drive further the futuristic aspirations of businesses and young talent together. We are committed to adopt and develop new technologies to provide a wider range of offerings and a better experience to our customers.',
    },
    'our-vision': {
      image: img2,
      text: 'At JOBTECH VENTURES, We are poised to come with highly advanced product offerings in both B2B and B2C space. It’s a young, new age set-up filled with a blend of AI, IOT, Technology and Human Connect to leap in the next era. With an aspiration to create enduring values, under the steering leadership of Mr. Prakash Bansal and the enterprise strengths derived from deep market insights, cutting-edge research, differentiated product development and brand building capacity, we are aiming to grow exponentially and among the best performing companies globally.',
    },
    'our-history': {
      image: img3,
      text: 'JOBTECH VENTURES contains the spirit of Entrepreneurship, Innovation, Creativity and Technology all throughout. Backed by professionals engaged in innovation, product development and integration with Mobile and Social Media, we are determined to remain ahead of competition in ever-changing volatile market and evolve at a rapid pace.',
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        <div className="flex justify-center items-center h-full">
          <img
            src={data[activeTab].image}
            alt={activeTab}
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg"
          />
        </div>

        {/* Right Section: Tabs and Paragraph */}
        <div className="flex flex-col h-full justify-center space-y-4">
          <h1 className="text-gray-500 font-semibold text-lg">-- Our Story</h1>
          <h2 className="text-3xl font-bold leading-snug">
            Our team comes with the <br /> experience and knowledge
          </h2>
          <div className="flex space-x-4 mb-4">
            {['who-we-are', 'our-vision', 'our-history'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-lg ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => handleTabChange(tab)}
              >
                {tab.replace('-', ' ').toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            {data[activeTab].text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
