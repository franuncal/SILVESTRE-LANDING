import "../Banner/Banner.css";
import bannerImg from "../../assets/img/banner1.webp";

const Banner = () => {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${bannerImg})`,
      }}
    >
      <div className="banner-overlay">
        <div className="banner-content">
          <div className="banner-1">
            <h1>SILVESTRE</h1>
          </div>
          <div className="banner-2">
            <h2>Dulce de Leche Artesanal</h2>
            <p>
              Elaborado a partir de nuestra tradicional receta casera, este
              dulce de leche contiene ingredientes 100% naturales y leche de
              tambo propio.
            </p>
            <div className="cta-container">
              <a href="#productos" className="cta-button-b">
                Descubre Más
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
