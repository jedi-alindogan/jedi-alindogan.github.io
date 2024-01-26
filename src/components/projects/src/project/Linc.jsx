import React from 'react';
import '../src-project.css';

import IMG1 from '../media/linc-gvrbot.png'
import IMG2 from '../media/linc-stack.png'
import IMG3 from '../media/linc-tipping-test.gif'

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
register();

const Linc = () => {
  const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <article className="inner__project">
      <h2>Learning Introspective Control</h2>
      <h4>23 OCT 2023</h4>
      <p>Funded by DARPA, the Learning Introspective Control (LINC) project aims to develop a machine learning-based introspection that enables systems to respond to events not predicted at design, with particular focus on GVR-Bots—-a tracked military ground robot. In other words, our goal is to develop algorithms that allow robots to adapt to events and environments capable of altering their dynamics. To accomplish this, we utilized Meta-learning Adaptation for Ground robot with Introspection and Control (MAGIC) for control and Monte-Carlo Tree Search (MCTS) for planning.</p>

      <div className="project-slides">
        <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true">
          <swiper-slide class="project-slide">
            <div className="inner__project-image">
              <img src={IMG1} alt="linc gvrbot" />
              <small className="caption">GVR-Bot on Sand</small>
            </div>
          </swiper-slide>

          <swiper-slide class="project-slide">
            <div className="inner__project-video">
              <iframe
                src="https://www.youtube.com/embed/23nepFZ-t5g?rel=0"
                title="gvr-bot driving"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <small className="caption">MAGIC Control Demonstration</small>
            </div>
          </swiper-slide>

          <swiper-slide class="project-slide">
            <div className="inner__project-image">
              <img src={IMG3} alt="linc tipping test" />
              <small className="caption">GVR-Bot Tipping Constraint Validation</small>
            </div>
          </swiper-slide>
          
          <swiper-slide class="project-slide">
            <div className="inner__project-image">
              <img src={IMG2} alt="linc stack" />
              <small className="caption">GVR-Bot Stack</small>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
      
                  
      <p>Working on the LINC project, I made vital contributions to the simulation, planning, and control subteams. </p>

      <p>In the simulation subteam, I worked with JPL faculty to develop accurate model assets, environments, and physics for computer simulation of the team’s planning and control algorithms. Designed in Python, ROS, and Gazebo, these simulations are critical for testing robotic algorithms in a repeatable and safe environment. Moreover, they can be used to generate training data for neural network-based controllers. Thus, by developing more accurate simulations, my work has improved the project’s algorithm testing. </p>
      
      <p>In both the planning and control subteams, I contributed by preparing environments for experimentation, gathering data, and confirming tipping safety constraints. More specifically, the experimentation setup and data gathering entailed running specific or random trajectories with dynamic terrain. For example, an infinity loop on both flat and slanted ground. In regard to the tipping safety constraint, I confirmed the motion scenarios on slants in which the robot would tip over. Thus, by saturating the motion according to the slant, my work decreased the likelihood of tipping.</p>
      
    </article>
  );
};

export default Linc;