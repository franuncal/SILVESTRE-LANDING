import { FaMapMarkerAlt, FaGoogle } from "react-icons/fa";
import "../PuntosDeVenta/PuntosDeVenta.css";

const PuntosDeVenta = () => {
  const puntos = [
    {
      nombre: "Valerga Supermercado",
      direccion: "Calle 34 Nro. 733 Mercedes, Provincia de Buenos Aires.",
      enlace: "https://maps.app.goo.gl/HDYyXGiUfTEVJ1Fg7",
    },
    {
      nombre: "La Aldea - Dietética",
      direccion: "Almte. Brown 798, B6700 Luján, Provincia de Buenos Aires.",
      enlace: "https://maps.app.goo.gl/Kx4A8T8NPFWfFNFR6",
    },
    {
      nombre: "Tomas Jofré",
      direccion: "Provincia de Buenos Aires",
      enlace: "https://maps.app.goo.gl/wnmLYgyhGvQXs78W7",
    },
  ];

  return (
    <section id="puntos-de-venta">
      <h2>Puntos de Venta</h2>
      <div className="timeline">
        {puntos.map((punto, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <FaMapMarkerAlt /> {/* Usa el ícono de ubicación */}
            </div>
            <div className="timeline-content">
              <h3>{punto.nombre}</h3>
              <p>{punto.direccion}</p>
              <a href={punto.enlace} target="_blank" className="btn-maps">
                <FaGoogle style={{ marginRight: "8px" }} /> Ver en Google Maps{" "}
                {/* Usa el ícono de Google */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PuntosDeVenta;
