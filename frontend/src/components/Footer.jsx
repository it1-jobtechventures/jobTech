import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className="">
            <div className="flex flex-col md:flex-row justify-around items-center p-6 space-y-8 md:space-y-0">
                <section className="text-center md:text-left">
                    <section className="mb-4">
                        <img src="" alt="logo" className="h-12 w-12 mx-auto md:mx-0" />
                    </section>
                    <section>
                        <h4 className="font-bold text-lg">Follow Us:</h4>
                        <section className="flex justify-center md:justify-start gap-4 text-3xl pt-3">
                            <FaFacebook className="hover:text-blue-600 cursor-pointer transition duration-300" />
                            <FaLinkedin className="hover:text-blue-800 cursor-pointer transition duration-300" />
                            <FaXTwitter className="hover:text-blue-500 cursor-pointer transition duration-300" />
                            <FaInstagramSquare className="hover:text-pink-600 cursor-pointer transition duration-300" />
                            <FaYoutube className="hover:text-red-600 cursor-pointer transition duration-300" />
                        </section>
                    </section>
                </section>
                <address className="text-center md:text-left">
                    <h4 className="font-bold text-lg mb-2">Address:</h4>
                    <p className="text-sm">631, Building No. 3, Navjivan Society, <br />Lamington Road, Mumbai 400008.</p>
                    <p className="text-sm mt-2">Phone No.: 022-23052037</p>
                    <p className="text-sm mt-1">Email: ping@jobtechventures.com</p>
                </address>
            </div>
            <section className="text-center py-4 bg-gray-50 text-white text-sm font-medium">
                &copy; 2025 JOBTECH VENTURES PRIVATE LIMITED
            </section>
        </footer>
    </>
  );
};

export default Footer;