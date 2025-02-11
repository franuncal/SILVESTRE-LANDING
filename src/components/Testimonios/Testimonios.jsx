import { useState, useEffect, useCallback } from "react";
import "../Testimonios/Testimonios.css";
import { FaStar, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Testimonios = () => {
  const testimonios = [
    {
      texto:
        "El mejor dulce de leche que he probado en mi vida. ¡Totalmente recomendado!",
      autor: "Juan Pérez",
      estrellas: 5,
    },
    {
      texto:
        "Sin lugar a dudas, es el mejor dulce de leche que he probado. ¡5 estrellas!",
      autor: "Ana Gómez",
      estrellas: 5,
    },
    {
      texto:
        "Increíblemente delicioso. El dulce de leche es de una calidad insuperable.",
      autor: "Carlos Martínez",
      estrellas: 5,
    },
    // {
    //   texto: "Sabor único. El dulce de leche!!",
    //   autor: "Sofi Lopez",
    //   estrellas: 5,
    // },
  ];

  const [indiceActual, setIndiceActual] = useState(0);

  const siguienteTestimonio = useCallback(() => {
    setIndiceActual((prevIndex) => (prevIndex + 1) % testimonios.length);
  }, [testimonios.length]);

  useEffect(() => {
    const intervalo = setInterval(() => {
      siguienteTestimonio();
    }, 3500);

    return () => clearInterval(intervalo);
  }, [siguienteTestimonio]);

  const anteriorTestimonio = () => {
    setIndiceActual(
      (prevIndex) => (prevIndex - 1 + testimonios.length) % testimonios.length
    );
  };

  return (
    <section id="testimonios" className="section">
      {/* <h2>Testimonios</h2> */}
      <div className="carousel-container">
        <button className="carousel-btn left" onClick={anteriorTestimonio}>
          <FaChevronLeft />
        </button>
        <div className="testimonio-wrapper">
          <div className="testimonio">
            <blockquote>{testimonios[indiceActual].texto}</blockquote>
            <div className="testimonio-info">
              <div className="testimonio-stars">
                {[...Array(testimonios[indiceActual].estrellas)].map((_, i) => (
                  <FaStar key={i} style={{ color: "#f5c518" }} />
                ))}
              </div>
              <p className="testimonio-author">
                {testimonios[indiceActual].autor}
              </p>
            </div>
          </div>
        </div>
        <button className="carousel-btn right" onClick={siguienteTestimonio}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonios;
