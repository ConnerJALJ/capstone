import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Menu.css';

const Menu = props => {
  return (
    <div className={`menu-container ${props.menuOpen ? 'active' : ''}`}>
      <div className="overlay" />
      <div className="menu-items">
        <ul>
          <li>
            <a href="#welcome-section" onClick={props.toggleMenuOpen}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={props.toggleMenuOpen}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#projects" onClick={props.toggleMenuOpen}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#contact" onClick={props.toggleMenuOpen}>
              CONTACT
            </a>
          </li>
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Menu;