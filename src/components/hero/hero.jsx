import React from 'react'
import heroData from '../../data/heroData'
import profile from '../../assets/profile.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import './hero.css'
const hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="" />
      <div className="profile__detail">
        <span>{heroData[0]}</span>
        <h1>{heroData[1]}</h1>
        <h2>{heroData[2]}</h2>
        <div className="btns">
          <a href="#">Download Cv</a>
          <a href="#">Contant Info</a>
        </div>
        <div className="social__link">
          <a href="#"><img src={linkedin} alt="" /></a>
          <a href="https://www.github.com/cobrianz" target='_blank'><img src={github} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default hero