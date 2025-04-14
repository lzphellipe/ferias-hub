import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import Container from "../components/template/structures/Container/Container";
import Footer from "../components/template/structures/Footer/Footer";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import HistoryTable from "../components/template/tables/HistoryTable/HistoryTable";
import Menu from "../components/Menu";

export default function History() {
  return (
    <>
      <Menu />
      <Container>
        <SectionHeader>
          <ButtonGoBack />
          <SectionTitle title="Consulta de Férias" />
        </SectionHeader>

        <HistoryTable />
      </Container>
    </>
  );
}
