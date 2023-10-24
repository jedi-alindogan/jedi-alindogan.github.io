import React from 'react'
import './outreach.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

const data = [
  {
    title: "Rise Tutor",
    date: "2022-2023",
    description: "Supporting the Rise Program at the Caltech Y, I advised, mentored, and tutored high school students in STEM subjects. Meeting weekly, I offered one-on-one sessions to develop valuable study skills and work habits."
  },
  {
    title: "Program Assistant",
    date: "2019-2021",
    description: "Coordinated with tutors to facilitate STEM Center operations in tutoring and events for students of all backgrounds at the American River Community College. These events often included resume and transfer workshops, interview preparation, and networking opportunities."
  },
  {
    title: "Library Volunteer",
    date: "2018-2021",
    description: "I served at the Fair Oaks Public Libary Leadership Committee for over 120 hours. Meeting weekly, I organized community events, assisted with technology workshops, and distributed texts."
  },
]

const Outreach = () => {
  return (
    <section id='outreach'>
      <h5>Make A Difference</h5>
      <h2>Outreach</h2>
      <Swiper className="container outreach__container"
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1.5}
      >
        {
          data.map(({title, date, description}, index) => {
            return (
              <SwiperSlide className="outreach">
                <h4 className="outreach__title">{title}</h4>
                <h5 className="outreach__date">{date}</h5>
                <small className="outreach__description">{description}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      
    </section>
  )
}

export default Outreach