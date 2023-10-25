import React from 'react';
import '../src-project.css';
import { BiArrowBack } from 'react-icons/bi'


import IMG1 from '../media/me72-drive.gif'
import IMG2 from '../media/me72-bot.png'
import IMG3 from '../media/me72-motor-calcs.png'

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
register();

const Me72 = () => {
  const projectData = {
    projectTitle: "ME72: Engineering Design Competition",
    projectDate: "14 MAR 2023",
  };

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
    <div>
      <header>
        <a href="/#projects" className="back__button"> <BiArrowBack/> </a>
      </header>
      <main>
        <div className="container inner__project-container">
          <article className="inner__project">
            <h2>{projectData.projectTitle}</h2>
            <h4>{projectData.projectDate}</h4>
            <p>The Engineering Design Competition is an annual competition hosted at Caltech. For 2022-2023, the competition was a multi-robot performance. Teams of six built three robots that would compete to score points. Points could be scored by shooting projectiles into nets or traversing an obstacle course autonomously.  
            </p>

            <div className="project-slides">
            <swiper-container ref={swiperElRef} slides-per-view="1" navigation="true">
                <swiper-slide class="project-slide">
                  <div className="inner__project-video">
                  <iframe 
                    src="https://www.youtube.com/embed/R16Bd2FwcSE" 
                    title="ME 72 Final Video [REDACTED]" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
                    <small className="caption">Project Overview</small>
                  </div>
                </swiper-slide>
                <swiper-slide class="project-slide">
                  <div className="inner__project-image">
                    <img src={IMG1} alt="scavenger gif" />
                    <small className="caption">Scavenger Bot Traversing Difficult Terrain</small>
                  </div>
                </swiper-slide>
                <swiper-slide class="project-slide">
                  <div className="inner__project-image">
                    <img src={IMG2} alt="scavenger cad" />
                    <small className="caption">Scavenger CAD</small>
                  </div>
                </swiper-slide>
                <swiper-slide class="project-slide">
                  <div className="inner__project-image">
                    <img src={IMG3} alt="linc tipping test" />
                    <small className="caption">Computed Motor Specifications for Scavenger</small>
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <p>For this competition, I made vital contributions to the design of every robot but was most responsible for the scavenger robot--which would collect projectiles from the field. In addition to the mechanical design, I was also responsible for the electrical design. This included determining and configuring the batteries, motors, motor controllers, servos, and receivers for the scavenger. Overall, this project gave me vital experience in robotic hardware design and configuration.</p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Me72;