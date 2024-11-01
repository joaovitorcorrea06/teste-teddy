import React, { useEffect, useState } from 'react';

const Home = () => {
  const [totalEmpresas, setTotalEmpresas] = useState(0);
  const [totalParceiros, setTotalParceiros] = useState(0);

  // Função para buscar o total de empresas
  const fetchTotalEmpresas = async () => {
    try {
      const response = await fetch('https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies'); // Substitua pelo endpoint real
      const data = await response.json();
      setTotalEmpresas(data.length || 0); // Supondo que a resposta seja uma lista
    } catch (error) {
      console.error('Erro ao buscar total de empresas:', error);
    }
  };

  // Função para buscar o total de parceiros
  const fetchTotalParceiros = async () => {
    try {
      const response = await fetch('https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners'); // Substitua pelo endpoint real
      const data = await response.json();
      setTotalParceiros(data.length || 0); // Supondo que a resposta seja uma lista
    } catch (error) {
      console.error('Erro ao buscar total de parceiros:', error);
    }
  };

  // useEffect para realizar as requisições quando o componente é montado
  useEffect(() => {
    fetchTotalEmpresas();
    fetchTotalParceiros();
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="bg-white border border-gray-300 shadow-md p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Total de Empresas</h2>
          <p className="text-3xl font-bold text-blue-600">{totalEmpresas}</p>
        </div>

        <div className="bg-white border border-gray-300 shadow-md p-6 rounded-lg flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2">Total de Parceiros</h2>
          <p className="text-3xl font-bold text-green-600">{totalParceiros}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
