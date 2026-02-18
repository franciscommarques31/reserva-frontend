import "./HowItWorks.css";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <>
      <Navbar />

      <div className="how-container">
        <h1>Como Funciona?</h1>
        <p className="how-subtitle">
          Simples, rápido e seguro para si e para o seu patudo
        </p>

        <div className="how-cards">
          <div className="how-card">
            <span className="how-step">1</span>
            <h3>Procurar o serviço desejado</h3>
            <p>
              Explore os serviços disponíveis perto de si e escolha o que melhor
              se adapta às suas necessidades.
            </p>
          </div>

          <div className="how-card">
            <span className="how-step">2</span>
            <h3>Fazer registo ou login</h3>
            <p>
              Crie uma conta ou entre com os seus dados para poder avançar com a
              reserva.
            </p>
          </div>

          <div className="how-card">
            <span className="how-step">3</span>
            <h3>Reservar dia e hora</h3>
            <p>
              Escolha a data e horário pretendidos para o serviço selecionado.
            </p>
          </div>

          <div className="how-card">
            <span className="how-step">4</span>
            <h3>Aguardar confirmação</h3>
            <p>
              A empresa ou prestador irá confirmar a sua reserva o mais rápido
              possível.
            </p>
          </div>

          <div className="how-card">
            <span className="how-step">5</span>
            <h3>Pagar o serviço</h3>
            <p>
              Após a confirmação, finalize o pagamento de forma segura através
              da plataforma.
            </p>
          </div>
        </div>
      </div>

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
    </>
  );
}
