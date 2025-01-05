import React from 'react'

const Navbar = () => {
  return (
    <nav className = "flex justify-around bg-teal-200 text-white py-6">
      <div className = "logo">
        <span className = 'font-bold text-xl mx-8'>Daily Dash</span>
      </div>
    <ul className = "flex gap-9 mx-5">
      <li className='cursor-pointer hover:font-bold transition-all transition-all-duration-100'>Home</li>
      <li className='cursor-pointer hover:font-bold transition-all transition-all-duration-100'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
