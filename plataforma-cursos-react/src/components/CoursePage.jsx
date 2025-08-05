import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Motivacional from './MotivacionalSection';
import '../styles/CoursePage.css';

export default function CoursePage({ title, description, videoUrl, category, duration, audience, rating, students, sections }) {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [progress, setProgress] = useState(30); // % concluído

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="course-page">
        <div className="course-content">
          {/* Esquerda: Vídeo */}
          <div className="video-area">
            {videoUrl.endsWith('.mp4') ? (
              <video controls width="100%" height="450">
                <source src={videoUrl} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
            ) : (
              <iframe
                src={videoUrl}
                title={`Vídeo do curso ${title}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}

            {/* Abas */}
            <div className="tabs">
              {["Overview", "Notes"].map((tab) => (
                <button
                  key={tab}
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Conteúdo da aba */}
            <div className="tab-content">
              {activeTab === "Overview" && (
                <>
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <div className="course-meta">
                    <span>{duration} total</span>
                    <span>Categoria: {category}</span>
                  </div>
                </>
              )}
              {activeTab === "Notes" && <p>Aqui vão as notas do video...</p>}
            </div>
          </div>

          {/* Direita: Conteúdo do curso */}
          <aside className="sidebar">
            <h2>Conteúdo do Curso</h2>
            {sections.map((section, index) => (
              <div key={index} className="section">
                <button className="section-title" onClick={() => toggleSection(index)}>
                  {section.title}
                </button>
                {activeSection === index && (
                  <ul className="lessons">
                    {section.lessons.map((lesson, idx) => (
                      <li key={idx}>
                        {lesson.title} <span className="duration">{lesson.duration}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </aside>
        </div>
      </main>

      <Motivacional />
      <Footer />
    </>
  );
}
