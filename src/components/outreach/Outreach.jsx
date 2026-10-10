import React from 'react'
import './outreach.css'

const data = [
  {
    title: 'Graduate Student Council: Academics Chair',
    date: '2024–Present',
    description: 'I coordinate activities that support graduate students’ academic and career interests and help them develop as leaders in their fields.'
  },
  {
    title: 'Caltech Y: Rise Tutor',
    date: '2022–2023',
    description: 'I advised, mentored, and tutored high school students in STEM subjects.'
  },
  /* {
    title: 'Social Director Team — Avery House, Caltech',
    date: '2022–2023',
    description: 'I volunteered in organizing, planning, and running social events for student life on campus.'
  }, */
  {
    title: 'Fair Oaks Public Library: Volunteer',
    date: '2018–2021',
    description: 'I contributed more than 120 hours of volunteering, helping with community events and organizing texts.'
  },
]

const Outreach = () => (
  <section id="outreach">
    <h5>Making A Difference</h5>
    <h2>Outreach</h2>
    <div className="container outreach__container section-panel">
      <ul className="outreach__list">
        {data.map(({ title, date, description }) => (
          <li className="outreach" key={title}>
            <span className="outreach__date">{date} — </span>
            <span className="outreach__title">{title}</span>
            <p className="outreach__description">{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Outreach
