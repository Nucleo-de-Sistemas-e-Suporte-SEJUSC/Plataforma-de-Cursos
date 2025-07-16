import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Motivacional from '../components/MotivacionalSection';
import '../styles/CursoDetalhes.css';

export default function CursoDetalhes() {
  return (
    <>
      <Header />
      <main className="curso-detalhes-page">
        <div className="container">
          <h1 className="curso-titulo">Back-end em Python</h1>
          <p className="curso-descricao">
          Aprenda a desenvolver aplicações robustas utilizando Python. Este curso aborda fundamentos de lógica, estruturas de dados, APIs e integração com bancos de dados.
          </p>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/RgkB7Gfh1n0"
              title="Vídeo do Curso"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <section className="curso-info">
            <h2>Informações do Curso</h2>
            <ul>
              <li><strong>Duração:</strong> 45 horas</li>
              <li><strong>Categoria:</strong> DIY</li>
              <li><strong>Público-alvo:</strong> Iniciantes / Comunidade</li>
            </ul>
          </section>
        </div>
      </main>
      <Motivacional />
      <Footer />
    </>
  );
}
