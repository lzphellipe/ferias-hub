import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

// const getUser = async (id) => {
//   const data = {
//     id,
//   };
//   try {
//     if (id) {
//       const response = await axios.get(`${baseURL}/user`, data);
//       return response.data;
//     } else {
//       const response = await axios.get(`${baseURL}/user`);
//       return response.data;
//     }
//   } catch (error) {
//     console.error("Erro ao buscar usuário:", error);
//     return null;
//   }
// };

const getUser = async (id) => {
  try {
    if (id) {
      const response = await api.get(`/user/${id}`);
      return response.data;
    } else {
      const response = await api.get("/user");
      return response.data;
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
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

const createVacation = async (data) => {
  try {
    const response = await api.post("/vacations", data);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar viagem:", error);
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
  // createUser,
  // login,
  // createFerias,
  // getFerias,
  // updateFerias,
  createUser,
  createVacation,
  updateVacation,
  api,
};
