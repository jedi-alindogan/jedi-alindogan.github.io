import React from 'react'
import './about.css'
// import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5</small>
            </article>
            <article className="about__card">
              <RiServiceLine className="about__icon"/>
              <h5>Outreach</h5>
              <small>5+ Years Serving</small>
            </article>
          </div>
          <p>I am a deeply motivated engineer with a passion for robotics and inclusive education. I received my B.Sc. in Mechanical Engineering at the California Institute of Technology (Caltech) in 2023 with a focus in robotics. I currently work as a research engineering staff in the <a HREF="https://aerospacerobotics.caltech.edu/" target="_blank">Autonomous Robotics and Control Group</a> at Caltech. I also volunteer as a STEM tutor online and locally. In the future, I hope to pioneer autonomous robotics research and champion academic outreach.</p>
        </div>
      </div>
    </section>
  )
}

export default About
