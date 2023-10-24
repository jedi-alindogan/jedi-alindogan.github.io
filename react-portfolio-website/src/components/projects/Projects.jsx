import React from 'react'
import './projects.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio1.jpg'
import IMG3 from '../../assets/portfolio1.jpg'
import IMG4 from '../../assets/portfolio1.jpg'
import IMG5 from '../../assets/portfolio1.jpg'
import IMG6 from '../../assets/portfolio1.jpg'
import IMG7 from '../../assets/portfolio1.jpg'

const data = [

{
  id: 1,
  image: IMG1,
  title: "Learning Introspective Control",
  href: "/linc"
},
{
  id: 2,
  image: IMG2,
  title: "ME 169: Search and Rescue Robot",
  href: "/me169-search-and-rescue-robot"
},
{
  id: 3,
  image: IMG3,
  title: "ME72: Engineering Design Competition",
  href: "/me72-engineering-design-competition"
},
{
  id: 4,
  image: IMG4,
  title: "NASA 2021 BIG IDEA Challenge: LATTICE",
  href: "/nasa-2021-big-idea-challenge-lattice"
},
{
  id: 5,
  image: IMG5,
  title: "Data-Driven Discovery of Differentially Flat Coordinates",
  href: "/data-driven-discovery-of-differentially-flat-coordinates"
},
{
  id: 6,
  image: IMG6,
  title: "PRM for High-DOF Arms",
  href: "/prm-for-high-dof-arms"
},
{
  id: 7,
  image: IMG7,
  title: "Stewart Platform Catching Simulation",
  href: "/stewart-platform-catching-simulation"
},
]
const Projects = () => {
  return (
    <section id='projects'>
      <h5>See My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container projects__container">
        {
          data.map(({id, image, title, href}) => {
            return (
              <a key={id} href={href} className='project'>
                <div className="project__content">
                  <div className="project-image">
                    <img src={image} alt="my_img" />
                  </div>
                  <h5>{title}</h5>
                </div>
              </a>
            )
          })
        }
              
      </div>

    </section>
  )
}

export default Projects
