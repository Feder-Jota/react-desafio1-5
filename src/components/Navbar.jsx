import React from "react";

  const Navbar = () => {
    return (
      <nav className="Navbar">
        <a href="#" className="logo"><h1>RepsanVentas</h1></a>
        <ul className="menu">
          <li><a className="menu-link" href="#">Inicio</a></li>
          <li><a className="menu-link" href="#">Productos</a></li>
          <li><a className="menu-link" href="#">Quienes Somos</a></li>
          <li><a className="menu-link" href="#">Contacto</a></li>
          
        </ul>
      </nav>
    )
  }
export default Navbar