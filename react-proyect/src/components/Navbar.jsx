import React from "react";
import "../index.css";

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="sidebar">
      <h1>Transportex</h1>
        <h2>Trabajos</h2>
        <a href="#motocicleta">Motocicleta</a>
        <a href="#carro">Carro</a>
        <a href="#camion-mediano">Camión Mediano</a>
        <a href="#camion-pequenio">Camión Pequeño</a>
      </div>

      <div className="content">
        <h1>Bienvenido a la sección de Trabajos</h1>
        <p>
          Selecciona una categoría en la barra de navegación para ver más
          detalles.
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
