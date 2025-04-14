import { useState } from "react";
import ButtonDefault from "../template/buttons/ButtonDefault";

const VacationApproval = () => {
  //requisição pra buscar as férias solicitadas aprovação
  // Simulando com dados mockados por enquanto:
  const [feriasSolicitadas, setFeriasSolicitadas] = useState([
    {
      id: 1,
      nome: "João Silva",
      dataInicio: "2025-05-10",
      dataTermino: "2025-05-20",
      status: "pendente",
    },
    {
      id: 2,
      nome: "Maria Oliveira",
      dataInicio: "2025-06-01",
      dataTermino: "2025-06-15",
      status: "pendente",
    },
  ]);

  const handleAprovacao = (id, aprovado) => {
    const motivo = aprovado
      ? "Aprovado pelo RH"
      : prompt("Informe o motivo da reprovação:");

    setFeriasSolicitadas((prev) =>
      prev.map((ferias) =>
        ferias.id === id
          ? { ...ferias, status: aprovado ? "aprovado" : "reprovado", motivo }
          : ferias
      )
    );
  };

  return (
    <div className="d-flex flex-column gap-4">
      {feriasSolicitadas.map((ferias) => (
        <div
          key={ferias.id}
          className="border rounded-3 p-3 d-flex flex-column gap-2"
        >
          <p>
            <strong>Colaborador:</strong> {ferias.nome}
          </p>
          <p>
            <strong>Início:</strong> {ferias.dataInicio}
          </p>
          <p>
            <strong>Término:</strong> {ferias.dataTermino}
          </p>
          <p>
            <strong>Status:</strong> {ferias.status}
          </p>
          {ferias.motivo && (
            <p>
              <strong>Motivo:</strong> {ferias.motivo}
            </p>
          )}
          {ferias.status === "pendente" && (
            <div className="d-flex gap-2">
              <ButtonDefault
                text="Aprovar"
                onClick={() => handleAprovacao(ferias.id, true)}
              />
              <ButtonDefault
                text="Reprovar"
                onClick={() => handleAprovacao(ferias.id, false)}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VacationApproval;
