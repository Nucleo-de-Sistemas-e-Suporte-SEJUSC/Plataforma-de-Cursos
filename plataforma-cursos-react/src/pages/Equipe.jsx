// src/pages/Equipe.jsx
import React from 'react';
import '../styles/Equipe.css';

const membros = [
  {
    nome: "Gabriela",
    cargo: "Desenvolvedor Back-End",
    foto: "#",
    linkedin: "#"
  },
  {
    nome: "Yasmin",
    cargo: "UX Designer e Desenvolvedor Front-End",
    foto: "#",
    linkedin: "#"
  },
  {
    nome: "Gabriel Nery",
    cargo: "Gerente de Tecnologia da Informação",
    foto: "#",
    linkedin: "#"
  }
];

export default function Equipe() {
  return (
    <main className="container equipe">
      <h1>Nossa Equipe</h1>
      <div className="grid-equipe">
        {membros.map((membro, index) => (
          <a
            key={index}
            href={membro.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="card-equipe"
          >
            <img src={membro.foto} alt={membro.nome} />
            <div className="info">
              <h3>{membro.nome}</h3>
              <p>{membro.cargo}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
