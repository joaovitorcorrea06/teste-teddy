import React from "react";

const EmpresasItem = ({ partner, onEdit }) => {
  return (
    <div className="partner-item mb-4 p-4 border border-gray-300 rounded shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-2">{partner.companyName}</h2>
      <p>Colaboradores: {partner.collaboratorsCount}</p>
      <p>Ativo: {partner.isActive ? "Sim" : "Não"}</p>
      <p>Último Envio: {new Date(partner.lastSubmit).toLocaleString()}</p>
      <button onClick={() => onEdit(partner)} className="bg-yellow-500 text-white py-1 px-3 rounded mt-2">
        Editar
      </button>
    </div>
  );
};

export default EmpresasItem;
