import React from 'react';
import '../src-project.css';
import { BiArrowBack } from 'react-icons/bi'

import IMG1 from '../media/data-driven-architecture.png'

import PUBLICATION from '../media/SURF_2022.pdf'


// idea: i want a window that lets me scroll through pdf.
const Lattice = () => {
  const projectData = {
    projectTitle: "Data-Driven Discovery of Differentially Flat Coordinates",
    projectDate: "01 AUG 2022",
  };

  return (
    <div>
      <header>
        <a href="/#projects" className="back__button"> <BiArrowBack/> </a>
      </header>
      <main>
      <div className="container inner__project-container">
          <article className="inner__project">
            <h2>{projectData.projectTitle}</h2>
            <h4>{projectData.projectDate}</h4>
            <p>Prepared to delve beyond mechanical design and contribute to the development of cutting-edge robotic algorithms, I joined Professor Soon-Jo Chung’s Autonomous Robotics and Control Lab (ARCL) during the 2022 Caltech Summer Undergraduate Research Fellowship (SURF) Program. Here, I investigated methods to apply machine learning to path planning. Though this research was initially daunting, under the mentorship of PhD candidate Benjamin Riviere, I translated his concept into reality--a data-driven approach for automatically approximating differentially flat transforms in dynamical systems. This novel method could significantly expedite trajectory generation. Notably, while other approaches exist for planning, differentially flat coordinates have long been recognized for their potential to accelerate trajectory generation. Yet, the challenge lies in analytically deriving the equations that encode and decode these flat coordinates for dynamical systems. My work, focusing on unicycle robots--a simple class known to be differentially flat--resulted in the validation of Riviere’s concept. I succeeded in developing an autoencoder capable of transforming from state to differentially flat coordinates. This achievement opened the door to leveraging differentially flat coordinates in more intricate systems, offering a promising alternative to the way we approach trajectory planning and control in robotics.</p>

            <div className="project-slides">
              <div className="inner__project-image">
                <img src={IMG1} alt="linc gvrbot" />
                <small className="caption">Architecture</small>
              </div>
            </div>

            <p>The workings of this project were theory heavy and gave me a exciting introduction to utilizing neural networks in context of planning. Although I have yet to implement the architecture on a physical system, I demonstrated convergent trajectories when planning under a closed-loop. This is explained more in-depth in the paper.</p>

            <a href={PUBLICATION} download className='btn btn-primary btn-publication'> Download the Publication</a>
          </article>
      </div>
      </main>
    </div>
  );
};

export default Lattice;