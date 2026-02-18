import "./Register.css";
import { useState } from "react";
import { registerUser } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: "client",
    companyName: "",
    companyLocation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser(form);
      navigate("/login");
    } catch (err) {
      setError(err.message || "Erro ao criar conta");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <form className="auth-card" onSubmit={handleSubmit}>
          <h2>Criar Conta</h2>

          {error && <p className="auth-error">{error}</p>}

          <select name="role" value={form.role} onChange={handleChange}>
            <option value="client">Cliente</option>
            <option value="owner">Empresa</option>
          </select>

          <input name="name" placeholder="Nome" onChange={handleChange} required />
          <input name="surname" placeholder="Apelido" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" onChange={handleChange} required />

          {form.role === "owner" && (
            <>
              <input name="companyName" placeholder="Nome da empresa" onChange={handleChange} required />
              <input name="companyLocation" placeholder="Localização" onChange={handleChange} required />
            </>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "A criar conta..." : "Criar Conta"}
          </button>

          <div className="auth-footer">
            <span>Já tens conta?</span>
            <button
              type="button"
              className="link-button"
              onClick={() => navigate("/login")}
            >
              Entrar
            </button>
          </div>
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
