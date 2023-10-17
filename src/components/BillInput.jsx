export const BillInput = ({ placeholder, label, icon, id }) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <div>
        <input type="text" placeholder={placeholder} id={id} />
        <img src={icon} alt="input-img" />
      </div>
    </div>
  );
};
