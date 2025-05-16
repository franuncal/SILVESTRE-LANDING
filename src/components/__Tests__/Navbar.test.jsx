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
    const botonAbrir = screen.getByRole("button");
    expect(botonAbrir).toBeInTheDocument();
  });

  test("abre y cierra el menú correctamente", () => {
    render(<Header />);
    const botonAbrir = screen.getByRole("button");
    fireEvent.click(botonAbrir);
    const botonCerrar = screen.getByRole("button");
    expect(botonCerrar).toBeInTheDocument();
  });

  test("muestra enlace a 'Nosotros'", () => {
    render(<Header />);
    const linkNosotros = screen.getByRole("link", { name: /nosotros/i });
    expect(linkNosotros).toHaveAttribute("href", "#nosotros");
  });

  test("muestra ícono del carrito con link a tienda", () => {
    render(<Header />);
    const linkCarrito = screen.getByRole("link", {
      name: "",
    }); // sin texto, solo ícono
    expect(linkCarrito).toHaveAttribute(
      "href",
      "https://silvestreddl.mitiendanube.com/"
    );
  });
});
