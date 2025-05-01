import FormUser from "../components/FormUser";
import Menu from "../components/Menu";
import Container from "../components/structures/Container";
import Input from "../components/structures/forms/Input";

import { useState } from "react";
import api from "../utils/api";

const EditUser = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const response = await api.get("/user");
    const users = response.data;
    const filtered = users.filter(
      (user) =>
        user.nome.toLowerCase().includes(search.toLowerCase()) ||
        String(user.id) === search
    );
    setResults(filtered);
  };

  const handleSelectUser = (user) => {
    setUserData({ ...user, senha: "" });
    setResults([]);
    setSearch("");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!userData) {
      alert("Selecione um usuário para editar.");
      return;
    }
    try {
      await api.patch(`/user/${userData.id}`, userData);
      alert("Usuário atualizado com sucesso!");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <Menu />
      <Container title="Editar Usuário">
        {!userData && (
          <>
            <label className="form-label fw-bold">Buscar por ID ou nome:</label>
            <div className="d-flex gap-2 mb-3">
              <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                    {user.id} - {user.nome}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {userData && (
          <>
            <FormUser
              userData={userData}
              setUserData={setUserData}
              onSubmit={handleUpdate}
              submitText="Atualizar"
            />
            {error && <span className="text-danger">{error}</span>}
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
