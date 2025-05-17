// Objetivos del test para Header
// Verificaremos que:
// 	1.	Se renderiza el logo con su alt.
// 	2.	El botón de abrir menú (FaBars) aparece.
// 	3.	Al hacer clic en el botón de abrir, se muestra el botón de cerrar (FaTimes) y el menú se activa.
// 	4.	El enlace a “Nosotros” aparece correctamente.
// 	5.	El ícono del carrito (FaShoppingCart) redirige a la tienda.

/// <reference types="vitest" />
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Navbar/Header";

describe("Header", () => {
  test("renderiza el logo con el alt correcto", () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo dulce de leche - silvestre/i);
    expect(logo).toBeInTheDocument();
  });

  test("renderiza el botón de abrir menú", () => {
    render(<Header />);
    const botonAbrir = screen.getByRole("button", { name: /abrir menú/i });
    expect(botonAbrir).toBeInTheDocument();
  });

  test("abre y cierra el menú correctamente", () => {
    render(<Header />);

    const botonAbrir = screen.getByRole("button", { name: /abrir menú/i });
    fireEvent.click(botonAbrir);

    // Verifico que el nav tenga clase "active"
    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("active");

    const botonCerrar = screen.getByRole("button", { name: /cerrar menú/i });
    expect(botonCerrar).toBeInTheDocument();

    fireEvent.click(botonCerrar);

    // Verifico que el nav ya no tenga clase "active"
    expect(nav).not.toHaveClass("active");
  });

  test("muestra enlace a 'Nosotros'", () => {
    render(<Header />);
    const linkNosotros = screen.getByRole("link", { name: /nosotros/i });
    expect(linkNosotros).toHaveAttribute("href", "#nosotros");
  });

  test("muestra ícono del carrito con link a tienda", () => {
    render(<Header />);
    const links = screen.getAllByRole("link");
    const linkCarrito = links.find(
      (link) =>
        link.getAttribute("href") === "https://silvestreddl.mitiendanube.com/"
    );
    expect(linkCarrito).toBeInTheDocument();
    expect(linkCarrito).toHaveAttribute("target", "_blank");
  });
});
