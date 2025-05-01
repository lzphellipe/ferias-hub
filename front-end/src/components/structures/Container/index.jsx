import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

export default function Container({ children, title, enableBack = true }) {
  const navigate = useNavigate();
  const handleVoltar = () => {
    navigate(-1);
  };
  return (
    <main className="container mt-5 d-flex flex-column justify-content-center ">
      {enableBack && (
        <header className="container mt-5 d-flex justify-content-center">
          <div className={styles.comeback}>
            <button
              className="btn m-1 text-uppercase text-center shadow-none"
              onClick={handleVoltar}
            >
              Voltar
            </button>
          </div>
          <h1 className="col p-0 h2 font-weight-light my-5 align-itens-center justify-content-center d-flex">
            {title}
          </h1>
        </header>
      )}
      {children}
    </main>
  );
}
