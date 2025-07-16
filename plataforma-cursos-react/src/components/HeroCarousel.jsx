import React, { useEffect, useState } from 'react';
import '../styles/HeroCarousel.css';
import '../styles/homepage.css';
import '../assets/sicadiconpng.png';

const slidesData = [
  {
    title: 'Comece agora!',
    description: 'Aprenda de forma simples, rápida e objetiva.',
    buttonText: 'Pesquisar Cursos',
    buttonLink: '/cursos',
    image: '../assets/sicadiconpng.png',
  },
  {
    title: 'Explore novos caminhos!',
    description: 'Obtenha novos conhecimentos com nossos cursos online.',
    buttonText: 'Ver Catálogo',
    buttonLink: '/cursos',
    image: '../assets/sicadiconpng.png',
  },
  {
    title: 'Quer começar a programar?',
    description: 'Domine novas habilidades com nossos cursos online do zero!',
    buttonText: 'Começar Agora',
    buttonLink: '/cursos',
    image: '../assets/sicadiconpng.png',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slidesData.map((slide, index) => (
          <div
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            key={index}
          >
            <div className="hero-content">
              <div className="hero-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <a href={slide.buttonLink}>
                  <button>{slide.buttonText}</button>
                </a>
              </div>
              <div className="hero-image">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="iconbanner"
                />
              </div>
            </div>
          </div>
        ))}

        <button className="carousel-btn prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="carousel-btn next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
}
