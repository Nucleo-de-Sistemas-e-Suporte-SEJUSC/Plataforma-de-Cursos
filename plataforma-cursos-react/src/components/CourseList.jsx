import React from 'react';
import '../styles/homepage.css';

const courses = [
  { title: 'Curso de Introdução ao Excel', image: '#' },
  { title: 'Noções de Administração Pública', image: '#' },
  { title: 'Redes do zero', image: '#' },
];

const CourseList = () => (
  <section className="cursos container">
    <h2>Cursos Populares</h2>
    <div className="grid-cursos">
      {courses.map((course, index) => (
        <div key={index} className="card">
          <img src={course.image} alt={course.title} />
          <h3>{course.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default CourseList;