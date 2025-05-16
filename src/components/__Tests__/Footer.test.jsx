// Objetivos del test para Footer
// Verificaremos que:
// 	1.	Se renderiza el texto “Contáctanos”.
// 	2.	Se renderiza el número de WhatsApp con el enlace correcto.
// 	3.	Se renderiza el correo electrónico con el mailto correcto.
// 	4.	Se renderiza “Síguenos en Redes”.
// 	5.	Se renderiza el texto “Desarrollado por unqui” con el link correspondiente.

/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import Footer from "../Footer/Footer";

describe("Footer", () => {
  test("muestra el título 'Contáctanos'", () => {
    render(<Footer />);
    expect(screen.getByText(/contáctanos/i)).toBeInTheDocument();
  });

  test("muestra el número de WhatsApp con el enlace correcto", () => {
    render(<Footer />);
    const whatsappLink = screen.getByRole("link", {
      name: /2324581612/i,
    });
    expect(whatsappLink).toHaveAttribute(
      "href",
      expect.stringContaining("wa.me")
    );
  });

  test("muestra el correo con mailto", () => {
    render(<Footer />);
    const mailLink = screen.getByRole("link", {
      name: /silvestreddl@gmail.com/i,
    });
    expect(mailLink).toHaveAttribute("href", "mailto:silvestreddl@gmail.com");
  });

  test("muestra el texto 'Síguenos en Redes'", () => {
    render(<Footer />);
    expect(screen.getByText(/síguenos en redes/i)).toBeInTheDocument();
  });

  test("muestra el texto 'Desarrollado por unqui' con link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /unqui/i });
    expect(link).toHaveAttribute("href", "https://unquidev.com");
  });
});
