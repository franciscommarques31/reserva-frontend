/**
 * SidebarOwner
 * Responsável apenas pela navegação lateral do dashboard do owner
 */
export default function SidebarOwner({
  activeView,
  onChangeView,
  onLogout,
}) {
  return (
    <aside className="sidebar">
      <h2>Área da Empresa</h2>

      <button
        onClick={() => onChangeView("dashboard")}
        disabled={activeView === "dashboard"}
      >
        📊 Resumo
      </button>

      <button
        onClick={() => onChangeView("services")}
        disabled={activeView === "services"}
      >
        📦 Serviços
      </button>

      <button disabled>⚙️ Perfil</button>

      <button className="logout" onClick={onLogout}>
        Sair
      </button>
    </aside>
  );
}