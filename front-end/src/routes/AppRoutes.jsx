import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Schedule from "../pages/Schedule";
import Login from "../pages/Login";
import RHConsult from "../pages/RHConsult";
import ProtectRoute from "../components/structures/ProtectRoute";
import Config from "../pages/Config";
import EditUser from "../pages/EditUser";
import CreateUser from "../pages/CreateUser";

export default function AppRoutes() {
  return (
    <div className="vw-100 mw-100 min-vh-100 mh-100">
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
            </ProtectRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />
        <Route
          path="/schedule"
          element={
            <ProtectRoute>
              <Schedule />
            </ProtectRoute>
          }
        />
        <Route
          path="/consult"
          element={
            <ProtectRoute>
              <History />
            </ProtectRoute>
          }
        />
        <Route
          path="/config"
          element={
            <ProtectRoute>
              <Config />
            </ProtectRoute>
          }
        />
        <Route
          path="/consultUser"
          element={
            <ProtectRoute>
              <RHConsult />
            </ProtectRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectRoute>
              <CreateUser />
            </ProtectRoute>
          }
        />
        <Route
          path="/edit"
          element={
            <ProtectRoute>
              <EditUser />
            </ProtectRoute>
          }
        />
      </Routes>
    </div>
  );
}
