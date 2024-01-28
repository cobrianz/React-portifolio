import React from 'react'
import './about.css'
import aboutData from '../../data/aboutData'
const about = () => {
  return (
    <div className='about'>
      <div className="title">
        <small>{aboutData.titleSmall}</small>
        <h1>{aboutData.title}</h1>
      </div>
      <div className="about__main-details">
        <img src={aboutData.Imageurl} alt="" />
        <div className="about__details">
          <div className="about_detail">
           {aboutData.about.map((element, index) => (
            <span key={index}>
              <img src={element.Image} alt="" />
              <h3>{element.label}</h3>
              <span>{element.year}</span>
              <small>{element.work}</small>
            </span>
          ))}
          </div>
            <p className='about__text'>{aboutData.aboutText}</p>
        </div>
      </div>
    </div>
  )
}

export default about