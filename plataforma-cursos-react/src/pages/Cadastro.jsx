import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/cadastro.css";
import logo from "../assets/sicadsemfundo.png";

function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function validarTelefone(tel) {
  const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regex.test(tel);
}

const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    username: "",
    email: "",
    phone: "",
    cpf: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!validarCPF(formData.cpf)) {
      alert("CPF inválido.");
      return;
    }

    if (!validarTelefone(formData.phone)) {
      alert("Telefone inválido. Use formato (xx) xxxxx-xxxx.");
      return;
    }

    const dadosEnvio = { ...formData };
    delete dadosEnvio.confirmPassword;

    try {
      const response = await axios.post("https://seuservidor.com/api/registro", dadosEnvio, {
        headers: { "Content-Type": "application/json" }
      });

      // Salvar dados no localStorage
      localStorage.setItem("userData", JSON.stringify(response.data));

      alert("Cadastro realizado com sucesso!");
      navigate("/bem-vindo");
    } catch (error) {
      // Trata erro da requisição
      if (error.response) {
        alert("Erro no cadastro: " + (error.response.data.message || error.response.statusText));
      } else {
        alert("Erro ao conectar com o servidor: " + error.message);
      }
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="logo">
          <img src={logo} alt="Logo Sicad" />
        </div>
        <h2>Formulário de Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div>
              <label htmlFor="firstName">Primeiro nome</label>
              <input
                className="PrimeiroNome"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="nome"
              />
            </div>
            <div>
              <label htmlFor="secondName">Segundo nome</label>
              <input
                type="text"
                id="secondName"
                value={formData.secondName}
                onChange={handleChange}
                required
                placeholder="sobrenome"
              />
            </div>
          </div>

          <label htmlFor="username">Nome de usuário</label>
          <input
            type="text"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="nickname"
          />

          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            value={formData.cpf}
            onChange={handleChange}
            maxLength={14}
            placeholder="000.000.000-00"
            required
          />

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="example@gmail.com"
          />

          <label htmlFor="phone">Número de telefone</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(xx) xxxxx-xxxx"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="password"
          />

          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            placeholder="password"
          />

          <button type="submit">Registrar</button>
        </form>
      </div>

      <div className="image-box">
      </div>
    </div>
  );
};

export default Cadastro;
