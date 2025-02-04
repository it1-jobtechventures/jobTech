import React, { useState ,useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/jobTech_ventures.png";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and scrolled past 50px, hide navbar
      setIsVisible(false);
    } else {
      // If scrolling up, show navbar
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav className={`h-20 bg-white text-black fixed w-full z-50 flex items-center justify-between px-4 md:px-10 lg:text-lg text-lg md:text-sm font-bold shadow-md transition-transform duration-300 ${isVisible  ? "translate-y-0" : "-translate-y-full"}`}>
        <section className="flex items-center">
          <img src={logo} alt="logo" className="h-9" />
        </section>
        <section className="hidden md:flex">
          <ul className="flex lg:gap-8 md:gap-4">
            <li>
              <HashLink smooth to="#section1" className="hover:text-[#ed1c24] transition duration-300">
                Home
              </HashLink>
            </li>
            {/* <li>
              <HashLink smooth to="#section2" className="hover:text-[#ed1c24] transition duration-300">
                Video
              </HashLink>
            </li> */}
            <li>
              <HashLink smooth to="#section3" className="hover:text-[#ed1c24] transition duration-300">
                Overview
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section4" className="hover:text-[#ed1c24] transition duration-300">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section5" className="hover:text-[#ed1c24] transition duration-300">
                Products
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section6" className="hover:text-[#ed1c24] transition duration-300">
                Contact
              </HashLink>
            </li>
          </ul>
        </section>
        <section className="md:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </section>
      </nav>
      {/* Sidebar for Small Screens */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white text-[#ed1c24] text-xl transform ${ isSidebarOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out z-40`}>
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button onClick={toggleSidebar} className="absolute top-6 right-6 text-white text-2xl focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="text-center text-lg space-y-4">
            <li>
              <HashLink smooth to="#section1" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Home
              </HashLink>
            </li>
            {/* <li>
              <HashLink smooth to="#section2" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Video
              </HashLink>
            </li> */}
            <li>
              <HashLink smooth to="#section3" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Overview
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section4" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Team
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section5" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Our Products
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#section6" onClick={toggleSidebar} className="hover:text-gray-200 transition duration-300">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay to close the sidebar */}
      {isSidebarOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 bg-black bg-opacity-50 z-30"></div>
      )}
    </>
  );
};

export default Navbar;
