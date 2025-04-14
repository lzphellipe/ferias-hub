import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8001",
});

const getUser = async (id) => {
  try {
    if (id) {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } else {
      const response = await api.get("/users");
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return null;
  }
};

const updateUser = async (id, data) => {
  try {
    const { email, senha, name, cpf } = data;
    const dataToSend = {
      name,
      email,
      senha,
      cpf,
    };
    const response = await api.put(`/users/${id}`, dataToSend);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    return null;
  }
};

const createUser = async (data) => {
  try {
    const response = await api.post("/users", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    return null;
  }
};

const login = async (data) => {
  try {
    const response = await api.post("/login", data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
};

const createVacation = async (data) => {
  try {
    const response = await api.post("/vacations", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar viagem:", error);
    return null;
  }
};

const getVacation = async (id) => {
  try {
    if (id) {
      const response = await api.get(`/vacations/${id}`);
      return response.data;
    } else {
      const response = await api.get("/vacations");
      return response.data;
    }
  } catch (error) {
    console.log("Erro ao buscar viagem:", error);
    return null;
  }
};

const updateVacation = async (id, data) => {
  try {
    const response = await api.put(`/vacations/${id}`, data);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar viagem:", error);
    return null;
  }
};

export {
  getUser,
  updateUser,
  createUser,
  login,
  createVacation,
  getVacation,
  updateVacation,
  api,
};
