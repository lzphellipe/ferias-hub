import FormSchedule from "../components/FormSchedule";
import Menu from "../components/Menu";
import Container from "../components/structures/Container";
import api from "../utils/api";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";

export default function Schedule() {
  const [scheduleData, setScheduleData] = useState({
    dt_inicio: "",
    qtd_dias: "",
    dt_fim: "",
    observacao: "",
  });
  const [error, setError] = useState("");

  const { statusFerias, user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (statusFerias.diasRestantes <= 0) {
      setError("Você não possui dias disponíveis para agendar.");
      return;
    }
    if (scheduleData.qtd_dias > statusFerias.diasRestantes) {
      setError("Você não possui dias disponíveis para agendar.");
      return;
    }

    const novoAgendamento = {
      id: user.id,
      dataInicio: scheduleData.dt_inicio,
      dataFim: scheduleData.dt_fim,
      observacao: scheduleData.observacao,
    };
    try {
      api.post("/ferias", novoAgendamento);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  useEffect(() => {
    const dataInicio = new Date(scheduleData.dt_inicio);
    if (!scheduleData.dt_inicio || !scheduleData.qtd_dias) return;

    const dataTermino = new Date(dataInicio);
    dataTermino.setDate(dataInicio.getDate() + parseInt(scheduleData.qtd_dias));

    const dt_fim_nova = dataTermino.toISOString().slice(0, 10);

    // Só atualiza se o valor mudou
    if (scheduleData.dt_fim !== dt_fim_nova) {
      setScheduleData((prev) => ({
        ...prev,
        dt_fim: dt_fim_nova,
      }));
    }
  }, [scheduleData.dt_inicio, scheduleData.qtd_dias]);

  return (
    <>
      <Menu />
      <Container title="Agendamento de Férias">
        {error && <span className="text-danger">{error}</span>}
        <div className="container d-flex flex-column align-items-center">
          <span className="border border-1 border-dark rounded-3 p-2">
            Total de dias disponivel: {statusFerias.diasRestantes} dias
          </span>
        </div>
        <hr />
        <br />
        <div>
          <FormSchedule
            scheduleData={scheduleData}
            setScheduleData={setScheduleData}
            onSubmit={handleSubmit}
            submitText="Agendar"
            dias_disponiveis={statusFerias.diasRestantes}
          />
        </div>
      </Container>
    </>
  );
}
