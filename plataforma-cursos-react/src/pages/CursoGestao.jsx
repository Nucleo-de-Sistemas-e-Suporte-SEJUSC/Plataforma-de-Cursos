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
          <h1 className="curso-titulo">Gestão de Negócios</h1>
          <p className="curso-descricao">
           Descubra os pilares da administração moderna, com foco em planejamento estratégico, liderança, gestão financeira e tomada de decisões eficazes.
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
