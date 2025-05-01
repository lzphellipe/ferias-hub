import axios from "axios";
import { createContext, useState } from "react";
import { useJwt } from "react-jwt";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);
  const [statusFerias, setStatusFerias] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { decodedToken } = useJwt(token);

  const login = async (userCode, password) => {
    const baseURL = "http://localhost:8080";
    const data = {
      cod_usuario: userCode,
      senha: password,
    };

    try {
      const response = await axios.post(`${baseURL}/auth/login`, data);
      setToken(response.data.token);

      const id = decodedToken.sub;

      const responseUser = await axios.get(`${baseURL}/user?id=${id}`);
      setUser(responseUser.data);

      const statusFeria = await axios.get(`${baseURL}/user/${id}/status`);
      setStatusFerias(statusFeria.data);

      setIsAuthenticated(true);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("statusFerias", JSON.stringify(statusFerias));

      return { success: true, message: "Login bem-sucedido" };
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return { success: false, message: "Erro ao fazer login" };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user, statusFerias, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
