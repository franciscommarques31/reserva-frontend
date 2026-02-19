import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardOwner.css";

export default function DashboardOwner() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (!storedUser || !token) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(storedUser);

    if (parsedUser.role !== "owner") {
      navigate("/dashboard-client");
      return;
    }

    setUser(parsedUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) return null;

  return (
    <div className="dashboard-owner">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2>Área da Empresa</h2>

        <button>📦 Serviços</button>
        <button>📅 Reservas</button>
        <button>⚙️ Perfil</button>

        <button className="logout" onClick={handleLogout}>
          Sair
        </button>
      </aside>

      {/* CONTEÚDO */}
      <main className="content">
        <h1>Bem-vindo, {user.name}</h1>

        <div className="cards">
          <div className="card">
            <h3>Serviços</h3>
            <p>0 registados</p>
          </div>

          <div className="card">
            <h3>Reservas</h3>
            <p>0 pendentes</p>
          </div>

          <div className="card">
            <h3>Avaliação</h3>
            <p>—</p>
          </div>
        </div>

        <section className="section">
          <h2>Próximos passos</h2>
          <ul>
            <li>Criar o primeiro serviço</li>
            <li>Definir horários</li>
            <li>Começar a receber reservas</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
