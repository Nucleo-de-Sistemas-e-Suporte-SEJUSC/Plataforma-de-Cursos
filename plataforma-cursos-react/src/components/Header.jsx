import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/sicad.png";
import "../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [userName, setUserName] = useState("NickName");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Pega nome do usuário no localStorage
    const savedUser = JSON.parse(localStorage.getItem("usuarioLogado"));
    if (savedUser?.nome) {
      setUserName(savedUser.nome.split(" ")[0]); // Só o primeiro nome
    }
  }, []);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/login");
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo do site" />
          </Link>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cursos">Cursos</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>

        <div className="user-dropdown" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="user-button">
            Olá, {userName}
          </button>
          {isDropdownVisible && (
            <div className="dropdown-menu">
              <Link to="/Profile">Perfil</Link>
              <Link to="/Config">Configurações</Link>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
