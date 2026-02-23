import { useState } from "react";
import "./ServicesOwner.css";

export default function CreateServiceModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    serviceType: "passeio",
    walkType: "individual",
    duration: 60,
    acceptedPetSizes: [],
    basePrice: "",
    serviceArea: ""
  });

  const togglePetSize = (size) => {
    setForm((prev) => ({
      ...prev,
      acceptedPetSizes: prev.acceptedPetSizes.includes(size)
        ? prev.acceptedPetSizes.filter(s => s !== size)
        : [...prev.acceptedPetSizes, size]
    }));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    await fetch(`${import.meta.env.VITE_API_URL}/api/services`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(form)
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Criar Serviço</h3>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Nome do serviço"
            onChange={handleChange}
            required
          />

          <select name="serviceType" onChange={handleChange}>
            <option value="passeio">Passeio</option>
            <option value="hotel">Hotel</option>
          </select>

          <select name="walkType" onChange={handleChange}>
            <option value="individual">Individual</option>
            <option value="grupo">Grupo</option>
          </select>

          <input
            name="duration"
            type="number"
            placeholder="Duração (minutos)"
            onChange={handleChange}
            required
          />

          <input
            name="serviceArea"
            placeholder="Zona de atuação"
            onChange={handleChange}
            required
          />

          <input
            name="basePrice"
            type="number"
            placeholder="Preço base (€)"
            onChange={handleChange}
            required
          />

          <div className="checkbox-group">
            <label>
              <input type="checkbox" onChange={() => togglePetSize("pequeno")} />
              Pequeno
            </label>
            <label>
              <input type="checkbox" onChange={() => togglePetSize("medio")} />
              Médio
            </label>
            <label>
              <input type="checkbox" onChange={() => togglePetSize("grande")} />
              Grande
            </label>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit">
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
