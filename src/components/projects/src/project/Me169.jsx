import React from 'react';
import '../src-project.css';
import { register } from 'swiper/element/bundle';
register();

const Me169 = () => {
  return (
    <article className="inner__project">
      <h2>ME169: Hide and Seek Mobile Robot</h2>
      <h4>01 JUNE 2023</h4>
      <p>Hide and Seek Mobile Robot was my a final project I submitted for ME169 at Caltech. Here, I utilized a combination of ROS2 and Python to develop the control, planning, and localization modules for the robot. </p>

      <div className="project-slides">
        <div className="inner__project-video">
              <iframe width="419" height="236" src="https://www.youtube.com/embed/w3_kp1_tGfU" title="ME169 Project Overview" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <small className="caption">Project Overview</small>
        </div>
      </div>
      <p>Upon completion of this project, I discovered valuable hardware skills for sensor integration and processing. Furthermore, I developed greater experience in designing, testing, and debugging algorithms using ROS2.</p>
      
    </article>
  );
};

export default Me169;