import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Utils/AuthService";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthService.register(nombre, email, password);
      navigate("/login"); // Redirigir al iniciar sesión tras el registro exitoso
    } catch (err) {
      setError(err.response.data.mensaje || "Error al registrarse");
    }
  };

  return (
    <div className="register-form mt-5">
      <h2>Registro</h2>
      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="form-floating mb-3">
          <input
            type="text"
            placeholder=""
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            placeholder="name@example.com"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Correo Electrónico</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            placeholder=""
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Register;
