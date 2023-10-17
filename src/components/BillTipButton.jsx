import React from "react";

const BillTipButton = ({ percent }) => {
  return <button id={percent}>{percent}%</button>;
};

export default BillTipButton;
