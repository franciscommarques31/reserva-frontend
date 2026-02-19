import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import DashboardOwner from "./pages/DashboardOwner/DashboardOwner";
import DashboardClient from "./pages/DashboardClient/DashboardClient";

import ProtectedRoute from "./components/ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* PÚBLICAS */}
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/como-funciona" element={<HowItWorks />} />

      {/* DASHBOARD OWNER */}
      <Route
        path="/dashboard-owner"
        element={
          <ProtectedRoute role="owner">
            <DashboardOwner />
          </ProtectedRoute>
        }
      />

      {/* DASHBOARD CLIENT */}
      <Route
        path="/dashboard-client"
        element={
          <ProtectedRoute role="client">
            <DashboardClient />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
