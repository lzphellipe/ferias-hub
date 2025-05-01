import ButtonSubmit from "../structures/forms/ButtonSubmit";
import FieldUserForm from "../structures/user/FieldUserForm";
import listRoles from "../../utils/listRole";

import styles from "./style.module.css";

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
          value={userData.nome}
          onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
        />
        <FieldUserForm
          field="Email:"
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <FieldUserForm
          field="C.P.F.:"
          type="string"
          value={userData.cpf}
          onChange={(e) => setUserData({ ...userData, cpf: e.target.value })}
        />
        <FieldUserForm
          field="Senha:"
          type="password"
          value={userData.senha}
          onChange={(e) => setUserData({ ...userData, senha: e.target.value })}
        />
        <FieldUserForm
          field="Data de Admissão:"
          type="date"
          value={userData.dataAdmissao}
          onChange={(e) =>
            setUserData({ ...userData, dataAdmissao: e.target.value })
          }
        />
        <FieldUserForm
          field="Situação:"
          type="string"
          value={userData.status}
          onChange={(e) => setUserData({ ...userData, status: e.target.value })}
        />
        <div className="mb-3 d-flex flex-row gap-3 justify-content-center align-items-center">
          <label for="cargo" className="form-label fw-bold">
            Cargo:
          </label>
          <select
            name="cargo"
            id="cargo"
            form={idForm}
            className={`${styles.input} form-control rounded shadow-sm mt-3 w-75 mx-auto`}
            value={userData.cargo}
            onChange={(e) =>
              setUserData({ ...userData, cargo: e.target.value })
            }
          >
            <option value="">Selecione o cargo</option>
            {Object.entries(listRoles).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <ButtonSubmit type="submit" text={submitText} />
      </div>
    </form>
  );
};

export default FormUser;
