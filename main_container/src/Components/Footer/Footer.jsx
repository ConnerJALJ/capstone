import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>{new Date().getFullYear()} Conner LaPage-Jenkins.</p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;