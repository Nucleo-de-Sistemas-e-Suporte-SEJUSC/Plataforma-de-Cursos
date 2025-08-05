// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import '../styles/ProfilePage.css';
import { Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import ConfirmDialog from '../components/ConfirmDialog'; // import novo

export default function ProfilePage() {
  const [userData, setUserData] = useState({});
  const [meusCursos, setMeusCursos] = useState([]);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [cursoSelecionado, setCursoSelecionado] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('usuarioLogado'));
    setUserData(savedUser || {
      nome: 'Usuário Desconhecido',
      email: 'exemplo@email.com',
      telefone: '(00) 00000-0000'
    });

    atualizarCursos();
  }, []);

  const atualizarCursos = () => {
    const cursosMatriculados = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
    const cursosUsuario = coursesData.filter(course =>
      cursosMatriculados.includes(course.id)
    );
    setMeusCursos(cursosUsuario);
  };

  const solicitarCancelamento = (courseId) => {
    setCursoSelecionado(courseId);
    setConfirmOpen(true);
  };

  const confirmarCancelamento = () => {
    const cursosMatriculados = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
    const atualizados = cursosMatriculados.filter(id => id !== cursoSelecionado);
    localStorage.setItem('cursosMatriculados', JSON.stringify(atualizados));
    atualizarCursos();
    setConfirmOpen(false);
  };

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
            {meusCursos.length > 0 ? (
              meusCursos.map((curso) => (
                <div key={curso.id} className="curso-card">
                  <img src={curso.imgSrc} alt={curso.title} />
                  <h4>{curso.title}</h4>
                  <p>{curso.description}</p>
                  <button
                    className="cancelar-btn"
                    onClick={() => solicitarCancelamento(curso.id)}
                  >
                    Cancelar matrícula
                  </button>
                </div>
              ))
            ) : (
              <p>Você ainda não está matriculado em nenhum curso.</p>
            )}
          </div>
        </div>
      </div>

      <Link to="/" className="voltar-btn">Voltar para a Página Inicial</Link>

      <ConfirmDialog
        isOpen={confirmOpen}
        onConfirm={confirmarCancelamento}
        onCancel={() => setConfirmOpen(false)}
        message="Tem certeza que deseja cancelar esta matrícula?"
      />
    </div>
  );
}
