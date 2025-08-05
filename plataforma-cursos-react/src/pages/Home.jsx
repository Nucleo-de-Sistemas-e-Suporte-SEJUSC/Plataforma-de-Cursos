// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import CourseCard from '../components/CourseCard';
import Motivacional from '../components/MotivacionalSection';
import Footer from '../components/Footer';
import ConfirmDialog from '../components/ConfirmDialog'; // import novo
import '../styles/homepage.css';
import coursesData from '../data/coursesData';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cursosMatriculados, setCursosMatriculados] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
    setCursosMatriculados(stored);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = coursesData.filter(course =>
    selectedCategory === 'Todos' ||
    course.tags.some(tag =>
      tag.toLowerCase().includes(selectedCategory.toLowerCase())
    )
  );

  const handleMatricular = (courseId) => {
    if (!cursosMatriculados.includes(courseId)) {
      const updated = [...cursosMatriculados, courseId];
      setCursosMatriculados(updated);
      localStorage.setItem('cursosMatriculados', JSON.stringify(updated));
    }
  };

  const solicitarCancelamento = (courseId) => {
    setCursoSelecionado(courseId);
    setConfirmOpen(true);
  };

  const confirmarCancelamento = () => {
    const updated = cursosMatriculados.filter(id => id !== cursoSelecionado);
    setCursosMatriculados(updated);
    localStorage.setItem('cursosMatriculados', JSON.stringify(updated));
    setConfirmOpen(false);
  };

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
              filteredCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard
                    imgSrc={course.imgSrc}
                    title={course.title}
                    description={course.description}
                    link={course.link}
                  />
                  {cursosMatriculados.includes(course.id) ? (
                    <button
                      className="cancelar-btn"
                      onClick={() => solicitarCancelamento(course.id)}
                    >
                      Cancelar inscrição
                    </button>
                  ) : (
                    <button
                      className="matricular-btn"
                      onClick={() => handleMatricular(course.id)}
                    >
                      Matricular-se
                    </button>
                  )}
                </div>
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

      <ConfirmDialog
        isOpen={confirmOpen}
        onConfirm={confirmarCancelamento}
        onCancel={() => setConfirmOpen(false)}
        message="Tem certeza que deseja cancelar esta inscrição?"
      />
    </>
  );
}
