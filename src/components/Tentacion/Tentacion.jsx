import "../Tentacion/Tentacion.css";
import videoSrc from "../../assets/video/vid1.mp4";

const Tentacion = () => {
  return (
    <section id="tentate">
      <div className="tentate-content">
        <div className="video-container">
          <video autoPlay muted loop className="promo-video">
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta el video.
          </video>
        </div>
        <div className="text-container">
          <h2 className="tentate-title">
            ¿Demasiado tentador para resistirse?
          </h2>
          <p className="tentate-description">
            Sabemos lo difícil que es decirle que no a nuestro dulce de leche
            artesanal. Si ya estás viendo el fondo de tu pote, es el momento
            perfecto para acceder a nuestra tienda online.
            <br />
            <strong>¡Llenemos juntos tus días de</strong> <br />
            <strong>#MomentosSilvestres!</strong>
          </p>
          <div className="cta-buttons-container">
            {/* <a href="#puntos-de-venta" className="cta-button-t">
              Puntos de Venta
            </a> */}
            <a
              href="https://silvestreddl.mitiendanube.com/"
              className="cta-button-t"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tienda Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentacion;
