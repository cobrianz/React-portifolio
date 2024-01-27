import React from 'react'
import './hero.css'
import profile from '../../assets/profile.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import HeroData from '../../data/heroData'
const hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="" />
      <div className="hero__details">
      <div className="hero__detail">
        {HeroData.map((element, index) => (
          <span key={index}>{element}</span>
        ))}
      </div>
      <div className="social__links">
      <a href="#"><img src={linkedin} alt="" /></a>
      <a href="#"><img src={github} alt="" /></a>
      </div>
      </div>
    </div>
  )
}

export default hero