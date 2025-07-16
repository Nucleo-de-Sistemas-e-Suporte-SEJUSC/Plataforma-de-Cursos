import React from 'react';
import '../styles/Categories.css';

const categories = ['Todos', 'Curso TI', 'Tutoriais', 'Adm', 'Rede', 'DIY', 'Outros'];

const Categories = ({ onSelectCategory, selectedCategory }) => (
  <section className="categorias container">
    <div className="categorias-header">
      <h2>Categorias</h2>
    </div>

    <div className="botoes-categorias">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`categoria-card ${selectedCategory === category ? 'ativa' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          <span>{category}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
