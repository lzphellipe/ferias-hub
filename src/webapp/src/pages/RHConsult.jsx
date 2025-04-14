// import Container from "../components/template/structures/Container/Container";
// import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
// import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
// import Menu from "../components/Menu";
// import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
// import ButtonDefault from "../components/template/buttons/ButtonDefault";
// import { useState } from "react";

// const RHConsult = () => {
//   const [feriasSolicitadas, setFeriasSolicitadas] = useState([
//     {
//       id: 1,
//       nome: "João Silva",
//       dataInicio: "2025-05-10",
//       dataTermino: "2025-05-20",
//       status: "pendente",
//     },
//     {
//       id: 2,
//       nome: "Maria Oliveira",
//       dataInicio: "2025-06-01",
//       dataTermino: "2025-06-15",
//       status: "pendente",
//     },
//   ]);
//   //const [feriasSolicitadas, setFeriasSolicitadas] = useState(ferias || []);
//   //Fazer consulta das ferias que estão com status pendente
//   //Fazer tambem uma consulta de todas as ferias que estão aprovadas para o mes.

//   const handleAprovacao = (id, aprovado) => {
//     const motivo = aprovado
//       ? "Aprovado pelo RH"
//       : prompt("Informe o motivo da reprovação:");
//     setFeriasSolicitadas((prev) =>
//       prev.map((ferias) =>
//         ferias.id === id
//           ? { ...ferias, status: aprovado ? "aprovado" : "reprovado", motivo }
//           : ferias
//       )
//     );
//   };

//   return (
//     <>
//       <Menu />
//       <Container>
//         <ButtonGoBack />
//         <SectionHeader>
//           <SectionTitle title="Gerenciamento de Férias" />
//         </SectionHeader>
//         <hr />
//         <div className="container d-flex flex-column gap-4">
//           {feriasSolicitadas.map((ferias) => (
//             <div
//               key={ferias.id}
//               className="border rounded-3 p-3 d-flex flex-column gap-2"
//             >
//               <p>
//                 <strong>Colaborador:</strong> {ferias.nome}
//               </p>
//               <p>
//                 <strong>Início:</strong> {ferias.dataInicio}
//               </p>
//               <p>
//                 <strong>Término:</strong> {ferias.dataTermino}
//               </p>
//               <p>
//                 <strong>Status:</strong> {ferias.status}
//               </p>
//               {ferias.motivo && (
//                 <p>
//                   <strong>Motivo:</strong> {ferias.motivo}
//                 </p>
//               )}
//               {ferias.status === "pendente" && (
//                 <div className="d-flex gap-2">
//                   <ButtonDefault
//                     text="Aprovar"
//                     onClick={() => handleAprovacao(ferias.id, true)}
//                   />
//                   <ButtonDefault
//                     text="Reprovar"
//                     onClick={() => handleAprovacao(ferias.id, false)}
//                   />
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </Container>
//     </>
//   );
// };

// export default RHConsult;
// RHConsult.jsx
import Container from "../components/template/structures/Container/Container";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import Menu from "../components/Menu";
import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import VacationList from "../components/vacation/VacationList";
import VacationApproval from "../components/vacation/VacationApproval";
import { useState } from "react";

const RHConsult = () => {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <>
      <Menu />
      <Container>
        <ButtonGoBack />
        <SectionHeader>
          <SectionTitle title="Gerenciamento de Férias" />
        </SectionHeader>
        <hr />

        <div className="d-flex gap-3 mb-4">
          <button
            className={`btn ${
              activeTab === "view" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("view")}
          >
            Ver Férias Aprovadas
          </button>
          <button
            className={`btn ${
              activeTab === "approve" ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setActiveTab("approve")}
          >
            Aprovar/Reprovar Férias
          </button>
        </div>

        {activeTab === "view" ? <VacationList /> : <VacationApproval />}
      </Container>
    </>
  );
};

export default RHConsult;
