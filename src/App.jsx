import Navbar from "./components/Navbar/Header";
import Banner from "./components/Banner/Banner";
import Nosotros from "./components/Nosotros/Nosotros";
import Productos from "./components/Productos/Productos";
import Tentacion from "./components/Tentacion/Tentacion";
import Procesos from "./components/Procesos/Procesos";
import Testimonios from "./components/Testimonios/Testimonios";
import Footer from "./components/Footer/Footer";
import "../src/App.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Nosotros />
      <Productos />
      <Tentacion />
      <Procesos />
      <Testimonios />
      <Footer />
    </>
  );
}

export default App;
