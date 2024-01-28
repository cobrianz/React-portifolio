import React, { useState } from 'react';
import './header.css';
import HeaderData from '../../data/HeaderData';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const mobile = window.innerWidth === '800px'
  const toggleMenu = () => {
  setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container'>
      <nav>
        <h1>{HeaderData.name}</h1>
        <ul className={!isMenuOpen ? 'menu' : 'menuClose'}>
          {HeaderData.links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        <i className='fa fa-bars' style={isMenuOpen ? {display: 'flex'} : {display: 'flex'} } aria-hidden="true" onClick={toggleMenu}></i>
        <i className='fa fa-times' style={isMenuOpen ? {display: 'flex'} : {display: 'none'} } aria-hidden="true" onClick={toggleMenu}></i>
      </nav>
    </div>
  );
};

export default Header;
