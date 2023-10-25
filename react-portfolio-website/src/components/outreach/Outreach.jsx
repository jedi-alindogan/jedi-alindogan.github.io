import React from 'react'
import './outreach.css'

import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
register();

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
  const swiperElRef = useRef(null);
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <section id='outreach'>
      <h5>Make A Difference</h5>
      <h2>Outreach</h2>
      <div className="container outreach__container">
        <swiper-container 
          ref={swiperElRef} 
          slides-per-view="1" 
          pagination="true"
        >
          {
            data.map(({title, date, description}, index) => {
              return (
                <swiper-slide>
                  <h4 className="outreach__title">{title}</h4>
                  <h5 className="outreach__date">{date}</h5>
                  <small className="outreach__description">{description}</small>
                </swiper-slide>
              )
            })
          }
        </swiper-container>
      </div>
      
      
    </section>
  )
}

export default Outreach