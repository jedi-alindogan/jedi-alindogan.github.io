import React from 'react'
import './footer.css'
import {FaLinkedin ,FaGithub, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#outreach">Outreach</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/495-jedidiah-alindogan/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/jedi-alindogan" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/jedi_alindogan/" target="_blank" rel="noreferrer"><FaInstagram/></a>
      </div>

    </footer>
  )
}

export default Footer
