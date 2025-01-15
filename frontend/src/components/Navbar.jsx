import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='h-20 bg-pink-700 fixed w-full z-50 flex items-center  text-white text-2xl font-bold justify-around'>
        <section>
          <img src='' alt='logo' />
        </section>
        <section>
          <ul className='flex gap-5'>
            <li>Home</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </section>
      </nav>
    </>
  )
}

export default Navbar