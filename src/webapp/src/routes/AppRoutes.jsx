import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import History from "../pages/History";
import Schedule from "../pages/Schedule";
import Background from "../components/template/Background/Background";
import Login from "../pages/Login";
import RHConsult from "../pages/RHConsult";
import ProtectedRoute from "../components/ProtectedRoutes/ProtectedRoute";
import Config from "../pages/Config";
import EditUser from "../pages/EditUser";
import CreateUser from "../pages/CreateUser";

export default function AppRoutes() {
  return (
    <Background>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/agendar"
          element={
            <ProtectedRoute>
              <Schedule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultar"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route
          path="/config"
          element={
            <ProtectedRoute>
              <Config />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consultarUsuarios"
          element={
            <ProtectedRoute>
              <RHConsult />
            </ProtectedRoute>
          }
        />
        <Route
          path="/registrar"
          element={
            <ProtectedRoute>
              <CreateUser />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editar"
          element={
            <ProtectedRoute>
              <EditUser />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Background>
  );
}
