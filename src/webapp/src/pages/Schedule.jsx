import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <h2>Agendamento de Férias</h2>
        <label>
          Data de início:
          <input type="date" />
        </label>
        <label>
          Data de término:
          <input type="date" />
        </label>
        <label>
          Quantidade de dias:
          <input type="number" />
        </label>
        <div className="buttons">
          <button onClick={() => navigate("/")}>Voltar</button>
          <button>Agendar</button>
        </div>
      </div>
    </div>
  );
}
