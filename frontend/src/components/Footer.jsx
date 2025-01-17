import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import jobTech_venture from '../assets/jobTech_ventures.png'

const Footer = () => {
  return (
    <>
        <footer className="">
            <div className="flex flex-col md:flex-row justify-around items-center p-6 space-y-8 md:space-y-0">
                <section className="text-center md:text-left">
                    <section className="mb-4">
                        <img src={jobTech_venture} alt="logo" className="  h-9 mx-h-auto md:mx-0" />
                    </section>
                    <section>
                        <h4 className="font-bold text-lg text-blue-700 ">Follow Us:</h4>
                        <section className="flex justify-center md:justify-start gap-4 text-3xl pt-3">
                            <FaFacebook className="hover:text-blue-700 cursor-pointer transition duration-300" />
                            <FaLinkedin className="hover:text-blue-700 cursor-pointer transition duration-300" />
                            <FaXTwitter className="hover:text-blue-700 cursor-pointer transition duration-300" />
                            <FaInstagramSquare className="hover:text-blue-700  cursor-pointer transition duration-300" />
                            <FaYoutube className="hover:text-blue-700  cursor-pointer transition duration-300" />
                        </section>
                    </section>
                </section>
                <address className="text-center md:text-left">
                    <h4 className="font-bold text-lg mb-2 text-blue-700 ">Address:</h4>
                    <p className="text-sm">631, Building No. 3, Navjivan Society, <br />Lamington Road, Mumbai 400008.</p>
                    <h4 className="font-bold text-lg mb-2 text-blue-700 ">Phone No.:</h4>
                    <p className="text-sm mt-2"> 022-23052037</p>
                    <h4 className="font-bold text-lg mb-2 text-blue-700 ">Email:</h4>
                    <p className="text-sm mt-1"> ping@jobtechventures.com</p>
                </address>
            </div>
            <section className="text-center py-4 bg-gray-50 text-black text-sm font-medium">
                &copy; 2025 JOBTECH VENTURES PRIVATE LIMITED
            </section>
        </footer>
    </>
  );
};

export default Footer;