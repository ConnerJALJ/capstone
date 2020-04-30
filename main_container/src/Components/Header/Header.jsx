import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="silhouette" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">Hi
            <span className="color">,</span>
          </span>
          <span className="line">I like to</span>
          <span className="line">write code</span>
        </h1>
        <div className="buttons">
          <a href="#about">about me</a>
          <a href="#projects" className="cta">
            my projects
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
