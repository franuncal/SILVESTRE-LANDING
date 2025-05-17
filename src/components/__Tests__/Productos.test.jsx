// Objetivos del test para Productos
// 	1.	Se renderiza el título principal “Nuestros Productos”.
// 	2.	Se muestran los 4 productos con sus nombres, precios y enlaces.
// 	3.	Cada enlace debe tener el atributo target="_blank".

/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import Productos from "../Productos/Productos";

describe("Productos", () => {
  test("muestra el título principal", () => {
    render(<Productos />);
    const titulo = screen.getByRole("heading", {
      level: 2,
      name: /nuestros productos/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("renderiza los productos con nombre, precio y enlace", () => {
    render(<Productos />);

    expect(screen.getByText(/^dulce de leche 1 kg$/i)).toBeInTheDocument();
    expect(screen.getByText(/^dulce de leche 500 gr$/i)).toBeInTheDocument();
    expect(
      screen.getByText(/dulce de leche 500 gr \| pack x6/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/dulce de leche 1 kg \| pack x6/i)
    ).toBeInTheDocument();

    expect(screen.getByText(/\$9.000/)).toBeInTheDocument();
    expect(screen.getByText(/\$5.500/)).toBeInTheDocument();
    expect(screen.getByText(/\$31.200/)).toBeInTheDocument();
    expect(screen.getByText(/\$50.000/)).toBeInTheDocument();

    const enlaces = screen.getAllByRole("link", { name: /ir a la tienda/i });
    expect(enlaces).toHaveLength(4);

    enlaces.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });
});
