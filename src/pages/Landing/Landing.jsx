import "./Landing.css";
import heroDog from "../../assets/hero-dog.jpeg";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">

      <header className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <img src={logo} alt="PatasFelizes" />
          </div>
        </div>

        <div className="navbar-right">
          <button
            className="nav-link"
            onClick={() => navigate("/como-funciona")}
          >
            Como funciona?
          </button>

          <button
            className="nav-user"
            onClick={() => navigate("/register")}
          >
            Entrar
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-left">
          <span className="hero-badge">Marketplace de serviços para cães</span>

          <h1>
            Encontre o melhor <br />
            <span className="highlight-yellow">cuidado</span>{" "}
            <span className="highlight-green">para o seu cão</span>
          </h1>

          <p>
            Conectamos donos de cães a prestadores de serviços de passeio e
            hotel. Encontre profissionais de confiança perto de si.
          </p>

          <button className="cta-button">
            Ver Serviços Disponíveis
          </button>

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
          <div className="hero-image-wrapper">
            <img src={heroDog} alt="Cão feliz" />

            <div className="hero-card">
              <span className="heart">❤</span>
              <div className="hero-card-text">
                <strong>Reserva confirmada!</strong>
                <span>Passeio às 15:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Serviços Disponíveis</h2>
        <p>
          Encontre Pet Sitter e hotéis para cães de confiança na sua área
        </p>

        <div className="services-bar">
          <div className="filters">
            <button className="filter active">Todos</button>
            <button className="filter">Passeios</button>
            <button className="filter">Hotel</button>
          </div>

          <input
            className="search"
            placeholder="Pesquisar por cidade..."
          />
        </div>

        <div className="empty-state">
          <div className="paw">🐾</div>
          <h3>Nenhum serviço encontrado</h3>
          <p>Tente ajustar os filtros ou pesquisa</p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="PatasFelizes" />
            </div>

            <p>
              Somos apaixonados por cães e dedicados a proporcionar os melhores
              passeios e cuidados para o seu melhor amigo.
            </p>

            <div className="socials">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Contactos</h4>
            <p>+351 912 345 678</p>
            <p>info@patasfelizes.pt</p>
            <p>Lisboa, Portugal</p>
          </div>

          <div className="footer-col">
            <h4>Horário</h4>
            <p>Segunda - Sexta: 08:00 - 19:00</p>
            <p>Sábado: 09:00 - 17:00</p>
            <p>Domingo: 10:00 - 14:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Quem cuida do Meu Patudo. Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
