import React, { useState, useEffect } from 'react';
import '../styles/ProfilePage.css';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [meusCursos, setMeusCursos] = useState([]);

  // Carrega os dados do usuário e cursos ao montar
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('usuarioLogado'));
    setUserData(savedUser || {
      nome: 'Usuário Desconhecido',
      email: 'exemplo@email.com',
      telefone: '(00) 00000-0000'
    });

    // Cursos simulados
    const fakeCursos = [
      { id: 1, dataInicio: '01/07', status: 'finalizado' },
      { id: 2, dataInicio: '10/07', status: 'andamento' },
      { id: 3, dataInicio: '15/07', status: 'pendente' },
    ];
    setMeusCursos(fakeCursos);
  }, []);

  return (
    <div className="profile-container">
      <h2>Meu Perfil</h2>

      <div className="card-dados">
        <h3>Dados Pessoais</h3>
        <p><strong>Nome:</strong> {userData.nome}</p>
        <p><strong>E-mail:</strong> {userData.email}</p>
        <p><strong>Telefone:</strong> {userData.telefone}</p>
      </div>

      <div className="card-cursos">
        <h3>Meus Cursos</h3>
        <div className="carousel-wrapper">
          <div className="curso-carousel">
            {meusCursos.map((curso) => (
              <div key={curso.id} className="curso-card">
                <span className="data">Início: {curso.dataInicio}</span>
                <span className={`status ${curso.status}`}>
                  {curso.status === 'finalizado' && 'Finalizado'}
                  {curso.status === 'andamento' && 'Em andamento'}
                  {curso.status === 'pendente' && 'Pendente'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/" className="voltar-btn">Voltar para a Página Inicial</Link>
    </div>
  );
}

