import Container from "../components/dashboard/Container/Container";
import Welcome from "../components/dashboard/Welcome/Welcome";
import MainCard from "../components/dashboard/MainCard/MainCard";

export default function Dashboard() {
  return (
    <Container>
      <Welcome />
      <MainCard />
    </Container>
  );
}
