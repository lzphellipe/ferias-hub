import Container from "../components/structures/Container";
import Menu from "../components/Menu";
import HistoryTable from "../components/HistoryTable";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import api from "../utils/api";

const History = () => {
  const { user } = useAuth();
  const [dataSchedule, setSchedule] = useState([]);

  useEffect(() => {
    const ferias = async () => {
      try {
        const response = await api.get(`/ferias?idUser=${user.id}`);
        setSchedule(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    ferias();
  }, []);

  return (
    <>
      <Menu />
      <Container title="Consulta de Férias">
        <HistoryTable dataSchedule={dataSchedule} />
      </Container>
    </>
  );
};

export default History;
