import React, { useState, useEffect } from "react";
import EmpresasList from './Components/ListEmpresas';
import FormEmpresas from './Components/FormEmpresas';

const Empresas = () => {
  const [empresas, setEmpresas] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmpresa, setCurrentEmpresa] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const page = new URLSearchParams(window.location.search).get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, []);

  useEffect(() => {
    fetch("https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies")
      .then((response) => response.json())
      .then((data) => setEmpresas(data))
      .catch((error) => console.error("Erro ao buscar parceiros:", error));
  }, []);

  const addEmpresa = (newEmpresa) => {
    fetch("https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmpresa),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmpresas([...empresas, data]);
        closeModal();
      })
      .catch((error) => console.error("Erro ao adicionar parceiro:", error));
  };

  const editEmpresa = (updatedEmpresa) => {
    console.log(updatedEmpresa)
    fetch(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${updatedEmpresa.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEmpresa),
    })
      .then((response) => response.json())
      .then((data) => {
        setEmpresas(empresas.map((empresa) =>
          empresa.id === data.id ? data : empresa
        ));
        setIsEditing(false);
        closeModal();
      })
      .catch((error) => console.error("Erro ao atualizar parceiro:", error));
  };

  const handleEdit = (empresa) => {
    setCurrentEmpresa(empresa);
    setIsEditing(true);
    openModal();
  };

  const handleDelete = (empresaId) => {
    fetch(`https://655cf25525b76d9884fe3153.mockapi.io/v1/external-companies/${empresaId}`, {
      method: "DELETE",
    })
      .then(() => {
        setEmpresas(empresas.filter(empresa => empresa.id !== empresaId));
      })
      .catch((error) => console.error("Erro ao excluir parceiro:", error));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEmpresa(null);
    setIsEditing(false);
  };

  // Lógica de paginação
  const indexOfLastPartner = currentPage * itemsPerPage;
  const indexOfFirstPartner = indexOfLastPartner - itemsPerPage;
  const currentPartners = empresas.slice(indexOfFirstPartner, indexOfLastPartner);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Atualiza a URL manualmente
    window.history.pushState(null, '', `?page=${pageNumber}`);
  };

  // Calcular o número total de páginas
  const totalPages = Math.ceil(empresas.length / itemsPerPage);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-h px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Gerenciamento de Empresas</h1>

      <button onClick={openModal} className="bg-green-500 text-white py-2 px-4 rounded mb-4 text-sm">
        Adicionar Nova Empresa
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full">
            <FormEmpresas
              addPartner={addEmpresa}
              isEditing={isEditing}
              currentEmpresa={currentEmpresa}
              editEmpresa={editEmpresa}
            />
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded text-sm"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Lista de parceiros com paginação */}
      <EmpresasList partners={currentPartners} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Paginação */}
      <div className="flex justify-center mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`text-sm mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Empresas;
