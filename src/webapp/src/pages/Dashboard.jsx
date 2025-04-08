import MainCard from "../components/dashboard/MainCard/MainCard";
import Welcome from "../components/dashboard/Welcome/Welcome";
import Container from "../components/template/structures/Container/Container";

export default function Dashboard() {
  return (
    <Container>
      <Welcome />
      <MainCard />
    </Container>
  );
}
