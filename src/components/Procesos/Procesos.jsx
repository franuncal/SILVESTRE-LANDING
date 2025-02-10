import { FaSeedling, FaFire, FaCogs } from "react-icons/fa";
import "../Procesos/Procesos.css";

const pasos = [
  {
    id: 1,
    icono: <FaSeedling />,
    titulo: "Selección de Ingredientes",
    descripcion:
      "Seleccionamos los mejores ingredientes para garantizar la mejor calidad.",
  },
  {
    id: 2,
    icono: <FaFire />,
    titulo: "Cocción a Fuego Lento",
    descripcion:
      "La magia de la cocción lenta para alcanzar la textura perfecta.",
  },
  {
    id: 3,
    icono: <FaCogs />,
    titulo: "Envasado",
    descripcion:
      "El dulce de leche se envasa cuidadosamente para mantener su frescura.",
  },
];

const Proceso = () => {
  return (
    <section id="proceso" className="section">
      <h2>Proceso de Elaboración</h2>
      <p>
        Descubre el arte detrás de nuestro dulce de leche, un proceso lleno de
        tradición y dedicación.
      </p>
      <div className="proceso-steps">
        {pasos.map((paso) => (
          <div key={paso.id} className="step">
            <div className="step-icon">{paso.icono}</div>
            <h3 className="step-icon-h3">{paso.titulo}</h3>
            <p className="step-icon-p">{paso.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proceso;
