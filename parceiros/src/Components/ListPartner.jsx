import React from "react";
import PartnerItem from "./ItemPartner";

const PartnerList = ({ partners, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome</th>
            <th className="py-3 px-6 text-left">Descrição</th>
            <th className="py-3 px-6 text-left">Repositório Git</th>
            <th className="py-3 px-6 text-left">Documentação</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <tr key={partner.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">{partner.name}</td>
                <td className="py-3 px-6">{partner.description}</td>
                <td className="py-3 px-6">
                  <a href={partner.repositoryGit} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {partner.repositoryGit}
                  </a>
                </td>
                <td className="py-3 px-6">
                  <a href={partner.urlDoc} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {partner.urlDoc}
                  </a>
                </td>
                <td className="py-3 px-6 flex space-x-2">
                  <button onClick={() => onEdit(partner)} className="bg-yellow-500 text-white py-1 px-3 rounded">
                    Editar
                  </button>
                  <button onClick={() => onDelete(partner.id)} className="bg-red-500 text-white py-1 px-3 rounded">
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-3">Nenhum parceiro encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PartnerList;
