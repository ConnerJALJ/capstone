import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>Who's this guy?</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">My name is Conner.</h4>
            <p>
              I am a developer and programming enthusiast based in the north east of the beautiful United States.
            </p>
            <p>
              I really enjoy solving problems as well as making things pretty and easy to use. I
              can't stop learning new things; the more, the better.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including
              popular frameworks like ReactJS. I also make the web pretty by using Sass,
              CSS and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc).
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
