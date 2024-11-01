import React, { useState, useEffect } from "react";

const FormPartner = ({ addPartner, isEditing, currentPartner, editPartner }) => {
  const [form, setForm] = useState({ name: "", description: "", repositoryGit: "", urlDoc: "" });

  // Preenche o formulário para edição
  useEffect(() => {
    if (isEditing) {
      setForm(currentPartner);
    } else {
      setForm({ name: "", description: "", repositoryGit: "", urlDoc: "" });
    }
  }, [isEditing, currentPartner]);

  // Manipula as mudanças de input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Envia o formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      editPartner(form);
    } else {
      addPartner(form);
    }
    setForm({ name: "", description: "", repositoryGit: "", urlDoc: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">
        {isEditing ? "Editar Parceiro" : "Adicionar Novo Parceiro"}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="repositoryGit"
          placeholder="Repositório Git"
          value={form.repositoryGit}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="urlDoc"
          placeholder="URL da Documentação"
          value={form.urlDoc}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        {isEditing ? "Atualizar Parceiro" : "Adicionar Parceiro"}
      </button>
    </form>
  );
};

export default FormPartner;
