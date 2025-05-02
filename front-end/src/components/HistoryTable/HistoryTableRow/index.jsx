import React, { useState } from "react";
import ObservationModal from "./ObservationModal";

const HistoryTableRow = ({ item, index }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const qtdDiasFerias =
    new Date(item.dataFim).getTime() - new Date(item.dataInicio).getTime();

  const formatarData = (data) => {
    const dataObj = new Date(data);
    const dia = dataObj.getDate();
    const mes = dataObj.getMonth() + 1;
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  const dtInicio = formatarData(item.dataInicio);
  const dtFim = formatarData(item.dataFim);
  return (
    <>
      <tr key={index}>
        <td>{dtInicio}</td>
        <td>{dtFim}</td>
        <td>{qtdDiasFerias}</td>
        <td>{item.situacao}</td>
        <td>
          {item.observacao && item.observacao.length > 0 ? (
            <button
              className="btn btn-outline-info btn-sm"
              onClick={handleShowModal}
            >
              Ver Observação
            </button>
          ) : (
            <span>Sem observação</span>
          )}
        </td>
      </tr>
      <ObservationModal
        show={showModal}
        onHide={handleCloseModal}
        observacao={item.observacao}
      />
    </>
  );
};

export default HistoryTableRow;
