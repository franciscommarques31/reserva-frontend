import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import DashboardOwner from "./pages/DashboardOwner/DashboardOwner";
import DashboardClient from "./pages/DashboardClient/DashboardClient";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/como-funciona" element={<HowItWorks />} />
      <Route path="/dashboard-owner" element={<DashboardOwner />} />
      <Route path="/dashboard-client" element={<DashboardClient />} />
    </Routes>
  );
}
