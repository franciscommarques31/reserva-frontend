import "./Landing.css";
import heroDog from "../../assets/hero-dog.jpeg";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Landing() {
  return (
    <div className="landing">
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">Marketplace de serviços para cães</span>

          <h1>
            Encontre o melhor <br />
            <span className="highlight-yellow">cuidado</span>{" "}
            <span className="highlight-green">para o seu cão</span>
          </h1>

          <p>
            Conectamos donos de cães a prestadores de serviços de passeio e hotel.
          </p>

          <button className="cta-button">Ver Serviços Disponíveis</button>

          <div className="hero-stats">
            <div>
              <strong>100+</strong>
              <span>Prestadores</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>Reservas</span>
            </div>
            <div>
              <strong>4.9</strong>
              <span>Avaliação</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroDog} alt="Cão feliz" />
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo} alt="PatasFelizes" />
            <p>
              Somos apaixonados por cães e dedicados a proporcionar os melhores
              cuidados.
            </p>

            <div className="socials">
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Quem cuida do Meu Patudo
        </div>
      </footer>
    </div>
  );
}
