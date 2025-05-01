import ButtonSubmit from "../structures/forms/ButtonSubmit";
import FieldScheduleForm from "./FieldScheduleForm";

const FormSchedule = ({
  scheduleData,
  setScheduleData,
  onSubmit,
  submitText,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <FieldScheduleForm
          field="Data de início:"
          type="date"
          value={scheduleData.dt_inicio}
          onChange={(e) =>
            setScheduleData({ ...scheduleData, dt_inicio: e.target.value })
          }
        />
        <FieldScheduleForm
          field="Quantidade de dias:"
          type="number"
          value={scheduleData.qtd_dias}
          onChange={(e) =>
            setScheduleData({ ...scheduleData, qtd_dias: e.target.value })
          }
        />
        <div className="col-md-6 mb-4 mb-4 ">
          <label className="form-label fw-bold">Data de término:</label>
          <p className="justify-content-center">{scheduleData.dt_fim}</p>
        </div>
      </div>
      <FieldScheduleForm
        field="Observação:"
        type="text"
        value={scheduleData.observacao}
        onChange={(e) =>
          setScheduleData({ ...scheduleData, observacao: e.target.value })
        }
      />
      <ButtonSubmit type="submit" text={submitText} />
    </form>
  );
};

export default FormSchedule;
