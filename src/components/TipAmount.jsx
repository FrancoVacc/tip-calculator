import TipShow from "./TipShow";

const TipAmount = ({ tipAmount, totalAmount, reset, setReset }) => {
  const handleClick = () => {
    //Limpiar el values
    setReset(false);
  };

  return (
    <div className="tip-container">
      <TipShow caption={"Tip Amount"} amount={tipAmount} />
      <TipShow caption={"Total"} amount={totalAmount} />
      <button
        className={reset == true ? "enabled" : "disabled"}
        onClick={handleClick}
      >
        RESET
      </button>
    </div>
  );
};

export default TipAmount;
