import { useState } from "react";
import UserForm from "../components/user/UserForm";
import Container from "../components/template/structures/Container/Container";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import Menu from "../components/Menu";
import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import { createUser } from "../utils/api";

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
      <Container>
        <ButtonGoBack />
        <SectionHeader>
          <SectionTitle title="Cadastrar Novo Usuário" />
        </SectionHeader>
        <UserForm
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
