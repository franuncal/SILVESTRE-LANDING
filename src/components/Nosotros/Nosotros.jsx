import "../Nosotros/Nosotros.css";
import imgNos from "../../assets/img/nos2.webp";

const Nosotros = () => {
  return (
    <section className="nosotros" id="nosotros">
      <div className="container">
        <div className="text-title">
          <h2>Bienvenidos a SILVESTRE</h2>
          <div className="text-description">
            <p>
              Somos una familia <strong>Mercedina</strong> , apasionada por la
              producción y dedicada a la elaboración del{" "}
              <strong>DULCE de LECHE</strong> mas exquisito, siguiendo una
              receta tradicional de ha pasado de generación en generación.{" "}
              <br /> El establecimiento se encuentra en la cuenca lechera{" "}
              <strong>Suipacha-Mercedes</strong>, en el corazón de la provincia
              de Buenos Aires, donde nuestros animales se alimentan de manera
              natural permitiendo la obtencion de leche de excelente calidad
              para el desarrollo de nuestros producto. <br /> Nuestro{" "}
              <strong>dulce de leche 100% artesanal</strong> realizado con
              dedicación y amor, es una experiencia única de sabores, balance
              entre <strong>cremosidad y dulzura</strong> , siendo también un
              producto <strong>libre de gluten</strong>.
            </p>
          </div>
        </div>
        <div className="nosotros-img">
          <img src={imgNos} alt="Nuestra historia - Dulce de Leche Silvestre" />
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
