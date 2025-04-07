import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Schedule from "../pages/Schedule";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agendar" element={<Schedule />} />
        <Route path="/consultar" element={<History />} />
      </Routes>
    </Router>
  );
}
