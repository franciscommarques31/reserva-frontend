import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./DashboardOwner.css";
import ServicesOwner from "./ServicesOwner";
import Calendar from "./components/Calendar";
import SidebarOwner from "./components/SidebarOwner";

export default function DashboardOwner() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");

  // Modal do dia
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

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

  const handleSelectDay = (day, date) => {
    setSelectedDay(day);
    setSelectedDate(date);
  };

  if (!user) return null;

  return (
    <div className="dashboard-owner">
      {/* SIDEBAR */}
      <SidebarOwner
        activeView={activeView}
        onChangeView={setActiveView}
        onLogout={handleLogout}
      />

      {/* CONTEÚDO */}
      <main className="content">
        {activeView === "dashboard" && (
          <>
            <h1>Bem-vindo, {user.name} {user.surname}</h1>

            {/* CALENDÁRIO */}
            <Calendar onSelectDay={handleSelectDay} />

            {/* CARDS */}
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

            {/* PRÓXIMOS PASSOS */}
            <section className="section">
              <h2>Próximos passos</h2>
              <ul>
                <li>Criar o primeiro serviço</li>
                <li>Definir horários</li>
                <li>Começar a receber reservas</li>
              </ul>
            </section>
          </>
        )}

        {activeView === "services" && <ServicesOwner />}
      </main>

      {/* MODAL DO DIA */}
      {selectedDay && selectedDate && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedDay(null)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>
              {selectedDay}{" "}
              {selectedDate.toLocaleDateString("pt-PT", {
                month: "long",
                year: "numeric",
              })}
            </h2>

            <p>Sem reservas para este dia.</p>

            <div className="modal-actions">
              <button onClick={() => setSelectedDay(null)}>
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}