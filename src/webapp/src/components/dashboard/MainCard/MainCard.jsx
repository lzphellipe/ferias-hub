import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainCard.module.css";

export default function MainCard() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className={`${styles.card} d-flex flex-wrap align-items-end`}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className={`${styles.title} pe-5`}>Dias Disponíveis:</p>
          <div className={styles.circle}>
            <strong className={styles.number}>20</strong>
            <p className={styles.label}>dias</p>
          </div>
        </div>
        <div className="d-flex align-items-center flex-column gap-4">
          <button
            className={styles.button}
            onClick={() => navigate("/agendar")}
          >
            Agendar Férias &gt;
          </button>
          <button
            className={styles.button}
            onClick={() => navigate("/consultar")}
          >
            Consultar Férias &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
