import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Menu.css';

const Menu = props => {
  return (
    <div id="menu-container" className={`${props.menuOpen ? 'active' : 'deactive'}`}>
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
        </ul>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Menu;