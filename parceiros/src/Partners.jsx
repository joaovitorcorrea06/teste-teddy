import React, { useState, useEffect } from "react";
import PartnerList from './Components/ListPartner';
import FormPartner from './Components/FormPartner';

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const partnersPerPage = 10;

  useEffect(() => {
    const page = new URLSearchParams(window.location.search).get('page');
    if (page) {
      setCurrentPage(Number(page));
    }
  }, []);

  useEffect(() => {
    fetch("https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners")
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Erro ao buscar parceiros:", error));
  }, []);

  const addPartner = (newPartner) => {
    fetch("https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPartner),
    })
      .then((response) => response.json())
      .then((data) => {
        setPartners([...partners, data]);
        closeModal();
      })
      .catch((error) => console.error("Erro ao adicionar parceiro:", error));
  };

  const editPartner = (updatedPartner) => {
    fetch(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${updatedPartner.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPartner),
    })
      .then((response) => response.json())
      .then((data) => {
        setPartners(partners.map((partner) =>
          partner.id === data.id ? data : partner
        ));
        setIsEditing(false);
        closeModal();
      })
      .catch((error) => console.error("Erro ao atualizar parceiro:", error));
  };

  const handleEdit = (partner) => {
    setCurrentPartner(partner);
    setIsEditing(true);
    openModal();
  };

  const handleDelete = (partnerId) => {
    fetch(`https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners/${partnerId}`, {
      method: "DELETE",
    })
      .then(() => {
        setPartners(partners.filter(partner => partner.id !== partnerId));
      })
      .catch((error) => console.error("Erro ao excluir parceiro:", error));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPartner(null);
    setIsEditing(false);
  };

  // Lógica de paginação
  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = partners.slice(indexOfFirstPartner, indexOfLastPartner);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, '', `?page=${pageNumber}`);
  };

  const totalPages = Math.ceil(partners.length / partnersPerPage);

  return (
    <div className="pt-10 mt-10 px-4 sm:px-10 lg:px-20 lg:ml-64">
      <h1 className="text-4xl font-bold mb-8 text-center">Gerenciamento de Parceiros</h1>

      <button onClick={openModal} className="bg-green-500 text-white py-2 px-4 rounded mb-4 text-sm">
        Adicionar Novo Parceiro
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-7xl w-full">
            <FormPartner
              addPartner={addPartner}
              isEditing={isEditing}
              currentPartner={currentPartner}
              editPartner={editPartner}
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
      <PartnerList partners={currentPartners} onEdit={handleEdit} onDelete={handleDelete} />

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
};

export default Partners;
