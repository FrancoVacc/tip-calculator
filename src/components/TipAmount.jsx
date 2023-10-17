import TipShow from "./TipShow";

const TipAmount = () => {
  return (
    <div className="tip-container">
      <TipShow caption={"Tip Amount"} amount={0.0} />
      <TipShow caption={"Total"} amount={0.0} />
      <button className="cancel-button">RESET</button>
    </div>
  );
};

export default TipAmount;
