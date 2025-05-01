import { createUser } from "../utils/api";
import { useState } from "react";
import FormUser from "../components/FormUser";
import Menu from "../components/Menu";
import Container from "../components/structures/Container";

const CreateUser = () => {
  const [userData, setUserData] = useState({ nome: "", email: "", senha: "" });

  const handleCreate = (e) => {
    e.preventDefault();
    try {
      createUser(userData);
      alert("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Erro ao criar usuário. Por favor, tente novamente.");
    }
  };
  return (
    <>
      <Menu />
      <Container title="Cadastro de Usuário">
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
