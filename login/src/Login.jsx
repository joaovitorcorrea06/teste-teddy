import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', form);
    // Redireciona para a página /home após o login
    window.location.href = '/home';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Digite seu email"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha</label>
            <input
              type="password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleInputChange}
              placeholder="Digite sua senha"
              className="w-full px-4 py-2 mt-1 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700 transition duration-200"
          >
            Entrar
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
