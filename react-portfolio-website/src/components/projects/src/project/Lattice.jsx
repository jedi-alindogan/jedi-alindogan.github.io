import React from 'react';
import { Link } from 'react-router-dom';
import '../src-project.css';

// idea: i want a window that lets me scroll through pdf.
const Lattice = () => {
  const projectData = {
    projectTitle: "NASA 2022 BIG IDEA Challenge: LATTICE",
    projectDate: "01 JAN 2022",
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

export default Lattice;