import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainCard.module.css";
import ButtonDefault from "../../template/buttons/ButtonDefault";
import useFeriasStatus from "../../../hooks/useFeriasStatus";
import { useFerias } from "../../../hooks/useFerias";

export default function MainCard({ user }) {
  const navigate = useNavigate();
  const statusFerias = useFeriasStatus(user);
  const { setStatusFerias } = useFerias();

  useEffect(() => {
    if (statusFerias) {
      setStatusFerias(statusFerias);
    }
  }, [statusFerias]);

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
                onClick={() => navigate("/consultar")}
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
