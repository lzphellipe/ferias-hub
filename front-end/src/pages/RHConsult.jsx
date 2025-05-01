import Container from "../components/structures/Container";
import Menu from "../components/Menu";
import VacationList from "../components/vacation/VacationList";
import VacationApproval from "../components/vacation/VacationApproval";
import { useState } from "react";

const RHConsult = () => {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <>
      <Menu />
      <Container title="Gerenciamento de Férias">
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
