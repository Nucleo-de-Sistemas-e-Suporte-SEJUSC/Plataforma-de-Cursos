import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/redefinir.css";

const RedefinirSenha = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    try {
      // Exemplo de envio para API
      await axios.post("https://seuservidor.com/api/redefinir-senha", {
        email: formData.email,
        password: formData.newPassword
      });

      alert("Senha redefinida com sucesso!");
      navigate("/login"); // caminho da sua rota de login no React Router
    } catch (error) {
      alert(
        error.response?.data?.message || "Erro ao redefinir senha. Tente novamente."
      );
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-box">
        <h1>Redefinir Senha</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">Nova Senha</label>
            <input
              type="password"
              id="newPassword"
              placeholder="Digite sua nova senha"
              value={formData.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar Nova Senha</label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirme sua nova senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="reset-button">
            REDEFINIR SENHA
          </button>
        </form>
        <div className="back-to-login">
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              color: "#002248",
              fontWeight: "600",
              cursor: "pointer",
              fontSize: "14px",
              marginTop: "20px"
            }}
          >
            Voltar para o Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RedefinirSenha;
