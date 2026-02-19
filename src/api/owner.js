const API_URL = `${import.meta.env.VITE_API_URL}/api`;

function authHeaders() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function getOwnerBusinesses() {
  const res = await fetch(`${API_URL}/business`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Erro ao carregar negócio");
  return res.json();
}

export async function getOwnerReservations() {
  const res = await fetch(`${API_URL}/reservations`, {
    headers: authHeaders(),
  });

  if (!res.ok) throw new Error("Erro ao carregar reservas");
  return res.json();
}
