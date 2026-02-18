import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logo} alt="PatasFelizes" />
      </div>

      <div className="navbar-right">
        <button className="nav-link" onClick={() => navigate("/como-funciona")}>
          Como funciona?
        </button>

        <button className="nav-user" onClick={() => navigate("/register")}>
          Entrar
        </button>
      </div>
    </header>
  );
}
