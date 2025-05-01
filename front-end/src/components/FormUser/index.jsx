import ButtonSubmit from "../structures/forms/ButtonSubmit";
import FieldUserForm from "../structures/user/FieldUserForm";

const FormUser = ({ userData, setUserData, onSubmit, submitText, idForm }) => {
  return (
    <form onSubmit={onSubmit} id={idForm}>
      <div className="container d-flex flex-column gap-3">
        {userData.id && (
          <div className="mb-3 flex-row justify-content-center align-items-center gap-3">
            <label className="form-label fw-bold">ID:</label>
            <label className=" ">{userData.id}</label>
          </div>
        )}
        <FieldUserForm
          field="Nome:"
          type="text"
          value={userData.name}
          onchange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <FieldUserForm
          field="Email:"
          type="email"
          value={userData.email}
          onchange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <FieldUserForm
          field="C.P.F.:"
          type="string"
          value={userData.cpf}
          onchange={(e) => setUserData({ ...userData, cpf: e.target.value })}
        />
        <FieldUserForm
          field="Senha:"
          type="password"
          value={userData.senha}
          onchange={(e) => setUserData({ ...userData, senha: e.target.value })}
        />
        <label for="role">Cargo:</label>
        <select name="role" id="role" form={idForm}>
          <option value="admin">Administrador</option>
          <option value="user">Usuário</option>
        </select>
        <ButtonSubmit type="submit" text={submitText} />
      </div>
    </form>
  );
};

export default FormUser;
