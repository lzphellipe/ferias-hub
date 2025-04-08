import React from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./ButtonGoBack.module.css";

export default function ButtonGoBack() {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className={styles.comeback}>
      <button
        className="btn m-1 text-uppercase text-center shadow-none"
        onClick={handleVoltar}
      >
        Voltar
      </button>
    </div>
  );
}
