import Input from "../../forms/Input";

const FieldUserFrom = ({ field, type, value, onChange }) => {
  return (
    <div className="mb-3 d-flex flex-row gap-3 justify-content-center align-items-center">
      <label className="form-label fw-bold">{field}</label>
      <Input type={type} value={value} onchange={onChange} />
    </div>
  );
};

export default FieldUserFrom;
