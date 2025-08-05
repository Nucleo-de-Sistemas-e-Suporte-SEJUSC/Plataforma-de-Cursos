// src/pages/Cursos.jsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MotivacionalSection from '../components/MotivacionalSection';
import CourseCard from '../components/CourseCard';
import Categories from '../components/Categories';
import ConfirmDialog from '../components/ConfirmDialog'; // import novo

import '../styles/Cursos.css';
import coursesData from '../data/coursesData';

export default function Cursos() {
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [cursosMatriculados, setCursosMatriculados] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  useEffect(() => {
    const inscritos = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
    setCursosMatriculados(inscritos);
  }, []);

  const handleSearch = () => {
    setSearchTerm(inputValue.trim());
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleMatricular = (courseId) => {
    const atualizados = [...cursosMatriculados, courseId];
    setCursosMatriculados(atualizados);
    localStorage.setItem('cursosMatriculados', JSON.stringify(atualizados));
  };

  const solicitarCancelamento = (courseId) => {
    setCursoSelecionado(courseId);
    setConfirmOpen(true);
  };

  const confirmarCancelamento = () => {
    const atualizados = cursosMatriculados.filter(id => id !== cursoSelecionado);
    setCursosMatriculados(atualizados);
    localStorage.setItem('cursosMatriculados', JSON.stringify(atualizados));
    setConfirmOpen(false);
  };

  const filteredCourses = coursesData.filter(course => {
    const term = searchTerm.toLowerCase();

    const matchesSearch =
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.tags.some(tag => tag.toLowerCase().includes(term));

    const matchesCategory =
      selectedCategory === 'Todos' ||
      course.tags.some(tag =>
        tag.toLowerCase().includes(selectedCategory.toLowerCase())
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />
      <main className="search-page container">
        <div className="SearchPage">
          <section className="search-header">
            <h1>Pesquisar Curso</h1>
            <p>Pesquise por um curso e encontre o que mais combina com você!</p>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Digite o nome do curso..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleSearch}>Buscar</button>
            </div>
          </section>

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
              <div className="grid-cursos">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div key={course.id} className="card">
                      <a href={course.link}>
                        <img src={course.imgSrc} alt={course.title} />
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                      </a>
                      {cursosMatriculados.includes(course.id) ? (
                        <button
                          className="cancelar-btn"
                          onClick={() => solicitarCancelamento(course.id)}
                        >
                          Cancelar matrícula
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
                    Nenhum curso encontrado para sua busca.
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>
        <MotivacionalSection />
      </main>
      <Footer />

      <ConfirmDialog
        isOpen={confirmOpen}
        onConfirm={confirmarCancelamento}
        onCancel={() => setConfirmOpen(false)}
        message="Tem certeza que deseja cancelar esta matrícula?"
      />
    </>
  );
}
