import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Motivacional from './MotivacionalSection';
import '../styles/CoursePage.css';

export default function CoursePage({ title, description, videoUrl, category, duration, audience }) {
  return (
    <>
      <Header />

      <main className="curso-detalhes-page">
        <div className="container">
          <h1 className="curso-titulo">{title}</h1>
          <p className="curso-descricao">{description}</p>

          <div className="video-container">
            <iframe
              src={videoUrl}
              title={`Vídeo do curso ${title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <section className="curso-info">
            <h2>Informações do Curso</h2>
            <ul>
              <li><strong>Duração:</strong> {duration}</li>
              <li><strong>Categoria:</strong> {category}</li>
              <li><strong>Público-alvo:</strong> {audience}</li>
            </ul>
          </section>
        </div>
      </main>

      <Motivacional />
      <Footer />
    </>
  );
}
