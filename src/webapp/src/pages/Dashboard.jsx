import MainCard from "../components/dashboard/MainCard/MainCard";
import Welcome from "../components/dashboard/Welcome/Welcome";
import Container from "../components/template/structures/Container/Container";
import Menu from "../components/Menu";
import { useAuth } from "../hooks/AuthHook";

export default function Dashboard() {
  const { user } = useAuth();
  return (
    <>
      <Menu />
      <Container>
        <Welcome name={user.name} />
        <MainCard user={user} />
      </Container>
    </>
  );
}
