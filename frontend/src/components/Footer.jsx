import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <footer className='h-52 '>
            <div className='flex justify-around flex-col md:flex-row items-center p-6'>
                <section>
                    <section>
                        <img src='' alt='logo' />
                    </section>
                    <section>
                        <h4>Follow Us:</h4>
                        <section className='flex gap-4 text-3xl pt-3'>
                            <FaFacebook/>
                            <FaLinkedin/>
                            <FaXTwitter/>
                            <FaInstagramSquare/>
                            <FaYoutube/>
                        </section>
                    </section>
                </section>
                <address className='text-center pt-5'>
                    <h4>Address :</h4>
                    631, Building No. 3, Navjivan Society, Lamington Road, Mumbai 400008.
                    <p>Phone No.: 022-23052037</p>
                    <p>Email: ping@jobtechventures.com</p>
                </address>
            </div>
            <section className='text-center pt-5'>
                &copy; 2025 JOBTECH VENTURES PRIVATE LIMITED
            </section>
        </footer>
    </>
  )
}

export default Footer