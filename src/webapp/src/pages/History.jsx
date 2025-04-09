import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import Container from "../components/template/structures/Container/Container";
import Footer from "../components/template/structures/Footer/Footer";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";
import HistoryTable from "../components/template/tables/HistoryTable/HistoryTable";

export default function History() {
  return (
    <Container>
      <SectionHeader>
        <SectionTitle title="Consulta de Férias" />
      </SectionHeader>

      <HistoryTable />

      <Footer>
        <ButtonGoBack />
      </Footer>
    </Container>
  );
}
