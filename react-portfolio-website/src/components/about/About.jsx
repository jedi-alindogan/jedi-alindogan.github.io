import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
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
              <FiUsers className="about__icon"/>
              <h5>Outreach</h5>
              <small>6+ Years Volunteering</small>
            </article>
          </div>
          <p>I am a deeply motivated engineer with a passion for robotics and inclusive education. I received my B.Sc. in Mechanical Engineering at Caltech, and currently work at the Autonomous Robotics and Control Group at Caltech as a research engineering staff. In the future, I hope to pioneer autonomous robotics research and champion academic outreach.</p>
        </div>
      </div>
    </section>
  )
}

export default About
