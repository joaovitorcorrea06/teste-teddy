import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Alterna a visibilidade da sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Botão de menu para dispositivos móveis */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded focus:outline-none"
      >
        {isOpen ? (
          // Ícone SVG para "Fechar"
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Ícone SVG para "Menu"
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>

      {/* Sidebar que aparece em dispositivos maiores e se oculta em menores */}
      <div
        className={`sidebar fixed md:relative top-0 left-0 w-64 p-6 bg-gray-50 min-h-screen border-r border-gray-200 shadow-sm transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <h2 className="text-xl font-semibold mb-8 text-gray-700 text-center">Menu</h2>
        <ul className="space-y-1 text-gray-600">
          <li>
            <Link
              to="/home"
              className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150"
            >
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/parceiros"
              className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150"
            >
              <span>Parceiros</span>
            </Link>
          </li>
          <li>
            <Link
              to="/empresas"
              className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150"
            >
              <span>Empresas</span>
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150"
            >
              <span>Sobre a Aplicação</span>
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="flex items-center space-x-3 hover:text-red-500 hover:bg-gray-100 p-2 rounded-md transition duration-150"
            >
              <span>Sair</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
