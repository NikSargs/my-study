import React from 'react'
import photo from '../assets/photo-grid.png'
const Hero = () => {
  return (
    <div className='hero_element'>
        <img className='hero_photo' src={photo} alt="" />
        <h1 className='hero_title'>Online Experiences</h1>
        <p className='hero_desc'>Join unique interactive activities 
                                led by one-of-a-kind hosts—all 
                                without leaving home.
        </p>
    </div>
  )
}

export default Hero
