import { useEffect, useState } from "react";
import ButtonGoBack from "../components/template/buttons/ButtonGoBack/ButtonGoBack";
import ButtonSubmit from "../components/template/buttons/ButtonSubmit/ButtonSubmit";
import Form from "../components/template/forms/Form/Form";
import Input from "../components/template/forms/Input/Input";
import Container from "../components/template/structures/Container/Container";
import Footer from "../components/template/structures/Footer/Footer";
import SectionHeader from "../components/template/structures/SectionHeader/SectionHeader";
import SectionTitle from "../components/template/structures/SectionHeader/SectionTitle/SectionTitle";

export default function Schedule() {
  const [dataInicio, setDataInicio] = useState("");
  const [quantidadeDias, setQuantidadeDias] = useState("");
  const [dataTermino, setDataTermino] = useState("");

  useEffect(() => {
    if (dataInicio && quantidadeDias) {
      const inicio = new Date(dataInicio);
      inicio.setDate(inicio.getDate() + parseInt(quantidadeDias));

      const dia = String(inicio.getDate()).padStart(2, "0");
      const mes = String(inicio.getMonth() + 1).padStart(2, "0");
      const ano = inicio.getFullYear();

      setDataTermino(`${dia}/${mes}/${ano}`);
    } else {
      setDataTermino("");
    }
  }, [dataInicio, quantidadeDias]);

  return (
    <>
      <Container>
        <SectionHeader>
          <SectionTitle title="Agendamento de Férias" />
        </SectionHeader>

        <Form>
          <div className="col-md-6 mb-4">
            <p className="form-label fw-bold">Data de início:</p>
            <Input
              type="date"
              value={dataInicio}
              onchange={(e) => setDataInicio(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-4">
            <p className="form-label fw-bold">Data de término:</p>
            <p className="justify-content-center">{dataTermino}</p>
          </div>

          <div className="col-md-6 mb-4">
            <p className="form-label fw-bold">Quantidade de dias:</p>
            <Input
              type="number"
              value={quantidadeDias}
              onchange={(e) => setQuantidadeDias(e.target.value)}
            />
          </div>

          <Footer>
            <ButtonGoBack />
            <ButtonSubmit text="Agendar" />
          </Footer>
        </Form>
      </Container>
    </>
  );
}
