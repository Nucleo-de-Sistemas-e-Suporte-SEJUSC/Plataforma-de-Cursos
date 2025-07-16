import React, { useState, useEffect } from 'react';
import '../styles/ConfigPage.css';
import { Link } from 'react-router-dom';

export default function ConfigPage() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Carrega dados já salvos
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('usuarioLogado'));
    if (savedUser) {
      setNome(savedUser.nome || '');
      setEmail(savedUser.email || '');
      setTelefone(savedUser.telefone || '');
    }
  }, []);

  // Atualizar dados pessoais
  const handleSalvarInfos = () => {
    const novoUsuario = { nome, email, telefone };
    localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
    alert('Informações atualizadas com sucesso!');
  };

  // Atualizar senha (simulado)
  const handleSalvarSenha = () => {
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    // Aqui você poderia chamar uma API real para alterar a senha
    alert('Senha alterada com sucesso (simulação)');
    setSenha('');
    setConfirmarSenha('');
  };

  return (
    <div className="config-container">
      <h2>Configurações</h2>

      <div className="config-card">
        <h3>Atualizar Informações</h3>
        <input
          type="text"
          placeholder="Nome Completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Número de Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
        <button className="salvar-btn" onClick={handleSalvarInfos}>
          Salvar
        </button>
      </div>

      <div className="config-card">
        <h3>Alterar Senha</h3>
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme sua senha"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />
        <button className="salvar-btn" onClick={handleSalvarSenha}>
          Salvar
        </button>
      </div>

      <Link to="/" className="voltar-btn">Voltar para a Página Inicial</Link>
    </div>
  );
}
