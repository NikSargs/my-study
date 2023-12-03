import React from 'react'
import mini_logo from '../assets/react-icon-small.png'
import '../style.css'
const Navbar = () => {
  return (
    <nav className='header'>
        <div className='logo_title'> 
        <img src={mini_logo} alt="" />
        <h1 className='title'><strong>ReactFacts</strong></h1>
        </div>
       
        <p className='subtitle'>React Course - Project 1</p>
    </nav>
  )
}

export default Navbar
