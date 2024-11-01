import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Partners from './Partners';



const App = () => {

  return (
    <Partners />
  );
};

// Inicialização do React
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
