import React from 'react'
import logo from '../assets/airbnb-logo.png'

const Navbar = () => {
  return (
    <nav className='header'>
        <img className='nav_logo' src={logo} alt="" />
    </nav>
  )
}

export default Navbar
