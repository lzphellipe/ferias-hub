import axios from "axios";
import { createContext, useState } from "react";
//import {login} from "../utils/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const loginAPI = async (data) => {
  //   try {
  //     const response = await login(data);
  //     if (response.success) {
  //       setUser(response.user);
  //       setIsAuthenticated(true);
  //       localStorage.setItem("user", JSON.stringify(response.user));
  //     }
  //   } catch (error) {
  //     return {
  //       success: false,
  //       message: "Usuário não encontrado",
  //       originalMessage: error.message,
  //     };
  //   }
  // }

  const login = async (userCode, password) => {
    try {
      const response = await axios.get(
        `http://localhost:8001/users/${userCode}`
      );
      const userData = response.data;

      if (!userData) {
        return { success: false, message: "Usuário não encontrado" };
      }

      if (userData.senha === password) {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, message: "Senha incorreta" };
      }
    } catch (error) {
      return {
        success: false,
        message: "Usuário não encontrado",
        originalMessage: error.message,
      };
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
