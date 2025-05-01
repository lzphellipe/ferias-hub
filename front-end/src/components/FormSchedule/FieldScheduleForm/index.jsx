import Input from "../../structures/forms/Input";

const FieldScheduleForm = ({ field, type, value, onChange }) => {
  return (
    <div className="col-md-6 mb-4">
      <label className="form-label fw-bold">{field}</label>
      <Input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FieldScheduleForm;
