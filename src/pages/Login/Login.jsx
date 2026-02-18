import "./Login.css";
import { useState } from "react";
import { loginUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(data);

      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      if (res.user.role === "owner") {
        navigate("/dashboard-owner");
      } else {
        navigate("/dashboard-client");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Entrar</h2>

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Entrar</button>
        </form>
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
