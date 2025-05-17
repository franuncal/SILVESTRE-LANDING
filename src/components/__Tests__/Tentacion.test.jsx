// Objetivos del test para Tentacion
// 	1.	Se renderiza el título con el texto:
// ¿Demasiado tentador para resistirse?
// 	2.	Se muestra el video con el atributo autoPlay, muted y loop.
// 	3.	Existe un botón/enlace con texto “Tienda Online” que apunta al link externo correcto y abre en nueva pestaña.

/// <reference types="vitest" />
import { render, screen } from "@testing-library/react";
import Tentacion from "../Tentacion/Tentacion";

describe("Tentacion", () => {
  test("muestra el título correcto", () => {
    render(<Tentacion />);
    const titulo = screen.getByRole("heading", {
      level: 2,
      name: /¿demasiado tentador para resistirse\?/i,
    });
    expect(titulo).toBeInTheDocument();
  });

  test("muestra el video con atributos autoplay, muted y loop", () => {
    render(<Tentacion />);

    const videos = document.getElementsByClassName("promo-video");
    expect(videos.length).toBe(1);

    const videoEl = videos[0];
    expect(videoEl.autoplay).toBe(true);
    expect(videoEl.muted).toBe(true);
    expect(videoEl.loop).toBe(true);
  });

  test("existe botón Tienda Online con enlace correcto y target _blank", () => {
    render(<Tentacion />);
    const boton = screen.getByRole("link", { name: /tienda online/i });
    expect(boton).toBeInTheDocument();
    expect(boton).toHaveAttribute(
      "href",
      "https://silvestreddl.mitiendanube.com/"
    );
    expect(boton).toHaveAttribute("target", "_blank");
  });
});
