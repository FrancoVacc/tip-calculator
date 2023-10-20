export const BillInput = ({
  placeholder,
  label,
  icon,
  id,
  name,
  handleChange,
  value,
  error,
}) => {
  return (
    <div className="input-container">
      <div className="label-container">
        <label htmlFor={id}>{label}</label>
        <p className={error == true ? "error" : "notError"}>Can't be zero</p>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          id={id}
          name={name}
          onChange={handleChange}
          value={value}
          className={error == true ? "errorInput" : ""}
        />
        <img src={icon} alt="input-img" />
      </div>
    </div>
  );
};
