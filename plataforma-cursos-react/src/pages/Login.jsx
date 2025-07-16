
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/sicadsemfundo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/bem-vindo");
  };

  return (
    <div className="main-login">
      <div className="left-login">
        <img src={logo} alt="Logo Sicad" />
        <h1>Faça login<br />E comece o curso</h1>
        <div className="register-link">
          Não tem uma conta? <Link to="/cadastro">Crie uma aqui</Link>
        </div>
      </div>

      <div className="right-login">
        <form className="card-login" onSubmit={handleLogin}>
          <legend className="form-legend">Login</legend>

          <div className="textfield">
            <label htmlFor="usuario">Usuário</label>
            <input type="text" name="usuario" placeholder="Usuário" required />
          </div>

          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" placeholder="Senha" required />
          </div>

          <div className="register-link">
            <Link to="/redefinir-senha">Esqueceu a senha?</Link>
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
