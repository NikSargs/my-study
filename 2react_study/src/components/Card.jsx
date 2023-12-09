import React from 'react'
import katie from '../assets/katie-zaferes.png'
import star from '../assets/star.png'

const Card = () => {
  return (
    <div className='courses_component'>
        <img className='course_image' src={katie} alt="" />
        <div className='course_info'>
          <img className='course_star_image' src={star} alt="" />
          <span className='course_mark'>5.0</span>
          <span className='course_count_students'>(6)</span>
          <span className='course_country'> | USA</span>
        </div>
        <h2 className='course_title'>Life lessons with Katie Zaferes</h2>
        <p className='course_price'><span className='bold'></span>From $136</span> / person</p>
        
    </div>
  )
}

export default Card
