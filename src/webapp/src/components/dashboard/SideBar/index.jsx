import { useRef } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ isOpen, onClose }) => {
  const offcanvasRef = useRef();

  const user = localStorage.getItem("user");
  const role = user ? JSON.parse(user).role : null;

  return (
    <div
      className={`offcanvas offcanvas-start ${isOpen ? "show" : ""}`}
      style={{
        visibility: isOpen ? "visible" : "hidden",
        minWidth: "fit-content",
        width: "20%",
        maxWidth: "80%",
        transition: "visibility 0.3s ease",
        padding: "1rem 1.5rem",
      }}
      ref={offcanvasRef}
    >
      {/* Menu principal */}
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">Ferias</h5>
        <button
          type="button"
          className="btn-close text-reset"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
      <div className="offcanvas-body">
        <ul className="list-unstyled">
          <li>
            <Link
              to="/dashboard"
              className="btn btn-outline-success w-100 mb-2"
              onClick={onClose}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/agendar"
              className="btn btn-outline-success w-100 mb-2"
              onClick={onClose}
            >
              Agendar
            </Link>
          </li>

          <li>
            <Link
              to="/consultar"
              className="btn btn-outline-success w-100 mb-2"
              onClick={onClose}
            >
              Consultar
            </Link>
          </li>
          {role == 1 && (
            <li>
              <Link
                to="/consultarUsuarios"
                className="btn btn-outline-success w-100 mb-2"
                onClick={onClose}
              >
                Consultar - RH
              </Link>
            </li>
          )}
        </ul>
        {/* Se usuario RH, poder cadastrar usuarios */}
        {role == 1 && (
          <>
            <div>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Usuarios</h5>
              </div>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/registrar"
                    className="btn btn-outline-success w-100 mb-2"
                    onClick={onClose}
                  >
                    Cadastar
                  </Link>
                </li>
                <li>
                  <Link
                    to="/editar"
                    className="btn btn-outline-success w-100 mb-2"
                    onClick={onClose}
                  >
                    Alterar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="offcanvas-header">
                <h5 className="offcanvas-title">Configuração</h5>
              </div>

              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/config"
                    className="btn btn-outline-success w-100 mb-2"
                    onClick={onClose}
                  >
                    Configurar
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        {/* Opção de sair */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Sair</h5>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <button
                className="btn btn-outline-success w-100 mb-2 hover:bg-danger"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Sair
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
