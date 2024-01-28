import React, { useState, useEffect } from 'react';
import './header.css';
import HeaderData from '../../data/HeaderData';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='container'>
      <nav>
        <h1>{HeaderData.name}</h1>
        <ul className={!isMenuOpen && isMobile ? 'menu' : 'menuClose'}>
          {HeaderData.links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
        {isMobile && (
          <>
            <i
              className='fa fa-bars'
              style={{ display: isMenuOpen ? 'flex' : 'none' }}
              aria-hidden="true"
              onClick={toggleMenu}
            ></i>
            <i
              className='fa fa-times'
              style={{ display: isMenuOpen ? 'none' : 'flex' }}
              aria-hidden="true"
              onClick={toggleMenu}
            ></i>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
