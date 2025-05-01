import MainCard from "../components/MainCard";
import Container from "../components/structures/Container";
import Menu from "../components/Menu";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  const nome = user.nome.split(" ")[0];
  return (
    <>
      <Menu />
      <Container enableBack={false}>
        <div className="col p-0 container d-flex justify-content-center align-items-center font">
          <h2>Bem vindo, {nome}</h2>
        </div>
        <MainCard />
      </Container>
    </>
  );
}
