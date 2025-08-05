import React from 'react';
import '../styles/Footer.css';
import '../styles/homepage.css';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Link to="/Equipe" className="Link">
          Desenvolvido pela Gerência de Tecnologia da Informação - SEJUSC
        </Link>
        <p>&copy; 2025 SICAD Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
