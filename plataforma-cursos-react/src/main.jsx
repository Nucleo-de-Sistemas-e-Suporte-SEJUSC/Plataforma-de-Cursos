import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import RedefinirSenha from "./pages/Redefinir.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sobre from "./pages/Sobre.jsx";
import Cursos from "./pages/SearchCursos.jsx";
import Config from "./pages/ConfigPage.jsx";
import Profile from "./pages/ProfilePage.jsx";
import Costura from "./pages/PagesCourses/Costura.jsx";
import Ambiente from "./pages/PagesCourses/Ambiente.jsx";
import Anydesk from "./pages/PagesCourses/Anydesk.jsx";
import Desenho from "./pages/PagesCourses/Desenho.jsx";
import Gestao from "./pages/PagesCourses/Gestao.jsx";
import Python from "./pages/PagesCourses/Python.jsx";
import Redes from "./pages/PagesCourses/Redes.jsx";
import Educacao from "./pages/PagesCourses/Educacao.jsx";
import Equipe from "./pages/Equipe.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinir-senha" element={<RedefinirSenha />} />
         <Route path="/sobre" element={<Sobre />} />
         <Route path="/cursos" element={<Cursos />} />
         <Route path="/Config" element={<Config />} />
         <Route path="/Profile" element={<Profile />} />
         <Route path="/Equipe" element={<Equipe />} />


         <Route path="/Costura" element={<Costura />} />
         <Route path="/Ambiente" element={<Ambiente />} />
         <Route path="/Anydesk" element={<Anydesk />} />
         <Route path="/Desenho" element={<Desenho />} />
         <Route path="/Gestao" element={<Gestao />} />
         <Route path="/Python" element={<Python />} />
         <Route path="/Redes" element={<Redes />} />
         <Route path="/Educacao" element={<Educacao />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
