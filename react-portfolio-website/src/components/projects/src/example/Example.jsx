import React from 'react';
import { Link } from 'react-router-dom';
import '../src-project.css';

const Example = () => {
  const projectData = {
    projectTitle: "Project Name",
    projectDate: "23 OCT 2023",
    projectDescription: "This is a description of the project...",
  };

  return (
    <div>
      <header>
        <Link to="/">Back</Link>
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


export default Example;