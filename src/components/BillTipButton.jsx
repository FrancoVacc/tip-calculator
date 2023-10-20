import React from "react";

const BillTipButton = ({ percent, setValues, values }) => {
  return (
    <button
      id={percent}
      name="tip"
      onClick={(e) => {
        const name = e.target.name;
        const value = e.target.value;

        const newValue = { ...values, [name]: value };
        setValues(newValue);
      }}
      value={percent}
    >
      {percent}%
    </button>
  );
};

export default BillTipButton;
