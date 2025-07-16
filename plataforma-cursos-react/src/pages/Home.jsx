import React, { useState } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import CourseCard from '../components/CourseCard';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';

import '../styles/homepage.css';

import Course1 from "../assets/backend-python.jpg";
import Course2 from "../assets/gestao.jpg";
import Course3 from "../assets/redes.jpg";
import Course4 from "../assets/anydesk.png";
import Course5 from "../assets/meioambiente.jpg";
import Course6 from "../assets/educacao.webp";
import Course7 from "../assets/costura.webp";
import Course8 from "../assets/desenho.webp";

const coursesData = [
  {
    imgSrc: Course1,
    title: "Back-end em Python",
    description: "Informática • 20h",
    link: "/Python",
    tags: ["Curso TI", "programação", "python", "backend"],
  },
  {
    imgSrc: Course2,
    title: "Gestão de Negócios",
    description: "Administração • 10h",
    link: "/Gestao",
    tags: ["Adm", "administração", "negócios"],
  },
  {
    imgSrc: Course3,
    title: "Redes do zero",
    description: "Redes • 45h",
    link: "/Redes",
    tags: ["Rede", "infraestrutura", "rede", "ti"],
  },
  {
    imgSrc: Course4,
    title: "Como instalar o Anydesk",
    description: "Tutorial • 10min",
    link: "/Anydesk",
    tags: ["Tutoriais", "anydesk", "remoto"],
  },
  {
    imgSrc: Course5,
    title: "Sustentabilidade e Meio Ambiente",
    description: "Educação • 20h",
    link: "/Ambiente",
    tags: ["Outros", "meio ambiente", "ecologia"],
  },
  {
    imgSrc: Course6,
    title: "Aprendendo com Jogos: Educação Infantil Interativa",
    description: "Educação • 10h",
    link: "/Educacao",
    tags: ["Outros", "educação", "infantil"],
  },
  {
    imgSrc: Course7,
    title: "Curso de Iniciação à Costura",
    description: "DIY • 45h",
    link: "/Costura",
    tags: ["DIY", "costura", "manual"],
  },
  {
    imgSrc: Course8,
    title: "Artes e Criatividade: Desenho e Pintura",
    description: "DIY • 10min",
    link: "/Desenho",
    tags: ["DIY", "arte", "desenho", "pintura"],
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = coursesData.filter(course =>
    selectedCategory === 'Todos' ||
    course.tags.some(tag =>
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    )
  );

  return (
    <>
      <Header />
      <HeroCarousel />

      <section className="categorias">
        <div className="container">
          <Categories
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      <section className="cursos">
        <div className="container">
          <h2>Cursos Rápidos e Fáceis</h2>
          <div className="grid-cursos">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <CourseCard
                  key={index}
                  imgSrc={course.imgSrc}
                  title={course.title}
                  description={course.description}
                  link={course.link}
                />
              ))
            ) : (
              <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
                Nenhum curso encontrado para a categoria "{selectedCategory}".
              </p>
            )}
          </div>
        </div>
      </section>

      <Motivacional />
      <Footer />
    </>
  );
}
