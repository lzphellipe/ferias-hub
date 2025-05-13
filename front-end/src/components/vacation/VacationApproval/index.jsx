import { useState, useEffect } from "react";
import ButtonDefault from "../../structures/ButtonDefault";
import api from "../../../utils/api";

const VacationApproval = () => {
  const [feriasSolicitadas, setFeriasSolicitadas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarFeriasAprovadas = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/ferias?status=PENDENTE`);
        setFeriasSolicitadas(response.data);
        setError(null);
      } catch (err) {
        setError(err?.response?.data?.message || "Erro ao buscar as férias.");
      } finally {
        setLoading(false);
      }
    };
    buscarFeriasAprovadas();
  }, []);

  // useEffect(() => {
  //   console.log(feriasSolicitadas);
  // }, [feriasSolicitadas]);

  const handleAprovacao = (id, status) => {
    try {
      if (status) {
        const motivo = prompt("Informe o motivo da aprovação:");
        if (motivo.length > 0) {
          api.patch(`/ferias/${id}`, {
            situacao: "APROVADO",
            observacao: motivo,
          });
        } else {
          alert("Motivo de aprovação não pode ser vazio");
        }
      } else {
        const motivo = prompt("Informe o motivo da reprovação:");
        if (motivo.length > 0) {
          api.patch(`/ferias/${id}`, {
            situacao: "REPROVADO",
            observacao: motivo,
          });
        } else {
          alert("Motivo de reprovação não pode ser vazio");
        }
      }
      feriasSolicitadas.splice(
        feriasSolicitadas.findIndex((ferias) => ferias.id === id),
        1
      );
    } catch (error) {
      setError(error);
    }
  };

  if (loading) {
    return <p>Carregando férias...</p>;
  }

  if (error) {
    return <p className="text-danger">Erro: {error}</p>;
  }
  return (
    <div className="d-flex flex-column gap-4">
      {feriasSolicitadas.length === 0 ? (
        <p>Nenhuma férias pendente neste mês.</p>
      ) : (
        feriasSolicitadas.map((ferias) => (
          <div
            key={ferias.id}
            className="border rounded-3 p-3 d-flex flex-column gap-2"
          >
            <p>
              <strong>Colaborador:</strong> {ferias.nomeUsuario}
            </p>
            <p>
              <strong>Início:</strong> {ferias.dataInicio}
            </p>
            <p>
              <strong>Término:</strong> {ferias.dataFim}
            </p>
            <p>
              <strong>Status:</strong> {ferias.situacao}
            </p>
            {ferias.motivo && (
              <p>
                <strong>Motivo:</strong> {ferias.motivo}
              </p>
            )}
            {ferias.situacao === "PENDENTE" && (
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
        ))
      )}
    </div>
  );
};

export default VacationApproval;
