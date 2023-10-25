import React from 'react'
import {FaLinkedin ,FaGithub, FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/495-jedidiah-alindogan/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
        <a href="https://github.com/jedi-alindogan" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/jedi_alindogan/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials
