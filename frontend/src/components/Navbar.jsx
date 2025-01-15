import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="h-20 bg-blue-700 fixed w-full z-50 flex items-center justify-between px-4 md:px-10 text-white text-lg font-bold">
        <section className="flex items-center">
          <img src="" alt="logo" className="h-10 w-10" />
        </section>
        <section className="md:hidden">
          <button onClick={toggleSidebar} className="focus:outline-none" aria-label="Toggle Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className={`w-6 h-6 transition-transform duration-300 ${
                isSidebarOpen ? "rotate-45 scale-110" : ""
              }`}
            >
              {!isSidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              )}
            </svg>
          </button>
        </section>

        {/* Navigation Links (Hidden on Small Screens) */}
        <section className="hidden md:flex">
          <ul className="flex gap-5">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Services
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Team
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </section>
      </nav>

      {/* Sidebar for Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-blue-700 text-white transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          <button
            onClick={toggleSidebar}
            className="absolute top-6 right-6 text-white text-2xl focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="text-center text-lg space-y-4">
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Services
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Team
            </li>
            <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay (Optional, dims the background when the sidebar is open) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </>
  );
};

export default Navbar;
// import React, { useState } from "react";
// import { HiBars3BottomRight } from "react-icons/hi2";
// import { RxCross2 } from "react-icons/rx";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="h-20 bg-blue-700 fixed w-full z-50 flex items-center justify-between px-4 md:px-10 text-white text-lg font-bold">
//         {/* Logo Section */}
//         <section className="flex items-center">
//           <img src="" alt="logo" className="h-10 w-10" />
//         </section>

//         {/* Hamburger Menu for Small Screens */}
//         <section className="md:hidden">
//           <button
//             onClick={toggleSidebar}
//             className="focus:outline-none"
//             aria-label="Toggle Menu"
//           >
//             {isSidebarOpen ? (
//               <RxCross2 className="w-8 h-8 transition-transform duration-300 rotate-45 scale-110" />
//             ) : (
//               <HiBars3BottomRight className="w-8 h-8 transition-transform duration-300" />
//             )}
//           </button>
//         </section>

//         {/* Navigation Links (Hidden on Small Screens) */}
//         <section className="hidden md:flex">
//           <ul className="flex gap-5">
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Home
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Services
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Team
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Contact
//             </li>
//           </ul>
//         </section>
//       </nav>

//       {/* Sidebar for Mobile Navigation */}
//       <div
//         className={`fixed top-0 left-0 h-full w-full bg-blue-700 text-white transform ${
//           isSidebarOpen ? "translate-y-0" : "-translate-y-full"
//         } transition-transform duration-300 ease-in-out z-40`}
//       >
//         <div className="flex flex-col items-center justify-center h-full space-y-6">
//           <ul className="text-center text-lg space-y-4">
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Home
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Services
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Team
//             </li>
//             <li className="hover:text-gray-300 transition duration-300 cursor-pointer">
//               Contact
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay (Dims background when the sidebar is open) */}
//       {isSidebarOpen && (
//         <div
//           onClick={toggleSidebar}
//           className="fixed inset-0 bg-black bg-opacity-50 z-30"
//         ></div>
//       )}
//     </>
//   );
// };

// export default Navbar;
