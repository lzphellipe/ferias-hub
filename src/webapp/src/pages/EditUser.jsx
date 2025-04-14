import { useState } from "react";
import UserForm from "../components/user/UserForm";
import Container from "../components/template/structures/Container/Container";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import Menu from "../components/Menu";
import Input from "../components/template/forms/Input/Input";
import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";

import { getUser, updateUser } from "../utils/api";

const EditUser = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    const users = await getUser();
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        String(user.id) === search
    );
    setResults(filtered);
  };

  const handleSelectUser = (user) => {
    setUserData({ ...user, senha: "" });
    setResults([]);
    setSearch("");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!userData) {
      alert("Selecione um usuário para editar.");
      return;
    }
    try {
      updateUser(userData.id, userData);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      alert("Erro ao atualizar usuário. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <Menu />
      <Container>
        <ButtonGoBack />
        <SectionHeader>
          <SectionTitle title="Editar Usuário" />
        </SectionHeader>

        {!userData && (
          <>
            <label className="form-label fw-bold">Buscar por ID ou nome:</label>
            <div className="d-flex gap-2 mb-3">
              <Input
                type="text"
                value={search}
                onchange={(e) => setSearch(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-primary"
              >
                Buscar
              </button>
            </div>

            {results.length > 0 && (
              <ul className="list-group mb-4">
                {results.map((user) => (
                  <li
                    key={user.id}
                    className="list-group-item list-group-item-action"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleSelectUser(user)}
                  >
                    {user.id} - {user.name} ({user.email})
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {userData && (
          <>
            <UserForm
              userData={userData}
              setUserData={setUserData}
              onSubmit={handleUpdate}
              submitText="Atualizar"
            />
            <button
              onClick={() => setUserData(null)}
              className="btn btn-link mt-3"
            >
              Voltar para busca
            </button>
          </>
        )}
      </Container>
    </>
  );
};

export default EditUser;
