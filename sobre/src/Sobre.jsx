import React from 'react';

const Sobre = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Sobre o Projeto</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Iniciei o projeto com uma arquitetura baseada em microfrontends utilizando React. O componente principal, chamado <strong>MAIN</strong>, gerencia todo o roteamento do sistema por meio do <strong>react-router-dom</strong>. Para a estilização dos componentes, optei pelo <strong>Tailwind CSS</strong>, garantindo um design responsivo e moderno. As requisições à API são realizadas usando o <strong>fetch</strong> nativo do JavaScript.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Após o login, os usuários são direcionados para uma <strong>homepage</strong> que apresenta cards informativos sobre a quantidade de registros de empresas e parceiros. Nas telas dedicadas a parceiros e empresas, implementamos um <strong>CRUD</strong> completo, permitindo a manipulação eficiente dos registros. Além disso, os usuários têm a opção de realizar o logout do sistema de forma simples e intuitiva.
      </p>
    </div>
  );
};

export default Sobre;
