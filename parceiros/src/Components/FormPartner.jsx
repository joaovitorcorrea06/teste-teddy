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
    <form onSubmit={handleSubmit} className="mb-8 bg-white  p-6 ">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        {isEditing ? "Editar Parceiro" : "Adicionar Novo Parceiro"}
      </h2>
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleInputChange}
          className=" text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="repositoryGit"
          placeholder="Repositório Git"
          value={form.repositoryGit}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="urlDoc"
          placeholder="URL da Documentação"
          value={form.urlDoc}
          onChange={handleInputChange}
          className="text-sm w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="text-sm w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {isEditing ? "Atualizar Parceiro" : "Adicionar Parceiro"}
      </button>
    </form>
  );
};

export default FormPartner;
