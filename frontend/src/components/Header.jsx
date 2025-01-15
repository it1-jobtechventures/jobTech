import React from 'react';
import header from '../assets/header.jpg';
import Home from './Home'

const Header = () => {
  return (
    <div id='section1'>
      <header className="bg-blue-700 md:h-screen text-white flex flex-col lg:flex-row lg:items-center p-8 lg:p-24 pt-24">
        <section className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 space-y-5">
          <h1 className="text-4xl lg:text-5xl font-bold">Don’t Look Back...<br />You’re not Going that way.</h1>
          <p className="text-lg lg:text-xl font-medium">We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.</p>
        </section>
        <section className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <img src={header} alt="Header" className="rounded-2xl max-w-full lg:max-w-[80%]" />
        </section>
      </header>
      <Home/>
    </div>
  );
};

export default Header;
