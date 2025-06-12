import "../Productos/Productos.css";
// Importar imagenes
import img1 from "../../assets/img/pot1kg.webp";
import img2 from "../../assets/img/pot5kg.webp";
// import img3 from "../../assets/img/pack1.webp";
// import img4 from "../../assets/img/pack3.webp";

const productos = [
  {
    id: 1,
    img: img1,
    alt: "Dulce de leche 980gr",
    nombre: "Dulce de Leche 1 kg",
    // precio: "$9.000",
    link: "https://tienda.pecanesmercedinos.com.ar/productos/dulce-de-leche-artesanal-silvestre/",
  },
  {
    id: 2,
    img: img2,
    alt: "Dulce de leche 480gr",
    nombre: "Dulce de Leche 500 gr",
    // precio: "$5.500",
    link: "https://tienda.pecanesmercedinos.com.ar/productos/dulce-de-leche-artesanal-silvestre/",
  },
  // {
  //   id: 3,
  //   img: img3,
  //   alt: "Pack Dulce de Leche 480gr",
  //   nombre: "Dulce de Leche 500 gr | Pack x6",
  //   // precio: "$31.200",
  //   link: "https://tienda.pecanesmercedinos.com.ar/productos/dulce-de-leche-artesanal-silvestre/",
  // },
  // {
  //   id: 4,
  //   img: img4,
  //   alt: "Pack Dulce de Leche 1kg",
  //   nombre: "Dulce de Leche 1 kg | Pack x6",
  //   // precio: "$50.000",
  //   link: "https://tienda.pecanesmercedinos.com.ar/productos/dulce-de-leche-artesanal-silvestre/",
  // },
];

const Productos = () => {
  return (
    <section id="productos" className="section">
      <h2>Nuestros Productos</h2>
      <div className="productos-container">
        {productos.map((producto) => (
          <div key={producto.id} className="product">
            <img src={producto.img} alt={producto.alt} />
            <h3>{producto.nombre}</h3>
            {/* <p className="price">{producto.precio}</p> */}
            <a
              href={producto.link}
              target="_blank"
              className="cta-button-p"
              rel="noopener noreferrer"
            >
              Ir a la Tienda
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Productos;
