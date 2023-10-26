import React from 'react';
import '../src-project.css';

import IMG1 from '../media/lattice-con-op.png'
import IMG2 from '../media/shuttle-payload.gif'

import PUBLICATION from '../media/caltech-BIG-Idea-Technical-Paper.pdf'

const Lattice = () => {
  return (
    <article className="inner__project">
      <h2>NASA 2022 BIG IDEA Challenge: LATTICE</h2>
      <h4>01 JAN 2022</h4>
      <p>After transferring to Caltech, I joined the Caltech Air and Outer Space club. As a relatively new club eager to start engineering, we entered the 2022 NASA BIG Idea Challenge seeking to build an unprecedented and revolutionary robotic system for lunar exploration. After spending weeks brainstorming together, we proposed a Lunar Architecture for Tree Traversal in Service of Cabled Exploration (LATTICE). We envisioned LATTICE as a multi-robot system where a rover would plant stake junctions and cables webbed across the lunar surface, allowing for rapid and efficient payload delivery via cable-traversing shuttles.</p>

      <div className="inner__project-image">
        <img src={IMG1} alt="LATTICE Concept of Operations" id="lattice-img" />
        <small className="caption">LATTICE Concept of Operations</small>
      </div>

      <p>With a background in mechanical design and simulation, I alternated between the shuttle and planning subteams. While a member of the shuttle subteam, I made substantial contributions to the shuttle robot’s design. In short, I undertook the development of mathematical equations to model the cable take-up length and tension forces inherent to the shuttle system. Furthermore, I conducted geometric analysis aimed at evaluating the shuttle’s capability of traversing stake junctions at varying angles. Each of these tasks was critical and informed other subteams, such as the cable and stake design subteams, of the design restrictions necessary for a safe and feasible system. Similarly, as a member of the planning subteam, I developed code to evaluate the energy efficiency and power usage of the shuttle robot while traversing different cabled routes across permanently shadowed regions of the moon. This task was critical in evaluating the feasibility of cabled paths for the architecture and estimating the size and mass of the batteries that the shuttle would need. After submitting our design, our team was granted $180,000 as finalists. This financial support facilitated the development of a LATTICE prototype, which ultimately resulted in our recognition for the Best Visionary Concept award.</p>

      <div className="inner__project-image">
        <img src={IMG2} alt="Shuttle Bot Payload Test" id="lattice-img" />
        <small className="caption">Shuttle Bot Payload Test</small>
      </div>

      <a href={PUBLICATION} download className='btn btn-primary btn-publication'> Download the Publication</a>
    </article>
  );
};

export default Lattice;