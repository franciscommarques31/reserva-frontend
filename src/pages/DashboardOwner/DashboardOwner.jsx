import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getOwnerBusinesses, getOwnerReservations } from "../../api/owner";

export default function DashboardOwner() {
  const [businesses, setBusinesses] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const biz = await getOwnerBusinesses();
        const res = await getOwnerReservations();
        setBusinesses(biz);
        setReservations(res);
      } catch (err) {
        alert(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar />
        <p style={{ padding: 40 }}>A carregar dashboard...</p>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div style={{ padding: 40 }}>
        <h1>Dashboard da Empresa</h1>

        {/* NEGÓCIO */}
        <section style={{ marginTop: 30 }}>
          <h2>O meu negócio</h2>
          {businesses.map((b) => (
            <div key={b._id} style={{ marginTop: 10 }}>
              <strong>{b.name}</strong> — {b.location}
            </div>
          ))}
        </section>

        {/* RESERVAS */}
        <section style={{ marginTop: 40 }}>
          <h2>Reservas recebidas</h2>

          {reservations.length === 0 && <p>Sem reservas.</p>}

          {reservations.map((r) => (
            <div
              key={r._id}
              style={{
                marginTop: 12,
                padding: 12,
                border: "1px solid #e5e7eb",
                borderRadius: 10,
              }}
            >
              <p>
                <strong>Cliente:</strong> {r.customerName}
              </p>
              <p>
                <strong>Serviço:</strong> {r.service.name}
              </p>
              <p>
                <strong>Data:</strong>{" "}
                {new Date(r.date).toLocaleString()}
              </p>
              <p>
                <strong>Estado:</strong> {r.status}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
