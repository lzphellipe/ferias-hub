import { useNavigate } from "react-router-dom";

export default function History() {
  const navigate = useNavigate();

  const data = [
    {
      inicio: "27/02/2025",
      fim: "10/03/2025",
      dias: 12,
      situacao: "Efetivado",
    },
    { inicio: "09/08/2024", fim: "13/08/2024", dias: 5, situacao: "Efetivado" },
    {
      inicio: "02/01/2024",
      fim: "26/01/2024",
      dias: 25,
      situacao: "Efetivado",
    },
  ];

  return (
    <div>
      <div className="container">
        <h2>Consulta de Férias</h2>
        <table>
          <thead>
            <tr>
              <th>Data Início</th>
              <th>Data Fim</th>
              <th>Dias de Férias</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.inicio}</td>
                <td>{item.fim}</td>
                <td>{item.dias}</td>
                <td>{item.situacao}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => navigate("/")}>Voltar</button>
      </div>
    </div>
  );
}
