import BillTipButton from "./BillTipButton";

const selectTip = ({ handleChange, setValues, values }) => {
  const percents = [5, 10, 15, 25, 50];

  return (
    <div className="percent-container" name="percent">
      <p>Select Tip %</p>
      <div className="button-container" name="button-percent">
        {percents.map((percent) => {
          return (
            <BillTipButton
              key={percent}
              percent={percent}
              setValues={setValues}
              values={values}
            />
          );
        })}
        <input
          type="text"
          placeholder="Custom"
          name="tip"
          value={values.tip}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default selectTip;
