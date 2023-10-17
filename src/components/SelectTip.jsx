import BillTipButton from "./BillTipButton";

const selectTip = () => {
  const percents = [5, 10, 15, 25, 50];

  return (
    <div className="percent-container" name="percent">
      <p>Select Tip %</p>
      <div className="button-container" name="button-percent">
        {percents.map((percent) => {
          return <BillTipButton key={percent} percent={percent} />;
        })}
        <input type="text" placeholder="Custom" name="custom" />
      </div>
    </div>
  );
};

export default selectTip;
