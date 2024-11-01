import React from "react";
import EmpresasItem from "./ItemEmpresas";

const EmpresasList = ({ partners, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Nome da Empresa</th>
            <th className="py-3 px-6 text-left">Colaboradores</th>
            <th className="py-3 px-6 text-left">Ativo</th>
            <th className="py-3 px-6 text-left">Último Envio</th>
            <th className="py-3 px-6 text-left">Ações</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {partners.length > 0 ? (
            partners.map((partner) => (
              <tr key={partner.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6">{partner.companyName}</td>
                <td className="py-3 px-6">{partner.collaboratorsCount}</td>
                <td className="py-3 px-6">{partner.isActive ? "Sim" : "Não"}</td>
                <td className="py-3 px-6">
                  {new Date(partner.lastSubmit).toLocaleString("pt-BR", {
                    timeZone: "UTC", // Define o fuso horário como UTC
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
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
              <td colSpan="5" className="text-center py-3">Nenhuma empresa encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmpresasList;
