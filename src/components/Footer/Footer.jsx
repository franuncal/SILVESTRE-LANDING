import "../Footer/Footer.css";

import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contáctanos</h4>
          <p>
            <a
              href="https://wa.me/5492324581612?text=👋Hola%20Silvestre!%20Les%20escribo%20para%20recibir%20más%20info%20de%20su%20producto!"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <FaWhatsapp /> 2324581612
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="tel:+542324581612"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              2324581612
            </a>
          </p>
          <p>
            📧{" "}
            <a
              href="mailto:silvestreddl@gmail.com"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              silvestreddl@gmail.com
            </a>
          </p>
          <p>📍 Suipacha, Buenos Aires. Argentina</p>
        </div>
        <div className="footer-column">
          <h4>Síguenos en Redes</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/silvestre.ddl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
