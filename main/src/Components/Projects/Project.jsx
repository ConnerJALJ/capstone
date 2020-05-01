import React from 'react';

const Project = props => {
  const techIcons = {
    css   : 'fab fa-css3-alt',
    js    : 'fab fa-js-square',
    node  : 'fab fa-node',
    react : 'fab fa-react',
    sass  : 'fab fa-sass'
  }

  const link = props.link || 'https://';
  const repo = props.repo || 'http://';

  return (
    <div className="project">
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
        <img className="project-image" src={props.img} alt={`Screenshot of ${props.title}`} />
      </a>
      <div className="project-details">
        <div className="project-tile">
          <p className="icons">
            {props.techIcon.split(' ').map(t => (
              <i className={techIcons[t]} key={t} />
            ))}
          </p>
          {props.title}{' '}
        </div>  
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it Live <i className="fas fa-eternal-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;