import React, {useState} from 'react'
import './projects.css'
import { BiArrowBack } from 'react-icons/bi'

import Linc from './src/project/Linc';
import Me169 from './src/project/Me169';
import Me72 from './src/project/Me72';
import Lattice from './src/project/Lattice';
import DataDriven from './src/project/DataDriven';

import IMG1 from './src/media/linc-gvrbot.png'
import IMG2 from './src/media/hide-and-seek-bot.png'
import IMG3 from './src/media/me72-bot.png'
import IMG4 from './src/media/lattice.png'
import IMG5 from './src/media/data-driven-unicycle.png'


const Projects = () => {
  const data = [
    {
      image: IMG1,
      title: "Learning Introspective Control",
      component: <Linc/>,
    },
    {
      image: IMG2,
      title: "ME169: Hide and Seek Robot",
      component: <Me169/>
    },
    {
      image: IMG3,
      title: "ME72: Engineering Design Competition",
      component: <Me72/>
    },
    {
      image: IMG4,
      title: "NASA 2021 BIG IDEA Challenge: LATTICE",
      component: <Lattice/>
    },
    {
      image: IMG5,
      title: "Data-Driven Discovery of Differentially Flat Coordinates",
      component: <DataDriven/>
    }
    ]

  const [activeProject, setActiveProject] = useState(-1)
  const getProject = (idx) => {
    return (
      <>
      <a className="back__button" onClick={()=>setActiveProject(-1)}> <BiArrowBack/> </a>
      <div className="container inner__project-container">
        {data[idx].component}
      </div>
      </>
    )
  }
  const select_project = (activeProject) => {
    if (activeProject == -1){
      return (
        data.map(({image, title}, idx) => {
          return (
            <a key={idx} onClick={()=>setActiveProject(idx)} className='project'>
              <div className="project__content">
                <div className="project-image">
                  <img src={image} alt="my_img" />
                </div>
                <h5>{title}</h5>
              </div>
            </a>
          )
        })
      );
    }
    return getProject(activeProject)
  }

  return (
    <section id='projects'>
      <h5>See My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        {select_project(activeProject)}
      </div>
    </section>
  )
}

export default Projects
