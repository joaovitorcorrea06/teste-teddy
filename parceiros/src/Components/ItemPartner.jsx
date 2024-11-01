import React from "react";

const PartnerItem = ({ partner, onEdit }) => {
  return (
    <div className="partner-item mb-4 p-4 border border-gray-300 rounded shadow-sm bg-white">
      <h2 className="text-2xl font-bold mb-2">{partner.name}</h2>
      <p>{partner.description}</p>
      <p>
        Repositório:{" "}
        <a href={partner.repositoryGit} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {partner.repositoryGit}
        </a>
      </p>
      <p>
        Documentação:{" "}
        <a href={partner.urlDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          {partner.urlDoc}
        </a>
      </p>
      <button onClick={() => onEdit(partner)} className="bg-yellow-500 text-white py-1 px-3 rounded mt-2">
        Editar
      </button>
    </div>
  );
};

export default PartnerItem;
