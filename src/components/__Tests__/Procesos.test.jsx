// Objetivos del test para Proceso
// Queremos asegurarnos de que:
// 	1.	Se renderiza el título “Proceso de Elaboración”.
// 	2.	Se muestra la descripción introductoria.
// 	3.	Se renderizan los tres pasos con sus respectivos títulos.

/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import Proceso from "../Procesos/Procesos";

describe("Proceso", () => {
  test("muestra el título principal", () => {
    render(<Proceso />);
    const titulo = screen.getByRole("heading", {
      level: 2,
      name: /proceso de elaboración/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("muestra la descripción introductoria", () => {
    render(<Proceso />);
    const descripcion = screen.getByText(
      /descubre el arte detrás de nuestro dulce de leche/i
    );
    expect(descripcion).toBeInTheDocument();
  });

  test("renderiza los pasos del proceso", () => {
    render(<Proceso />);
    const paso1 = screen.getByText(/selección de ingredientes/i);
    const paso2 = screen.getByText(/cocción a fuego lento/i);
    const paso3 = screen.getByText(/envasado/i);

    expect(paso1).toBeInTheDocument();
    expect(paso2).toBeInTheDocument();
    expect(paso3).toBeInTheDocument();
  });
});
