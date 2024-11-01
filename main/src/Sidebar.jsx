import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar w-64 p-6 bg-gray-50 min-h-screen border-r border-gray-200 shadow-sm">
      <h2 className="text-xl font-semibold mb-8 text-gray-700 text-center">Menu</h2>
      <ul className="space-y-1 text-gray-600">
        <li>
          <a href="/home" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150">
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="/parceiros" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150">
            <span>Parceiros</span>
          </a>
        </li>
        <li>
          <a href="/empresas" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150">
            <span>Empresas</span>
          </a>
        </li>
        <li>
          <a href="/sobre" className="flex items-center space-x-3 hover:text-blue-600 hover:bg-gray-100 p-2 rounded-md transition duration-150">
            <span>Sobre a Aplicação</span>
          </a>
        </li>
        <li>
          <a href="/login" className="flex items-center space-x-3 hover:text-red-500 hover:bg-gray-100 p-2 rounded-md transition duration-150">
            <span>Sair</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
