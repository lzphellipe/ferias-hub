import api from "../utils/api";
import { useState } from "react";
import FormUser from "../components/FormUser";
import Menu from "../components/Menu";
import Container from "../components/structures/Container";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    cpf: "",
    cargo: "",
    dataAdmissao: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post("/user", userData);
      navigate("/dashboard");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      <Menu />
      <Container title="Cadastro de Usuário">
        {error && <span className="text-danger">{error}</span>}
        <FormUser
          userData={userData}
          setUserData={setUserData}
          onSubmit={handleCreate}
          submitText="Cadastrar"
        />
      </Container>
    </>
  );
};
export default CreateUser;
