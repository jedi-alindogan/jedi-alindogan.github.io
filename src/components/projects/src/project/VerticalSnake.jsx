import React from 'react';
import '../src-project.css';
import snake from '../media/snake.JPG';
import locomotion from '../media/snake_locomotion.gif';
import { publications } from '../../../../data/publications';

const snakePublication = publications.find(({ id }) => id === 'vertical-snake');

const VerticalSnake = () => (
  <article className="inner__project inner__project--snake">
    <h2>Vertical Snake: Reinforcement Learning for Locomotion</h2>
    <h4>Caltech–NASA JPL · Graduate Research</h4>
    <p>
      Building foundations contain confined spaces and elevated access holes that are difficult
      and hazardous for people to inspect. Garden EELS is a lightweight snake-like robot designed
      to traverse these spaces. The project combines vertical traversal, reinforcement learning
      for planar locomotion, and onboard mapping and inspection.
    </p>
    <figure className="inner__project-image">
      <img src={snake} alt="Garden EELS snake-like robot" />
      <figcaption className="caption">Garden EELS snake-like robot</figcaption>
    </figure>
    <p>
      My work focused on a PPO-based planar locomotion controller for the 18-DOF snake robot.
      I trained policies in MuJoCo using structured sinusoidal gait actions to track commanded
      linear and angular velocities. A unicycle-integrated pose-tracking reward helped address
      the oscillatory velocity feedback produced by the robot’s undulating motion. The structured
      gait constraints improved training convergence by up to 40%.
    </p>
    <figure className="inner__project-image">
      <img src={locomotion} alt="Snake robot demonstrating reinforcement learning locomotion" />
      <figcaption className="caption">Reinforcement learning for snake robot locomotion</figcaption>
    </figure>
    <p>
      Policies trained entirely in simulation transferred to the physical robot without additional
      training. I validated this zero-shot sim-to-real transfer on concrete and gravel during
      building-foundation inspection trials.
    </p>
    <a href={snakePublication.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-publication">
      Read the Publication (PDF)
    </a>
  </article>
);

export default VerticalSnake;
