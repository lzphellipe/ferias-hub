import Input from "../template/forms/Input/Input";
import ButtonSubmit from "../template/buttons/ButtonSubmit/ButtonSubmit";
import FieldUserForm from "./FieldUserFrom";

const UserForm = ({ userData, setUserData, onSubmit, submitText }) => {
  return (
    <form onSubmit={onSubmit}>
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
        <ButtonSubmit type="submit" text={submitText} />
      </div>
    </form>
  );
};

export default UserForm;
