import React, { useState, useEffect } from "react";

const FormEmpresas = ({ addPartner, isEditing, currentEmpresa, editEmpresa }) => {
  const [form, setForm] = useState({
    companyName: "",
    collaboratorsCount: "",
    isActive: true,
    lastSubmit: new Date().toISOString().split("T")[0], // Ajuste para o formato de data padrão
  });

  // Preenche o formulário para edição
  useEffect(() => {
    if (isEditing && currentEmpresa) {
      setForm({
        companyName: currentEmpresa.companyName,
        collaboratorsCount: currentEmpresa.collaboratorsCount,
        isActive: currentEmpresa.isActive,
        lastSubmit: currentEmpresa.lastSubmit.split("T")[0],
        id: currentEmpresa.id,
      });
    } else {
      setForm({
        companyName: "",
        collaboratorsCount: "",
        isActive: true,
        lastSubmit: new Date().toISOString().split("T")[0], // Ajuste para o formato de data padrão
      });
    }
  }, [isEditing, currentEmpresa]);

  // Manipula as mudanças de input
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editEmpresa(form);
    } else {
      addPartner(form);
    }
    setForm({
      companyName: "",
      collaboratorsCount: "",
      isActive: true,
      lastSubmit: new Date().toISOString().split("T")[0], // Ajuste para o formato de data padrão
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        {isEditing ? "Editar Empresa" : "Adicionar Nova Empresa"}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="companyName"
          placeholder="Nome da Empresa"
          value={form.companyName}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          name="collaboratorsCount"
          placeholder="Contagem de Colaboradores"
          value={form.collaboratorsCount}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="isActive"
          checked={form.isActive}
          onChange={handleInputChange}
          className="mr-2"
        />
        <label className="text-sm text-gray-700">Ativo</label>
      </div>
      <div className="mb-4">
        <input
          type="date" // Alterado para tipo date
          name="lastSubmit"
          value={form.lastSubmit}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="text-sm w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {isEditing ? "Atualizar Empresa" : "Adicionar Empresa"}
      </button>
    </form>
  );
};

export default FormEmpresas;
