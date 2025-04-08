import React from "react";

import { historyData } from "./services/historyData";

import styles from "./HistoryTable.module.css";

export default function HistoryTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Data Início</th>
          <th>Data Fim</th>
          <th>Dias de Férias</th>
          <th>Situação</th>
        </tr>
      </thead>
      <tbody>
        {historyData.map((item, i) => (
          <tr key={i}>
            <td>{item.inicio}</td>
            <td>{item.fim}</td>
            <td>{item.dias}</td>
            <td>{item.situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
