import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Utils/AuthService";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = () => {
    AuthService.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link to="/" className="navbar-brand fs-4 fw-bold">Task Manager</Link>
        <div className="d-flex gap-3">
          {currentUser ? (
            <>
              <span className="text-secondary fs-6 me-2">Bienvenido, {currentUser.nombre}</span>
              <button
                onClick={handleLogout}
                className="btn btn-danger rounded-pill"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-primary rounded-pill">
                Iniciar sesión
              </Link>
              <Link to="/register" className="btn btn-success rounded-pill">
                Registrarse
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
