import React from 'react'
import './header.css'
import  headerData  from '../../data/HeaderData'
const Header = () => {
  return (
    <div>
    <h1>{headerData.name}</h1>
    <nav>
         <ul>
            {headerData.links.map((link, index) => (
            <li key={index}>
            <a href={link.url}>{link.label}</a>
          </li>
        ))}
      </ul>
      
     
    </nav> 
        <i class="fa fa-bars" aria-hidden="true"></i>
        <i class="fa fa-times" aria-hidden="true"></i>
  </div>
  )
}

export default Header