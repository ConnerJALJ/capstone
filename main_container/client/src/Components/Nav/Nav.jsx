import React from 'react';
import './Nav.css';

const Nav = props => {
  return (
    <React.Fragment>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">
            <strong>Conner</strong>
            LaPage-Jenkins
          </p>
          <a
            onClick={props.toggleMenuOpen}
            className={`menu-button ${props.menuOpen ? 'active' : ''}`}
          >
            <span />
          </a>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
