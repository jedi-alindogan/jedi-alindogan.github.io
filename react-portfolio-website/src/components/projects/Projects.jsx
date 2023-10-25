import React from 'react'
import './projects.css'
import IMG1 from './src/media/linc-gvrbot.png'
import IMG2 from './src/media/hide-and-seek-bot.png'
import IMG3 from './src/media/me72-bot.png'
import IMG4 from './src/media/shuttle-bot-render.png'
import IMG5 from './src/media/data-driven-unicycle.png'

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
  title: "ME169: Hide and Seek Robot",
  href: "/me169-hide-and-seek-mobile-robot"
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
}
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
