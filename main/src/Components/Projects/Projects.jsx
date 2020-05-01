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
            <small>lorem aufho ash aoh faisbgoasfh fboas hfauosfh oai faufha fausifh oh</small>
            <p>aosiudhaos dfasoh foaysg floashfailfalsyf g;alsifvlfiyagioyf aifayilfa gfiyas f</p>
          </Project>
        </div>
      </div>
    </section>
  )
};

export default Projects;
