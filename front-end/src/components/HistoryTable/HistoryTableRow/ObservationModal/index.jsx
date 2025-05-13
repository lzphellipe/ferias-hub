import React from "react";
import { Modal, Button } from "react-bootstrap";

const ObservationModal = ({ show, onHide, observacao }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Observação</Modal.Title>
      </Modal.Header>
      <Modal.Body>{observacao || "Nenhuma observação disponível."}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ObservationModal;
