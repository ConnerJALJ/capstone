import React from 'react'
import Project from './Project';
import './Projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Projects</h3>
          <p className="separator" />
          <p className="subtitle" >
            Here's a list of <u>some</u> of the projects I have been working on lately.
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Example Project"
            img={''}
            techIcon="js css react node sass"
            link={null}
            repo={null}
          >
            <small>Built using Node, CSS, and React.</small>
            <p>
            There isn't actually a project here, this is just an example 
            of what could be! This being the case none of the buttons will take
            you anywere.
            </p>
          </Project>
        </div>
      </div>
    </section>
  )
};

export default Projects;
