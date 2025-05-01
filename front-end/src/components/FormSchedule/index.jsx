import { useEffect } from "react";
import Input from "../structures/forms/Input";
import ButtonSubmit from "../structures/forms/ButtonSubmit";

const ScheduleForm = ({
  text,
  onSubmit,
  dataInicio,
  setDataInicio,
  quantidadeDias,
  setQuantidadeDias,
  dataTermino,
  setDataTermino,
  error,
  qtdDiasDisponiveis,
}) => {
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
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Data de início:</label>
            <Input
              type="date"
              value={dataInicio}
              onchange={(e) => setDataInicio(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-4">
            <label className="form-label fw-bold">Quantidade de dias:</label>
            <Input
              type="number"
              value={quantidadeDias}
              onchange={(e) => setQuantidadeDias(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-4 mb-4 ">
            <label className="form-label fw-bold">Data de término:</label>
            <p className="justify-content-center">{dataTermino}</p>
          </div>
        </div>
        <div>
          {qtdDiasDisponiveis < quantidadeDias ? (
            <p className="text-danger">
              Não é possivel agendar quantidade maior que dias disponivel.
            </p>
          ) : (
            <ButtonSubmit type="submit" text={text} />
          )}
          {error && <p className="text-danger">{error}</p>}
        </div>
      </form>
    </>
  );
};

export default ScheduleForm;
