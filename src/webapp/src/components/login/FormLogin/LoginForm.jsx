import React from "react";
import { faCode, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm = ({
  userCode,
  password,
  onCodeChange,
  onPasswordChange,
  onSubmit,
  error,
}) => {
  const user = <FontAwesomeIcon icon={faCode} />;
  const passIcon = <FontAwesomeIcon icon={faShieldHalved} />;

  return (
    <div className="justify-content-center align-items-center px-3">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4 fw-bold">Acesso do Usuario</h2>

        <form onSubmit={onSubmit}>
          <div className="mb-3 input-group rounded-pill bg-light">
            <span className="input-group-text bg-transparent border-0">
              {user}
            </span>
            <input
              type="number"
              className="form-control border-0 bg-transparent"
              placeholder="Codigo de acesso"
              value={userCode}
              onChange={onCodeChange}
            />
          </div>

          <div className="mb-3 input-group rounded-pill bg-light">
            <span className="input-group-text bg-transparent border-0">
              {passIcon}
            </span>
            <input
              type="password"
              className="form-control border-0 bg-transparent"
              placeholder="Senha de acesso"
              value={password}
              onChange={onPasswordChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-success w-100 rounded-pill fw-semibold"
          >
            ACESSAR
          </button>
          {error && <p className="text-danger">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
