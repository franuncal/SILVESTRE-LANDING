import { useState } from "react";
import "../Navbar/Header.css";
import logo from "../../assets/img/cartel.webp";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa"; // Importa los íconos correctos

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header>
      <img className="logo" src={logo} alt="Logo Dulce de Leche - Silvestre" />

      {/* Botón para abrir menú */}
      <button
        className="abrir-menu"
        onClick={() => setMenuAbierto(true)}
        aria-label="Abrir menú"
      >
        <FaBars />
      </button>

      <nav className={menuAbierto ? "nav active" : "nav"}>
        {/* Botón para cerrar menú */}
        <button
          className="cerrar-menu"
          onClick={() => setMenuAbierto(false)}
          aria-label="Cerrar menú"
        >
          <FaTimes />
        </button>

        <ul className="nav-list">
          <li>
            <a href="#banner">Inicio</a>
          </li>
          <li>
            <a href="#nosotros">Nosotros</a>
          </li>
          <li>
            <a href="#productos">Productos</a>
          </li>
          {/* <li>
            <a href="#puntos-de-venta">Puntos de Venta</a>
          </li> */}
          <li>
            <a href="#footer">Contacto</a>
          </li>
          <li>
            <a
              href="https://silvestreddl.mitiendanube.com/"
              target="_blank"
              className="store-link"
              rel="noopener noreferrer"
              aria-label="Ir a la tienda online"
            >
              <FaShoppingCart />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
