// Objetivos del test de Banner
// Verificar que:
// 1. Se renderiza el título SILVESTRE.
// 2. Se renderiza el subtítulo Dulce de Leche Artesanal.
// 3. Hay un botón/enlace con el texto Descubre Más que apunta a #productos.

import { render, screen } from "@testing-library/react";
import Banner from "../Banner/Banner";

describe("Banner", () => {
  test("muestra el título SILVESTRE", () => {
    render(<Banner />);
    const titulo = screen.getByRole("heading", {
      level: 1,
      name: /silvestre/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("muestra el subtítulo Dulce de Leche Artesanal", () => {
    render(<Banner />);
    const subtitulo = screen.getByRole("heading", {
      level: 2,
      name: /dulce de leche artesanal/i,
    });
    expect(subtitulo).toBeInTheDocument();
  });

  test("el botón lleva al id productos", () => {
    render(<Banner />);
    const boton = screen.getByRole("link", { name: /descubre más/i });
    expect(boton).toHaveAttribute("href", "#productos");
  });
});
