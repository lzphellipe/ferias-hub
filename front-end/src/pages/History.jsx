import Container from "../components/structures/Container";
import Menu from "../components/Menu";
import HistoryTable from "../components/HistoryTable";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import api from "../utils/api";

const History = () => {
  const { user } = useAuth();
  const [dataSchedule, setSchedule] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ferias = async () => {
      try {
        const response = await api.get(`/ferias?idUser=${user.id}`);
        setSchedule(response.data);
      } catch (error) {
        setError(error.response.data.message);
      }
    };

    ferias();
  }, []);

  return (
    <>
      <Menu />
      <Container title="Consulta de Férias">
        <HistoryTable dataSchedule={dataSchedule} error={error} />
      </Container>
    </>
  );
};

export default History;
