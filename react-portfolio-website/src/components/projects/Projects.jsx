import React from 'react'
import './projects.css'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>See My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>Learning Introspective Control</h5>
                </div>
              </a>

              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>ME169: Search and Rescue Robot</h5>
                </div>
              </a>

              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>ME72: Engineering Design Competition </h5>
                </div>
              </a>

              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>LATTICE</h5>
                </div>
              </a>

              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>Data-Driven Discovery of Differentially Flat Coordinates</h5>
                </div>
              </a>

              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>PRM for High-DOF Arms</h5>
                </div>
              </a>
              
              <a href="/example" className='btn project__item'>
                <div className="project__content">
                  <div className="project__item-image">
                    <img src="" alt="my_img" />
                  </div>
                  <h5>Stewart Platform Catching Simulation</h5>
                </div>
              </a>
      </div>

    </section>
  )
}

export default Projects
