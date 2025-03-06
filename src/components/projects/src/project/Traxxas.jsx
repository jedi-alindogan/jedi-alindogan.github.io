import React from 'react';
import '../src-project.css';

import IMG1 from '../media/traxxas.png'


// idea: i want a window that lets me scroll through pdf.
const Traxxas = () => {
  const projectData = {
    projectTitle: "Autonomous Toy Car",
    projectDate: "01 MARCH 2024",
  };

  return (
    <div>
      <article className="inner__project">
        <h2>{projectData.projectTitle}</h2>
        <h4>{projectData.projectDate}</h4>
        <p>At the Autonomous Robotics and Control Lab (ARCL), I developed an autonomous toy car using a Traxxas X-Maxx platform. I designed and integrated the autonomous payload, which included a Jetson Orin, ODrive Motor Controller, Intel RealSense Camera, IMU, GPS, and LiDAR. This project required hardware design, sensor calibration, and software development using ROS and Python to enable autonomous navigation and control.</p>

        <div className="project-slides">
          <div className="inner__project-image">
            <img src={IMG1} alt="Traxxas" />
            <small className="caption">Traxxas</small>
          </div>
        </div>

        <p>In the development of this project, I was able to explore new avenues in the hardware development process of autonomous robotic systems. In particular, I learned just how difficult calibration can be!</p>
      </article>
      </div>
  );
};

export default Traxxas;