import React from 'react';
import { Link } from 'react-router-dom';
import '../src-project.css';

// this needs to match the url for 
// "/linc",
// "/me169-hide-and-seek-robot",
// "/me72-engineering-design-competition" ,
// "/nasa-2021-big-idea-challenge-lattice" ,
// "/data-driven-discovery-of-differentially-flat-coordinates"

const Linc = () => {
  const projectData = {
    projectTitle: "Learning Introspective Control",
    projectDate: "23 OCT 2023",
    projectDescription: "This is a description of the project...",
  };

  return (
    <div>
      <header>
        <Link to="/#projects">Back</Link>
      </header>
      <main>
        <div className="container">
          <h2>{projectData.projectTitle}</h2>
          <h4>{projectData.projectDate}</h4>
          <article>{projectData.projectDescription}</article>
        </div>
      </main>
    </div>
  );
};

export default Linc;