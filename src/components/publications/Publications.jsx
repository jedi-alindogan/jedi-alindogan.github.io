import React from 'react';
import { publications } from '../../data/publications';
import './publications.css';

const Publications = () => (
  <section id="publications">
    <h5>Research Papers</h5>
    <h2>Publications</h2>
    <div className="container publications__container section-panel">
      <ul className="publications__list">
        {publications.map(({ id, title, year, href, authors }) => (
          <li className="publication" key={id}>
            <span className="publication__year">{year} — </span>
            <a href={href} target="_blank" rel="noopener noreferrer" className="publication__link">
              {title}
            </a>
            {authors && <p className="publication__authors">{authors}</p>}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Publications;
