import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

import "./index.scss";

import "parceiros/style"
import "sobre/style"
import "home/style"
import "login/style"

import Login from 'login/Login';
import Home from 'home/Home';
import Partner from 'parceiros/Partner';
import Sobre from 'sobre/Sobre';
import Empresas from 'empresas/Empresas';
import Sidebar from './Sidebar';

// Componente de Menu Lateral


// Componente principal da aplicação
const AppLayout = () => {
  const location = useLocation(); // Verifica a rota atual

  return (
    <div className="app-container flex">
      {/* Exibe o menu lateral exceto na rota de login */}
      {location.pathname !== "/login" && <Sidebar />}

      {/* Conteúdo principal da aplicação */}
      <div className="content w-full">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/parceiros" element={<Partner />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/empresas" element={<Empresas />} />

          {/* Rota padrão para redirecionar ao login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </div>
  );
};

// Inicialização do React
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <Router>
    <AppLayout />
  </Router>
);
