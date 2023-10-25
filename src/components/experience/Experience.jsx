import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Check Out</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__education">
          <h3>Education</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div><h4>B.Sc. Mechanical Engineering</h4>
              <small className="text-light">California Institute of Technology 09/2021 - 06/2023</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div><h4>A.Sc. Physics, Math, Mechanical Engineering, Electrical Engineering</h4>
              <small className="text-light">American River Community College 06/2018 - 06/2021</small></div>
            </article>
          </div>
        </div>
        <div className="experience__career">
          <h3>Career</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div><h4>Research Engineering Staff</h4>
              <small className="text-light">California Institute of Technology 08/2023 - Present</small></div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div><h4>Summer Undergraduate Research Fellow</h4>
              <small className="text-light">California Institute of Technology 06/2022 - 08/2022</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
