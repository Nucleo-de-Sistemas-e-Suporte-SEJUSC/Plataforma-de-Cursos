import React from 'react';
import '../styles/CourseCard.css';

export default function CourseCard({ imgSrc, title, description, link }) {
  return (
    <div className="card">
      <a href={link}>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </div>
  );
}
