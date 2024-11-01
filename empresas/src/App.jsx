import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Empresas from './Empresas';



const App = () => {

  return (
    <Empresas />
  );
};

// Inicialização do React
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
