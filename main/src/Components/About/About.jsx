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
              I really enjoy solving problems as well as making things pretty and easy to use. 
              I try to never stop learning; the more the better.
            </p>
          </div>
          <div className="title">
            <h3>What does he do?</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">I'm a programmer.</h4>
            <p>
              For the front-end I usually work with Javascript, either standalone or including the
              popular React library. I also make the web pretty by using CSS,
              Sass, and, whenever needed, any of their friends: Bootstrap, Bulma, etc.
            </p>
            <p>
              For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc).
            </p>
            <p>
              I also work with several other programming languages such as C++, Java, and Python.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
