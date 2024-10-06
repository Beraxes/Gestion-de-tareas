import React, { useState } from 'react';
import AuthService from '../Utils/AuthService';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(username, password);
      /* alert("Inicio Exitoso") */
      navigate('/'); // Cambia esto a la ruta de tu perfil o dashboard
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container mb-3">
      <br/>
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="text-center mb-4">Iniciar sesión</h2>
        <div className="mb-3 position-relative">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder=""
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username" className="floating-label">Correo electrónico</label>
        </div>
        <div className="mb-3 position-relative">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder=""
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password" className="floating-label">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
