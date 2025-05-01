import styles from "./style.module.css";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

export default function HistoryTable() {
  const { ferias } = useAuth().user;
  const [dataSchedule] = useState(ferias || []);

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
        {dataSchedule.map((item, i) => (
          <tr key={i}>
            <td>{item.dataInicio}</td>
            <td>{item.dataFim}</td>
            <td>{item.diasFerias}</td>
            <td>{item.situacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
