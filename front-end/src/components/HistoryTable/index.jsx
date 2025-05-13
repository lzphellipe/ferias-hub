import React from "react";
import styles from "./style.module.css";
import HistoryTableRow from "./HistoryTableRow";

const HistoryTable = ({ dataSchedule, error }) => {
  if (error) {
    return <p className="text-danger">Erro: {error}</p>;
  }
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Data Início</th>
          <th>Data Fim</th>
          <th>Dias de Férias</th>
          <th>Situação</th>
          <th>Observação</th>
        </tr>
      </thead>
      <tbody>
        {dataSchedule.map((item, i) => (
          <HistoryTableRow key={i} item={item} index={i} />
        ))}
      </tbody>
    </table>
  );
};

export default HistoryTable;
