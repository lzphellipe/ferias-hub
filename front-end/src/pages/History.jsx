import Container from "../components/structures/Container";
import Menu from "../components/Menu";
import HistoryTable from "../components/HistoryTable";

export default function History() {
  return (
    <>
      <Menu />
      <Container title="Consulta de Férias">
        <HistoryTable />
      </Container>
    </>
  );
}
