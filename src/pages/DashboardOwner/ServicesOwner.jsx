import { useState } from "react";
import CreateServiceModal from "./CreateServiceModal";
import "./ServicesOwner.css";

export default function ServicesOwner() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="services-owner">
      <div className="services-header">
        <h2>Serviços</h2>

        <button onClick={() => setShowModal(true)}>
          + Criar Serviço
        </button>
      </div>

      <div className="services-empty">
        <p>Ainda não tem serviços criados.</p>
      </div>

      {showModal && (
        <CreateServiceModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
