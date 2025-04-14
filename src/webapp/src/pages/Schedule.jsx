import { useState } from "react";
import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import ButtonSubmit from "../components/template/buttons/ButtonSubmit/ButtonSubmit";
import Form from "../components/template/forms/Form/Form";
import Input from "../components/template/forms/Input/Input";
import Container from "../components/template/structures/Container/Container";
import Footer from "../components/template/structures/Footer/Footer";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import ScheduleForm from "../components/schedule/Form";
import Menu from "../components/Menu";
import { useFerias } from "../hooks/useFerias";
import { createVacation } from "../utils/api";

export default function Schedule() {
  const { statusFerias } = useFerias();

  const [dataInicio, setDataInicio] = useState("");
  const [quantidadeDias, setQuantidadeDias] = useState("");
  const [dataTermino, setDataTermino] = useState("");
  const [error, setError] = useState("");

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
      <Container>
        <div className="container d-flex flex-column align-items-center">
          <SectionHeader>
            <ButtonGoBack />
            <SectionTitle title="Agendamento de Férias" />
          </SectionHeader>
          <span className="border border-1 border-dark rounded-3 p-2">
            Total de dias disponivel: {statusFerias.diasRestantes} dias
          </span>
        </div>
        <hr />
        <br />
        <div>
          <ScheduleForm
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
