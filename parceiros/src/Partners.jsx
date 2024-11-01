import React, { useState, useEffect } from "react";

import PartnerList from './Components/ListPartner';
import FormPartner from './Components/FormPartner';

const Partners = () => {

  const [partners, setPartners] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPartner, setCurrentPartner] = useState(null);

  // Fetch de parceiros ao carregar o componente
  useEffect(() => {
    fetch("https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners")
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Erro ao buscar parceiros:", error));
  }, []);

  // Adiciona um novo parceiro
  const addPartner = (newPartner) => {
    fetch("https://644060ba792fe886a88de1b9.mockapi.io/v1/test/partners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPartner),
    })
      .then((response) => response.json())
      .then((data) => setPartners([...partners, data]))
      .catch((error) => console.error("Erro ao adicionar parceiro:", error));
  };

  // Edita um parceiro existente
  const editPartner = (updatedPartner) => {
    setPartners(
      partners.map((partner) =>
        partner.id === updatedPartner.id ? updatedPartner : partner
      )
    );
    setIsEditing(false);
  };

  // Prepara parceiro para edição
  const handleEdit = (partner) => {
    setCurrentPartner(partner);
    setIsEditing(true);
  };


  return (
    <div className="mt-10 text-3xl mx-auto max-w-h px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Gerenciamento de Parceiros</h1>

      {/* Formulário */}
      <FormPartner
        addPartner={addPartner}
        isEditing={isEditing}
        currentPartner={currentPartner}
        editPartner={editPartner}
      />

      {/* Lista de parceiros */}
      <PartnerList partners={partners} onEdit={handleEdit} />
    </div>
  )
}

export default Partners