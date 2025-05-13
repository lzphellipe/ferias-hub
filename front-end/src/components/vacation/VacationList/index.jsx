// import { useEffect, useState } from "react";
// import api from "../../../utils/api";
// q;
// const VacationList = () => {
//   const [mes, setMes] = useState(new Date().toISOString().slice(0, 7)); // "2025-04"
//   const [feriasAprovadas, setFeriasAprovadas] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const feriasAprovadas = async () => {
//         try {
//           const response = await api.get(`/ferias?status=PENDENTE`)
//           setFeriasAprovadas(response.data);
//         } catch (error) {
//           setError(error.response.data.message);
//         }
//     }
//     feriasAprovadas();
//   }, []);
//   useEffect(() => {
//     // filtrar as férias aprovadas com base no mês selecionado
//     const feriasAprovadas = ferias.filter((ferias) => {
//       const dataInicio = new Date(ferias.dataInicio);
//       const dataFim = new Date(ferias.dataFim);
//       const mesInicio = dataInicio.toISOString().slice(0, 7);
//       const mesFim = dataFim.toISOString().slice(0, 7);
//       return mesInicio <= mes && mes <= mesFim;
//   }, [mes]);

//   return (
//     <div className="d-flex flex-column gap-4">
//       <label>
//         Selecione o mês:{" "}
//         <input
//           type="month"
//           value={mes}
//           onChange={(e) => setMes(e.target.value)}
//         />
//       </label>

//       {feriasAprovadas.length === 0 ? (
//         <p>Nenhuma férias aprovada neste mês.</p>
//       ) : (
//         feriasAprovadas.map((ferias) => (
//           <div
//             key={ferias.id}
//             className="border rounded-3 p-3 d-flex flex-column gap-2"
//           >
//             <p>
//               <strong>Colaborador:</strong> {ferias.nome}
//             </p>
//             <p>
//               <strong>Início:</strong> {ferias.dataInicio}
//             </p>
//             <p>
//               <strong>Término:</strong> {ferias.dataTermino}
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default VacationList;

import { useEffect, useState } from "react";
import api from "../../../utils/api";

const VacationList = () => {
  const [mes, setMes] = useState(new Date().toISOString().slice(0, 7));
  const [feriasAprovadas, setFeriasAprovadas] = useState([]);
  const [feriasFiltradas, setFeriasFiltradas] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscarFeriasAprovadas = async () => {
      setLoading(true);
      try {
        const response = await api.get(`/ferias?status=APROVADO`);
        setFeriasAprovadas(response.data);
        setError(null);
      } catch (err) {
        setError(err?.response?.data?.message || "Erro ao buscar as férias.");
      } finally {
        setLoading(false);
      }
    };
    buscarFeriasAprovadas();
  }, []);

  useEffect(() => {
    const feriasFiltradas = feriasAprovadas.filter((ferias) => {
      const dataInicio = new Date(ferias.dataInicio);
      const dataFim = new Date(ferias.dataFim);
      const mesInicio = dataInicio.toISOString().slice(0, 7);
      const mesFim = dataFim.toISOString().slice(0, 7);
      return mesInicio <= mes && mes <= mesFim;
    });
    setFeriasFiltradas(feriasFiltradas);
  }, [mes, feriasAprovadas]);

  if (loading) {
    return <p>Carregando férias...</p>;
  }

  if (error) {
    return <p className="text-danger">Erro: {error}</p>;
  }

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

      {feriasFiltradas.length === 0 ? (
        <p>Nenhuma férias pendente neste mês.</p>
      ) : (
        feriasFiltradas.map((ferias) => (
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
          </div>
        ))
      )}
    </div>
  );
};

export default VacationList;
