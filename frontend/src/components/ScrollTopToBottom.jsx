import React, { useEffect, useState } from 'react'
import { FaAngleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
    const [visible , setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        }
        window.addEventListener("scroll" , handleScroll)

        return () => {
            window.removeEventListener("scroll" , handleScroll)
        }
    },[])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    visible && (
        <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-[#3678f4] text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition">
            <span className="text-xl"><FaAngleUp/></span> 
        </button>
    )
  )
}

export default ScrollToTopButton