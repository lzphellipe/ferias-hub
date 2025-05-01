import FormSchedule from "../components/FormSchedule";
import Menu from "../components/Menu";
import Container from "../components/structures/Container";
import { useAuth } from "../hooks/useAuth";
import { createVacation } from "../utils/api";
import { useState } from "react";

export default function Schedule() {
  const [dataInicio, setDataInicio] = useState("");
  const [quantidadeDias, setQuantidadeDias] = useState("");
  const [dataTermino, setDataTermino] = useState("");
  const [error, setError] = useState("");

  const { statusFerias } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!dataInicio || !quantidadeDias) {
      setError("Preencha todos os campos");
      return;
    }
    if (quantidadeDias > statusFerias.diasRestantes) {
      setError("Quantidade de dias indisponível");
      return;
    }
    const data = {
      dataInicio,
      quantidadeDias,
      dataTermino,
    };

    try {
      createVacation(data);
      alert("Férias encaminhada para avaliação");
    } catch (error) {
      console.error("Erro ao criar férias:", error);
      setError("Erro ao agendar férias");
    }
  };

  return (
    <>
      <Menu />
      <Container title="Agendamento de Férias">
        <div className="container d-flex flex-column align-items-center">
          <span className="border border-1 border-dark rounded-3 p-2">
            Total de dias disponivel: {statusFerias.diasRestantes} dias
          </span>
        </div>
        <hr />
        <br />
        <div>
          <FormSchedule
            text="Agendar"
            onSubmit={handleSubmit}
            dataInicio={dataInicio}
            setDataInicio={setDataInicio}
            quantidadeDias={quantidadeDias}
            setQuantidadeDias={setQuantidadeDias}
            dataTermino={dataTermino}
            setDataTermino={setDataTermino}
            error={error}
            qtdDiasDisponiveis={statusFerias.diasRestantes}
          />
        </div>
      </Container>
    </>
  );
}
