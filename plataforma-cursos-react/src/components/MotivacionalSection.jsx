import React from 'react';
import '../styles/Motivacional.css';
import '../styles/homepage.css';
import indiceImg from '../assets/Indice-sejusc.png';

export default function Motivacional() {
  return (
    <section className="motivacional">
      <div className="motivacional-content">
        <div className="motivacional-texto">
          <h2>Continue estudando!</h2>
          <p>Não desista! Aprender é um processo.</p>
          <a href="/Sobre">
            <button>Saiba Mais</button>
          </a>
        </div>
            <img src={indiceImg} alt="..." />
      </div>
    </section>
  );
}
