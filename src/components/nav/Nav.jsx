import React, {useState, useEffect} from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage} from 'react-icons/ai'
import {FaAward} from 'react-icons/fa'
import {RiServiceLine} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    // Get the hash part of the URL (e.g., '#about', '#projects')
    const hash = window.location.hash;

    // Scroll to the corresponding section
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'auto' });
        setActiveNav(hash);
      }
    }
  }, []);

  return (
    <nav>
      <a href="#" 
        onClick={()=>setActiveNav('#')} 
        className={activeNav==='#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" 
        onClick={()=>setActiveNav('#about')}
        className={activeNav==='#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience"  
        onClick={()=>setActiveNav('#experience')}
        className={activeNav==='#experience' ? 'active' : ''}><FaAward/></a>
      <a href="#projects"  
        onClick={()=>setActiveNav('#projects')}
        className={activeNav==='#projects' ? 'active' : ''}><VscFolderLibrary/></a>
      <a href="#outreach" 
        onClick={()=>setActiveNav('#outreach')}
        className={activeNav==='#outreach' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" 
        onClick={()=>setActiveNav('#contact')}
        className={activeNav==='#contact' ? 'active' : ''}><AiOutlineMessage/></a>

    </nav>
  )
}

export default Nav
