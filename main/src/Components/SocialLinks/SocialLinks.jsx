import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social">

      <a
        id="profile-link"
        href="https://github.com/connerjalj"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to author's GitHub Profile"
      >
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
