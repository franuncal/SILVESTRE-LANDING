// Objetivos del test para Nosotros
// Queremos comprobar que:
// 	1.	Se renderiza el título “Bienvenidos a SILVESTRE”.
// 	2.	El párrafo contiene el texto sobre la historia y el dulce de leche.
// 	3.	Se muestra la imagen con el alt “Nuestra historia - Dulce de Leche Silvestre”.

/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import Nosotros from "../Nosotros/Nosotros";

describe("Nosotros", () => {
  test("muestra el título de bienvenida", () => {
    render(<Nosotros />);
    const titulo = screen.getByRole("heading", {
      level: 2,
      name: /bienvenidos a silvestre/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("muestra la imagen con el alt correcto", () => {
    render(<Nosotros />);
    const imagen = screen.getByAltText(
      /Nuestra historia - Dulce de Leche Silvestre/i
    );
    expect(imagen).toBeInTheDocument();
  });
});
