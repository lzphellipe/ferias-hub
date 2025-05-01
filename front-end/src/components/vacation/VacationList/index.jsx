import { useEffect, useState } from "react";
import api from "../../../utils/api";

const VacationList = () => {
  const [mes, setMes] = useState(new Date().toISOString().slice(0, 7)); // "2025-04"
  const [feriasAprovadas, setFeriasAprovadas] = useState([]);

  useEffect(() => {
    //requisição pra buscar as férias aprovadas pro mês selecionado
    // Simulando com dados mockados por enquanto:
    const dadosMock = [
      {
        id: 1,
        nome: "Carlos Silva",
        dataInicio: "2025-04-05",
        dataTermino: "2025-04-15",
      },
      {
        id: 2,
        nome: "Amanda Souza",
        dataInicio: "2025-04-10",
        dataTermino: "2025-04-20",
      },
    ];
    setFeriasAprovadas(dadosMock);
  }, [mes]);

  return (
    <div className="d-flex flex-column gap-4">
      <label>
        Selecione o mês:{" "}
        <input
          type="month"
          value={mes}
          onChange={(e) => setMes(e.target.value)}
        />
      </label>

      {feriasAprovadas.length === 0 ? (
        <p>Nenhuma férias aprovada neste mês.</p>
      ) : (
        feriasAprovadas.map((ferias) => (
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
          </div>
        ))
      )}
    </div>
  );
};

export default VacationList;
