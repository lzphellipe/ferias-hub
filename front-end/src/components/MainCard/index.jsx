import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import ButtonDefault from "../structures/ButtonDefault";
import { useAuth } from "../../hooks/useAuth";

export default function MainCard() {
  const { statusFerias } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div
        className={`${styles.card} d-flex flex-wrap align-items-center justify-content-center `}
      >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className={`${styles.title} pe-5`}>Dias Disponíveis:</p>
          <div
            className={`${styles.circle} ${
              statusFerias.status === "urgente"
                ? styles.urgente
                : statusFerias.status === "atencao"
                ? styles.atencao
                : statusFerias.status === "ok"
                ? styles.ok
                : styles.verificar
            }`}
          >
            <strong className={styles.number}>
              {statusFerias.diasRestantes !== null
                ? statusFerias.diasRestantes
                : "--"}
            </strong>
            <p className={styles.label}>dias</p>
          </div>
        </div>
        {statusFerias.diasRestantes > 0 && (
          <>
            <div className="d-flex align-items-center flex-column gap-4">
              <ButtonDefault
                text="Agendar Férias"
                onClick={() => navigate("/agendar")}
              />
              <ButtonDefault
                text="Consultar Férias"
                onClick={() => navigate("/history")}
              />
            </div>
          </>
        )}

        <div className="mt-4 w-100 text-center">
          <p>
            Status: <strong>{statusFerias.status}</strong>
          </p>
          <p>{statusFerias.mensagem}</p>
        </div>
      </div>
    </div>
  );
}
